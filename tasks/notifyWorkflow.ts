const webhookUrl = Deno.env.get("DISCORD_WEBHOOK_URL");
const circleToken = Deno.env.get("CIRCLECI_API_TOKEN");

if (!webhookUrl) {
  console.log(
    "Discord workflow notifications are disabled; DISCORD_WEBHOOK_URL is not set.",
  );
  Deno.exit(0);
}
if (!circleToken) {
  throw new Error(
    "CIRCLECI_API_TOKEN is required to read the completed workflow's job statuses.",
  );
}
const apiToken = circleToken;

const workflowId = Deno.env.get("CIRCLE_WORKFLOW_ID");
const owner = Deno.env.get("CIRCLE_PROJECT_USERNAME");
const repository = Deno.env.get("CIRCLE_PROJECT_REPONAME");
if (!workflowId || !owner || !repository) {
  throw new Error(
    "CircleCI workflow and project environment variables are required.",
  );
}

type WorkflowJob = { name: string; status: string };
type WorkflowJobsResponse = {
  items: WorkflowJob[];
  next_page_token: string | null;
};

async function getWorkflowJobs(): Promise<WorkflowJob[]> {
  const jobs: WorkflowJob[] = [];
  let pageToken: string | null = null;
  do {
    const url = new URL(
      `https://circleci.com/api/v2/workflow/${workflowId}/job`,
    );
    url.searchParams.set("limit", "100");
    if (pageToken) url.searchParams.set("page-token", pageToken);
    const response = await fetch(url, {
      headers: { "Circle-Token": apiToken },
    });
    if (!response.ok) {
      throw new Error(
        `CircleCI API returned HTTP ${response.status} while reading workflow jobs.`,
      );
    }
    const page = await response.json() as WorkflowJobsResponse;
    jobs.push(...page.items);
    pageToken = page.next_page_token;
  } while (pageToken);
  return jobs;
}

let workflowJobs: WorkflowJob[] = [];
for (let attempt = 0; attempt < 5; attempt++) {
  workflowJobs = await getWorkflowJobs();
  const upstreamJobs = workflowJobs.filter((job) =>
    job.name !== "notify-workflow"
  );
  if (
    upstreamJobs.length &&
    upstreamJobs.every((job) =>
      job.status !== "running" && job.status !== "queued"
    )
  ) break;
  if (attempt < 4) await new Promise((resolve) => setTimeout(resolve, 2_000));
}

const upstreamJobs = workflowJobs.filter((job) =>
  job.name !== "notify-workflow"
);
if (
  !upstreamJobs.length ||
  upstreamJobs.some((job) =>
    job.status === "running" || job.status === "queued"
  )
) {
  throw new Error(
    "CircleCI workflow jobs have not all reached a terminal state.",
  );
}

const unsuccessfulJobs = upstreamJobs.filter((job) =>
  job.status !== "success" && job.status !== "not_run"
);
const succeeded = unsuccessfulJobs.length === 0;
const branch = Deno.env.get("CIRCLE_BRANCH") ?? "unknown branch";
const commit = (Deno.env.get("CIRCLE_SHA1") ?? "unknown").slice(0, 7);
const workflowUrl =
  `https://app.circleci.com/pipelines/gh/${owner}/${repository}/workflows/${workflowId}`;
const fields = [
  { name: "Project", value: `${owner}/${repository}`, inline: true },
  { name: "Branch", value: branch, inline: true },
  { name: "Commit", value: commit, inline: true },
];
if (unsuccessfulJobs.length) {
  fields.push({
    name: "Unsuccessful jobs",
    value: unsuccessfulJobs.map((job) => `${job.name} (${job.status})`).join(
      ", ",
    ).slice(0, 1_000),
    inline: false,
  });
}

const payload = {
  embeds: [{
    title: succeeded
      ? "✅ CircleCI workflow succeeded"
      : "❌ CircleCI workflow failed",
    url: workflowUrl,
    color: succeeded ? 0x2ecc71 : 0xe74c3c,
    fields,
    timestamp: new Date().toISOString(),
  }],
};
const discordUrl = new URL(webhookUrl);
discordUrl.searchParams.set("wait", "true");
const discordResponse = await fetch(discordUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
if (!discordResponse.ok) {
  throw new Error(
    `Discord webhook returned HTTP ${discordResponse.status}. Check DISCORD_WEBHOOK_URL.`,
  );
}
console.log(
  `Sent ${succeeded ? "success" : "failure"} notification to Discord.`,
);
