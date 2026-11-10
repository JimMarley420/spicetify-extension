const [reportPath = "coverage.lcov", rawThreshold = "20"] = Deno.args;
const threshold = Number(rawThreshold);
if (!Number.isFinite(threshold) || threshold < 0 || threshold > 100) {
  throw new Error(`Invalid coverage threshold: ${rawThreshold}`);
}

const totals = {
  linesFound: 0,
  linesHit: 0,
  branchesFound: 0,
  branchesHit: 0,
  functionsFound: 0,
  functionsHit: 0,
};

for (const line of (await Deno.readTextFile(reportPath)).split(/\r?\n/)) {
  const [key, rawValue] = line.split(":", 2);
  const value = Number(rawValue);
  if (!Number.isFinite(value)) continue;
  switch (key) {
    case "LF":
      totals.linesFound += value;
      break;
    case "LH":
      totals.linesHit += value;
      break;
    case "BRF":
      totals.branchesFound += value;
      break;
    case "BRH":
      totals.branchesHit += value;
      break;
    case "FNF":
      totals.functionsFound += value;
      break;
    case "FNH":
      totals.functionsHit += value;
      break;
  }
}

const metrics = [
  ["lines", totals.linesFound, totals.linesHit],
  ["branches", totals.branchesFound, totals.branchesHit],
  ["functions", totals.functionsFound, totals.functionsHit],
] as const;
let checkedMetrics = 0;
for (const [name, found, hit] of metrics) {
  if (found === 0) continue;
  checkedMetrics++;
  const percent = (hit / found) * 100;
  console.log(
    `${name}: ${percent.toFixed(1)}% (${hit}/${found}); minimum ${threshold}%`,
  );
  if (percent < threshold) {
    throw new Error(`${name} coverage is below the ${threshold}% minimum.`);
  }
}
if (checkedMetrics === 0) {
  throw new Error(`No coverage metrics found in ${reportPath}.`);
}
