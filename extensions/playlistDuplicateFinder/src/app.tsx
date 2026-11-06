import { parseProps } from "../../../shared/api/parseProps.ts";
import { Icons } from "../../../shared/components/icons.tsx";
import { resolvePlaylistName } from "./adapter.ts";
import { strings } from "./strings.ts";
import styles from "./styles.css" with { type: "css" };
import { showDuplicateFinderModal } from "./ui/dupesModal.tsx";

document.adoptedStyleSheets.push(styles);

function isPlaylistType(uri: string): boolean {
  const type = Spicetify.URI.from(uri)?.type;
  return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
}

const findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: strings.menu.itemLabel,
  leadingIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="${Icons.RAW.duplicate}"/></svg>`,
  onClick: async (context: unknown) => {
    // ContextMenuV2 hands the raw event over; the context payload itself
    // (uri, name, …) lives on `event.props` — the same shape artistSearch uses.
    const parsed = parseProps((context as { props?: Record<string, unknown> })?.props);
    const uri = typeof parsed.uri === "string" ? parsed.uri : "";
    if (!uri || !isPlaylistType(uri)) return;

    const name =
      typeof parsed.name === "string" && parsed.name.length > 0
        ? parsed.name
        : await resolvePlaylistName(uri);

    showDuplicateFinderModal({ uri, name });
  },
  shouldAdd: (props: unknown) => {
    const parsed = parseProps(props as Record<string, unknown>);
    return typeof parsed.uri === "string" && isPlaylistType(parsed.uri);
  },
});

findDuplicatesMenuItem.register();
