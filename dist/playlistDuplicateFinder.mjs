await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// shared/api/parseProps.ts
function parseProps(props) {
  if (!props) return {};
  const parsed = {};
  const mergeProps = (source, target) => {
    if (!source || typeof source !== "object") return;
    for (const key in source) {
      if (Object.hasOwn(source, key)) {
        if (target[key] === void 0) {
          target[key] = source[key];
        }
      }
    }
  };
  mergeProps(props, parsed);
  mergeProps(props.item, parsed);
  mergeProps(props.reference, parsed);
  return parsed;
}

// tasks/shims/jsx-runtime-shim.ts
var { Fragment, jsx, jsxs } = Spicetify.ReactJSX;

// shared/components/icons.tsx
var iconData = {
  search: {
    path: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    size: 24
  },
  play: {
    path: "M8 5v14l11-7z",
    size: 24
  },
  pause: {
    path: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
    size: 24
  },
  editButton: {
    path: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
    size: 24
  },
  settings: {
    path: "M7.96 5.33a2.67 2.67 0 115.34 2.67 2.67 2.67 0 01-5.34-2.67ZM6.67 8A1.33 1.33 0 109.33 8 1.33 1.33 0 006.67 8Zm4.82-4.81a.95.94 0 01-1.1-.75L10.05.55A.47.47 0 009.68.17 8.1 8.1 0 006.32.17.47.47 0 005.96.55L5.61 2.44a.95.95 0 01-1.25.71L2.55 2.51a.47.47 0 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 0 00.14.51L1.97 7.28a.94.94 0 010 1.43L.5 9.95a.47.47 0 00-.14.51 7.98 7.98 0 001.68 2.9.47.47 0 00.51.13l1.81-.65a.94.94 0 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 0 003.36 0 .47.47 0 00.37-.37l.34-1.89a.95.95 0 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 0 00-.14-.5L14.03 8.72a.94.94 0 010-1.44L15.5 6.04a.47.47 0 00.14-.5 7.98 7.98 0 00-1.68-2.9.47.47 0 00-.51-.13l-1.81.65a.95.95 0 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 0 003-1.73l.24-1.3a6.81 6.81 0 011.68 0l.24 1.3a2.28 2.28 0 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 0 000 3.48l1 .85a6.65 6.65 0 01-.84 1.44l-1.24-.44A2.28 2.28 0 009.08 13.32l-.24 1.29a6.8 6.8 0 01-1.69 0l-.23-1.29A2.28 2.28 0 003.91 11.59l-1.24.44a6.65 6.65 0 01-.84-1.44l1-.86a2.27 2.27 0 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
    size: 16
  },
  close: {
    path: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
    size: 32
  },
  github: {
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    size: 24
  },
  duplicate: {
    path: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z",
    size: 16
  }
};
var createReactComponent = (name) => {
  const { path, size: defaultSize } = iconData[name];
  const Component2 = ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-label": name,
      fill,
      height: size,
      role: "img",
      viewBox: `0 0 ${defaultSize} ${defaultSize}`,
      width: size,
      children: /* @__PURE__ */ jsx("path", { d: path })
    }
  );
  Component2.defaultProps = {
    size: defaultSize,
    fill: "currentColor"
  };
  return Component2;
};
var { raw, react, html } = Object.keys(iconData).reduce(
  (acc, name) => {
    const size = iconData[name].size;
    acc.raw[name] = iconData[name].path;
    acc.react[name] = createReactComponent(name);
    acc.html[name] = `<svg class="artist-search-icon" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="currentColor"><path d="${iconData[name].path}"/></svg>`;
    return acc;
  },
  {
    raw: {},
    react: {},
    html: {}
  }
);
var Icons = {
  React: react,
  HTML: html,
  RAW: raw
};

// shared/webpack/schema.ts
var metadataSchema = {
  "spotify.metadata.Track": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "album", type: "spotify.metadata.Album" },
      4: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      5: { name: "number", type: "sint32" },
      6: { name: "disc_number", type: "sint32" },
      7: { name: "duration", type: "sint32" },
      8: { name: "popularity", type: "sint32" },
      9: { name: "explicit", type: "bool" },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      12: { name: "file", type: "spotify.metadata.AudioFile", repeated: true },
      13: { name: "alternative", type: "spotify.metadata.Track", repeated: true },
      14: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      15: { name: "preview", type: "spotify.metadata.AudioFile", repeated: true },
      16: { name: "tags", type: "string", repeated: true },
      17: { name: "earliest_live_timestamp", type: "int64" },
      18: { name: "has_lyrics", type: "bool" },
      19: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      21: { name: "licensor", type: "spotify.metadata.Licensor" },
      22: { name: "language_of_performance", type: "string", repeated: true },
      24: { name: "original_audio", type: "spotify.metadata.Audio" },
      27: { name: "original_title", type: "string" },
      28: { name: "version_title", type: "string" },
      32: { name: "artist_with_role", type: "spotify.metadata.ArtistWithRole", repeated: true },
      36: { name: "canonical_uri", type: "string" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" },
      39: {
        name: "content_authorization_attributes",
        type: "spotify.metadata.ContentAuthorizationAttributes"
      },
      40: { name: "track_content_rating", type: "spotify.metadata.ContentRating", repeated: true },
      41: { name: "audio_formats", type: "spotify.metadata.TrackAudioFormat", repeated: true },
      43: { name: "unknown_field", type: "int32" },
      44: { name: "implementation_details", type: "spotify.metadata.ImplementationDetails" },
      47: { name: "test", type: "spotify.metadata.TestCategory" },
      129: { name: "media_type", type: "enum", enumType: "MediaType" }
    },
    enums: { MediaType: { 0: "MIXED", 1: "AUDIO", 2: "VIDEO" } }
  },
  "spotify.metadata.Album": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      4: { name: "type", type: "enum", enumType: "Type" },
      5: { name: "label", type: "string" },
      6: { name: "date", type: "spotify.metadata.Date" },
      7: { name: "popularity", type: "sint32" },
      8: { name: "genre", type: "string", repeated: true },
      9: { name: "cover", type: "spotify.metadata.Image", repeated: true },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "disc", type: "spotify.metadata.Disc", repeated: true },
      12: { name: "review", type: "string", repeated: true },
      13: { name: "copyright", type: "spotify.metadata.Copyright", repeated: true },
      14: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      15: { name: "related", type: "spotify.metadata.Album", repeated: true },
      16: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      17: { name: "cover_group", type: "spotify.metadata.ImageGroup" },
      18: { name: "original_title", type: "string" },
      19: { name: "version_title", type: "string" },
      20: { name: "type_str", type: "string" },
      23: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      25: { name: "licensor", type: "spotify.metadata.Licensor" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" }
    },
    enums: {
      Type: { 1: "ALBUM", 2: "SINGLE", 3: "COMPILATION", 4: "EP", 5: "AUDIOBOOK", 6: "PODCAST" }
    }
  },
  "spotify.metadata.ContentRating": {
    fields: {
      1: { name: "tag", type: "enum", enumType: "ContentRatingTag" },
      2: { name: "label", type: "string", repeated: true }
    },
    enums: { ContentRatingTag: { 0: "UNKNOWN", 1: "EXPLICIT" } }
  },
  "spotify.metadata.Date": {
    fields: {
      1: { name: "year", type: "sint32" },
      2: { name: "month", type: "sint32" },
      3: { name: "day", type: "sint32" }
    }
  },
  "spotify.metadata.Image": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "size", type: "enum", enumType: "Size" },
      3: { name: "width", type: "sint32" },
      4: { name: "height", type: "sint32" }
    },
    enums: { Size: { 0: "UNKNOWN", 1: "SMALL", 2: "MEDIUM", 3: "LARGE", 4: "EXTRA_LARGE" } }
  },
  "spotify.metadata.AudioFile": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "format", type: "enum", enumType: "Format" },
      3: { name: "bitrate", type: "sint32" },
      4: { name: "preview", type: "bytes" }
    },
    enums: {
      Format: { 1: "MP4", 2: "OGG", 3: "WEBM", 4: "UNKNOWN" }
    }
  },
  "spotify.metadata.Artist": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "image", type: "spotify.metadata.Image", repeated: true },
      4: { name: "genre", type: "string", repeated: true },
      5: { name: "profile", type: "spotify.metadata.ArtistProfile" }
    }
  },
  "spotify.metadata.ArtistProfile": {
    fields: {
      1: { name: "name", type: "string" },
      2: { name: "biography", type: "string" },
      3: { name: "image", type: "spotify.metadata.Image", repeated: true },
      4: { name: "artist_name", type: "spotify.metadata.LocalizedString", repeated: true }
    }
  },
  "spotify.metadata.LocalizedString": {
    fields: {
      1: { name: "locale", type: "string" },
      2: { name: "string", type: "string" }
    }
  },
  "spotify.metadata.ExternalId": {
    fields: {
      1: { name: "type", type: "string" },
      2: { name: "id", type: "string" }
    }
  },
  "spotify.metadata.Restriction": {
    fields: {
      1: { name: "countries", type: "string", repeated: true },
      2: { name: "catalogues", type: "string", repeated: true },
      3: { name: "reason", type: "enum", enumType: "Reason" }
    },
    enums: { Reason: { 0: "UNKNOWN", 1: "NOT_AVAILABLE_IN_COUNTRY", 2: "NOT_AVAILABLE_FOR_CURRENCY", 3: "NOT_AVAILABLE_FOR_USER" } }
  },
  "spotify.metadata.Availability": {
    fields: {
      1: { name: "start_time", type: "int64" },
      2: { name: "after_start_time", type: "bool" },
      3: { name: "is_available", type: "bool" }
    }
  },
  "spotify.metadata.TrackAudioFormat": {
    fields: {
      1: { name: "codec", type: "enum", enumType: "Codec" },
      2: { name: "bitrate", type: "sint32" }
    },
    enums: {
      Codec: { 0: "UNKNOWN", 1: "MP3", 2: "AAC", 3: "OGG_VORBIS", 4: "FLAC", 5: "WEBMA_OPUS", 6: "WEBMA_VORBIS" }
    }
  },
  "spotify.metadata.Audio": {
    fields: {
      1: { name: "gain", type: "sint32" },
      2: { name: "sample_offset", type: "sint32" }
    }
  },
  "spotify.metadata.Disc": {
    fields: {
      1: { name: "number", type: "sint32" },
      2: { name: "name", type: "string" }
    }
  },
  "spotify.metadata.ArtistWithRole": {
    fields: {
      1: { name: "artist", type: "spotify.metadata.Artist" },
      2: { name: "role", type: "spotify.metadata.ArtistRole", repeated: true },
      3: { name: "has_saving_rights", type: "bool" }
    }
  },
  "spotify.metadata.ArtistRole": {
    fields: {
      1: { name: "id", type: "enum", enumType: "RoleId" }
    },
    enums: {
      RoleId: { 0: "MAIN", 1: "FEATURED", 2: "REMIX", 3: "PRODUCER", 4: "COMPOSER", 5: "LYRICIST" }
    }
  },
  "spotify.metadata.SalePeriod": {
    fields: {
      1: { name: "start", type: "spotify.metadata.Date" },
      2: { name: "end", type: "spotify.metadata.Date" }
    }
  },
  "spotify.metadata.ImageGroup": {
    fields: {
      1: { name: "backing_type", type: "enum", enumType: "BackingType" },
      2: { name: "image", type: "spotify.metadata.Image", repeated: true }
    },
    enums: { BackingType: { 0: "UNKNOWN", 1: "DEFAULT", 2: "VIDEO_FRAME" } }
  },
  "spotify.metadata.Copyright": {
    fields: {
      1: { name: "type", type: "enum", enumType: "Type" },
      2: { name: "text", type: "string" }
    },
    enums: { Type: { 0: "P", 1: "C" } }
  },
  "spotify.metadata.VideoFile": {
    fields: { 1: { name: "file_id", type: "bytes" } }
  },
  "spotify.metadata.Licensor": {
    fields: {
      1: { name: "licensor_id", type: "string" }
    }
  },
  "spotify.metadata.ContentAuthorizationAttributes": {
    fields: {
      1: { name: "cat_id", type: "string" },
      2: { name: "content_rights", type: "string" },
      3: { name: "rights_owner_id", type: "string" }
    }
  },
  "spotify.metadata.ImplementationDetails": {
    fields: {
      1: { name: "impl_id", type: "string" },
      2: { name: "description", type: "string" }
    }
  },
  "spotify.metadata.PrereleaseConfig": {
    fields: {
      1: { name: "is_premium_only", type: "bool" },
      2: { name: "release_date", type: "int64" }
    }
  },
  "spotify.metadata.TestCategory": {
    fields: {
      1: { name: "category", type: "string" },
      2: { name: "is_enabled", type: "bool" }
    }
  }
};

// shared/webpack/protobuf.ts
function warn(reason, ctxOrThunk) {
  if (reason.includes("Decode error") || reason.includes("Schema not found")) {
    const ctx = typeof ctxOrThunk === "function" ? ctxOrThunk() : ctxOrThunk;
    console.warn("[Protobuf]", reason, ctx);
  }
}
var ProtobufReader = class _ProtobufReader {
  view;
  bytes;
  offset = 0;
  constructor(data) {
    if (data instanceof Uint8Array) {
      this.bytes = data;
    } else if (Array.isArray(data) || "length" in data) {
      this.bytes = new Uint8Array(Array.from(data));
    } else {
      this.bytes = new Uint8Array(Object.values(data));
    }
    this.view = new DataView(this.bytes.buffer, this.bytes.byteOffset, this.bytes.byteLength);
  }
  get isExhausted() {
    return this.offset >= this.bytes.length;
  }
  readVarint() {
    if (this.isExhausted) return null;
    let result = 0n;
    let shift = 0n;
    while (!this.isExhausted) {
      const byte = BigInt(this.bytes[this.offset++]);
      result |= (byte & 0x7fn) << shift;
      if (!(byte & 0x80n)) return result;
      shift += 7n;
      if (shift > 70n) {
        warn("Varint too long", {
          offset: this.offset,
          shift: shift.toString()
        });
        break;
      }
    }
    return null;
  }
  readZigZagVarint() {
    const n = this.readVarint();
    if (n === null) {
      warn("Invalid zigzag varint", { offset: this.offset });
      return 0n;
    }
    return n >> 1n ^ -(n & 1n);
  }
  readBytes(length) {
    const actualLength = Math.min(length, this.bytes.length - this.offset);
    const result = this.bytes.slice(this.offset, this.offset + actualLength);
    this.offset += actualLength;
    return result;
  }
  skip(wireType) {
    switch (wireType) {
      case 0:
        this.readVarint();
        break;
      case 1:
        this.offset += 8;
        break;
      case 2: {
        const len = this.readVarint();
        if (len !== null) this.offset += Number(len);
        break;
      }
      case 3:
        while (true) {
          const tag = this.readVarint();
          if (tag === null || (Number(tag) & 7) === 4) break;
          this.skip(Number(tag) & 7);
        }
        break;
      case 5:
        this.offset += 4;
        break;
      default:
        warn("Unknown wire type", {
          wireType,
          offset: this.offset
        });
    }
  }
  decode(schemaName) {
    const schema = metadataSchema[schemaName];
    if (!schema) {
      warn("Schema not found", { schemaName });
      return {};
    }
    const result = {};
    while (!this.isExhausted) {
      const tag = this.readVarint();
      if (tag === null || tag === 0n) break;
      const fieldNumber = Number(tag >> 3n);
      const wireType = Number(tag & 7n);
      const field = schema.fields[fieldNumber];
      if (!field) {
        if (wireType === 2) {
          const len = Number(this.readVarint() ?? 0n);
          const raw2 = this.readBytes(len);
          warn("Unknown field", () => ({
            schema: schemaName,
            fieldNumber,
            wireType,
            length: len,
            hex: Array.from(raw2).map((b) => b.toString(16).padStart(2, "0")).join(" "),
            ascii: new TextDecoder().decode(raw2).replace(/[^\x20-\x7E]/g, ".")
          }));
        } else {
          warn("Unknown field", {
            schema: schemaName,
            fieldNumber,
            wireType
          });
          this.skip(wireType);
        }
        continue;
      }
      let value;
      try {
        switch (field.type) {
          case "string": {
            const len = Number(this.readVarint() ?? 0n);
            value = new TextDecoder().decode(this.readBytes(len));
            break;
          }
          case "bytes": {
            const len = Number(this.readVarint() ?? 0n);
            value = Array.from(
              this.readBytes(len),
              (b) => (b < 16 ? "0" : "") + b.toString(16)
            ).join("");
            break;
          }
          case "bool":
            value = (this.readVarint() ?? 0n) !== 0n;
            break;
          case "int32":
          case "uint32":
            value = Number(this.readVarint() ?? 0n);
            break;
          case "int64":
          case "uint64": {
            const v = this.readVarint() ?? 0n;
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "sint32":
            value = Number(this.readZigZagVarint());
            break;
          case "sint64": {
            const v = this.readZigZagVarint();
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) && v >= BigInt(Number.MIN_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "fixed32":
            value = this.view.getUint32(this.offset, true);
            this.offset += 4;
            break;
          case "fixed64":
            value = this.view.getBigUint64(this.offset, true).toString();
            this.offset += 8;
            break;
          case "float":
            value = this.view.getFloat32(this.offset, true);
            this.offset += 4;
            break;
          case "double":
            value = this.view.getFloat64(this.offset, true);
            this.offset += 8;
            break;
          case "enum": {
            const enumVal = Number(this.readVarint() ?? 0n);
            value = (field.enumType && schema.enums?.[field.enumType]?.[enumVal]) ?? enumVal;
            break;
          }
          default: {
            const len = Number(this.readVarint() ?? 0n);
            value = new _ProtobufReader(this.readBytes(len)).decode(field.type);
            break;
          }
        }
      } catch (err) {
        warn("Decode error", {
          schema: schemaName,
          field: field.name,
          fieldNumber,
          wireType,
          offset: this.offset,
          error: err
        });
        continue;
      }
      if (value === void 0) continue;
      if (field.repeated) {
        if (!result[field.name]) result[field.name] = [];
        result[field.name].push(value);
      } else {
        result[field.name] = value;
      }
    }
    return result;
  }
};
function decodeProtobuf(data, schemaName) {
  const result = new ProtobufReader(data).decode(schemaName);
  return result;
}

// shared/webpack/webpack.ts
var GLOBAL_KEY = "__cached_webpack_modules";
if (!globalThis[GLOBAL_KEY]) {
  globalThis[GLOBAL_KEY] = {
    require: null,
    modules: null,
    lastModuleCount: 0,
    serviceCache: /* @__PURE__ */ new Map(),
    searchCache: /* @__PURE__ */ new Map(),
    componentCache: /* @__PURE__ */ new Map()
  };
}
var shared = globalThis[GLOBAL_KEY];
var SpotifyWebpack = {
  getModules() {
    if (!shared.require) {
      const webpack = globalThis.webpackChunkclient_web;
      if (!webpack) return shared.modules ?? [];
      shared.require = webpack.push([[/* @__PURE__ */ Symbol()], {}, (re) => re]);
    }
    if (!shared.require || !shared.require.m) return shared.modules ?? [];
    const currentKeys = Object.keys(shared.require.m);
    if (shared.modules && shared.lastModuleCount === currentKeys.length) {
      return shared.modules;
    }
    shared.modules = currentKeys.map((id) => () => {
      try {
        const module = shared.require(id);
        if (typeof module === "object" && module !== null) {
          try {
            return Object.values(module);
          } catch {
            return [module];
          }
        }
        return [module];
      } catch {
        return [];
      }
    });
    shared.lastModuleCount = currentKeys.length;
    return shared.modules;
  },
  getModuleById(id) {
    if (!shared.modules) return null;
    const index = Number(id);
    if (!isNaN(index) && shared.modules[index]) {
      return shared.modules[index]();
    }
    if (!shared.require) {
      SpotifyWebpack.getModules();
    }
    try {
      const module = shared.require?.(id);
      if (typeof module === "object" && module !== null) {
        try {
          return Object.values(module);
        } catch {
          return [module];
        }
      }
      return [module];
    } catch {
      return null;
    }
  },
  findModuleByContent(keywords) {
    const cacheKey = keywords.join(",");
    if (shared.searchCache.has(cacheKey)) {
      return shared.searchCache.get(cacheKey);
    }
    if (!shared.require || !shared.require.m) {
      try {
        SpotifyWebpack.getModules();
      } catch {
        shared.searchCache.set(cacheKey, null);
        return null;
      }
    }
    if (!shared.require?.m) return null;
    const modules = shared.require.m;
    for (const id in modules) {
      const moduleFactory = modules[id];
      if (typeof moduleFactory !== "function") continue;
      const str = Function.prototype.toString.call(moduleFactory);
      if (keywords.every((k) => str.includes(k))) {
        try {
          const mod = shared.require(id);
          shared.searchCache.set(cacheKey, mod);
          return mod;
        } catch (err) {
          console.warn(`Failed to require module ${id}:`, err);
          return null;
        }
      }
    }
    shared.searchCache.set(cacheKey, null);
    return null;
  },
  findComponentByKeywords(keywords) {
    const cacheKey = keywords.join(",");
    if (shared.componentCache.has(cacheKey)) {
      return shared.componentCache.get(cacheKey);
    }
    if (!shared.require || !shared.require.m) {
      try {
        SpotifyWebpack.getModules();
      } catch {
        shared.componentCache.set(cacheKey, null);
        return null;
      }
    }
    if (!shared.require?.m) return null;
    const modules = shared.require.m;
    let foundModuleId = null;
    for (const id in modules) {
      const moduleFactory = modules[id];
      if (typeof moduleFactory !== "function") continue;
      try {
        const str = Function.prototype.toString.call(moduleFactory);
        if (keywords.every((k) => str.includes(k))) {
          foundModuleId = id;
          break;
        }
      } catch (_e) {
      }
    }
    if (!foundModuleId) return null;
    let exports;
    try {
      exports = shared.require(foundModuleId);
    } catch {
      shared.componentCache.set(cacheKey, null);
      return null;
    }
    const isLikelyComponent = (value) => {
      if (!value) return false;
      if (value.$$typeof && Symbol.keyFor(value.$$typeof)?.includes("react")) {
        return true;
      }
      return typeof value === "function";
    };
    let result = null;
    if (isLikelyComponent(exports)) {
      result = exports;
    } else if (typeof exports === "object") {
      for (const key in exports) {
        const value = exports[key];
        if (isLikelyComponent(value)) {
          result = value;
          break;
        }
      }
    }
    shared.componentCache.set(cacheKey, result);
    return result;
  },
  findService(serviceName) {
    const modules = SpotifyWebpack.getModules();
    for (const moduleGetter of modules) {
      if (!moduleGetter || typeof moduleGetter !== "function") continue;
      const module = moduleGetter();
      if (!module) continue;
      const exports = Array.isArray(module) ? module : [module];
      for (const m of exports) {
        if (m && typeof m === "function" && m.SERVICE_ID === serviceName) return m;
      }
    }
    return null;
  },
  getClient(serviceName) {
    if (shared.serviceCache.has(serviceName)) {
      return shared.serviceCache.get(serviceName);
    }
    const ServiceClass = SpotifyWebpack.findService(serviceName);
    if (!ServiceClass) {
      throw new Error(`Spotify Service not found: ${serviceName}`);
    }
    let client;
    if (typeof ServiceClass === "function") {
      const transport = globalThis.Spicetify?.Platform?.Registry?.resolve(/* @__PURE__ */ Symbol.for("EsperantoTransport"));
      if (transport) {
        client = new ServiceClass(transport);
      } else {
        throw new Error("EsperantoTransport not available");
      }
    } else {
      client = ServiceClass;
    }
    shared.serviceCache.set(serviceName, client);
    return client;
  }
};
globalThis.SpotifyWebpack = SpotifyWebpack;

// shared/api/fetchMetadataForTracks.ts
var MetadataService = "spotify.mdata_esperanto.proto.MetadataService";
var TRACK_V4 = 10;
async function fetchMetadataForTracks(trackURIs) {
  const MetadataClient = SpotifyWebpack.getClient(MetadataService);
  const uniqueURIs = [...new Set(trackURIs)];
  const response = await MetadataClient.fetch({
    extensionQuery: [{ extensionKind: TRACK_V4, entityUri: uniqueURIs }]
  });
  const resultMap = /* @__PURE__ */ new Map();
  if (response?.extension?.[0]?.entityExtension) {
    for (const entity of response.extension[0].entityExtension) {
      const byteObject = entity.extensionData?.value;
      if (byteObject) {
        const decoded = decodeProtobuf(byteObject, "spotify.metadata.Track");
        resultMap.set(entity.entityUri, decoded);
      } else {
        resultMap.set(entity.entityUri, null);
      }
    }
  }
  return resultMap;
}

// extensions/playlistDuplicateFinder/src/strings.ts
var strings = {
  menu: {
    itemLabel: "Find Duplicates"
  },
  modal: {
    title: "Playlist Duplicate Finder",
    close: "Close",
    github: "Open GitHub repository"
  },
  badges: {
    editable: "Editable",
    editableHint: "You have edit permission on this playlist (owner or collaborator), so you can remove tracks from it.",
    readOnly: "Read-only",
    readOnlyHint: "You don't have edit permission on this playlist (neither owner nor collaborator), so removal is disabled."
  },
  states: {
    loadingTracks: "Loading playlist\u2026",
    loadedCount: (n) => `Loading playlist\u2026 ${n} tracks`,
    loadingDetails: "Fetching track details (ISRC)",
    scanning: "Scanning for duplicates\u2026",
    emptyPlaylist: "This playlist is empty, there is nothing to scan.",
    noDuplicates: "No duplicates found in this playlist.",
    noDuplicatesHint: "Try the lower-confidence levels \u2014 or the playlist may simply be clean.",
    networkError: "Something went wrong while loading the playlist.",
    retry: "Retry",
    readOnlyNotice: "This playlist is read-only: you don't have edit permission on it (you are neither its owner nor a collaborator), so removing tracks is disabled. You can still review every group.",
    noUidNotice: "Spotify did not return an occurrence id for this row, so it cannot be removed precisely. It stays visible for review but cannot be selected."
  },
  levels: {
    exact: {
      label: "Identical Tracks",
      hint: "The exact same Spotify track added several times to the playlist."
    },
    isrc: {
      label: "Same Recording",
      hint: "Different Spotify entries sharing the same ISRC \u2014 identical audio, different releases."
    },
    probable: {
      label: "Same Title & Artist",
      hint: "Same title and at least one shared artist. Almost always real duplicates."
    },
    likely: {
      label: "Title & Length Match",
      hint: "Same title and durations within 5 seconds."
    },
    possible: {
      label: "Similar Songs",
      hint: "Similar titles and similar durations \u2014 may include remixes and covers."
    },
    maybe: {
      label: "Possible Matches",
      hint: "Low-confidence title similarity only. Review very carefully."
    }
  },
  levelMeta: {
    groupsCount: (n) => `${n} group${n === 1 ? "" : "s"}`,
    emptyLevel: "No matches for this level."
  },
  panel: {
    selectAll: "Select all",
    selectAllHint: "Checks every duplicate of this level, except one entry per group \u2014 you never wipe out a song entirely.",
    deselectAll: "Deselect all"
  },
  row: {
    noAddedDate: "",
    unknownAlbum: "Unknown album",
    noArtists: "",
    play: "Play this track to compare it",
    pause: "Pause"
  },
  footer: {
    selection: (n) => `${n} track${n === 1 ? "" : "s"} selected`,
    warning: "Removal is permanent and cannot be undone.",
    cancel: "Cancel",
    remove: (n) => `Remove ${n} track${n === 1 ? "" : "s"}`,
    confirmTitle: "Confirm removal",
    confirmBody: (n, playlist) => `Remove ${n} track${n === 1 ? "" : "s"} from "${playlist}"? This action is irreversible.`,
    confirmRemove: (n) => `Yes, remove ${n}`,
    keepEditing: "Keep editing",
    removing: (done, total) => `Removing ${done}/${total}\u2026`
  },
  summary: {
    allRemoved: (n) => `${n} track${n === 1 ? "" : "s"} removed from the playlist.`,
    partialFailure: (removed, failed) => `${removed} removed, ${failed} failed. Retry the remaining ones below.`,
    allFailed: (failed) => `Removal failed, no track was removed (${failed} attempted).`
  }
};

// extensions/playlistDuplicateFinder/src/adapter.ts
var CONTENTS_PAGE_SIZE = 200;
var EDITABILITY_PAGE_SIZE = 1e4;
var ISRC_BATCH_SIZE = 100;
var REMOVAL_BATCH_SIZE = 100;
var ISRC_RETRY_ATTEMPTS = 3;
var RETRY_BASE_DELAY_MS = 500;
var delay = (ms, signal) => new Promise((resolve, reject) => {
  if (signal?.aborted) {
    reject(signal.reason);
    return;
  }
  const onAbort = () => {
    clearTimeout(timer);
    reject(signal?.reason ?? new DOMException("Aborted", "AbortError"));
  };
  const timer = setTimeout(() => {
    signal?.removeEventListener("abort", onAbort);
    resolve();
  }, ms);
  signal?.addEventListener("abort", onAbort, { once: true });
});
function playlistApi() {
  return Spicetify?.Platform?.PlaylistAPI;
}
function showNotification(message, isError = false) {
  Spicetify?.showNotification?.(message, isError);
}
async function fetchPlaylistEditability(playlistUri) {
  const LibraryAPI = Spicetify?.Platform?.LibraryAPI;
  if (!LibraryAPI?.getContents) return { canEdit: false, known: false };
  let offset = 0;
  try {
    while (true) {
      const response = await LibraryAPI.getContents({
        offset,
        limit: EDITABILITY_PAGE_SIZE,
        flattenTree: true
      });
      const items = response?.items ?? [];
      for (const item of items) {
        if (item?.uri !== playlistUri) continue;
        return { canEdit: item.canAddTo === true, known: true };
      }
      if (items.length < EDITABILITY_PAGE_SIZE) return { canEdit: false, known: false };
      offset += EDITABILITY_PAGE_SIZE;
    }
  } catch (e) {
    console.warn("[playlistDuplicateFinder] editability lookup failed:", e);
    return { canEdit: false, known: false };
  }
}
async function resolvePlaylistName(uri) {
  try {
    const metadata = await playlistApi()?.getMetadata?.(uri, {});
    return metadata?.name ?? "";
  } catch {
    return "";
  }
}
function readDuration(item) {
  if (typeof item.durationMs === "number") return item.durationMs;
  if (typeof item.duration === "number") return item.duration;
  if (item.duration && typeof item.duration === "object") {
    const duration = item.duration;
    if (typeof duration.totalMs === "number") return duration.totalMs;
    if (typeof duration.milliseconds === "number") return duration.milliseconds;
  }
  return null;
}
function readImageUrl(item) {
  const album = item.album;
  const images = album?.images;
  const image = images?.[0]?.url;
  if (typeof image === "string" && image) return image;
  const coverArt = album?.coverArt;
  const cover = coverArt?.sources?.[0]?.url;
  return typeof cover === "string" ? cover : "";
}
function readAddedAt(item) {
  const addedAt = item.addedAt ?? item.added_at;
  if (typeof addedAt === "string") return addedAt;
  if (addedAt && typeof addedAt === "object") {
    const iso = addedAt.isoString ?? addedAt.iso_str;
    return typeof iso === "string" ? iso : "";
  }
  return "";
}
var CONTENT_URI = /^spotify:(?:track|local|episode|audio|file|video):.+/;
var isTrackUri = (uri) => uri.startsWith("spotify:track:");
function readTrackUri(item, metadata) {
  for (const candidate of [item.uri, metadata.link]) {
    if (typeof candidate === "string" && CONTENT_URI.test(candidate)) return candidate;
  }
  return "";
}
function parsePlaylistItem(item, position) {
  const metadata = item.trackMetadata ?? {};
  const uri = readTrackUri(item, metadata);
  if (!uri) return null;
  const name = (typeof item.name === "string" ? item.name : "") || (typeof metadata.name === "string" ? metadata.name : "");
  const artistField = item.artists ?? metadata.artist;
  const artists = Array.isArray(artistField) ? artistField.filter((a) => typeof a?.name === "string").map((a) => a.name) : [];
  const album = item.album ?? metadata.album ?? {};
  return {
    position,
    uri,
    uid: typeof item.uid === "string" ? item.uid : "",
    name,
    artists,
    albumName: typeof album.name === "string" ? album.name : "",
    albumUri: typeof album.uri === "string" ? album.uri : "",
    imageUrl: readImageUrl(item),
    durationMs: readDuration(item),
    addedAt: readAddedAt(item),
    isrc: null
  };
}
async function fetchPlaylistEntries(playlistUri, options = {}) {
  const api = playlistApi();
  if (!api?.getContents) throw new Error("PlaylistAPI is unavailable");
  const entries = [];
  let offset = 0;
  while (true) {
    options.signal?.throwIfAborted();
    const response = await api.getContents(playlistUri, {
      offset,
      limit: CONTENTS_PAGE_SIZE
    });
    const items = response?.items ?? [];
    if (items.length === 0) break;
    for (let i = 0; i < items.length; i++) {
      const parsed = parsePlaylistItem(items[i], offset + i);
      if (parsed) entries.push(parsed);
    }
    options.onProgress?.(entries.length);
    if (items.length < CONTENTS_PAGE_SIZE) break;
    offset += CONTENTS_PAGE_SIZE;
  }
  return entries;
}
function isrcFromMetadata(metadata) {
  const ids = metadata?.external_id;
  if (!Array.isArray(ids)) return null;
  for (const entry of ids) {
    if (entry?.type === "isrc" && typeof entry.id === "string") return entry.id;
  }
  return null;
}
var isrcCache = /* @__PURE__ */ new Map();
async function hydrateIsrcs(entries, options = {}) {
  const missing = entries.filter((e) => e.isrc == null);
  const pendingUris = [
    ...new Set(
      missing.filter((e) => isTrackUri(e.uri)).map((e) => e.uri).filter((uri) => !isrcCache.has(uri))
    )
  ];
  const total = pendingUris.length;
  if (total === 0) {
    for (const entry of missing) entry.isrc = isrcCache.get(entry.uri) ?? null;
    return;
  }
  let done = 0;
  for (let start = 0; start < pendingUris.length; start += ISRC_BATCH_SIZE) {
    options.signal?.throwIfAborted();
    const batch = pendingUris.slice(start, start + ISRC_BATCH_SIZE);
    let fetched = null;
    for (let attempt = 0; attempt < ISRC_RETRY_ATTEMPTS && fetched == null; attempt++) {
      try {
        fetched = await fetchMetadataForTracks(batch);
      } catch (e) {
        if (attempt < ISRC_RETRY_ATTEMPTS - 1) {
          await delay(
            RETRY_BASE_DELAY_MS * 2 ** attempt * (1 + Math.random() * 0.5),
            options.signal
          );
          continue;
        }
        console.warn(`[playlistDuplicateFinder] ISRC batch failed after retries:`, e);
      }
    }
    options.signal?.throwIfAborted();
    if (fetched) {
      for (const uri of batch) {
        if (fetched.has(uri)) isrcCache.set(uri, isrcFromMetadata(fetched.get(uri)));
      }
    }
    for (const entry of missing) {
      if (isrcCache.has(entry.uri) && entry.isrc == null)
        entry.isrc = isrcCache.get(entry.uri) ?? null;
    }
    done += batch.length;
    options.onProgress?.(done, total);
  }
}
async function removeEntries(playlistUri, targets, onProgress) {
  const api = playlistApi();
  if (!api?.remove || targets.length === 0) {
    const batches = Math.ceil(targets.length / REMOVAL_BATCH_SIZE);
    return {
      removed: 0,
      failed: targets.length,
      batchResults: Array.from({ length: batches }, () => false)
    };
  }
  let removed = 0;
  let failed = 0;
  let done = 0;
  const batchResults = [];
  for (let start = 0; start < targets.length; start += REMOVAL_BATCH_SIZE) {
    const batch = targets.slice(start, start + REMOVAL_BATCH_SIZE);
    const batchItems = batch.map((t) => ({ uri: t.uri, uid: t.uid }));
    let ok = false;
    try {
      await api.remove(playlistUri, batchItems);
      removed += batch.length;
      ok = true;
    } catch (e) {
      failed += batch.length;
      console.warn("[playlistDuplicateFinder] removal batch failed:", e);
    }
    batchResults.push(ok);
    done += batch.length;
    onProgress?.(done, targets.length);
  }
  return { removed, failed, batchResults };
}
function notifySuccess(message) {
  showNotification(message);
}
function notifyFailure(message) {
  showNotification(message, true);
}
var notices = strings.summary;

// extensions/playlistDuplicateFinder/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`/* Playlist Duplicate Finder \u2014 dark modal integrated with the Spotify theme. */

.dupfind-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
}

.dupfind-window {
  display: flex;
  flex-direction: column;
  width: clamp(680px, 62vw, 880px);
  max-height: 86vh;
  overflow: hidden;
  border-radius: 12px;
  background: #181818;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
}

.dupfind-window--busy {
  cursor: progress;
}

/* ------------------------------------------------------------- header */

.dupfind-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 14px;
  border-bottom: 1px solid #282828;
}

.dupfind-header__titles {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.dupfind-header__title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
}

.dupfind-header__playlist {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.dupfind-header__playlist-name {
  overflow: hidden;
  color: #b3b3b3;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dupfind-badge {
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.dupfind-badge--editable {
  background: rgba(29, 185, 84, 0.18);
  color: #1db954;
}

.dupfind-badge--readonly {
  background: rgba(224, 116, 92, 0.16);
  color: #e0745c;
}

.dupfind-header__actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 2px;
}

.dupfind-header__github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #b3b3b3;
}

.dupfind-header__github:hover {
  background: #282828;
  color: #fff;
}

.dupfind-header__github svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
  transition: fill 0.15s;
}

/* Text kept for assistive technology only, never painted. */
.dupfind-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.dupfind-header__close {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #b3b3b3;
  cursor: pointer;
}

.dupfind-header__close:hover {
  background: #282828;
  color: #fff;
}

.dupfind-header__close:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* --------------------------------------------------------------- body */

.dupfind-body {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* states ------------------------------------------------------------ */

.dupfind-state {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 40px;
  color: #b3b3b3;
  font-size: 14px;
  text-align: center;
}

.dupfind-state__title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.dupfind-muted {
  color: #7f7f7f;
  font-size: 12px;
}

.dupfind-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #282828;
  border-top-color: #1db954;
  border-radius: 50%;
  animation: dupfind-spin 0.9s linear infinite;
}

@keyframes dupfind-spin {
  to {
    transform: rotate(360deg);
  }
}

/* left rail --------------------------------------------------------- */

.dupfind-rail {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 6px;
  width: 240px;
  min-height: 0;
  padding: 14px 12px;
  overflow-y: auto;
  border-right: 1px solid #282828;
  background: #141414;
}

.dupfind-rail__item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: #ddd;
  text-align: left;
  cursor: pointer;
}

.dupfind-rail__item:hover {
  background: #1f1f1f;
}

.dupfind-rail__item--active {
  border-color: #333;
  background: #242424;
}

.dupfind-rail__label {
  font-size: 13px;
  font-weight: 600;
}

.dupfind-rail__count {
  color: #8a8a8a;
  font-size: 11px;
}

/* reliability gauge -------------------------------------------------- */

.dupfind-gauge {
  display: flex;
  gap: 4px;
  width: 100%;
}

.dupfind-gauge__seg {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: #2e2e2e;
}

/* right panel -------------------------------------------------------- */

.dupfind-panel {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px;
  overflow-y: auto;
}

.dupfind-panel__head {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.dupfind-panel__level {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

.dupfind-panel__actions {
  display: flex;
  gap: 4px;
}

.dupfind-panel > .dupfind-state {
  padding: 28px;
}

/* "overflow: hidden" makes the min-content height 0 inside the flex panel,
   so without an explicit shrink guard the browser squashes every card. */
.dupfind-group {
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid #282828;
  border-radius: 10px;
  background: #1c1c1c;
}

.dupfind-group__row + .dupfind-group__row {
  border-top: 1px dashed #2e2e2e;
}

/* track rows ---------------------------------------------------------- */

.dupfind-row {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
}

.dupfind-row:hover:not(.dupfind-row--disabled) {
  background: #242424;
}

.dupfind-row--checked {
  background: rgba(224, 116, 92, 0.12);
}

.dupfind-row--disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.dupfind-row__play {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #b3b3b3;
  cursor: pointer;
}

.dupfind-row__play:hover {
  background: #282828;
  color: #fff;
}

.dupfind-row__play--on,
.dupfind-row__play--on:hover {
  color: #1db954;
}

.dupfind-row__checkbox {
  width: 15px;
  height: 15px;
  accent-color: #e0745c;
  cursor: pointer;
}

.dupfind-row__checkbox:disabled {
  cursor: not-allowed;
}

.dupfind-row__art {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  background: #282828;
}

.dupfind-row__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.dupfind-row__titleline {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.dupfind-row__title {
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dupfind-row__duration {
  flex-shrink: 0;
  color: #b3b3b3;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.dupfind-row__meta {
  overflow: hidden;
  color: #b3b3b3;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dupfind-row__where {
  color: #7f7f7f;
  font-size: 11px;
}

/* ------------------------------------------------------------- footer */

.dupfind-footer {
  flex-shrink: 0;
  padding: 12px 20px;
  border-top: 1px solid #282828;
  background: #141414;
}

.dupfind-footer__readonly {
  color: #b3b3b3;
  font-size: 12px;
  line-height: 1.5;
}

.dupfind-footer__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.dupfind-footer__count {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.dupfind-footer__warning {
  flex: 1;
  color: #8a8a8a;
  font-size: 11px;
  text-align: right;
}

.dupfind-footer__confirm {
  flex: 1;
  color: #e0b05c;
  font-size: 13px;
}

.dupfind-footer__summary {
  margin-bottom: 8px;
  color: #e0745c;
  font-size: 12px;
}

.dupfind-footer__buttons {
  display: flex;
  flex-shrink: 0;
  gap: 8px;
}

.dupfind-footer__busy {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 13px;
}

.dupfind-progress {
  flex: 1;
  height: 6px;
  overflow: hidden;
  border-radius: 3px;
  background: #282828;
}

.dupfind-progress__bar {
  height: 100%;
  border-radius: 3px;
  background: #1db954;
  transition: width 0.2s ease;
}

/* ------------------------------------------------------------- buttons */

.dupfind-button {
  padding: 9px 18px;
  border: none;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.dupfind-button--small {
  padding: 5px 12px;
  font-size: 12px;
  flex-shrink: 0;
}

.dupfind-button--ghost {
  background: transparent;
  color: #b3b3b3;
}

.dupfind-button--ghost:hover {
  color: #fff;
}

.dupfind-button--danger {
  background: #e0745c;
  color: #161616;
}

.dupfind-button--danger:hover {
  background: #ea8873;
}

.dupfind-button--danger:disabled {
  background: #3d3d3d;
  color: #8a8a8a;
  cursor: not-allowed;
}

.dupfind-button--ghost:disabled {
  color: #555;
  cursor: not-allowed;
}

/* ------------------------------------------------------------ scrollbar */

.dupfind-panel::-webkit-scrollbar,
.dupfind-rail::-webkit-scrollbar {
  width: 8px;
}

.dupfind-panel::-webkit-scrollbar-thumb,
.dupfind-rail::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #3d3d3d;
}
`);
var styles_default = sheet;

// tasks/shims/react-shim.ts
var {
  Children,
  Component,
  Fragment: Fragment2,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  act,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
} = Spicetify.React;
var react_shim_default = Spicetify.React;

// tasks/shims/react-dom-shim.ts
var {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
} = Spicetify.ReactDOM;
var react_dom_shim_default = Spicetify.ReactDOM;

// extensions/playlistDuplicateFinder/src/detection/normalize.ts
var DEFAULT_STRIP_WORDS = [
  "remaster",
  "remastered",
  "reissue",
  "remix",
  "mix",
  "radio",
  "edit",
  "version",
  "ver",
  "feat",
  "ft",
  "live",
  "acoustic",
  "instrumental",
  "mono",
  "stereo",
  "deluxe",
  "demo",
  "intro",
  "outro",
  "explicit",
  "clean",
  "cover",
  "extended",
  "original",
  "single",
  "album",
  "bonus"
];
function normalizeTitleStrict(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function normalizeFuzzy(name, stripWords = DEFAULT_STRIP_WORDS) {
  let out = name.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\([^)]*\)|\[[^\]]*\]|\{[^}]*\}/g, " ");
  if (stripWords.length > 0) {
    const pattern = `(?<![\\p{L}\\p{N}])(${stripWords.map(escapeRegExp).join("|")})(?![\\p{L}\\p{N}])`;
    out = out.replace(new RegExp(pattern, "gu"), " ");
  }
  return out.replace(/[-–—_]+/g, " ").replace(/[^\p{L}\p{N} ]+/gu, " ").replace(/\s+/g, " ").trim();
}
function normalizeArtist(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

// extensions/playlistDuplicateFinder/src/detection/similarity.ts
var MAYBE_SIMILARITY_THRESHOLD = 0.65;
var MAYBE_LENGTH_RATIO_GUARD = 3;
function bigramSimilarity(a, b) {
  const s1 = a.replace(/\s+/g, "");
  const s2 = b.replace(/\s+/g, "");
  if (s1 === s2) return 1;
  if (s1.length < 2 || s2.length < 2) return 0;
  const bigrams = /* @__PURE__ */ new Map();
  for (let i = 0; i < s1.length - 1; i++) {
    const bg = s1.substring(i, i + 2);
    bigrams.set(bg, (bigrams.get(bg) ?? 0) + 1);
  }
  let intersection = 0;
  for (let i = 0; i < s2.length - 1; i++) {
    const bg = s2.substring(i, i + 2);
    const count = bigrams.get(bg) ?? 0;
    if (count > 0) {
      bigrams.set(bg, count - 1);
      intersection++;
    }
  }
  return Math.min(1, 2 * intersection / (s1.length + s2.length - 2));
}

// extensions/playlistDuplicateFinder/src/detection/types.ts
var GROUP_ORDER = [
  "exact",
  "isrc",
  "probable",
  "likely",
  "possible",
  "maybe"
];
var GROUP_RELIABILITY = {
  exact: 6,
  isrc: 5,
  probable: 4,
  likely: 3,
  possible: 2,
  maybe: 1
};
var DURATION_TOLERANCE_MS = 5e3;

// extensions/playlistDuplicateFinder/src/detection/dedup.ts
var DEFAULT_DURATION_TOLERANCE_MS = DURATION_TOLERANCE_MS;
var DEFAULT_MAYBE_SIMILARITY_THRESHOLD = MAYBE_SIMILARITY_THRESHOLD;
var DEFAULT_MAYBE_NEIGHBOR_WINDOW = 20;
var isTrackUri2 = (uri) => uri.startsWith("spotify:track:");
function durationsAgree(a, b, toleranceMs) {
  return a.durationMs == null || b.durationMs == null || Math.abs(a.durationMs - b.durationMs) <= toleranceMs;
}
function splitBy(items, agrees) {
  const groups = [];
  for (const item of items) {
    const host = groups.find((group) => agrees(group[0], item));
    if (host) host.push(item);
    else groups.push([item]);
  }
  return groups;
}
function createEmptyResults() {
  const results = {};
  for (const id of GROUP_ORDER) results[id] = [];
  return results;
}
function groupBy(items, key) {
  const map = /* @__PURE__ */ new Map();
  for (const item of items) {
    const k = key(item);
    if (k == null) continue;
    const list = map.get(k);
    if (list) list.push(item);
    else map.set(k, [item]);
  }
  return map;
}
function detectDuplicates(entries, options = {}) {
  const results = createEmptyResults();
  if (entries.length < 2) return results;
  const toleranceMs = options.durationToleranceMs ?? DEFAULT_DURATION_TOLERANCE_MS;
  const maybeThreshold = options.maybeSimilarityThreshold ?? DEFAULT_MAYBE_SIMILARITY_THRESHOLD;
  const neighborWindow = options.maybeNeighborWindow ?? DEFAULT_MAYBE_NEIGHBOR_WINDOW;
  const pool = entries.map((entry) => ({
    ...entry,
    titleKey: normalizeTitleStrict(entry.name),
    fuzzyKey: normalizeFuzzy(entry.name, options.stripWords),
    artistKeys: entry.artists.map(normalizeArtist).filter((name) => name.length > 0)
  }));
  const consumed = /* @__PURE__ */ new Set();
  const membersAt = (id, candidates) => {
    const members = [...candidates].sort((a, b) => a.position - b.position);
    if (members.length < 2) return;
    for (const member of members) consumed.add(member.position);
    results[id].push({ members });
  };
  const byUri = groupBy(pool, (t) => t.uri ? t.uri : null);
  for (const bucket of byUri.values()) {
    const twins = splitBy(
      bucket,
      (a, b) => a.titleKey === b.titleKey && durationsAgree(a, b, toleranceMs)
    );
    for (const group of twins) membersAt("exact", group);
  }
  const byIsrc = groupBy(
    pool.filter((t) => !consumed.has(t.position) && isTrackUri2(t.uri) && t.isrc),
    (t) => t.isrc
  );
  for (const bucket of byIsrc.values()) {
    for (const group of splitBy(bucket, (a, b) => durationsAgree(a, b, toleranceMs))) {
      membersAt("isrc", group);
    }
  }
  const artistOverlap = (a, b) => {
    if (a.artistKeys.length === 0 || b.artistKeys.length === 0) return false;
    const other = new Set(b.artistKeys);
    return a.artistKeys.some((name) => other.has(name));
  };
  const closeDurations = (a, b) => a.durationMs != null && b.durationMs != null && Math.abs(a.durationMs - b.durationMs) <= toleranceMs;
  const titleClusters = () => groupBy(
    pool.filter((t) => !consumed.has(t.position) && isTrackUri2(t.uri) && t.titleKey),
    (t) => t.titleKey
  ).values();
  for (const cluster of titleClusters()) {
    for (const base of cluster) {
      if (consumed.has(base.position)) continue;
      const matches = [base];
      for (const other of cluster) {
        if (other === base || consumed.has(other.position)) continue;
        if (other.artistKeys.length === 0) continue;
        if (artistOverlap(base, other)) matches.push(other);
      }
      membersAt("probable", matches);
    }
  }
  for (const cluster of titleClusters()) {
    for (const base of cluster) {
      if (consumed.has(base.position)) continue;
      const matches = [base];
      for (const other of cluster) {
        if (other === base || consumed.has(other.position)) continue;
        if (other.durationMs == null) continue;
        if (closeDurations(base, other)) matches.push(other);
      }
      membersAt("likely", matches);
    }
  }
  const fuzzyPool = pool.filter(
    (t) => !consumed.has(t.position) && isTrackUri2(t.uri) && t.fuzzyKey.length >= 2
  );
  const byFuzzyKey = groupBy(fuzzyPool, (t) => t.fuzzyKey);
  for (const cluster of byFuzzyKey.values()) {
    for (const base of cluster) {
      if (consumed.has(base.position)) continue;
      const matches = [base];
      for (const other of cluster) {
        if (other === base || consumed.has(other.position)) continue;
        if (other.durationMs == null) continue;
        if (closeDurations(base, other)) matches.push(other);
      }
      membersAt("possible", matches);
    }
  }
  const maybePool = fuzzyPool.filter((t) => !consumed.has(t.position));
  for (const bucket of groupBy(maybePool, (t) => t.fuzzyKey.charAt(0)).values()) {
    bucket.sort((a, b) => a.fuzzyKey < b.fuzzyKey ? -1 : a.fuzzyKey > b.fuzzyKey ? 1 : 0);
    for (let i = 0; i < bucket.length; i++) {
      const base = bucket[i];
      if (consumed.has(base.position)) continue;
      const matches = [base];
      const limit = Math.min(i + neighborWindow, bucket.length);
      for (let j = i + 1; j < limit; j++) {
        const candidate = bucket[j];
        if (consumed.has(candidate.position)) continue;
        if (lengthMismatch(base, candidate)) continue;
        if (bigramSimilarity(base.fuzzyKey, candidate.fuzzyKey) < maybeThreshold) continue;
        matches.push(candidate);
      }
      membersAt("maybe", matches);
    }
  }
  return results;
}
function lengthMismatch(a, b) {
  const longer = Math.max(a.fuzzyKey.length, b.fuzzyKey.length);
  const shorter = Math.min(a.fuzzyKey.length, b.fuzzyKey.length);
  return shorter > 0 && longer > shorter * MAYBE_LENGTH_RATIO_GUARD;
}

// extensions/playlistDuplicateFinder/src/ui/dupesModal.tsx
function formatDuration(ms) {
  if (ms == null || ms <= 0) return "--:--";
  const s = Math.floor(ms / 1e3);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function formatAddedDate(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
var RELIABILITY_COLORS = {
  1: "#e0745c",
  2: "#d99e4a",
  3: "#bfba50",
  4: "#8dbd51",
  5: "#4bc05e",
  6: "#1db954"
};
var MODAL_CONTAINER_ID = "duplicate-finder-modal-container";
var modalRoot = null;
function closeDuplicateFinder() {
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  document.getElementById(MODAL_CONTAINER_ID)?.remove();
  document.body.style.overflow = "auto";
}
function showDuplicateFinderModal(playlist) {
  closeDuplicateFinder();
  const container = document.createElement("div");
  container.id = MODAL_CONTAINER_ID;
  document.body.appendChild(container);
  document.body.style.overflow = "hidden";
  modalRoot = createRoot(container);
  modalRoot.render(/* @__PURE__ */ jsx(DuplicateFinderModal, { playlist }));
}
function readNowPlaying(state) {
  return { uri: state?.item?.uri ?? null, isPaused: state?.isPaused ?? true };
}
function useNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState(
    () => readNowPlaying(Spicetify.Platform.PlayerAPI._state)
  );
  useEffect(() => {
    const onChange = (event) => {
      const next = readNowPlaying(event.data);
      setNowPlaying(
        (prev) => prev.uri === next.uri && prev.isPaused === next.isPaused ? prev : next
      );
    };
    Spicetify.Platform.PlayerAPI._events.addListener("update", onChange, {});
    return () => Spicetify.Platform.PlayerAPI._events.removeListener("update", onChange, {});
  }, []);
  return nowPlaying;
}
function RowPlayButton({ uri, nowPlaying }) {
  const isThisTrack = nowPlaying.uri === uri;
  const isPlayingThis = isThisTrack && !nowPlaying.isPaused;
  const label = isPlayingThis ? strings.row.pause : strings.row.play;
  const onClick = (event) => {
    event.stopPropagation();
    if (isThisTrack) {
      if (nowPlaying.isPaused) Spicetify.Platform.PlayerAPI.resume({});
      else Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play({ uri }, {});
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      "aria-label": label,
      className: `dupfind-row__play${isPlayingThis ? " dupfind-row__play--on" : ""}`,
      onClick,
      title: label,
      type: "button",
      children: isPlayingThis ? /* @__PURE__ */ jsx(Icons.React.pause, { size: 14 }) : /* @__PURE__ */ jsx(Icons.React.play, { size: 14 })
    }
  );
}
function TrackRow({ track, checked, canEdit, nowPlaying, onToggle }) {
  const canPlay = track.uri.startsWith("spotify:track:");
  const disabled = !canEdit || !track.uid;
  const disabledTitle = !canEdit ? strings.states.readOnlyNotice : strings.states.noUidNotice;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `dupfind-row${checked ? " dupfind-row--checked" : ""}${disabled ? " dupfind-row--disabled" : ""}`,
      onClick: disabled ? void 0 : () => onToggle(track.position),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            "aria-label": track.name,
            checked,
            className: "dupfind-row__checkbox",
            disabled,
            onChange: () => onToggle(track.position),
            onClick: (event) => event.stopPropagation(),
            title: disabled ? disabledTitle : void 0,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: "",
            className: "dupfind-row__art",
            loading: "lazy",
            onError: (event) => {
              event.currentTarget.style.visibility = "hidden";
            },
            src: track.imageUrl
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "dupfind-row__info", children: [
          /* @__PURE__ */ jsxs("div", { className: "dupfind-row__titleline", children: [
            /* @__PURE__ */ jsx("span", { className: "dupfind-row__title", children: track.name }),
            /* @__PURE__ */ jsx("span", { className: "dupfind-row__duration", children: formatDuration(track.durationMs) })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "dupfind-row__meta", children: [
            track.artists.length > 0 ? track.artists.join(", ") : strings.row.noArtists,
            " \xB7 ",
            track.albumName || strings.row.unknownAlbum
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "dupfind-row__where", children: [
            `#${track.position + 1}`,
            track.addedAt ? ` \xB7 added ${formatAddedDate(track.addedAt)}` : ""
          ] })
        ] }),
        canPlay && /* @__PURE__ */ jsx(RowPlayButton, { nowPlaying, uri: track.uri })
      ]
    }
  );
}
function GroupCard({
  group,
  selected,
  canEdit,
  nowPlaying,
  onToggle
}) {
  if (group.members.length < 2) return null;
  return /* @__PURE__ */ jsx("div", { className: "dupfind-group", children: group.members.map((member) => /* @__PURE__ */ jsx("div", { className: "dupfind-group__row", children: /* @__PURE__ */ jsx(
    TrackRow,
    {
      canEdit,
      checked: selected.has(member.position),
      nowPlaying,
      onToggle,
      track: member
    }
  ) }, member.position)) });
}
function Gauge({ value }) {
  const total = GROUP_ORDER.length;
  const color = RELIABILITY_COLORS[value] ?? RELIABILITY_COLORS[1];
  return /* @__PURE__ */ jsx("div", { "aria-label": `Confidence ${value} of ${total}`, className: "dupfind-gauge", role: "img", children: Array.from({ length: total }, (_, index) => /* @__PURE__ */ jsx(
    "span",
    {
      className: `dupfind-gauge__seg${index < value ? " dupfind-gauge__seg--on" : ""}`,
      style: index < value ? { backgroundColor: color } : void 0
    },
    index
  )) });
}
function DuplicateFinderModal({ playlist }) {
  const [phase, setPhase] = useState("loading");
  const [progressText, setProgressText] = useState(strings.states.loadingTracks);
  const [entries, setEntries] = useState([]);
  const [canEdit, setCanEdit] = useState(false);
  const [activeLevel, setActiveLevel] = useState("exact");
  const [selected, setSelected] = useState(/* @__PURE__ */ new Set());
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [removalProgress, setRemovalProgress] = useState(
    null
  );
  const [summary, setSummary] = useState(null);
  const nowPlaying = useNowPlaying();
  const abortRef = useRef(null);
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (removalProgress) return;
      event.preventDefault();
      closeDuplicateFinder();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [removalProgress]);
  const scan = useCallback(async () => {
    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;
    setPhase("loading");
    setProgressText(strings.states.loadingTracks);
    setSelected(/* @__PURE__ */ new Set());
    setConfirmOpen(false);
    setSummary(null);
    setCanEdit(false);
    try {
      const editability = await fetchPlaylistEditability(playlist.uri);
      if (abort.signal.aborted) return;
      setCanEdit(editability.canEdit);
      const loaded = await fetchPlaylistEntries(playlist.uri, {
        signal: abort.signal,
        onProgress: (loadedCount) => setProgressText(strings.states.loadedCount(loadedCount))
      });
      if (abort.signal.aborted) return;
      if (loaded.length === 0) {
        setEntries([]);
        setPhase("empty");
        return;
      }
      setEntries(loaded);
      setPhase("ready");
      hydrateIsrcs(loaded, {
        signal: abort.signal,
        onProgress: (done, total) => setProgressText(`${strings.states.loadingDetails} ${done}/${total}`)
      }).then(
        () => {
          if (abort.signal.aborted) return;
          setEntries((prev) => [...prev]);
        },
        (error) => {
          if (abort.signal.aborted) return;
          console.warn("[playlistDuplicateFinder] ISRC hydration stopped:", error);
          setProgressText(strings.states.loadingDetails);
        }
      );
    } catch (error) {
      if (abort.signal.aborted) return;
      console.warn("[playlistDuplicateFinder] scan failed:", error);
      setPhase("error");
    }
  }, [playlist.uri]);
  useEffect(() => {
    void scan();
  }, [scan]);
  const results = useMemo(() => detectDuplicates(entries), [entries]);
  const groupCounts = useMemo(
    () => Object.fromEntries(GROUP_ORDER.map((id) => [id, results[id].length])),
    [results]
  );
  const anyDuplicates = GROUP_ORDER.some((id) => groupCounts[id] > 0);
  useEffect(() => {
    if (phase !== "ready") return;
    if (GROUP_ORDER.some((id) => groupCounts[id] > 0) && groupCounts[activeLevel] === 0) {
      const firstWithGroups = GROUP_ORDER.find((id) => groupCounts[id] > 0);
      if (firstWithGroups) setActiveLevel(firstWithGroups);
    }
  }, [phase, groupCounts, activeLevel]);
  const toggleRow = useCallback((position) => {
    setSummary(null);
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(position)) next.delete(position);
      else next.add(position);
      return next;
    });
  }, []);
  const setLevelSelection = (mode) => {
    setSummary(null);
    setSelected((prev) => {
      const next = new Set(prev);
      for (const group of results[activeLevel]) {
        group.members.forEach((member, index) => {
          if (mode === "none") next.delete(member.position);
          else if (index > 0 && member.uid) next.add(member.position);
        });
      }
      return next;
    });
  };
  const startRemoval = async () => {
    if (!canEdit) return;
    const snapshot = entries.filter((e) => selected.has(e.position) && e.uid);
    if (snapshot.length === 0) return;
    setConfirmOpen(false);
    setRemovalProgress({ done: 0, total: snapshot.length });
    let outcome = null;
    try {
      outcome = await removeEntries(
        playlist.uri,
        snapshot.map((e) => ({ uri: e.uri, uid: e.uid })),
        (done, total) => setRemovalProgress({ done, total })
      );
    } catch (error) {
      console.warn("[playlistDuplicateFinder] removal crashed:", error);
      setRemovalProgress(null);
      setSummary(strings.states.networkError);
      return;
    }
    const keepFailed = /* @__PURE__ */ new Set();
    let cursor = 0;
    for (const ok of outcome.batchResults) {
      const end = Math.min(cursor + REMOVAL_BATCH_SIZE, snapshot.length);
      if (!ok) {
        for (let index = cursor; index < end; index++) keepFailed.add(snapshot[index].position);
      }
      cursor = end;
    }
    const removedPositions = /* @__PURE__ */ new Set();
    for (const entry of snapshot) {
      if (!keepFailed.has(entry.position)) removedPositions.add(entry.position);
    }
    setEntries((prev) => prev.filter((e) => !removedPositions.has(e.position)));
    setSelected(keepFailed);
    if (outcome.failed === 0) {
      notifySuccess(notices.allRemoved(outcome.removed));
      setSummary(null);
    } else if (outcome.removed === 0) {
      notifyFailure(notices.allFailed(outcome.failed));
      setSummary(notices.allFailed(outcome.failed));
    } else {
      notifyFailure(notices.partialFailure(outcome.removed, outcome.failed));
      setSummary(notices.partialFailure(outcome.removed, outcome.failed));
    }
    setRemovalProgress(null);
  };
  const activeGroups = results[activeLevel];
  const selectionCount = selected.size;
  const busy = removalProgress != null;
  const playlistLabel = playlist.name || playlist.uri;
  return /* @__PURE__ */ jsx("div", { className: "dupfind-overlay", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `dupfind-window${busy ? " dupfind-window--busy" : ""}`,
      onClick: (event) => {
        if (event.target === event.currentTarget && !busy) closeDuplicateFinder();
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "dupfind-header", children: [
          /* @__PURE__ */ jsxs("div", { className: "dupfind-header__titles", children: [
            /* @__PURE__ */ jsx("h1", { className: "dupfind-header__title", children: strings.modal.title }),
            /* @__PURE__ */ jsxs("div", { className: "dupfind-header__playlist", children: [
              /* @__PURE__ */ jsx("span", { className: "dupfind-header__playlist-name", children: playlistLabel }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `dupfind-badge${canEdit ? " dupfind-badge--editable" : " dupfind-badge--readonly"}`,
                  title: canEdit ? strings.badges.editableHint : strings.badges.readOnlyHint,
                  children: canEdit ? strings.badges.editable : strings.badges.readOnly
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "dupfind-header__actions", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                "aria-label": strings.modal.github,
                className: "dupfind-header__github",
                href: "https://github.com/JimMarley420/spicetify-extension",
                rel: "noopener noreferrer",
                target: "_blank",
                title: strings.modal.github,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "dupfind-sr-only", children: strings.modal.github }),
                  /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": strings.modal.close,
                className: "dupfind-header__close",
                disabled: busy,
                onClick: () => closeDuplicateFinder(),
                type: "button",
                children: /* @__PURE__ */ jsx(Icons.React.close, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "dupfind-body", children: [
          phase === "loading" && /* @__PURE__ */ jsxs("div", { className: "dupfind-state dupfind-state--loading", children: [
            /* @__PURE__ */ jsx("div", { className: "dupfind-spinner" }),
            /* @__PURE__ */ jsx("span", { children: progressText })
          ] }),
          phase === "error" && /* @__PURE__ */ jsxs("div", { className: "dupfind-state dupfind-state--error", children: [
            /* @__PURE__ */ jsx("span", { children: strings.states.networkError }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "dupfind-button dupfind-button--ghost",
                onClick: () => void scan(),
                type: "button",
                children: strings.states.retry
              }
            )
          ] }),
          phase === "empty" && /* @__PURE__ */ jsx("div", { className: "dupfind-state", children: /* @__PURE__ */ jsx("span", { children: strings.states.emptyPlaylist }) }),
          phase === "ready" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("aside", { className: "dupfind-rail", children: GROUP_ORDER.filter((id) => groupCounts[id] > 0).map((id) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `dupfind-rail__item${activeLevel === id ? " dupfind-rail__item--active" : ""}`,
                onClick: () => {
                  setActiveLevel(id);
                  setConfirmOpen(false);
                },
                title: strings.levels[id].hint,
                type: "button",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "dupfind-rail__label", children: strings.levels[id].label }),
                  /* @__PURE__ */ jsx("span", { className: "dupfind-rail__count", children: strings.levelMeta.groupsCount(groupCounts[id]) }),
                  /* @__PURE__ */ jsx(Gauge, { value: GROUP_RELIABILITY[id] })
                ]
              },
              id
            )) }),
            /* @__PURE__ */ jsxs("main", { className: "dupfind-panel", children: [
              activeGroups.length > 0 && /* @__PURE__ */ jsxs("div", { className: "dupfind-panel__head", children: [
                /* @__PURE__ */ jsx("span", { className: "dupfind-panel__level", children: strings.levels[activeLevel].label }),
                canEdit && /* @__PURE__ */ jsxs("div", { className: "dupfind-panel__actions", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "dupfind-button dupfind-button--ghost dupfind-button--small",
                      onClick: () => setLevelSelection("all"),
                      title: strings.panel.selectAllHint,
                      type: "button",
                      children: strings.panel.selectAll
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "dupfind-button dupfind-button--ghost dupfind-button--small",
                      onClick: () => setLevelSelection("none"),
                      type: "button",
                      children: strings.panel.deselectAll
                    }
                  )
                ] })
              ] }),
              !anyDuplicates && /* @__PURE__ */ jsxs("div", { className: "dupfind-state", children: [
                /* @__PURE__ */ jsx("span", { className: "dupfind-state__title", children: strings.states.noDuplicates }),
                /* @__PURE__ */ jsx("span", { className: "dupfind-muted", children: strings.states.noDuplicatesHint })
              ] }),
              anyDuplicates && activeGroups.length === 0 && /* @__PURE__ */ jsx("div", { className: "dupfind-state", children: /* @__PURE__ */ jsx("span", { children: strings.levelMeta.emptyLevel }) }),
              activeGroups.map((group) => /* @__PURE__ */ jsx(
                GroupCard,
                {
                  canEdit,
                  group,
                  nowPlaying,
                  onToggle: toggleRow,
                  selected
                },
                `g${group.members[0]?.position ?? ""}`
              ))
            ] })
          ] })
        ] }),
        phase === "ready" && /* @__PURE__ */ jsx("div", { className: "dupfind-footer", children: !canEdit ? /* @__PURE__ */ jsx("div", { className: "dupfind-footer__readonly", children: strings.states.readOnlyNotice }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          summary && /* @__PURE__ */ jsx("div", { className: "dupfind-footer__summary", children: summary }),
          !busy && !confirmOpen && /* @__PURE__ */ jsxs("div", { className: "dupfind-footer__row", children: [
            /* @__PURE__ */ jsx("span", { className: "dupfind-footer__count", children: strings.footer.selection(selectionCount) }),
            /* @__PURE__ */ jsx("span", { className: "dupfind-footer__warning", children: strings.footer.warning }),
            /* @__PURE__ */ jsxs("div", { className: "dupfind-footer__buttons", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "dupfind-button dupfind-button--ghost",
                  onClick: () => closeDuplicateFinder(),
                  type: "button",
                  children: strings.footer.cancel
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "dupfind-button dupfind-button--danger",
                  disabled: selectionCount === 0,
                  onClick: () => setConfirmOpen(true),
                  type: "button",
                  children: strings.footer.remove(selectionCount)
                }
              )
            ] })
          ] }),
          !busy && confirmOpen && /* @__PURE__ */ jsxs("div", { className: "dupfind-footer__row", children: [
            /* @__PURE__ */ jsx("span", { className: "dupfind-footer__confirm", children: strings.footer.confirmBody(selectionCount, playlistLabel) }),
            /* @__PURE__ */ jsxs("div", { className: "dupfind-footer__buttons", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "dupfind-button dupfind-button--ghost",
                  onClick: () => setConfirmOpen(false),
                  type: "button",
                  children: strings.footer.keepEditing
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "dupfind-button dupfind-button--danger",
                  onClick: () => void startRemoval(),
                  type: "button",
                  children: strings.footer.confirmRemove(selectionCount)
                }
              )
            ] })
          ] }),
          busy && removalProgress && /* @__PURE__ */ jsxs("div", { className: "dupfind-footer__busy", children: [
            /* @__PURE__ */ jsx("span", { children: strings.footer.removing(removalProgress.done, removalProgress.total) }),
            /* @__PURE__ */ jsx("div", { className: "dupfind-progress", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "dupfind-progress__bar",
                style: {
                  width: `${Math.round(removalProgress.done / Math.max(removalProgress.total, 1) * 100)}%`
                }
              }
            ) })
          ] })
        ] }) })
      ]
    }
  ) });
}

// extensions/playlistDuplicateFinder/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
function isPlaylistType(uri) {
  const type = Spicetify.URI.from(uri)?.type;
  return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
}
var findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: strings.menu.itemLabel,
  leadingIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="${Icons.RAW.duplicate}"/></svg>`,
  /** Open the finder for the playlist behind the context menu. */
  onClick: async (context) => {
    const parsed = parseProps(context?.props);
    const uri = typeof parsed.uri === "string" ? parsed.uri : "";
    if (!uri || !isPlaylistType(uri)) return;
    const name = typeof parsed.name === "string" && parsed.name.length > 0 ? parsed.name : await resolvePlaylistName(uri);
    showDuplicateFinderModal({ uri, name });
  },
  /** Offer the item only on playlist rows. */
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    return typeof parsed.uri === "string" && isPlaylistType(parsed.uri);
  }
});
findDuplicatesMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3NoYXJlZC93ZWJwYWNrL3NjaGVtYS50cyIsICIuLi9zaGFyZWQvd2VicGFjay9wcm90b2J1Zi50cyIsICIuLi9zaGFyZWQvd2VicGFjay93ZWJwYWNrLnRzIiwgIi4uL3NoYXJlZC9hcGkvZmV0Y2hNZXRhZGF0YUZvclRyYWNrcy50cyIsICIuLi9leHRlbnNpb25zL3BsYXlsaXN0RHVwbGljYXRlRmluZGVyL3NyYy9zdHJpbmdzLnRzIiwgIi4uL2V4dGVuc2lvbnMvcGxheWxpc3REdXBsaWNhdGVGaW5kZXIvc3JjL2FkYXB0ZXIudHMiLCAiLi4vZXh0ZW5zaW9ucy9wbGF5bGlzdER1cGxpY2F0ZUZpbmRlci9zcmMvc3R5bGVzLmNzcyIsICIuLi90YXNrcy9zaGltcy9yZWFjdC1zaGltLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LWRvbS1zaGltLnRzIiwgIi4uL2V4dGVuc2lvbnMvcGxheWxpc3REdXBsaWNhdGVGaW5kZXIvc3JjL2RldGVjdGlvbi9ub3JtYWxpemUudHMiLCAiLi4vZXh0ZW5zaW9ucy9wbGF5bGlzdER1cGxpY2F0ZUZpbmRlci9zcmMvZGV0ZWN0aW9uL3NpbWlsYXJpdHkudHMiLCAiLi4vZXh0ZW5zaW9ucy9wbGF5bGlzdER1cGxpY2F0ZUZpbmRlci9zcmMvZGV0ZWN0aW9uL3R5cGVzLnRzIiwgIi4uL2V4dGVuc2lvbnMvcGxheWxpc3REdXBsaWNhdGVGaW5kZXIvc3JjL2RldGVjdGlvbi9kZWR1cC50cyIsICIuLi9leHRlbnNpb25zL3BsYXlsaXN0RHVwbGljYXRlRmluZGVyL3NyYy91aS9kdXBlc01vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL3BsYXlsaXN0RHVwbGljYXRlRmluZGVyL3NyYy9hcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIE1lcmdlZE9iamVjdCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmludGVyZmFjZSBQcm9wc0lucHV0IGV4dGVuZHMgTWVyZ2VkT2JqZWN0IHtcbiAgaXRlbT86IE1lcmdlZE9iamVjdDtcbiAgcmVmZXJlbmNlPzogTWVyZ2VkT2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wczogUHJvcHNJbnB1dCB8IG51bGwgfCB1bmRlZmluZWQpOiBNZXJnZWRPYmplY3Qge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkOiBNZXJnZWRPYmplY3QgPSB7fTtcblxuICBjb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZTogTWVyZ2VkT2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCwgdGFyZ2V0OiBNZXJnZWRPYmplY3QpID0+IHtcbiAgICBpZiAoIXNvdXJjZSB8fCB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093bihzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG1lcmdlUHJvcHMocHJvcHMsIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMuaXRlbSwgcGFyc2VkKTtcbiAgbWVyZ2VQcm9wcyhwcm9wcy5yZWZlcmVuY2UsIHBhcnNlZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiIsICJleHBvcnQgY29uc3QgeyBGcmFnbWVudCwganN4LCBqc3hzIH0gPSBTcGljZXRpZnkuUmVhY3RKU1g7XG4iLCAiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHNpemU/OiBudW1iZXI7XG4gIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0SWNvbkNvbXBvbmVudCA9IEZDPEljb25Qcm9wcz4gJiB7XG4gIGRlZmF1bHRQcm9wcz86IFBhcnRpYWw8SWNvblByb3BzPjtcbn07XG5cbmNvbnN0IGljb25EYXRhID0ge1xuICBzZWFyY2g6IHtcbiAgICBwYXRoOiBcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBwbGF5OiB7XG4gICAgcGF0aDogXCJNOCA1djE0bDExLTd6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBhdXNlOiB7XG4gICAgcGF0aDogXCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIGVkaXRCdXR0b246IHtcbiAgICBwYXRoOiBcIk0xNy4zMTggMS45NzVhMy4zMjkgMy4zMjkgMCAxMTQuNzA3IDQuNzA3TDguNDUxIDIwLjI1NmMtLjQ5LjQ5LTEuMDgyLjg2Ny0xLjczNSAxLjEwM0wyLjM0IDIyLjk0YTEgMSAwIDAxLTEuMjgtMS4yOGwxLjU4MS00LjM3NmE0LjcyNiA0LjcyNiAwIDAxMS4xMDMtMS43MzVMMTcuMzE4IDEuOTc1em0zLjI5MyAxLjQxNGExLjMyOSAxLjMyOSAwIDAwLTEuODggMEw1LjE1OSAxNi45NjNjLS4yODMuMjgzLS41LjYyNC0uNjM2IDFsLS44NTcgMi4zNzIgMi4zNzEtLjg1N2EyLjcyNiAyLjcyNiAwIDAwMS4wMDEtLjYzNkwyMC42MTEgNS4yNjhhMS4zMjkgMS4zMjkgMCAwMDAtMS44Nzl6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcGF0aDogXCJNNy45NiA1LjMzYTIuNjcgMi42NyAwIDExNS4zNCAyLjY3IDIuNjcgMi42NyAwIDAxLTUuMzQtMi42N1pNNi42NyA4QTEuMzMgMS4zMyAwIDEwOS4zMyA4IDEuMzMgMS4zMyAwIDAwNi42NyA4Wm00LjgyLTQuODFhLjk1Ljk0IDAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgMCAwMDkuNjguMTcgOC4xIDguMSAwIDAwNi4zMi4xNy40Ny40NyAwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDAgMDEtMS4yNS43MUwyLjU1IDIuNTFhLjQ3LjQ3IDAgMDAtLjUxLjEzQzEuMjggMy40Ny43MSA0LjQ2LjM2IDUuNTNhLjQ3LjQ3IDAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCAwIDAxMCAxLjQzTC41IDkuOTVhLjQ3LjQ3IDAgMDAtLjE0LjUxIDcuOTggNy45OCAwIDAwMS42OCAyLjkuNDcuNDcgMCAwMC41MS4xM2wxLjgxLS42NWEuOTQuOTQgMCAwMTEuMjUuNzJsLjM0IDEuODljLjA0LjE4LjE4LjMzLjM3LjM3YTguMSA4LjEgMCAwMDMuMzYgMCAuNDcuNDcgMCAwMC4zNy0uMzdsLjM0LTEuODlhLjk1Ljk1IDAgMDExLjI1LS43MmwxLjgxLjY1Yy4xOC4wNi4zOC4wMS41MS0uMTMuNzYtLjg0IDEuMzQtMS44MiAxLjY4LTIuOWEuNDcuNDcgMCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgMCAwMTAtMS40NEwxNS41IDYuMDRhLjQ3LjQ3IDAgMDAuMTQtLjUgNy45OCA3Ljk4IDAgMDAtMS42OC0yLjkuNDcuNDcgMCAwMC0uNTEtLjEzbC0xLjgxLjY1YS45NS45NSAwIDAxLS4xNS4wNFptLTguODIuNzggMS4yNS40NGEyLjI4IDIuMjggMCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSAwIDAxMS42OCAwbC4yNCAxLjNhMi4yOCAyLjI4IDAgMDAzLjAxIDEuNzNsMS4yNC0uNDRjLjM0LjQ0LjYzLjkzLjg0IDEuNDRsLTEgLjg1YTIuMjcgMi4yNyAwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSAwIDAxLS44NCAxLjQ0bC0xLjI0LS40NEEyLjI4IDIuMjggMCAwMDkuMDggMTMuMzJsLS4yNCAxLjI5YTYuOCA2LjggMCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCAwIDAwMy45MSAxMS41OWwtMS4yNC40NGE2LjY1IDYuNjUgMCAwMS0uODQtMS40NGwxLS44NmEyLjI3IDIuMjcgMCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgcGF0aDogXCJNMzEuMDk4IDI5Ljc5NCAxNi45NTUgMTUuNjUgMzEuMDk3IDEuNTEgMjkuNjgzLjA5MyAxNS41NCAxNC4yMzcgMS40LjA5NC0uMDE2IDEuNTA4IDE0LjEyNiAxNS42NS0uMDE2IDI5Ljc5NWwxLjQxNCAxLjQxNEwxNS41NCAxNy4wNjVsMTQuMTQ0IDE0LjE0M1wiLFxuICAgIHNpemU6IDMyLFxuICB9LFxuICBnaXRodWI6IHtcbiAgICBwYXRoOiBcIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIGR1cGxpY2F0ZToge1xuICAgIHBhdGg6IFwiTTE1IDMuNWMwLS41LS41LTEtMS0xSDExVjFjMC0uNS0uNS0xLTEtMUgyQzEuNSAwIDEgLjUgMSAxVjExLjVjMCAuNS41IDEgMSAxSDQuNVYxNWMwIC41LjUgMSAxIDFIMTRjLjUgMCAxLS41IDEtMVpNMi41IDJjMC0uMjUuMjUtLjUuNS0uNUg5Yy4yNSAwIC41LjI1LjUuNXY4LjVjMCAuMjUtLjI1LjUtLjUuNUgzYy0uMjUgMC0uNS0uMjUtLjUtLjVabTQgMTIuNWMtLjI1IDAtLjUtLjI1LS41LS41VjEyLjVoNGMuNSAwIDEtLjUgMS0xVjRoMmMuMjUgMCAuNS4yNS41LjVWMTRjMCAuMjUtLjI1LjUtLjUuNVpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBJY29uTmFtZSA9IGtleW9mIHR5cGVvZiBpY29uRGF0YTtcblxuY29uc3QgY3JlYXRlUmVhY3RDb21wb25lbnQgPSAobmFtZTogSWNvbk5hbWUpOiBSZWFjdEljb25Db21wb25lbnQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHNpemU6IGRlZmF1bHRTaXplIH0gPSBpY29uRGF0YVtuYW1lXTtcbiAgY29uc3QgQ29tcG9uZW50OiBSZWFjdEljb25Db21wb25lbnQgPSAoeyBzaXplID0gZGVmYXVsdFNpemUsIGZpbGwgPSBcImN1cnJlbnRDb2xvclwiIH0pID0+IChcbiAgICA8c3ZnXG4gICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICA+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IGRlZmF1bHRTaXplLFxuICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gIH07XG4gIHJldHVybiBDb21wb25lbnQ7XG59O1xuXG5pbnRlcmZhY2UgSWNvbkNvbGxlY3Rpb24ge1xuICByYXc6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbiAgcmVhY3Q6IFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PjtcbiAgaHRtbDogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xufVxuXG5jb25zdCB7IHJhdywgcmVhY3QsIGh0bWwgfSA9IChPYmplY3Qua2V5cyhpY29uRGF0YSkgYXMgSWNvbk5hbWVbXSkucmVkdWNlPEljb25Db2xsZWN0aW9uPihcbiAgKGFjYywgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBpY29uRGF0YVtuYW1lXS5zaXplO1xuICAgIGFjYy5yYXdbbmFtZV0gPSBpY29uRGF0YVtuYW1lXS5wYXRoO1xuICAgIGFjYy5yZWFjdFtuYW1lXSA9IGNyZWF0ZVJlYWN0Q29tcG9uZW50KG5hbWUpO1xuICAgIGFjYy5odG1sW25hbWVdID0gYDxzdmcgY2xhc3M9XCJhcnRpc3Qtc2VhcmNoLWljb25cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAke3NpemV9ICR7c2l6ZX1cIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIiR7aWNvbkRhdGFbbmFtZV0ucGF0aH1cIi8+PC9zdmc+YDtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7XG4gICAgcmF3OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gICAgcmVhY3Q6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PixcbiAgICBodG1sOiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgSWNvbnMgPSB7XG4gIFJlYWN0OiByZWFjdCxcbiAgSFRNTDogaHRtbCxcbiAgUkFXOiByYXcsXG59O1xuIiwgIi8vIHNvbWUgcHJvdG9idWYgZGVmcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZnaWFubHUvZ28tbGlicmVzcG90L3RyZWUvbWFzdGVyL3Byb3RvL3Nwb3RpZnkvbWV0YWRhdGEvbWV0YWRhdGEucHJvdG9cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEluZm8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVwZWF0ZWQ/OiBib29sZWFuO1xuICBlbnVtVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU2NoZW1hIHtcbiAgZmllbGRzOiBSZWNvcmQ8bnVtYmVyLCBGaWVsZEluZm8+O1xuICBlbnVtcz86IFJlY29yZDxzdHJpbmcsIFJlY29yZDxudW1iZXIsIHN0cmluZz4+O1xufVxuXG5leHBvcnQgdHlwZSBNZXRhZGF0YVNjaGVtYSA9IFJlY29yZDxzdHJpbmcsIE1lc3NhZ2VTY2hlbWE+O1xuXG5leHBvcnQgY29uc3QgbWV0YWRhdGFTY2hlbWE6IE1ldGFkYXRhU2NoZW1hID0ge1xuICBcInNwb3RpZnkubWV0YWRhdGEuVHJhY2tcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdpZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJhbGJ1bVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIiB9LFxuICAgICAgNDogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA1OiB7IG5hbWU6IFwibnVtYmVyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDY6IHsgbmFtZTogXCJkaXNjX251bWJlclwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA3OiB7IG5hbWU6IFwiZHVyYXRpb25cIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgODogeyBuYW1lOiBcInBvcHVsYXJpdHlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgOTogeyBuYW1lOiBcImV4cGxpY2l0XCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAxMDogeyBuYW1lOiBcImV4dGVybmFsX2lkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMTogeyBuYW1lOiBcInJlc3RyaWN0aW9uXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTI6IHsgbmFtZTogXCJmaWxlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb0ZpbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEzOiB7IG5hbWU6IFwiYWx0ZXJuYXRpdmVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNDogeyBuYW1lOiBcInNhbGVfcGVyaW9kXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5TYWxlUGVyaW9kXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNTogeyBuYW1lOiBcInByZXZpZXdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvRmlsZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTY6IHsgbmFtZTogXCJ0YWdzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNzogeyBuYW1lOiBcImVhcmxpZXN0X2xpdmVfdGltZXN0YW1wXCIsIHR5cGU6IFwiaW50NjRcIiB9LFxuICAgICAgMTg6IHsgbmFtZTogXCJoYXNfbHlyaWNzXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAxOTogeyBuYW1lOiBcImF2YWlsYWJpbGl0eVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXZhaWxhYmlsaXR5XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyMTogeyBuYW1lOiBcImxpY2Vuc29yXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5MaWNlbnNvclwiIH0sXG4gICAgICAyMjogeyBuYW1lOiBcImxhbmd1YWdlX29mX3BlcmZvcm1hbmNlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyNDogeyBuYW1lOiBcIm9yaWdpbmFsX2F1ZGlvXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb1wiIH0sXG4gICAgICAyNzogeyBuYW1lOiBcIm9yaWdpbmFsX3RpdGxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI4OiB7IG5hbWU6IFwidmVyc2lvbl90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzMjogeyBuYW1lOiBcImFydGlzdF93aXRoX3JvbGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFdpdGhSb2xlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzNjogeyBuYW1lOiBcImNhbm9uaWNhbF91cmlcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzc6IHsgbmFtZTogXCJwcmVyZWxlYXNlX2NvbmZpZ1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUHJlcmVsZWFzZUNvbmZpZ1wiIH0sXG4gICAgICAzOToge1xuICAgICAgICBuYW1lOiBcImNvbnRlbnRfYXV0aG9yaXphdGlvbl9hdHRyaWJ1dGVzXCIsXG4gICAgICAgIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5Db250ZW50QXV0aG9yaXphdGlvbkF0dHJpYnV0ZXNcIixcbiAgICAgIH0sXG4gICAgICA0MDogeyBuYW1lOiBcInRyYWNrX2NvbnRlbnRfcmF0aW5nXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5Db250ZW50UmF0aW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0MTogeyBuYW1lOiBcImF1ZGlvX2Zvcm1hdHNcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrQXVkaW9Gb3JtYXRcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDQzOiB7IG5hbWU6IFwidW5rbm93bl9maWVsZFwiLCB0eXBlOiBcImludDMyXCIgfSxcbiAgICAgIDQ0OiB7IG5hbWU6IFwiaW1wbGVtZW50YXRpb25fZGV0YWlsc1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1wbGVtZW50YXRpb25EZXRhaWxzXCIgfSxcbiAgICAgIDQ3OiB7IG5hbWU6IFwidGVzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuVGVzdENhdGVnb3J5XCIgfSxcbiAgICAgIDEyOTogeyBuYW1lOiBcIm1lZGlhX3R5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIk1lZGlhVHlwZVwiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBNZWRpYVR5cGU6IHsgMDogXCJNSVhFRFwiLCAxOiBcIkFVRElPXCIsIDI6IFwiVklERU9cIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BbGJ1bVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZ2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiVHlwZVwiIH0sXG4gICAgICA1OiB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgNjogeyBuYW1lOiBcImRhdGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIiB9LFxuICAgICAgNzogeyBuYW1lOiBcInBvcHVsYXJpdHlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgODogeyBuYW1lOiBcImdlbnJlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA5OiB7IG5hbWU6IFwiY292ZXJcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMDogeyBuYW1lOiBcImV4dGVybmFsX2lkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMTogeyBuYW1lOiBcImRpc2NcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRpc2NcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEyOiB7IG5hbWU6IFwicmV2aWV3XCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMzogeyBuYW1lOiBcImNvcHlyaWdodFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29weXJpZ2h0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNDogeyBuYW1lOiBcInJlc3RyaWN0aW9uXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTU6IHsgbmFtZTogXCJyZWxhdGVkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BbGJ1bVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTY6IHsgbmFtZTogXCJzYWxlX3BlcmlvZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuU2FsZVBlcmlvZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTc6IHsgbmFtZTogXCJjb3Zlcl9ncm91cFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VHcm91cFwiIH0sXG4gICAgICAxODogeyBuYW1lOiBcIm9yaWdpbmFsX3RpdGxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDE5OiB7IG5hbWU6IFwidmVyc2lvbl90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyMDogeyBuYW1lOiBcInR5cGVfc3RyXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDIzOiB7IG5hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdmFpbGFiaWxpdHlcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDI1OiB7IG5hbWU6IFwibGljZW5zb3JcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkxpY2Vuc29yXCIgfSxcbiAgICAgIDM3OiB7IG5hbWU6IFwicHJlcmVsZWFzZV9jb25maWdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIFR5cGU6IHsgMTogXCJBTEJVTVwiLCAyOiBcIlNJTkdMRVwiLCAzOiBcIkNPTVBJTEFUSU9OXCIsIDQ6IFwiRVBcIiwgNTogXCJBVURJT0JPT0tcIiwgNjogXCJQT0RDQVNUXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudFJhdGluZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidGFnXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJDb250ZW50UmF0aW5nVGFnXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJsYWJlbFwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgQ29udGVudFJhdGluZ1RhZzogeyAwOiBcIlVOS05PV05cIiwgMTogXCJFWFBMSUNJVFwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInllYXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm1vbnRoXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJkYXlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzaXplXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJTaXplXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJ3aWR0aFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiaGVpZ2h0XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IFNpemU6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiU01BTExcIiwgMjogXCJNRURJVU1cIiwgMzogXCJMQVJHRVwiLCA0OiBcIkVYVFJBX0xBUkdFXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9GaWxlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJmaWxlX2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImZvcm1hdFwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiRm9ybWF0XCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJiaXRyYXRlXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJwcmV2aWV3XCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIEZvcm1hdDogeyAxOiBcIk1QNFwiLCAyOiBcIk9HR1wiLCAzOiBcIldFQk1cIiwgNDogXCJVTktOT1dOXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiZ2VucmVcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDU6IHsgbmFtZTogXCJwcm9maWxlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RQcm9maWxlXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0UHJvZmlsZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYmlvZ3JhcGh5XCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJpbWFnZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJhcnRpc3RfbmFtZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuTG9jYWxpemVkU3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkxvY2FsaXplZFN0cmluZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibG9jYWxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzdHJpbmdcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJ0eXBlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlJlc3RyaWN0aW9uXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjb3VudHJpZXNcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJjYXRhbG9ndWVzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzOiB7IG5hbWU6IFwicmVhc29uXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJSZWFzb25cIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgUmVhc29uOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIk5PVF9BVkFJTEFCTEVfSU5fQ09VTlRSWVwiLCAyOiBcIk5PVF9BVkFJTEFCTEVfRk9SX0NVUlJFTkNZXCIsIDM6IFwiTk9UX0FWQUlMQUJMRV9GT1JfVVNFUlwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF2YWlsYWJpbGl0eVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwic3RhcnRfdGltZVwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJhZnRlcl9zdGFydF90aW1lXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaXNfYXZhaWxhYmxlXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrQXVkaW9Gb3JtYXRcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImNvZGVjXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJDb2RlY1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYml0cmF0ZVwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgfSxcbiAgICBlbnVtczoge1xuICAgICAgQ29kZWM6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiTVAzXCIsIDI6IFwiQUFDXCIsIDM6IFwiT0dHX1ZPUkJJU1wiLCA0OiBcIkZMQUNcIiwgNTogXCJXRUJNQV9PUFVTXCIsIDY6IFwiV0VCTUFfVk9SQklTXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9cIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdhaW5cIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInNhbXBsZV9vZmZzZXRcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5EaXNjXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJudW1iZXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RXaXRoUm9sZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiYXJ0aXN0XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInJvbGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFJvbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJoYXNfc2F2aW5nX3JpZ2h0c1wiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RSb2xlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiUm9sZUlkXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBSb2xlSWQ6IHsgMDogXCJNQUlOXCIsIDE6IFwiRkVBVFVSRURcIiwgMjogXCJSRU1JWFwiLCAzOiBcIlBST0RVQ0VSXCIsIDQ6IFwiQ09NUE9TRVJcIiwgNTogXCJMWVJJQ0lTVFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlNhbGVQZXJpb2RcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInN0YXJ0XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJlbmRcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZUdyb3VwXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJiYWNraW5nX3R5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIkJhY2tpbmdUeXBlXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpbWFnZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IEJhY2tpbmdUeXBlOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIkRFRkFVTFRcIiwgMjogXCJWSURFT19GUkFNRVwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvcHlyaWdodFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiVHlwZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwidGV4dFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBUeXBlOiB7IDA6IFwiUFwiLCAxOiBcIkNcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5WaWRlb0ZpbGVcIjoge1xuICAgIGZpZWxkczogeyAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuTGljZW5zb3JcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImxpY2Vuc29yX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudEF1dGhvcml6YXRpb25BdHRyaWJ1dGVzXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjYXRfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImNvbnRlbnRfcmlnaHRzXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJyaWdodHNfb3duZXJfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbXBsZW1lbnRhdGlvbkRldGFpbHNcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImltcGxfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuUHJlcmVsZWFzZUNvbmZpZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiaXNfcHJlbWl1bV9vbmx5XCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwicmVsZWFzZV9kYXRlXCIsIHR5cGU6IFwiaW50NjRcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5UZXN0Q2F0ZWdvcnlcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImNhdGVnb3J5XCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpc19lbmFibGVkXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgfSxcbiAgfSxcbn07IiwgImltcG9ydCB7IG1ldGFkYXRhU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hLnRzXCI7XG5cbmZ1bmN0aW9uIHdhcm4ocmVhc29uOiBzdHJpbmcsIGN0eE9yVGh1bms6IFJlY29yZDxzdHJpbmcsIGFueT4gfCAoKCkgPT4gUmVjb3JkPHN0cmluZywgYW55PikpIHtcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcyhcIkRlY29kZSBlcnJvclwiKSB8fCByZWFzb24uaW5jbHVkZXMoXCJTY2hlbWEgbm90IGZvdW5kXCIpKSB7XG4gICAgY29uc3QgY3R4ID0gdHlwZW9mIGN0eE9yVGh1bmsgPT09IFwiZnVuY3Rpb25cIiA/IGN0eE9yVGh1bmsoKSA6IGN0eE9yVGh1bms7XG4gICAgY29uc29sZS53YXJuKFwiW1Byb3RvYnVmXVwiLCByZWFzb24sIGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3RvYnVmUmVhZGVyIHtcbiAgcHJpdmF0ZSB2aWV3OiBEYXRhVmlldztcbiAgcHJpdmF0ZSBieXRlczogVWludDhBcnJheTtcbiAgcHVibGljIG9mZnNldDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBSZWNvcmQ8c3RyaW5nIHwgbnVtYmVyLCBudW1iZXI+IHwgQXJyYXlMaWtlPG51bWJlcj4gfCBVaW50OEFycmF5KSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICB0aGlzLmJ5dGVzID0gZGF0YTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgXCJsZW5ndGhcIiBpbiBkYXRhKSB7XG4gICAgICB0aGlzLmJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoQXJyYXkuZnJvbShkYXRhIGFzIEFycmF5TGlrZTxudW1iZXI+KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnl0ZXMgPSBuZXcgVWludDhBcnJheShPYmplY3QudmFsdWVzKGRhdGEpKTtcbiAgICB9XG4gICAgdGhpcy52aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuYnl0ZXMuYnVmZmVyLCB0aGlzLmJ5dGVzLmJ5dGVPZmZzZXQsIHRoaXMuYnl0ZXMuYnl0ZUxlbmd0aCk7XG4gIH1cblxuICBnZXQgaXNFeGhhdXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMuYnl0ZXMubGVuZ3RoO1xuICB9XG5cbiAgcmVhZFZhcmludCgpOiBiaWdpbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5pc0V4aGF1c3RlZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHJlc3VsdCA9IDBuO1xuICAgIGxldCBzaGlmdCA9IDBuO1xuICAgIHdoaWxlICghdGhpcy5pc0V4aGF1c3RlZCkge1xuICAgICAgY29uc3QgYnl0ZSA9IEJpZ0ludCh0aGlzLmJ5dGVzW3RoaXMub2Zmc2V0KytdKTtcbiAgICAgIHJlc3VsdCB8PSAoYnl0ZSAmIDB4N2ZuKSA8PCBzaGlmdDtcbiAgICAgIGlmICghKGJ5dGUgJiAweDgwbikpIHJldHVybiByZXN1bHQ7XG4gICAgICBzaGlmdCArPSA3bjtcbiAgICAgIGlmIChzaGlmdCA+IDcwbikge1xuICAgICAgICB3YXJuKFwiVmFyaW50IHRvbyBsb25nXCIsIHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIHNoaWZ0OiBzaGlmdC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVhZFppZ1phZ1ZhcmludCgpOiBiaWdpbnQge1xuICAgIGNvbnN0IG4gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICBpZiAobiA9PT0gbnVsbCkge1xuICAgICAgd2FybihcIkludmFsaWQgemlnemFnIHZhcmludFwiLCB7IG9mZnNldDogdGhpcy5vZmZzZXQgfSk7XG4gICAgICByZXR1cm4gMG47XG4gICAgfVxuICAgIHJldHVybiAobiA+PiAxbikgXiAtKG4gJiAxbik7XG4gIH1cblxuICByZWFkQnl0ZXMobGVuZ3RoOiBudW1iZXIpOiBVaW50OEFycmF5IHtcbiAgICBjb25zdCBhY3R1YWxMZW5ndGggPSBNYXRoLm1pbihsZW5ndGgsIHRoaXMuYnl0ZXMubGVuZ3RoIC0gdGhpcy5vZmZzZXQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYnl0ZXMuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgYWN0dWFsTGVuZ3RoKTtcbiAgICB0aGlzLm9mZnNldCArPSBhY3R1YWxMZW5ndGg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNraXAod2lyZVR5cGU6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAod2lyZVR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgaWYgKGxlbiAhPT0gbnVsbCkgdGhpcy5vZmZzZXQgKz0gTnVtYmVyKGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOlxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgICAgIGlmICh0YWcgPT09IG51bGwgfHwgKE51bWJlcih0YWcpICYgNykgPT09IDQpIGJyZWFrO1xuICAgICAgICAgIHRoaXMuc2tpcChOdW1iZXIodGFnKSAmIDcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHdhcm4oXCJVbmtub3duIHdpcmUgdHlwZVwiLCB7XG4gICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVjb2RlKHNjaGVtYU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3Qgc2NoZW1hID0gbWV0YWRhdGFTY2hlbWFbc2NoZW1hTmFtZV07XG4gICAgaWYgKCFzY2hlbWEpIHtcbiAgICAgIHdhcm4oXCJTY2hlbWEgbm90IGZvdW5kXCIsIHsgc2NoZW1hTmFtZSB9KTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICAgIHdoaWxlICghdGhpcy5pc0V4aGF1c3RlZCkge1xuICAgICAgY29uc3QgdGFnID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICBpZiAodGFnID09PSBudWxsIHx8IHRhZyA9PT0gMG4pIGJyZWFrO1xuXG4gICAgICBjb25zdCBmaWVsZE51bWJlciA9IE51bWJlcih0YWcgPj4gM24pO1xuICAgICAgY29uc3Qgd2lyZVR5cGUgPSBOdW1iZXIodGFnICYgN24pO1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEuZmllbGRzW2ZpZWxkTnVtYmVyXTtcblxuICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICBpZiAod2lyZVR5cGUgPT09IDIpIHtcbiAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgIGNvbnN0IHJhdyA9IHRoaXMucmVhZEJ5dGVzKGxlbik7XG5cbiAgICAgICAgICB3YXJuKFwiVW5rbm93biBmaWVsZFwiLCAoKSA9PiAoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgICB3aXJlVHlwZSxcbiAgICAgICAgICAgIGxlbmd0aDogbGVuLFxuICAgICAgICAgICAgaGV4OiBBcnJheS5mcm9tKHJhdylcbiAgICAgICAgICAgICAgLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKVxuICAgICAgICAgICAgICAuam9pbihcIiBcIiksXG4gICAgICAgICAgICBhc2NpaTogbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHJhdykucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgXCIuXCIpLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuKFwiVW5rbm93biBmaWVsZFwiLCB7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYU5hbWUsXG4gICAgICAgICAgICBmaWVsZE51bWJlcixcbiAgICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5za2lwKHdpcmVUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWU6IGFueTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHRoaXMucmVhZEJ5dGVzKGxlbikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJieXRlc1wiOiB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgICAgdmFsdWUgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICB0aGlzLnJlYWRCeXRlcyhsZW4pLFxuICAgICAgICAgICAgICAoYikgPT4gKGIgPCAxNiA/IFwiMFwiIDogXCJcIikgKyBiLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiYm9vbFwiOlxuICAgICAgICAgICAgdmFsdWUgPSAodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pICE9PSAwbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbnQzMlwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50MzJcIjpcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbnQ2NFwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50NjRcIjoge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMucmVhZFZhcmludCgpID8/IDBuO1xuICAgICAgICAgICAgdmFsdWUgPSB2IDw9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgPyBOdW1iZXIodikgOiB2LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcInNpbnQzMlwiOlxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodGhpcy5yZWFkWmlnWmFnVmFyaW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNpbnQ2NFwiOiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5yZWFkWmlnWmFnVmFyaW50KCk7XG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgIHYgPD0gQmlnSW50KE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSAmJiB2ID49IEJpZ0ludChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUilcbiAgICAgICAgICAgICAgICA/IE51bWJlcih2KVxuICAgICAgICAgICAgICAgIDogdi50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJmaXhlZDMyXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRVaW50MzIodGhpcy5vZmZzZXQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJmaXhlZDY0XCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRCaWdVaW50NjQodGhpcy5vZmZzZXQsIHRydWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImZsb2F0XCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRGbG9hdDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZG91YmxlXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRGbG9hdDY0KHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZW51bVwiOiB7XG4gICAgICAgICAgICBjb25zdCBlbnVtVmFsID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gKGZpZWxkLmVudW1UeXBlICYmIHNjaGVtYS5lbnVtcz8uW2ZpZWxkLmVudW1UeXBlXT8uW2VudW1WYWxdKSA/PyBlbnVtVmFsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm90b2J1ZlJlYWRlcih0aGlzLnJlYWRCeXRlcyhsZW4pKS5kZWNvZGUoZmllbGQudHlwZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3YXJuKFwiRGVjb2RlIGVycm9yXCIsIHtcbiAgICAgICAgICBzY2hlbWE6IHNjaGVtYU5hbWUsXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoZmllbGQucmVwZWF0ZWQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHRbZmllbGQubmFtZV0pIHJlc3VsdFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICByZXN1bHRbZmllbGQubmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbZmllbGQubmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQcm90b2J1ZihkYXRhOiBhbnksIHNjaGVtYU5hbWU6IHN0cmluZyk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm90b2J1ZlJlYWRlcihkYXRhKS5kZWNvZGUoc2NoZW1hTmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwgImNvbnN0IEdMT0JBTF9LRVkgPSBcIl9fY2FjaGVkX3dlYnBhY2tfbW9kdWxlc1wiO1xuXG5pZiAoIShnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV0pIHtcbiAgKGdsb2JhbFRoaXMgYXMgYW55KVtHTE9CQUxfS0VZXSA9IHtcbiAgICByZXF1aXJlOiBudWxsLFxuICAgIG1vZHVsZXM6IG51bGwsXG4gICAgbGFzdE1vZHVsZUNvdW50OiAwLFxuICAgIHNlcnZpY2VDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgICBzZWFyY2hDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgICBjb21wb25lbnRDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgfTtcbn1cblxuY29uc3Qgc2hhcmVkID0gKGdsb2JhbFRoaXMgYXMgYW55KVtHTE9CQUxfS0VZXTtcblxuZXhwb3J0IGNvbnN0IFNwb3RpZnlXZWJwYWNrID0ge1xuICBnZXRNb2R1bGVzKCkge1xuICAgIGlmICghc2hhcmVkLnJlcXVpcmUpIHtcbiAgICAgIGNvbnN0IHdlYnBhY2sgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYnBhY2tDaHVua2NsaWVudF93ZWI7XG4gICAgICBpZiAoIXdlYnBhY2spIHJldHVybiBzaGFyZWQubW9kdWxlcyA/PyBbXTtcbiAgICAgIHNoYXJlZC5yZXF1aXJlID0gd2VicGFjay5wdXNoKFtbU3ltYm9sKCldLCB7fSwgKHJlOiBhbnkpID0+IHJlXSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkgcmV0dXJuIHNoYXJlZC5tb2R1bGVzID8/IFtdO1xuXG4gICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzaGFyZWQucmVxdWlyZS5tKTtcblxuICAgIGlmIChzaGFyZWQubW9kdWxlcyAmJiBzaGFyZWQubGFzdE1vZHVsZUNvdW50ID09PSBjdXJyZW50S2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzaGFyZWQubW9kdWxlcztcbiAgICB9XG5cbiAgICBzaGFyZWQubW9kdWxlcyA9IGN1cnJlbnRLZXlzLm1hcCgoaWQpID0+ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHNoYXJlZC5yZXF1aXJlKGlkKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1vZHVsZSk7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbW9kdWxlXTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaGFyZWQubGFzdE1vZHVsZUNvdW50ID0gY3VycmVudEtleXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHNoYXJlZC5tb2R1bGVzO1xuICB9LFxuXG4gIGdldE1vZHVsZUJ5SWQoaWQ6IHN0cmluZykge1xuICAgIGlmICghc2hhcmVkLm1vZHVsZXMpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGlkKTtcbiAgICBpZiAoIWlzTmFOKGluZGV4KSAmJiBzaGFyZWQubW9kdWxlc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBzaGFyZWQubW9kdWxlc1tpbmRleF0oKTtcbiAgICB9XG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSkge1xuICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgbW9kdWxlID0gc2hhcmVkLnJlcXVpcmU/LihpZCk7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb2R1bGUpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbbW9kdWxlXTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICBmaW5kTW9kdWxlQnlDb250ZW50KGtleXdvcmRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0ga2V5d29yZHMuam9pbihcIixcIik7XG4gICAgaWYgKHNoYXJlZC5zZWFyY2hDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLnNlYXJjaENhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlPy5tKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBzaGFyZWQucmVxdWlyZS5tO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiBtb2R1bGVzKSB7XG4gICAgICBjb25zdCBtb2R1bGVGYWN0b3J5ID0gbW9kdWxlc1tpZF07XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZUZhY3RvcnkgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZHVsZUZhY3RvcnkpO1xuXG4gICAgICBpZiAoa2V5d29yZHMuZXZlcnkoKGspID0+IHN0ci5pbmNsdWRlcyhrKSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtb2QgPSBzaGFyZWQucmVxdWlyZShpZCk7XG4gICAgICAgICAgc2hhcmVkLnNlYXJjaENhY2hlLnNldChjYWNoZUtleSwgbW9kKTtcbiAgICAgICAgICByZXR1cm4gbW9kO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byByZXF1aXJlIG1vZHVsZSAke2lkfTpgLCBlcnIpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmVkLnNlYXJjaENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZmluZENvbXBvbmVudEJ5S2V5d29yZHMoa2V5d29yZHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBrZXl3b3Jkcy5qb2luKFwiLFwiKTtcbiAgICBpZiAoc2hhcmVkLmNvbXBvbmVudENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgIHJldHVybiBzaGFyZWQuY29tcG9uZW50Q2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlIHx8ICFzaGFyZWQucmVxdWlyZS5tKSB7XG4gICAgICB0cnkge1xuICAgICAgICBTcG90aWZ5V2VicGFjay5nZXRNb2R1bGVzKCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmU/Lm0pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbW9kdWxlcyA9IHNoYXJlZC5yZXF1aXJlLm07XG4gICAgbGV0IGZvdW5kTW9kdWxlSWQgPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiBtb2R1bGVzKSB7XG4gICAgICBjb25zdCBtb2R1bGVGYWN0b3J5ID0gbW9kdWxlc1tpZF07XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZUZhY3RvcnkgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZHVsZUZhY3RvcnkpO1xuICAgICAgICBpZiAoa2V5d29yZHMuZXZlcnkoKGspID0+IHN0ci5pbmNsdWRlcyhrKSkpIHtcbiAgICAgICAgICBmb3VuZE1vZHVsZUlkID0gaWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF9lKSB7fVxuICAgIH1cblxuICAgIGlmICghZm91bmRNb2R1bGVJZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgZXhwb3J0czogYW55O1xuICAgIHRyeSB7XG4gICAgICBleHBvcnRzID0gc2hhcmVkLnJlcXVpcmUoZm91bmRNb2R1bGVJZCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzaGFyZWQuY29tcG9uZW50Q2FjaGUuc2V0KGNhY2hlS2V5LCBudWxsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGlrZWx5Q29tcG9uZW50ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh2YWx1ZS4kJHR5cGVvZiAmJiBTeW1ib2wua2V5Rm9yKHZhbHVlLiQkdHlwZW9mKT8uaW5jbHVkZXMoXCJyZWFjdFwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoaXNMaWtlbHlDb21wb25lbnQoZXhwb3J0cykpIHtcbiAgICAgIHJlc3VsdCA9IGV4cG9ydHM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXhwb3J0cykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV4cG9ydHNba2V5XTtcbiAgICAgICAgaWYgKGlzTGlrZWx5Q29tcG9uZW50KHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2R1bGVzID0gU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuXG4gICAgZm9yIChjb25zdCBtb2R1bGVHZXR0ZXIgb2YgbW9kdWxlcykge1xuICAgICAgaWYgKCFtb2R1bGVHZXR0ZXIgfHwgdHlwZW9mIG1vZHVsZUdldHRlciAhPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZUdldHRlcigpO1xuICAgICAgaWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkobW9kdWxlKSA/IG1vZHVsZSA6IFttb2R1bGVdO1xuICAgICAgZm9yIChjb25zdCBtIG9mIGV4cG9ydHMpIHtcbiAgICAgICAgaWYgKG0gJiYgdHlwZW9mIG0gPT09IFwiZnVuY3Rpb25cIiAmJiBtLlNFUlZJQ0VfSUQgPT09IHNlcnZpY2VOYW1lKSByZXR1cm4gbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBnZXRDbGllbnQ8VCA9IGFueT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQge1xuICAgIGlmIChzaGFyZWQuc2VydmljZUNhY2hlLmhhcyhzZXJ2aWNlTmFtZSkpIHtcbiAgICAgIHJldHVybiBzaGFyZWQuc2VydmljZUNhY2hlLmdldChzZXJ2aWNlTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IFNlcnZpY2VDbGFzcyA9IFNwb3RpZnlXZWJwYWNrLmZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lKTtcbiAgICBpZiAoIVNlcnZpY2VDbGFzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcG90aWZ5IFNlcnZpY2Ugbm90IGZvdW5kOiAke3NlcnZpY2VOYW1lfWApO1xuICAgIH1cblxuICAgIGxldCBjbGllbnQ6IGFueTtcbiAgICBpZiAodHlwZW9mIFNlcnZpY2VDbGFzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCB0cmFuc3BvcnQgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlNwaWNldGlmeT8uUGxhdGZvcm0/LlJlZ2lzdHJ5Py5yZXNvbHZlKFN5bWJvbC5mb3IoXCJFc3BlcmFudG9UcmFuc3BvcnRcIikpO1xuICAgICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgICBjbGllbnQgPSBuZXcgU2VydmljZUNsYXNzKHRyYW5zcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3BlcmFudG9UcmFuc3BvcnQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50ID0gU2VydmljZUNsYXNzO1xuICAgIH1cblxuICAgIHNoYXJlZC5zZXJ2aWNlQ2FjaGUuc2V0KHNlcnZpY2VOYW1lLCBjbGllbnQpO1xuICAgIHJldHVybiBjbGllbnQ7XG4gIH0sXG59O1xuXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLlNwb3RpZnlXZWJwYWNrID0gU3BvdGlmeVdlYnBhY2s7IiwgImltcG9ydCB7IGRlY29kZVByb3RvYnVmIH0gZnJvbSBcIi4uL3dlYnBhY2svcHJvdG9idWYudHNcIjtcbmltcG9ydCB7IFNwb3RpZnlXZWJwYWNrIH0gZnJvbSBcIi4uL3dlYnBhY2svd2VicGFjay50c1wiO1xuXG5jb25zdCBNZXRhZGF0YVNlcnZpY2UgPSBcInNwb3RpZnkubWRhdGFfZXNwZXJhbnRvLnByb3RvLk1ldGFkYXRhU2VydmljZVwiO1xuY29uc3QgVFJBQ0tfVjQgPSAxMDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWV0YWRhdGFGb3JUcmFja3ModHJhY2tVUklzOiBzdHJpbmdbXSk6IFByb21pc2U8TWFwPHN0cmluZywgYW55Pj4ge1xuICBjb25zdCBNZXRhZGF0YUNsaWVudCA9IFNwb3RpZnlXZWJwYWNrLmdldENsaWVudChNZXRhZGF0YVNlcnZpY2UpO1xuICBjb25zdCB1bmlxdWVVUklzID0gWy4uLm5ldyBTZXQodHJhY2tVUklzKV07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNZXRhZGF0YUNsaWVudC5mZXRjaCh7XG4gICAgZXh0ZW5zaW9uUXVlcnk6IFt7IGV4dGVuc2lvbktpbmQ6IFRSQUNLX1Y0LCBlbnRpdHlVcmk6IHVuaXF1ZVVSSXMgfV0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cbiAgaWYgKHJlc3BvbnNlPy5leHRlbnNpb24/LlswXT8uZW50aXR5RXh0ZW5zaW9uKSB7XG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgcmVzcG9uc2UuZXh0ZW5zaW9uWzBdLmVudGl0eUV4dGVuc2lvbikge1xuICAgICAgY29uc3QgYnl0ZU9iamVjdCA9IGVudGl0eS5leHRlbnNpb25EYXRhPy52YWx1ZTtcbiAgICAgIGlmIChieXRlT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVQcm90b2J1ZihieXRlT2JqZWN0LCBcInNwb3RpZnkubWV0YWRhdGEuVHJhY2tcIik7XG4gICAgICAgIHJlc3VsdE1hcC5zZXQoZW50aXR5LmVudGl0eVVyaSwgZGVjb2RlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRNYXAuc2V0KGVudGl0eS5lbnRpdHlVcmksIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRNYXA7XG59IiwgIi8qKlxuICogRXZlcnkgdXNlci1mYWNpbmcgRW5nbGlzaCBzdHJpbmcgb2YgdGhlIGV4dGVuc2lvbiwgY2VudHJhbGl6ZWQgdG8ga2VlcCBhXG4gKiBmdXR1cmUgaTE4biBwYXNzIHRyaXZpYWwuIENvbXBvbmVudHMgbmV2ZXIgaGFyZC1jb2RlIGRpc3BsYXkgdGV4dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIG1lbnU6IHtcbiAgICBpdGVtTGFiZWw6IFwiRmluZCBEdXBsaWNhdGVzXCIsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgdGl0bGU6IFwiUGxheWxpc3QgRHVwbGljYXRlIEZpbmRlclwiLFxuICAgIGNsb3NlOiBcIkNsb3NlXCIsXG4gICAgZ2l0aHViOiBcIk9wZW4gR2l0SHViIHJlcG9zaXRvcnlcIixcbiAgfSxcbiAgYmFkZ2VzOiB7XG4gICAgZWRpdGFibGU6IFwiRWRpdGFibGVcIixcbiAgICBlZGl0YWJsZUhpbnQ6XG4gICAgICBcIllvdSBoYXZlIGVkaXQgcGVybWlzc2lvbiBvbiB0aGlzIHBsYXlsaXN0IChvd25lciBvciBjb2xsYWJvcmF0b3IpLCBzbyB5b3UgY2FuIHJlbW92ZSB0cmFja3MgZnJvbSBpdC5cIixcbiAgICByZWFkT25seTogXCJSZWFkLW9ubHlcIixcbiAgICByZWFkT25seUhpbnQ6XG4gICAgICBcIllvdSBkb24ndCBoYXZlIGVkaXQgcGVybWlzc2lvbiBvbiB0aGlzIHBsYXlsaXN0IChuZWl0aGVyIG93bmVyIG5vciBjb2xsYWJvcmF0b3IpLCBzbyByZW1vdmFsIGlzIGRpc2FibGVkLlwiLFxuICB9LFxuICBzdGF0ZXM6IHtcbiAgICBsb2FkaW5nVHJhY2tzOiBcIkxvYWRpbmcgcGxheWxpc3RcdTIwMjZcIixcbiAgICBsb2FkZWRDb3VudDogKG46IG51bWJlcikgPT4gYExvYWRpbmcgcGxheWxpc3RcdTIwMjYgJHtufSB0cmFja3NgLFxuICAgIGxvYWRpbmdEZXRhaWxzOiBcIkZldGNoaW5nIHRyYWNrIGRldGFpbHMgKElTUkMpXCIsXG4gICAgc2Nhbm5pbmc6IFwiU2Nhbm5pbmcgZm9yIGR1cGxpY2F0ZXNcdTIwMjZcIixcbiAgICBlbXB0eVBsYXlsaXN0OiBcIlRoaXMgcGxheWxpc3QgaXMgZW1wdHksIHRoZXJlIGlzIG5vdGhpbmcgdG8gc2Nhbi5cIixcbiAgICBub0R1cGxpY2F0ZXM6IFwiTm8gZHVwbGljYXRlcyBmb3VuZCBpbiB0aGlzIHBsYXlsaXN0LlwiLFxuICAgIG5vRHVwbGljYXRlc0hpbnQ6IFwiVHJ5IHRoZSBsb3dlci1jb25maWRlbmNlIGxldmVscyBcdTIwMTQgb3IgdGhlIHBsYXlsaXN0IG1heSBzaW1wbHkgYmUgY2xlYW4uXCIsXG4gICAgbmV0d29ya0Vycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGxvYWRpbmcgdGhlIHBsYXlsaXN0LlwiLFxuICAgIHJldHJ5OiBcIlJldHJ5XCIsXG4gICAgcmVhZE9ubHlOb3RpY2U6XG4gICAgICBcIlRoaXMgcGxheWxpc3QgaXMgcmVhZC1vbmx5OiB5b3UgZG9uJ3QgaGF2ZSBlZGl0IHBlcm1pc3Npb24gb24gaXQgKHlvdSBhcmUgbmVpdGhlciBpdHMgb3duZXIgbm9yIGEgY29sbGFib3JhdG9yKSwgc28gcmVtb3ZpbmcgdHJhY2tzIGlzIGRpc2FibGVkLiBZb3UgY2FuIHN0aWxsIHJldmlldyBldmVyeSBncm91cC5cIixcbiAgICBub1VpZE5vdGljZTpcbiAgICAgIFwiU3BvdGlmeSBkaWQgbm90IHJldHVybiBhbiBvY2N1cnJlbmNlIGlkIGZvciB0aGlzIHJvdywgc28gaXQgY2Fubm90IGJlIHJlbW92ZWQgcHJlY2lzZWx5LiBJdCBzdGF5cyB2aXNpYmxlIGZvciByZXZpZXcgYnV0IGNhbm5vdCBiZSBzZWxlY3RlZC5cIixcbiAgfSxcbiAgbGV2ZWxzOiB7XG4gICAgZXhhY3Q6IHtcbiAgICAgIGxhYmVsOiBcIklkZW50aWNhbCBUcmFja3NcIixcbiAgICAgIGhpbnQ6IFwiVGhlIGV4YWN0IHNhbWUgU3BvdGlmeSB0cmFjayBhZGRlZCBzZXZlcmFsIHRpbWVzIHRvIHRoZSBwbGF5bGlzdC5cIixcbiAgICB9LFxuICAgIGlzcmM6IHtcbiAgICAgIGxhYmVsOiBcIlNhbWUgUmVjb3JkaW5nXCIsXG4gICAgICBoaW50OiBcIkRpZmZlcmVudCBTcG90aWZ5IGVudHJpZXMgc2hhcmluZyB0aGUgc2FtZSBJU1JDIFx1MjAxNCBpZGVudGljYWwgYXVkaW8sIGRpZmZlcmVudCByZWxlYXNlcy5cIixcbiAgICB9LFxuICAgIHByb2JhYmxlOiB7XG4gICAgICBsYWJlbDogXCJTYW1lIFRpdGxlICYgQXJ0aXN0XCIsXG4gICAgICBoaW50OiBcIlNhbWUgdGl0bGUgYW5kIGF0IGxlYXN0IG9uZSBzaGFyZWQgYXJ0aXN0LiBBbG1vc3QgYWx3YXlzIHJlYWwgZHVwbGljYXRlcy5cIixcbiAgICB9LFxuICAgIGxpa2VseToge1xuICAgICAgbGFiZWw6IFwiVGl0bGUgJiBMZW5ndGggTWF0Y2hcIixcbiAgICAgIGhpbnQ6IFwiU2FtZSB0aXRsZSBhbmQgZHVyYXRpb25zIHdpdGhpbiA1IHNlY29uZHMuXCIsXG4gICAgfSxcbiAgICBwb3NzaWJsZToge1xuICAgICAgbGFiZWw6IFwiU2ltaWxhciBTb25nc1wiLFxuICAgICAgaGludDogXCJTaW1pbGFyIHRpdGxlcyBhbmQgc2ltaWxhciBkdXJhdGlvbnMgXHUyMDE0IG1heSBpbmNsdWRlIHJlbWl4ZXMgYW5kIGNvdmVycy5cIixcbiAgICB9LFxuICAgIG1heWJlOiB7XG4gICAgICBsYWJlbDogXCJQb3NzaWJsZSBNYXRjaGVzXCIsXG4gICAgICBoaW50OiBcIkxvdy1jb25maWRlbmNlIHRpdGxlIHNpbWlsYXJpdHkgb25seS4gUmV2aWV3IHZlcnkgY2FyZWZ1bGx5LlwiLFxuICAgIH0sXG4gIH0sXG4gIGxldmVsTWV0YToge1xuICAgIGdyb3Vwc0NvdW50OiAobjogbnVtYmVyKSA9PiBgJHtufSBncm91cCR7biA9PT0gMSA/IFwiXCIgOiBcInNcIn1gLFxuICAgIGVtcHR5TGV2ZWw6IFwiTm8gbWF0Y2hlcyBmb3IgdGhpcyBsZXZlbC5cIixcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICBzZWxlY3RBbGw6IFwiU2VsZWN0IGFsbFwiLFxuICAgIHNlbGVjdEFsbEhpbnQ6XG4gICAgICBcIkNoZWNrcyBldmVyeSBkdXBsaWNhdGUgb2YgdGhpcyBsZXZlbCwgZXhjZXB0IG9uZSBlbnRyeSBwZXIgZ3JvdXAgXHUyMDE0IHlvdSBuZXZlciB3aXBlIG91dCBhIHNvbmcgZW50aXJlbHkuXCIsXG4gICAgZGVzZWxlY3RBbGw6IFwiRGVzZWxlY3QgYWxsXCIsXG4gIH0sXG4gIHJvdzoge1xuICAgIG5vQWRkZWREYXRlOiBcIlwiLFxuICAgIHVua25vd25BbGJ1bTogXCJVbmtub3duIGFsYnVtXCIsXG4gICAgbm9BcnRpc3RzOiBcIlwiLFxuICAgIHBsYXk6IFwiUGxheSB0aGlzIHRyYWNrIHRvIGNvbXBhcmUgaXRcIixcbiAgICBwYXVzZTogXCJQYXVzZVwiLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICBzZWxlY3Rpb246IChuOiBudW1iZXIpID0+IGAke259IHRyYWNrJHtuID09PSAxID8gXCJcIiA6IFwic1wifSBzZWxlY3RlZGAsXG4gICAgd2FybmluZzogXCJSZW1vdmFsIGlzIHBlcm1hbmVudCBhbmQgY2Fubm90IGJlIHVuZG9uZS5cIixcbiAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXG4gICAgcmVtb3ZlOiAobjogbnVtYmVyKSA9PiBgUmVtb3ZlICR7bn0gdHJhY2ske24gPT09IDEgPyBcIlwiIDogXCJzXCJ9YCxcbiAgICBjb25maXJtVGl0bGU6IFwiQ29uZmlybSByZW1vdmFsXCIsXG4gICAgY29uZmlybUJvZHk6IChuOiBudW1iZXIsIHBsYXlsaXN0OiBzdHJpbmcpID0+XG4gICAgICBgUmVtb3ZlICR7bn0gdHJhY2ske24gPT09IDEgPyBcIlwiIDogXCJzXCJ9IGZyb20gXCIke3BsYXlsaXN0fVwiPyBUaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGUuYCxcbiAgICBjb25maXJtUmVtb3ZlOiAobjogbnVtYmVyKSA9PiBgWWVzLCByZW1vdmUgJHtufWAsXG4gICAga2VlcEVkaXRpbmc6IFwiS2VlcCBlZGl0aW5nXCIsXG4gICAgcmVtb3Zpbmc6IChkb25lOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IGBSZW1vdmluZyAke2RvbmV9LyR7dG90YWx9XHUyMDI2YCxcbiAgfSxcbiAgc3VtbWFyeToge1xuICAgIGFsbFJlbW92ZWQ6IChuOiBudW1iZXIpID0+IGAke259IHRyYWNrJHtuID09PSAxID8gXCJcIiA6IFwic1wifSByZW1vdmVkIGZyb20gdGhlIHBsYXlsaXN0LmAsXG4gICAgcGFydGlhbEZhaWx1cmU6IChyZW1vdmVkOiBudW1iZXIsIGZhaWxlZDogbnVtYmVyKSA9PlxuICAgICAgYCR7cmVtb3ZlZH0gcmVtb3ZlZCwgJHtmYWlsZWR9IGZhaWxlZC4gUmV0cnkgdGhlIHJlbWFpbmluZyBvbmVzIGJlbG93LmAsXG4gICAgYWxsRmFpbGVkOiAoZmFpbGVkOiBudW1iZXIpID0+IGBSZW1vdmFsIGZhaWxlZCwgbm8gdHJhY2sgd2FzIHJlbW92ZWQgKCR7ZmFpbGVkfSBhdHRlbXB0ZWQpLmAsXG4gIH0sXG59IGFzIGNvbnN0O1xuIiwgIi8qKlxuICogVGhpbiBhZGFwdGVyIGFyb3VuZCB0aGUgU3BpY2V0aWZ5IEFQSXMuXG4gKlxuICogRXZlcnl0aGluZyB0aGF0IHRvdWNoZXMgYFNwaWNldGlmeS4qYCBsaXZlcyBoZXJlIHNvIHRoZSBkZXRlY3Rpb24gbG9naWNcbiAqIHN0YXlzIGluZGVwZW5kZW50IG9mIFNwb3RpZnkgaW50ZXJuYWxzICh3aGljaCBjaGFuZ2UgYmV0d2VlbiBjbGllbnRcbiAqIHZlcnNpb25zKS5cbiAqL1xuaW1wb3J0IHsgZmV0Y2hNZXRhZGF0YUZvclRyYWNrcyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL2ZldGNoTWV0YWRhdGFGb3JUcmFja3MudHNcIjtcbmltcG9ydCB0eXBlIHsgUGxheWxpc3RFbnRyeSB9IGZyb20gXCIuL2RldGVjdGlvbi90eXBlcy50c1wiO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuL3N0cmluZ3MudHNcIjtcblxuY29uc3QgQ09OVEVOVFNfUEFHRV9TSVpFID0gMjAwO1xuY29uc3QgRURJVEFCSUxJVFlfUEFHRV9TSVpFID0gMTBfMDAwO1xuY29uc3QgSVNSQ19CQVRDSF9TSVpFID0gMTAwO1xuZXhwb3J0IGNvbnN0IFJFTU9WQUxfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IElTUkNfUkVUUllfQVRURU1QVFMgPSAzO1xuY29uc3QgUkVUUllfQkFTRV9ERUxBWV9NUyA9IDUwMDtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5bGlzdElkZW50aXR5IHtcbiAgdXJpOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5bGlzdEVkaXRhYmlsaXR5IHtcbiAgY2FuRWRpdDogYm9vbGVhbjtcbiAga25vd246IGJvb2xlYW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAqL1xuXG4vKiogV2FpdHMgYG1zYCBiZWZvcmUgcmVzb2x2aW5nIFx1MjAxNCB1c2VkIGJldHdlZW4gSVNSQyByZXRyeSBhdHRlbXB0cy5cbiAqICBSZWplY3RzIGFzIHNvb24gYXMgYHNpZ25hbGAgYWJvcnRzIHNvIGEgY2FuY2VsbGVkIHNjYW4gc3RvcHMgcHJvbXB0bHkuICovXG5jb25zdCBkZWxheSA9IChtczogbnVtYmVyLCBzaWduYWw/OiBBYm9ydFNpZ25hbCk6IFByb21pc2U8dm9pZD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgIHJlamVjdChzaWduYWwucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb25BYm9ydCA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICByZWplY3Qoc2lnbmFsPy5yZWFzb24gPz8gbmV3IERPTUV4Y2VwdGlvbihcIkFib3J0ZWRcIiwgXCJBYm9ydEVycm9yXCIpKTtcbiAgICB9O1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaWduYWw/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCBtcyk7XG4gICAgc2lnbmFsPy5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcblxuLyoqIE1pbmltYWwgc2hhcGUgb2YgdGhlIGludGVybmFsIHBsYXlsaXN0IEFQSSBzdXJmYWNlIHVzZWQgYnkgdGhpcyBhZGFwdGVyLiAqL1xuaW50ZXJmYWNlIFBsYXlsaXN0QXBpTGlrZSB7XG4gIGdldENvbnRlbnRzPzogKFxuICAgIHVyaTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHsgb2Zmc2V0PzogbnVtYmVyOyBsaW1pdD86IG51bWJlciB9LFxuICApID0+IFByb21pc2U8eyBpdGVtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10gfT47XG4gIGdldE1ldGFkYXRhPzogKHVyaTogc3RyaW5nLCBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IFByb21pc2U8eyBuYW1lPzogc3RyaW5nIH0+O1xuICByZW1vdmU/OiAodXJpOiBzdHJpbmcsIGl0ZW1zOiB7IHVyaTogc3RyaW5nOyB1aWQ6IHN0cmluZyB9W10pID0+IFByb21pc2U8dW5rbm93bj47XG59XG5cbi8qKiBUaGUgaW50ZXJuYWwgcGxheWxpc3QgQVBJLCBvciBgdW5kZWZpbmVkYCBvbiBjbGllbnRzIHRoYXQgaGlkZSBpdC4gKi9cbmZ1bmN0aW9uIHBsYXlsaXN0QXBpKCk6IFBsYXlsaXN0QXBpTGlrZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTcGljZXRpZnk/LlBsYXRmb3JtPy5QbGF5bGlzdEFQSSBhcyBQbGF5bGlzdEFwaUxpa2UgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBUb2FzdCB0aHJvdWdoIFNwaWNldGlmeTsgc2lsZW50IG5vLW9wIHdoZW4gdGhlIGhvc3QgaXMgdW5hdmFpbGFibGUuICovXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgaXNFcnJvciA9IGZhbHNlKTogdm9pZCB7XG4gIFNwaWNldGlmeT8uc2hvd05vdGlmaWNhdGlvbj8uKG1lc3NhZ2UsIGlzRXJyb3IpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYXlsaXN0IGVkaXRhYmlsaXR5ICovXG5cbi8qKlxuICogQW4gZW50cnkgb2YgdGhlIHVzZXIncyBsaWJyYXJ5IGxpc3RpbmcuIGBjYW5BZGRUb2AgaXMgdGhlIGVkaXQtcmlnaHRzIHByb3h5XG4gKiB1c2VkIGFjcm9zcyB0aGlzIHJlcG8ncyBleHRlbnNpb25zIChvd25lciBvciBjb2xsYWJvcmF0b3Igb24gdGhlIHBsYXlsaXN0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGlicmFyeUl0ZW0oaXRlbTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBQbGF5bGlzdElkZW50aXR5IHwgbnVsbCB7XG4gIGlmIChpdGVtLnR5cGUgIT09IFwicGxheWxpc3RcIikgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHVyaSA9IHR5cGVvZiBpdGVtLnVyaSA9PT0gXCJzdHJpbmdcIiA/IGl0ZW0udXJpIDogbnVsbDtcbiAgaWYgKCF1cmkpIHJldHVybiBudWxsO1xuICByZXR1cm4geyB1cmksIG5hbWU6IHR5cGVvZiBpdGVtLm5hbWUgPT09IFwic3RyaW5nXCIgPyBpdGVtLm5hbWUgOiBcIlwiIH07XG59XG5cbi8qKlxuICogTG9vayB1cCB0aGUgcGxheWxpc3QgaW4gdGhlIHVzZXIncyBsaWJyYXJ5IGxpc3RpbmcgdG8gcmVzb2x2ZSBpdHNcbiAqIGVkaXRhYmlsaXR5LiBQYWdlcyB1bnRpbCB0aGUgcGxheWxpc3QgaXMgZm91bmQgKGVhcmx5IHN0b3ApLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQbGF5bGlzdEVkaXRhYmlsaXR5KHBsYXlsaXN0VXJpOiBzdHJpbmcpOiBQcm9taXNlPFBsYXlsaXN0RWRpdGFiaWxpdHk+IHtcbiAgLy8gVGhlIGxpYnJhcnkgbGlzdGluZyBlbmRwb2ludCBleGlzdHMgYXQgcnVudGltZSBidXQgaXMgbm90IHBhcnQgb2YgdGhlXG4gIC8vIHJlcG8ncyBhbWJpZW50IGQudHMsIGhlbmNlIHRoZSBuYXJyb3cgbG9jYWwgY2FzdC5cbiAgY29uc3QgTGlicmFyeUFQSSA9IChcbiAgICBTcGljZXRpZnk/LlBsYXRmb3JtIGFzIHVua25vd24gYXMge1xuICAgICAgTGlicmFyeUFQST86IHtcbiAgICAgICAgZ2V0Q29udGVudHM/OiAoXG4gICAgICAgICAgb3B0aW9uczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgICAgICkgPT4gUHJvbWlzZTx7IGl0ZW1zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSB9PjtcbiAgICAgIH07XG4gICAgfVxuICApPy5MaWJyYXJ5QVBJO1xuICBpZiAoIUxpYnJhcnlBUEk/LmdldENvbnRlbnRzKSByZXR1cm4geyBjYW5FZGl0OiBmYWxzZSwga25vd246IGZhbHNlIH07XG5cbiAgbGV0IG9mZnNldCA9IDA7XG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTGlicmFyeUFQSS5nZXRDb250ZW50cyh7XG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgbGltaXQ6IEVESVRBQklMSVRZX1BBR0VfU0laRSxcbiAgICAgICAgZmxhdHRlblRyZWU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGl0ZW1zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdID0gcmVzcG9uc2U/Lml0ZW1zID8/IFtdO1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChpdGVtPy51cmkgIT09IHBsYXlsaXN0VXJpKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIHsgY2FuRWRpdDogaXRlbS5jYW5BZGRUbyA9PT0gdHJ1ZSwga25vd246IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPCBFRElUQUJJTElUWV9QQUdFX1NJWkUpIHJldHVybiB7IGNhbkVkaXQ6IGZhbHNlLCBrbm93bjogZmFsc2UgfTtcbiAgICAgIG9mZnNldCArPSBFRElUQUJJTElUWV9QQUdFX1NJWkU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKFwiW3BsYXlsaXN0RHVwbGljYXRlRmluZGVyXSBlZGl0YWJpbGl0eSBsb29rdXAgZmFpbGVkOlwiLCBlKTtcbiAgICByZXR1cm4geyBjYW5FZGl0OiBmYWxzZSwga25vd246IGZhbHNlIH07XG4gIH1cbn1cblxuLyoqIFJlc29sdmUgYSBwbGF5bGlzdCBkaXNwbGF5IG5hbWUgZnJvbSB0aGUgc2VsZWN0aW9uIHBheWxvYWQsIHdpdGggZmFsbGJhY2suICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVBsYXlsaXN0TmFtZSh1cmk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBwbGF5bGlzdEFwaSgpPy5nZXRNZXRhZGF0YT8uKHVyaSwge30pO1xuICAgIHJldHVybiBtZXRhZGF0YT8ubmFtZSA/PyBcIlwiO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGxheWxpc3QgY29udGVudHMgKi9cblxuLyoqIFJlYWQgdGhlIHRyYWNrIGR1cmF0aW9uIGZyb20gdGhlIHNldmVyYWwgc2hhcGVzIFNwb3RpZnkgdXNlcyAoYG1zYCB1bml0cykuICovXG5mdW5jdGlvbiByZWFkRHVyYXRpb24oaXRlbTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBpdGVtLmR1cmF0aW9uTXMgPT09IFwibnVtYmVyXCIpIHJldHVybiBpdGVtLmR1cmF0aW9uTXM7XG4gIGlmICh0eXBlb2YgaXRlbS5kdXJhdGlvbiA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGl0ZW0uZHVyYXRpb247XG4gIGlmIChpdGVtLmR1cmF0aW9uICYmIHR5cGVvZiBpdGVtLmR1cmF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgZHVyYXRpb24gPSBpdGVtLmR1cmF0aW9uIGFzIHsgdG90YWxNcz86IHVua25vd247IG1pbGxpc2Vjb25kcz86IHVua25vd24gfTtcbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uLnRvdGFsTXMgPT09IFwibnVtYmVyXCIpIHJldHVybiBkdXJhdGlvbi50b3RhbE1zO1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb24ubWlsbGlzZWNvbmRzID09PSBcIm51bWJlclwiKSByZXR1cm4gZHVyYXRpb24ubWlsbGlzZWNvbmRzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKiogQWxidW0gYXJ0d29yayBVUkwsIHRvbGVyYXRpbmcgYm90aCBgaW1hZ2VzYCBhbmQgYGNvdmVyQXJ0LnNvdXJjZXNgLiAqL1xuZnVuY3Rpb24gcmVhZEltYWdlVXJsKGl0ZW06IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nIHtcbiAgY29uc3QgYWxidW0gPSBpdGVtLmFsYnVtIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuICBjb25zdCBpbWFnZXMgPSBhbGJ1bT8uaW1hZ2VzIGFzIEFycmF5PHsgdXJsPzogdW5rbm93biB9PiB8IHVuZGVmaW5lZDtcbiAgY29uc3QgaW1hZ2UgPSBpbWFnZXM/LlswXT8udXJsO1xuICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiICYmIGltYWdlKSByZXR1cm4gaW1hZ2U7XG4gIGNvbnN0IGNvdmVyQXJ0ID0gYWxidW0/LmNvdmVyQXJ0IGFzIHsgc291cmNlcz86IEFycmF5PHsgdXJsPzogdW5rbm93biB9PiB9IHwgdW5kZWZpbmVkO1xuICBjb25zdCBjb3ZlciA9IGNvdmVyQXJ0Py5zb3VyY2VzPy5bMF0/LnVybDtcbiAgcmV0dXJuIHR5cGVvZiBjb3ZlciA9PT0gXCJzdHJpbmdcIiA/IGNvdmVyIDogXCJcIjtcbn1cblxuLyoqIElTTyBgYWRkZWRBdGAgc3RyaW5nLCB3aGV0aGVyIHRoZSBwYXlsb2FkIHN0b3JlcyBpdCBmbGF0IG9yIHdyYXBwZWQuICovXG5mdW5jdGlvbiByZWFkQWRkZWRBdChpdGVtOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHN0cmluZyB7XG4gIGNvbnN0IGFkZGVkQXQgPSBpdGVtLmFkZGVkQXQgPz8gaXRlbS5hZGRlZF9hdDtcbiAgaWYgKHR5cGVvZiBhZGRlZEF0ID09PSBcInN0cmluZ1wiKSByZXR1cm4gYWRkZWRBdDtcbiAgaWYgKGFkZGVkQXQgJiYgdHlwZW9mIGFkZGVkQXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBpc28gPVxuICAgICAgKGFkZGVkQXQgYXMgeyBpc29TdHJpbmc/OiB1bmtub3duOyBpc29fc3RyPzogdW5rbm93biB9KS5pc29TdHJpbmcgPz9cbiAgICAgIChhZGRlZEF0IGFzIHsgaXNvX3N0cj86IHVua25vd24gfSkuaXNvX3N0cjtcbiAgICByZXR1cm4gdHlwZW9mIGlzbyA9PT0gXCJzdHJpbmdcIiA/IGlzbyA6IFwiXCI7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG5cbi8qKiBDb250ZW50IFVSSXM6IGFueXRoaW5nIGEgcGxheWxpc3Qgcm93IGNhbiBhY3R1YWxseSBwbGF5LiAqL1xuY29uc3QgQ09OVEVOVF9VUkkgPSAvXnNwb3RpZnk6KD86dHJhY2t8bG9jYWx8ZXBpc29kZXxhdWRpb3xmaWxlfHZpZGVvKTouKy87XG5cbi8qKiBPbmx5IFNwb3RpZnkgdHJhY2tzIGFyZSBhbnN3ZXJlZCBieSB0aGUgSVNSQyBtZXRhZGF0YSBxdWVyeS4gKi9cbmNvbnN0IGlzVHJhY2tVcmkgPSAodXJpOiBzdHJpbmcpOiBib29sZWFuID0+IHVyaS5zdGFydHNXaXRoKFwic3BvdGlmeTp0cmFjazpcIik7XG5cbi8qKlxuICogVVJJIG9mIHRoZSBwbGF5YWJsZSBlbnRyeSBpdHNlbGYuIFBsYXlsaXN0cywgYWxidW1zIGFuZCBhcnRpc3RzIGhhdmUgVVJJc1xuICogdG9vIFx1MjAxNCBhbmQgYSBiYXJlIGBzcG90aWZ5OmxvY2FsOmAgd2l0aCBubyBjb21wb25lbnRzIGlkZW50aWZpZXMgbm90aGluZyBcdTIwMTRcbiAqIHdoaWxlIHBheWxvYWRzIGNhbiBoYW5kIHN1Y2ggdmFsdWVzIHRvIHVucmVsYXRlZCBlbnRyaWVzLiBPbmx5IGEgVVJJIHRoYXRcbiAqIGFjdHVhbGx5IG5hbWVzIGEgdHJhY2thYmxlIGl0ZW0gaXMgYWNjZXB0ZWQsIHRoZSBpdGVtJ3Mgb3duIGZpZWxkIGZpcnN0LlxuICogUmV0dXJucyBcIlwiIHdoZW4gbm90aGluZyBpZGVudGlmaWVzIHRoZSBlbnRyeS5cbiAqL1xuZnVuY3Rpb24gcmVhZFRyYWNrVXJpKGl0ZW06IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBzdHJpbmcge1xuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBbaXRlbS51cmksIG1ldGFkYXRhLmxpbmtdKSB7XG4gICAgaWYgKHR5cGVvZiBjYW5kaWRhdGUgPT09IFwic3RyaW5nXCIgJiYgQ09OVEVOVF9VUkkudGVzdChjYW5kaWRhdGUpKSByZXR1cm4gY2FuZGlkYXRlO1xuICB9XG4gIHJldHVybiBcIlwiO1xufVxuXG4vKipcbiAqIFR1cm4gb25lIHJhdyBwbGF5bGlzdCByb3cgaW50byBhIGBQbGF5bGlzdEVudHJ5YCwgb3IgYG51bGxgIHdoZW4gbm8gVVJJIGNhblxuICogaWRlbnRpZnkgaXQuIEZpZWxkIG5hbWVzIGRpZmZlciBiZXR3ZWVuIGNsaWVudCB2ZXJzaW9ucywgc28gZXZlcnkgcmVhZFxuICogdG9sZXJhdGVzIHRoZSBrbm93biBzaGFwZXM6IGBpdGVtLipgIGZpcnN0LCBgdHJhY2tNZXRhZGF0YS4qYCBhcyBmYWxsYmFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGxheWxpc3RJdGVtKFxuICBpdGVtOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgcG9zaXRpb246IG51bWJlcixcbik6IFBsYXlsaXN0RW50cnkgfCBudWxsIHtcbiAgY29uc3QgbWV0YWRhdGEgPSAoaXRlbS50cmFja01ldGFkYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKSA/PyB7fTtcbiAgY29uc3QgdXJpID0gcmVhZFRyYWNrVXJpKGl0ZW0sIG1ldGFkYXRhKTtcbiAgaWYgKCF1cmkpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IG5hbWUgPVxuICAgICh0eXBlb2YgaXRlbS5uYW1lID09PSBcInN0cmluZ1wiID8gaXRlbS5uYW1lIDogXCJcIikgfHxcbiAgICAodHlwZW9mIG1ldGFkYXRhLm5hbWUgPT09IFwic3RyaW5nXCIgPyBtZXRhZGF0YS5uYW1lIDogXCJcIik7XG4gIGNvbnN0IGFydGlzdEZpZWxkID0gaXRlbS5hcnRpc3RzID8/IG1ldGFkYXRhLmFydGlzdDtcbiAgY29uc3QgYXJ0aXN0czogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KGFydGlzdEZpZWxkKVxuICAgID8gYXJ0aXN0RmllbGRcbiAgICAgICAgLmZpbHRlcigoYSk6IGEgaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4gdHlwZW9mIGE/Lm5hbWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIC5tYXAoKGEpID0+IGEubmFtZSBhcyBzdHJpbmcpXG4gICAgOiBbXTtcbiAgY29uc3QgYWxidW0gPVxuICAgIChpdGVtLmFsYnVtIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKSA/P1xuICAgIChtZXRhZGF0YS5hbGJ1bSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCkgPz9cbiAgICB7fTtcblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uLFxuICAgIHVyaSxcbiAgICB1aWQ6IHR5cGVvZiBpdGVtLnVpZCA9PT0gXCJzdHJpbmdcIiA/IGl0ZW0udWlkIDogXCJcIixcbiAgICBuYW1lLFxuICAgIGFydGlzdHMsXG4gICAgYWxidW1OYW1lOiB0eXBlb2YgYWxidW0ubmFtZSA9PT0gXCJzdHJpbmdcIiA/IGFsYnVtLm5hbWUgOiBcIlwiLFxuICAgIGFsYnVtVXJpOiB0eXBlb2YgYWxidW0udXJpID09PSBcInN0cmluZ1wiID8gYWxidW0udXJpIDogXCJcIixcbiAgICBpbWFnZVVybDogcmVhZEltYWdlVXJsKGl0ZW0pLFxuICAgIGR1cmF0aW9uTXM6IHJlYWREdXJhdGlvbihpdGVtKSxcbiAgICBhZGRlZEF0OiByZWFkQWRkZWRBdChpdGVtKSxcbiAgICBpc3JjOiBudWxsLFxuICB9O1xufVxuXG4vKiogRmV0Y2ggZXZlcnkgZW50cnkgb2YgYSBwbGF5bGlzdCAocGFnaW5hdGVkKSwga2VlcGluZyBvY2N1cnJlbmNlIGB1aWRgcy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0RW50cmllcyhcbiAgcGxheWxpc3RVcmk6IHN0cmluZyxcbiAgb3B0aW9uczogeyBvblByb2dyZXNzPzogKGxvYWRlZDogbnVtYmVyKSA9PiB2b2lkOyBzaWduYWw/OiBBYm9ydFNpZ25hbCB9ID0ge30sXG4pOiBQcm9taXNlPFBsYXlsaXN0RW50cnlbXT4ge1xuICBjb25zdCBhcGkgPSBwbGF5bGlzdEFwaSgpO1xuICBpZiAoIWFwaT8uZ2V0Q29udGVudHMpIHRocm93IG5ldyBFcnJvcihcIlBsYXlsaXN0QVBJIGlzIHVuYXZhaWxhYmxlXCIpO1xuXG4gIGNvbnN0IGVudHJpZXM6IFBsYXlsaXN0RW50cnlbXSA9IFtdO1xuICBsZXQgb2Zmc2V0ID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIG9wdGlvbnMuc2lnbmFsPy50aHJvd0lmQWJvcnRlZCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldENvbnRlbnRzKHBsYXlsaXN0VXJpLCB7XG4gICAgICBvZmZzZXQsXG4gICAgICBsaW1pdDogQ09OVEVOVFNfUEFHRV9TSVpFLFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zID8/IFtdO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIGJyZWFrO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQbGF5bGlzdEl0ZW0oaXRlbXNbaV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIG9mZnNldCArIGkpO1xuICAgICAgaWYgKHBhcnNlZCkgZW50cmllcy5wdXNoKHBhcnNlZCk7XG4gICAgfVxuICAgIG9wdGlvbnMub25Qcm9ncmVzcz8uKGVudHJpZXMubGVuZ3RoKTtcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPCBDT05URU5UU19QQUdFX1NJWkUpIGJyZWFrO1xuICAgIG9mZnNldCArPSBDT05URU5UU19QQUdFX1NJWkU7XG4gIH1cblxuICByZXR1cm4gZW50cmllcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElTUkMgKi9cblxuaW50ZXJmYWNlIE1ldGFkYXRhTGlrZSB7XG4gIGR1cmF0aW9uPzogdW5rbm93bjtcbiAgZXh0ZXJuYWxfaWQ/OiBBcnJheTx7IHR5cGU/OiBzdHJpbmc7IGlkPzogc3RyaW5nIH0gfCB1bmRlZmluZWQ+O1xufVxuXG4vKiogUHVsbCB0aGUgSVNSQyBvdXQgb2YgYSBtZXRhZGF0YSByZWNvcmQsIG9yIGBudWxsYCB3aGVuIHRoZXJlIGlzIG5vbmUuICovXG5mdW5jdGlvbiBpc3JjRnJvbU1ldGFkYXRhKG1ldGFkYXRhOiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGlkcyA9IChtZXRhZGF0YSBhcyBNZXRhZGF0YUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkKT8uZXh0ZXJuYWxfaWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShpZHMpKSByZXR1cm4gbnVsbDtcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBpZHMpIHtcbiAgICBpZiAoZW50cnk/LnR5cGUgPT09IFwiaXNyY1wiICYmIHR5cGVvZiBlbnRyeS5pZCA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGVudHJ5LmlkO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKiogSW4tbWVtb3J5IElTUkMgY2FjaGUgZm9yIHRoZSBjdXJyZW50IFNwb3RpZnkgc2Vzc2lvbi4gKi9cbmNvbnN0IGlzcmNDYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmcgfCBudWxsPigpO1xuXG4vKiogQmF0Y2hlZCBJU1JDIGh5ZHJhdGlvbiB3aXRoIHJldHJ5L2JhY2tvZmY7IGRlZ3JhZGF0aW9uIGlzIHNpbGVudCBwZXIgdHJhY2suICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaHlkcmF0ZUlzcmNzKFxuICBlbnRyaWVzOiByZWFkb25seSBQbGF5bGlzdEVudHJ5W10sXG4gIG9wdGlvbnM6IHsgb25Qcm9ncmVzcz86IChkb25lOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHZvaWQ7IHNpZ25hbD86IEFib3J0U2lnbmFsIH0gPSB7fSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBtaXNzaW5nID0gZW50cmllcy5maWx0ZXIoKGUpID0+IGUuaXNyYyA9PSBudWxsKTtcbiAgLy8gT25seSB0cmFjayBVUklzIGdvIHRvIHRoZSBUUkFDS19WNCBxdWVyeTogbG9jYWwgZmlsZXMgYW5kIGVwaXNvZGVzIGNhbm5vdFxuICAvLyBiZSBhbnN3ZXJlZCBieSBpdCBhbmQgd291bGQgb25seSBkcmFnIHRoZSB3aG9sZSBiYXRjaCBkb3duIHdpdGggdGhlbS5cbiAgY29uc3QgcGVuZGluZ1VyaXMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIG1pc3NpbmdcbiAgICAgICAgLmZpbHRlcigoZSkgPT4gaXNUcmFja1VyaShlLnVyaSkpXG4gICAgICAgIC5tYXAoKGUpID0+IGUudXJpKVxuICAgICAgICAuZmlsdGVyKCh1cmkpID0+ICFpc3JjQ2FjaGUuaGFzKHVyaSkpLFxuICAgICksXG4gIF07XG4gIGNvbnN0IHRvdGFsID0gcGVuZGluZ1VyaXMubGVuZ3RoO1xuICBpZiAodG90YWwgPT09IDApIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1pc3NpbmcpIGVudHJ5LmlzcmMgPSBpc3JjQ2FjaGUuZ2V0KGVudHJ5LnVyaSkgPz8gbnVsbDtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZG9uZSA9IDA7XG4gIGZvciAobGV0IHN0YXJ0ID0gMDsgc3RhcnQgPCBwZW5kaW5nVXJpcy5sZW5ndGg7IHN0YXJ0ICs9IElTUkNfQkFUQ0hfU0laRSkge1xuICAgIG9wdGlvbnMuc2lnbmFsPy50aHJvd0lmQWJvcnRlZCgpO1xuICAgIGNvbnN0IGJhdGNoID0gcGVuZGluZ1VyaXMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgSVNSQ19CQVRDSF9TSVpFKTtcblxuICAgIGxldCBmZXRjaGVkOiBNYXA8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgPSBudWxsO1xuICAgIGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDwgSVNSQ19SRVRSWV9BVFRFTVBUUyAmJiBmZXRjaGVkID09IG51bGw7IGF0dGVtcHQrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmV0Y2hlZCA9IGF3YWl0IGZldGNoTWV0YWRhdGFGb3JUcmFja3MoYmF0Y2gpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoYXR0ZW1wdCA8IElTUkNfUkVUUllfQVRURU1QVFMgLSAxKSB7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoXG4gICAgICAgICAgICBSRVRSWV9CQVNFX0RFTEFZX01TICogMiAqKiBhdHRlbXB0ICogKDEgKyBNYXRoLnJhbmRvbSgpICogMC41KSxcbiAgICAgICAgICAgIG9wdGlvbnMuc2lnbmFsLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKGBbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIElTUkMgYmF0Y2ggZmFpbGVkIGFmdGVyIHJldHJpZXM6YCwgZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFuIGFib3J0IGR1cmluZyB0aGUgZmV0Y2ggb3IgdGhlIGJhY2tvZmYgZGVsYXkgc3RvcHMgdGhlIHNjYW4gaGVyZTpcbiAgICAvLyBubyBjYWNoZSwgZW50cnkgb3IgcHJvZ3Jlc3MgdXBkYXRlIG1heSBmb2xsb3cgYSBjYW5jZWxsZWQgaHlkcmF0aW9uLlxuICAgIG9wdGlvbnMuc2lnbmFsPy50aHJvd0lmQWJvcnRlZCgpO1xuXG4gICAgLy8gT25seSBhIHJlc3BvbnNlIHRoYXQgYWN0dWFsbHkgY2FycmllcyB0aGUgVVJJIGlzIGZpbmFsLiBBIGZhaWxlZCByZXF1ZXN0XG4gICAgLy8gKG9yIGEgcGFydGlhbCBhbnN3ZXIpIHN0YXlzIHVuY2FjaGVkIHNvIHRoZSBuZXh0IHNjYW4gcmV0cmllcyBpdCBcdTIwMTQgYVxuICAgIC8vIHNpbmdsZSBuZXR3b3JrIGVycm9yIG11c3Qgbm90IGhpZGUgXCJTYW1lIFJlY29yZGluZ1wiIG1hdGNoZXMgZm9yZXZlci5cbiAgICBpZiAoZmV0Y2hlZCkge1xuICAgICAgZm9yIChjb25zdCB1cmkgb2YgYmF0Y2gpIHtcbiAgICAgICAgaWYgKGZldGNoZWQuaGFzKHVyaSkpIGlzcmNDYWNoZS5zZXQodXJpLCBpc3JjRnJvbU1ldGFkYXRhKGZldGNoZWQuZ2V0KHVyaSkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBtaXNzaW5nKSB7XG4gICAgICBpZiAoaXNyY0NhY2hlLmhhcyhlbnRyeS51cmkpICYmIGVudHJ5LmlzcmMgPT0gbnVsbClcbiAgICAgICAgZW50cnkuaXNyYyA9IGlzcmNDYWNoZS5nZXQoZW50cnkudXJpKSA/PyBudWxsO1xuICAgIH1cblxuICAgIGRvbmUgKz0gYmF0Y2gubGVuZ3RoO1xuICAgIG9wdGlvbnMub25Qcm9ncmVzcz8uKGRvbmUsIHRvdGFsKTtcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlbW92YWwgKi9cblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmFsVGFyZ2V0IHtcbiAgdXJpOiBzdHJpbmc7XG4gIHVpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW92YWxTdW1tYXJ5IHtcbiAgcmVtb3ZlZDogbnVtYmVyO1xuICBmYWlsZWQ6IG51bWJlcjtcbiAgLyoqIFBlci1iYXRjaCBzdWNjZXNzIGZsYWdzLCBpbiB0YXJnZXQgb3JkZXIsIGZvciBwYXJ0aWFsLWZhaWx1cmUgcmVjb3ZlcnkuICovXG4gIGJhdGNoUmVzdWx0czogYm9vbGVhbltdO1xufVxuXG4vKiogUmVtb3ZlIHBsYXlsaXN0IG9jY3VycmVuY2VzIGluIGJhdGNoZXMsIHRhcmdldGluZyB1aWQgKyBVUkkgZm9yIGFjY3VyYWN5LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUVudHJpZXMoXG4gIHBsYXlsaXN0VXJpOiBzdHJpbmcsXG4gIHRhcmdldHM6IHJlYWRvbmx5IFJlbW92YWxUYXJnZXRbXSxcbiAgb25Qcm9ncmVzcz86IChkb25lOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHZvaWQsXG4pOiBQcm9taXNlPFJlbW92YWxTdW1tYXJ5PiB7XG4gIGNvbnN0IGFwaSA9IHBsYXlsaXN0QXBpKCk7XG4gIGlmICghYXBpPy5yZW1vdmUgfHwgdGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIHJhbjogcmVwb3J0IG9uZSBmYWlsZWQgYmF0Y2ggcGVyIGV4cGVjdGVkIGJhdGNoIHNvIHRoZSBjYWxsZXJcbiAgICAvLyBrZWVwcyBldmVyeSByb3cgc2VsZWN0ZWQgaW5zdGVhZCBvZiBjbGVhcmluZyB0aGUgdmlldyBhcyBpZiByZW1vdmVkLlxuICAgIGNvbnN0IGJhdGNoZXMgPSBNYXRoLmNlaWwodGFyZ2V0cy5sZW5ndGggLyBSRU1PVkFMX0JBVENIX1NJWkUpO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmVkOiAwLFxuICAgICAgZmFpbGVkOiB0YXJnZXRzLmxlbmd0aCxcbiAgICAgIGJhdGNoUmVzdWx0czogQXJyYXkuZnJvbSh7IGxlbmd0aDogYmF0Y2hlcyB9LCAoKSA9PiBmYWxzZSksXG4gICAgfTtcbiAgfVxuXG4gIGxldCByZW1vdmVkID0gMDtcbiAgbGV0IGZhaWxlZCA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgY29uc3QgYmF0Y2hSZXN1bHRzOiBib29sZWFuW10gPSBbXTtcblxuICBmb3IgKGxldCBzdGFydCA9IDA7IHN0YXJ0IDwgdGFyZ2V0cy5sZW5ndGg7IHN0YXJ0ICs9IFJFTU9WQUxfQkFUQ0hfU0laRSkge1xuICAgIGNvbnN0IGJhdGNoID0gdGFyZ2V0cy5zbGljZShzdGFydCwgc3RhcnQgKyBSRU1PVkFMX0JBVENIX1NJWkUpO1xuICAgIGNvbnN0IGJhdGNoSXRlbXMgPSBiYXRjaC5tYXAoKHQpID0+ICh7IHVyaTogdC51cmksIHVpZDogdC51aWQgfSkpO1xuICAgIGxldCBvayA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGkucmVtb3ZlKHBsYXlsaXN0VXJpLCBiYXRjaEl0ZW1zKTtcbiAgICAgIHJlbW92ZWQgKz0gYmF0Y2gubGVuZ3RoO1xuICAgICAgb2sgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGZhaWxlZCArPSBiYXRjaC5sZW5ndGg7XG4gICAgICBjb25zb2xlLndhcm4oXCJbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIHJlbW92YWwgYmF0Y2ggZmFpbGVkOlwiLCBlKTtcbiAgICB9XG4gICAgYmF0Y2hSZXN1bHRzLnB1c2gob2spO1xuICAgIGRvbmUgKz0gYmF0Y2gubGVuZ3RoO1xuICAgIG9uUHJvZ3Jlc3M/Lihkb25lLCB0YXJnZXRzLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4geyByZW1vdmVkLCBmYWlsZWQsIGJhdGNoUmVzdWx0cyB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbm90aWNlcyAqL1xuXG4vKiogU3VjY2VzcyB0b2FzdCBmb3IgdGhlIGNhbGxlcidzIG93biBtZXNzYWdlIChyZW1vdmFsIHN1bW1hcmllcywgXHUyMDI2KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UpO1xufVxuXG4vKiogRXJyb3IgdG9hc3QgZm9yIHRoZSBjYWxsZXIncyBvd24gbWVzc2FnZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlGYWlsdXJlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHRydWUpO1xufVxuXG5leHBvcnQgY29uc3Qgbm90aWNlcyA9IHN0cmluZ3Muc3VtbWFyeTtcbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC8qIFBsYXlsaXN0IER1cGxpY2F0ZSBGaW5kZXIgXHUyMDE0IGRhcmsgbW9kYWwgaW50ZWdyYXRlZCB3aXRoIHRoZSBTcG90aWZ5IHRoZW1lLiAqL1xuXG4uZHVwZmluZC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLmR1cGZpbmQtd2luZG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNsYW1wKDY4MHB4LCA2MnZ3LCA4ODBweCk7XG4gIG1heC1oZWlnaHQ6IDg2dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMxODE4MTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNwb3RpZnkpLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDE2cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5kdXBmaW5kLXdpbmRvdy0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyICovXG5cbi5kdXBmaW5kLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweCAyMHB4IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX3RpdGxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5kdXBmaW5kLWhlYWRlcl9fdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmR1cGZpbmQtaGVhZGVyX19wbGF5bGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5kdXBmaW5kLWhlYWRlcl9fcGxheWxpc3QtbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZHVwZmluZC1iYWRnZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kdXBmaW5kLWJhZGdlLS1lZGl0YWJsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE4NSwgODQsIDAuMTgpO1xuICBjb2xvcjogIzFkYjk1NDtcbn1cblxuLmR1cGZpbmQtYmFkZ2UtLXJlYWRvbmx5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDExNiwgOTIsIDAuMTYpO1xuICBjb2xvcjogI2UwNzQ1Yztcbn1cblxuLmR1cGZpbmQtaGVhZGVyX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX2dpdGh1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX2dpdGh1Yjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX2dpdGh1YiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4xNXM7XG59XG5cbi8qIFRleHQga2VwdCBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ3kgb25seSwgbmV2ZXIgcGFpbnRlZC4gKi9cbi5kdXBmaW5kLXNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX2Nsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kdXBmaW5kLWhlYWRlcl9fY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmR1cGZpbmQtaGVhZGVyX19jbG9zZTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJvZHkgKi9cblxuLmR1cGZpbmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIHN0YXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmR1cGZpbmQtc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kdXBmaW5kLXN0YXRlX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kdXBmaW5kLW11dGVkIHtcbiAgY29sb3I6ICM3ZjdmN2Y7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmR1cGZpbmQtc3Bpbm5lciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyODI4Mjg7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxZGI5NTQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBkdXBmaW5kLXNwaW4gMC45cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZHVwZmluZC1zcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLyogbGVmdCByYWlsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZHVwZmluZC1yYWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGdhcDogNnB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMTJweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI4MjgyODtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbn1cblxuLmR1cGZpbmQtcmFpbF9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2RkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1yYWlsX19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcbn1cblxuLmR1cGZpbmQtcmFpbF9faXRlbS0tYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuXG4uZHVwZmluZC1yYWlsX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmR1cGZpbmQtcmFpbF9fY291bnQge1xuICBjb2xvcjogIzhhOGE4YTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4vKiByZWxpYWJpbGl0eSBnYXVnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZHVwZmluZC1nYXVnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmR1cGZpbmQtZ2F1Z2VfX3NlZyB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG59XG5cbi8qIHJpZ2h0IHBhbmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5kdXBmaW5kLXBhbmVsIHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kdXBmaW5kLXBhbmVsX19oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZHVwZmluZC1wYW5lbF9fbGV2ZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZHVwZmluZC1wYW5lbF9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xufVxuXG4uZHVwZmluZC1wYW5lbCA+IC5kdXBmaW5kLXN0YXRlIHtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLyogXCJvdmVyZmxvdzogaGlkZGVuXCIgbWFrZXMgdGhlIG1pbi1jb250ZW50IGhlaWdodCAwIGluc2lkZSB0aGUgZmxleCBwYW5lbCxcbiAgIHNvIHdpdGhvdXQgYW4gZXhwbGljaXQgc2hyaW5rIGd1YXJkIHRoZSBicm93c2VyIHNxdWFzaGVzIGV2ZXJ5IGNhcmQuICovXG4uZHVwZmluZC1ncm91cCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjgyODI4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xufVxuXG4uZHVwZmluZC1ncm91cF9fcm93ICsgLmR1cGZpbmQtZ3JvdXBfX3JvdyB7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzJlMmUyZTtcbn1cblxuLyogdHJhY2sgcm93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5kdXBmaW5kLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmR1cGZpbmQtcm93OmhvdmVyOm5vdCguZHVwZmluZC1yb3ctLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyNDI0MjQ7XG59XG5cbi5kdXBmaW5kLXJvdy0tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAxMTYsIDkyLCAwLjEyKTtcbn1cblxuLmR1cGZpbmQtcm93LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5kdXBmaW5kLXJvd19fcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2IzYjNiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1yb3dfX3BsYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmR1cGZpbmQtcm93X19wbGF5LS1vbixcbi5kdXBmaW5kLXJvd19fcGxheS0tb246aG92ZXIge1xuICBjb2xvcjogIzFkYjk1NDtcbn1cblxuLmR1cGZpbmQtcm93X19jaGVja2JveCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGFjY2VudC1jb2xvcjogI2UwNzQ1YztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1yb3dfX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmR1cGZpbmQtcm93X19hcnQge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmR1cGZpbmQtcm93X19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbiAgZmxleDogMTtcbn1cblxuLmR1cGZpbmQtcm93X190aXRsZWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZHVwZmluZC1yb3dfX3RpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmR1cGZpbmQtcm93X19kdXJhdGlvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uZHVwZmluZC1yb3dfX21ldGEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmR1cGZpbmQtcm93X193aGVyZSB7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9vdGVyICovXG5cbi5kdXBmaW5kLWZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xuICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xufVxuXG4uZHVwZmluZC1mb290ZXJfX3JlYWRvbmx5IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmR1cGZpbmQtZm9vdGVyX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbn1cblxuLmR1cGZpbmQtZm9vdGVyX19jb3VudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kdXBmaW5kLWZvb3Rlcl9fd2FybmluZyB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZHVwZmluZC1mb290ZXJfX2NvbmZpcm0ge1xuICBmbGV4OiAxO1xuICBjb2xvcjogI2UwYjA1YztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZHVwZmluZC1mb290ZXJfX3N1bW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjZTA3NDVjO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kdXBmaW5kLWZvb3Rlcl9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBnYXA6IDhweDtcbn1cblxuLmR1cGZpbmQtZm9vdGVyX19idXN5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZHVwZmluZC1wcm9ncmVzcyB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5kdXBmaW5kLXByb2dyZXNzX19iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJ1dHRvbnMgKi9cblxuLmR1cGZpbmQtYnV0dG9uIHtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1idXR0b24tLXNtYWxsIHtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5kdXBmaW5kLWJ1dHRvbi0tZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi5kdXBmaW5kLWJ1dHRvbi0tZ2hvc3Q6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmR1cGZpbmQtYnV0dG9uLS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZTA3NDVjO1xuICBjb2xvcjogIzE2MTYxNjtcbn1cblxuLmR1cGZpbmQtYnV0dG9uLS1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWE4ODczO1xufVxuXG4uZHVwZmluZC1idXR0b24tLWRhbmdlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMzZDNkM2Q7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZHVwZmluZC1idXR0b24tLWdob3N0OmRpc2FibGVkIHtcbiAgY29sb3I6ICM1NTU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzY3JvbGxiYXIgKi9cblxuLmR1cGZpbmQtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmR1cGZpbmQtcmFpbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG4uZHVwZmluZC1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4uZHVwZmluZC1yYWlsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzNkM2QzZDtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiZXhwb3J0IGNvbnN0IHtcbiAgQ2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIFByb2ZpbGVyLFxuICBQdXJlQ29tcG9uZW50LFxuICBTdHJpY3RNb2RlLFxuICBTdXNwZW5zZSxcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGFjdCxcbiAgY2xvbmVFbGVtZW50LFxuICBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGZvcndhcmRSZWYsXG4gIGlzVmFsaWRFbGVtZW50LFxuICBsYXp5LFxuICBtZW1vLFxuICBzdGFydFRyYW5zaXRpb24sXG4gIHVuc3RhYmxlX2FjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZURlYnVnVmFsdWUsXG4gIHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlSWQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUluc2VydGlvbkVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdDtcbiIsICJleHBvcnQgY29uc3Qge1xuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgY3JlYXRlUG9ydGFsLFxuICBjcmVhdGVSb290LFxuICBmaW5kRE9NTm9kZSxcbiAgZmx1c2hTeW5jLFxuICBoeWRyYXRlLFxuICBoeWRyYXRlUm9vdCxcbiAgcmVuZGVyLFxuICB1bm1vdW50Q29tcG9uZW50QXROb2RlLFxuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxcbiAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIsXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0RE9NO1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3RET007XG4iLCAiLyoqXG4gKiBUaXRsZSBub3JtYWxpemF0aW9uIGZvciB0aGUgZHVwbGljYXRlIGRldGVjdG9yLlxuICogUHVyZSBzdHJpbmcgZnVuY3Rpb25zIFx1MjAxNCBubyBTcGljZXRpZnkgZGVwZW5kZW5jeS5cbiAqL1xuXG4vKipcbiAqIFdob2xlIHdvcmRzIHRyZWF0ZWQgYXMgbm9pc2Ugd2hlbiBidWlsZGluZyBmdXp6eSBrZXlzLiBUaGV5IGRlc2NyaWJlXG4gKiB2YXJpYW50cyAocmVtYXN0ZXJzLCBlZGl0cywgbGl2ZSB0YWtlcywgXHUyMDI2KSByYXRoZXIgdGhhbiBhIGRpZmZlcmVudCBzb25nLFxuICogc28gcmVtb3ZpbmcgdGhlbSBsZXRzIGBTb25nICgyMDExIFJlbWFzdGVyKWAgYW5kIGBTb25nYCBjb21wYXJlIGVxdWFsLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVFJJUF9XT1JEUzogcmVhZG9ubHkgc3RyaW5nW10gPSBbXG4gIFwicmVtYXN0ZXJcIixcbiAgXCJyZW1hc3RlcmVkXCIsXG4gIFwicmVpc3N1ZVwiLFxuICBcInJlbWl4XCIsXG4gIFwibWl4XCIsXG4gIFwicmFkaW9cIixcbiAgXCJlZGl0XCIsXG4gIFwidmVyc2lvblwiLFxuICBcInZlclwiLFxuICBcImZlYXRcIixcbiAgXCJmdFwiLFxuICBcImxpdmVcIixcbiAgXCJhY291c3RpY1wiLFxuICBcImluc3RydW1lbnRhbFwiLFxuICBcIm1vbm9cIixcbiAgXCJzdGVyZW9cIixcbiAgXCJkZWx1eGVcIixcbiAgXCJkZW1vXCIsXG4gIFwiaW50cm9cIixcbiAgXCJvdXRyb1wiLFxuICBcImV4cGxpY2l0XCIsXG4gIFwiY2xlYW5cIixcbiAgXCJjb3ZlclwiLFxuICBcImV4dGVuZGVkXCIsXG4gIFwib3JpZ2luYWxcIixcbiAgXCJzaW5nbGVcIixcbiAgXCJhbGJ1bVwiLFxuICBcImJvbnVzXCIsXG5dO1xuXG4vKiogU3RyaWN0IG5vcm1hbGl6YXRpb246IGNhc2UgYW5kIHdoaXRlc3BhY2Ugb25seS4gQWNjZW50cyBhcmUgcHJlc2VydmVkLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRpdGxlU3RyaWN0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xufVxuXG4vKiogRXNjYXBlIGEgbGl0ZXJhbCBmb3IgdXNlIGluc2lkZSBhIGBSZWdFeHBgIHNvdXJjZS4gKi9cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuLyoqXG4gKiBGdXp6eSBub3JtYWxpemF0aW9uIHVzZWQgYnkgdGhlIGxvdy1jb25maWRlbmNlIGxldmVsczpcbiAqIDEuIHN0cmlwIGRpYWNyaXRpY3MgKFwiQmV5b25jXHUwMEU5XCIgXHUyMTkyIFwiQmV5b25jZVwiKSBzbyBmdXp6eSBtYXRjaGluZyBpcyBub3RcbiAqICAgIGRlZmVhdGVkIGJ5IGFjY2VudCBkaWZmZXJlbmNlcztcbiAqIDIuIGxvd2VyY2FzZTtcbiAqIDMuIGRyb3AgYnJhY2tldGVkIHNlZ21lbnRzIFx1MjAxNCBgKC4uLilgLCBgWy4uLl1gLCBgey4uLn1gIFx1MjAxNCB3aGljaCBjYXJyeSB2YXJpYW50XG4gKiAgICBkZXNjcmlwdG9ycztcbiAqIDQuIGRyb3AgdGhlIGNvbmZpZ3VyZWQgbm9pc2Ugd29yZHMgKHdvcmQgYm91bmRhcmllcyByZXNwZWN0ZWQpO1xuICogNS4gcmVwbGFjZSBkYXNoZXMgd2l0aCBzcGFjZXM7XG4gKiA2LiByZW1vdmUgZXZlcnl0aGluZyB0aGF0IGlzIG5vdCBhIGxldHRlciwgbnVtYmVyIG9yIHNwYWNlO1xuICogNy4gY29sbGFwc2UgYW5kIHRyaW0gd2hpdGVzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUZ1enp5KFxuICBuYW1lOiBzdHJpbmcsXG4gIHN0cmlwV29yZHM6IHJlYWRvbmx5IHN0cmluZ1tdID0gREVGQVVMVF9TVFJJUF9XT1JEUyxcbik6IHN0cmluZyB7XG4gIGxldCBvdXQgPSBuYW1lXG4gICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxuICAgIC5yZXBsYWNlKC9cXHB7RGlhY3JpdGljfS9ndSwgXCJcIilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXChbXildKlxcKXxcXFtbXlxcXV0qXFxdfFxce1tefV0qXFx9L2csIFwiIFwiKTtcblxuICBpZiAoc3RyaXBXb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGF0dGVybiA9IGAoPzwhW1xcXFxwe0x9XFxcXHB7Tn1dKSgke3N0cmlwV29yZHMubWFwKGVzY2FwZVJlZ0V4cCkuam9pbihcInxcIil9KSg/IVtcXFxccHtMfVxcXFxwe059XSlgO1xuICAgIG91dCA9IG91dC5yZXBsYWNlKG5ldyBSZWdFeHAocGF0dGVybiwgXCJndVwiKSwgXCIgXCIpO1xuICB9XG5cbiAgcmV0dXJuIG91dFxuICAgIC5yZXBsYWNlKC9bLVx1MjAxM1x1MjAxNF9dKy9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvW15cXHB7TH1cXHB7Tn0gXSsvZ3UsIFwiIFwiKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxuICAgIC50cmltKCk7XG59XG5cbi8qKiBOb3JtYWxpemVkIGFydGlzdCBuYW1lcyB1c2VkIGZvciBcImF0IGxlYXN0IG9uZSBzaGFyZWQgYXJ0aXN0XCIgY2hlY2tzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFydGlzdChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbn1cbiIsICIvKipcbiAqIFRpdGxlIHNpbWlsYXJpdHkgZm9yIHRoZSBsb3ctY29uZmlkZW5jZSBkdXBsaWNhdGUgbGV2ZWxzLlxuICpcbiAqIERpY2UgY29lZmZpY2llbnQgb3ZlciBjaGFyYWN0ZXIgYmlncmFtcywgY29tcHV0ZWQgb24gdGhlIHN0cmluZ3Mgd2l0aCBhbGxcbiAqIHdoaXRlc3BhY2UgcmVtb3ZlZCAobGVuZ3RoIGRpZmZlcmVuY2VzIGZyb20gc3BhY2luZyBtdXN0IG5vdCBwZW5hbGl6ZSBhXG4gKiB0aXRsZSkuIFB1cmUgZnVuY3Rpb24gXHUyMDE0IG5vIFNwaWNldGlmeSBkZXBlbmRlbmN5LlxuICovXG5cbi8qKiBNaW5pbXVtIHNpbWlsYXJpdHkgZm9yIHR3byBmdXp6eSBrZXlzIHRvIGJlIGNvbnNpZGVyZWQgXCJtYXliZVwiIGR1cGxpY2F0ZXMuICovXG5leHBvcnQgY29uc3QgTUFZQkVfU0lNSUxBUklUWV9USFJFU0hPTEQgPSAwLjY1O1xuXG4vKipcbiAqIENoZWFwIGxlbmd0aCBndWFyZDogd2l0aCBhIHJhdGlvIGFib3ZlIHRoaXMsIHRoZSBiZXN0IGFjaGlldmFibGUgRGljZVxuICogc2NvcmUgaXMgZmFyIGJlbG93IHRoZSB0aHJlc2hvbGQsIHNvIHRoZSBwYWlyIGlzIHNraXBwZWQgd2l0aG91dCBzY29yaW5nLlxuICovXG5leHBvcnQgY29uc3QgTUFZQkVfTEVOR1RIX1JBVElPX0dVQVJEID0gMztcblxuLyoqIERpY2UgY29lZmZpY2llbnQgb3ZlciBjaGFyYWN0ZXIgYmlncmFtczogMS4wID0gaWRlbnRpY2FsLCAwLjAgPSBkaXNqb2ludC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaWdyYW1TaW1pbGFyaXR5KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgczEgPSBhLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gIGNvbnN0IHMyID0gYi5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuXG4gIGlmIChzMSA9PT0gczIpIHJldHVybiAxLjA7XG4gIGlmIChzMS5sZW5ndGggPCAyIHx8IHMyLmxlbmd0aCA8IDIpIHJldHVybiAwLjA7XG5cbiAgY29uc3QgYmlncmFtcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgczEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYmcgPSBzMS5zdWJzdHJpbmcoaSwgaSArIDIpO1xuICAgIGJpZ3JhbXMuc2V0KGJnLCAoYmlncmFtcy5nZXQoYmcpID8/IDApICsgMSk7XG4gIH1cblxuICBsZXQgaW50ZXJzZWN0aW9uID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzMi5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBiZyA9IHMyLnN1YnN0cmluZyhpLCBpICsgMik7XG4gICAgY29uc3QgY291bnQgPSBiaWdyYW1zLmdldChiZykgPz8gMDtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICBiaWdyYW1zLnNldChiZywgY291bnQgLSAxKTtcbiAgICAgIGludGVyc2VjdGlvbisrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbigxLCAoMi4wICogaW50ZXJzZWN0aW9uKSAvIChzMS5sZW5ndGggKyBzMi5sZW5ndGggLSAyKSk7XG59XG4iLCAiLyoqXG4gKiBTaGFyZWQgZGF0YSBzaGFwZXMgZm9yIHRoZSBkdXBsaWNhdGUgZGV0ZWN0aW9uIHBpcGVsaW5lLlxuICpcbiAqIFRoaXMgbW9kdWxlIChhbmQgdGhlIHdob2xlIGBkZXRlY3Rpb24vYCBmb2xkZXIpIGlzIGludGVudGlvbmFsbHkgZnJlZSBvZiBhbnlcbiAqIFNwaWNldGlmeSBkZXBlbmRlbmN5IHNvIGl0IHN0YXlzIHB1cmUgYW5kIHVuaXQtdGVzdGFibGUuXG4gKi9cblxuLyoqIEhvdyBhIHNjYW4gZW50cnkgaXMgaGFuZGVkIHRvIHRoZSBkZXRlY3RvciBieSB0aGUgU3BpY2V0aWZ5IGFkYXB0ZXIuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0RW50cnkge1xuICAvKiogMC1iYXNlZCBwb3NpdGlvbiBpbiB0aGUgcGxheWxpc3QgYXQgc2NhbiB0aW1lLiBJZGVudGlmaWVzIGFuIG9jY3VycmVuY2UuICovXG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIC8qKiBUcmFjayBVUkkuIEV4YWN0IGR1cGxpY2F0ZXMgc2hhcmUgaXQ7IGVhY2ggb2NjdXJyZW5jZSBzdGlsbCBoYXMgaXRzIG93biB1aWQuICovXG4gIHVyaTogc3RyaW5nO1xuICAvKiogT2NjdXJyZW5jZSBpZCByZXR1cm5lZCBieSB0aGUgcGxheWxpc3QgY29udGVudHMgQVBJLiAqL1xuICB1aWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogQXJ0aXN0IGRpc3BsYXkgbmFtZXMsIGluIHBsYXlsaXN0IG9yZGVyLiAqL1xuICBhcnRpc3RzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgYWxidW1OYW1lOiBzdHJpbmc7XG4gIGFsYnVtVXJpOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIC8qKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMsIG9yIG51bGwgd2hlbiB1bmtub3duLiAqL1xuICBkdXJhdGlvbk1zOiBudW1iZXIgfCBudWxsO1xuICAvKiogSVNPIGRhdGUgc3RyaW5nIG9mIFwiYWRkZWQgYXRcIiwgb3IgXCJcIiB3aGVuIHVua25vd24uICovXG4gIGFkZGVkQXQ6IHN0cmluZztcbiAgLyoqIElTUkMgcmVjb3JkaW5nIGlkLCBvciBudWxsIHdoZW4gdW5rbm93biAvIG5vdCB5ZXQgZmV0Y2hlZC4gKi9cbiAgaXNyYzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqIEEgcGxheWxpc3QgZW50cnkgZW5yaWNoZWQgd2l0aCB0aGUgbm9ybWFsaXplZCBrZXlzIHVzZWQgYnkgdGhlIGRldGVjdG9yLiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2FubmVkVHJhY2sgZXh0ZW5kcyBQbGF5bGlzdEVudHJ5IHtcbiAgLyoqIHN0cmljdCBub3JtYWxpemVkIHRpdGxlIChsb3dlcmNhc2UsIHdoaXRlc3BhY2UgY29sbGFwc2VkKSAqL1xuICB0aXRsZUtleTogc3RyaW5nO1xuICAvKiogZnV6enkgbm9ybWFsaXplZCB0aXRsZSAoYWNjZW50cyBzdHJpcHBlZCwgbm9pc2Ugd29yZHMgcmVtb3ZlZCwgXHUyMDI2KSAqL1xuICBmdXp6eUtleTogc3RyaW5nO1xuICAvKiogbG93ZXJjYXNlIGFydGlzdCBuYW1lcyBmb3IgY29tcGFyaXNvbnMgKi9cbiAgYXJ0aXN0S2V5czogcmVhZG9ubHkgc3RyaW5nW107XG59XG5cbi8qKiBBbGwgc2l4IGNvbmZpZGVuY2UgbGV2ZWxzLCBmcm9tIG1vc3QgcmVsaWFibGUgdG8gbGVhc3QgcmVsaWFibGUuICovXG5leHBvcnQgdHlwZSBHcm91cElkID0gXCJleGFjdFwiIHwgXCJpc3JjXCIgfCBcInByb2JhYmxlXCIgfCBcImxpa2VseVwiIHwgXCJwb3NzaWJsZVwiIHwgXCJtYXliZVwiO1xuXG5leHBvcnQgY29uc3QgR1JPVVBfT1JERVI6IHJlYWRvbmx5IEdyb3VwSWRbXSA9IFtcbiAgXCJleGFjdFwiLFxuICBcImlzcmNcIixcbiAgXCJwcm9iYWJsZVwiLFxuICBcImxpa2VseVwiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwibWF5YmVcIixcbl07XG5cbi8qKiBSZWxpYWJpbGl0eSBzY29yZSBwZXIgbGV2ZWwsIDEgKGxvdykgdG8gNiAoY2VydGFpbikuIFVzZWQgYnkgdGhlIFVJIGdhdWdlLiAqL1xuZXhwb3J0IGNvbnN0IEdST1VQX1JFTElBQklMSVRZOiBSZWNvcmQ8R3JvdXBJZCwgbnVtYmVyPiA9IHtcbiAgZXhhY3Q6IDYsXG4gIGlzcmM6IDUsXG4gIHByb2JhYmxlOiA0LFxuICBsaWtlbHk6IDMsXG4gIHBvc3NpYmxlOiAyLFxuICBtYXliZTogMSxcbn07XG5cbi8qKlxuICogT25lIGdyb3VwIG9mIGludGVyY2hhbmdlYWJsZSBlbnRyaWVzLlxuICogYG1lbWJlcnNgIGlzIHNvcnRlZCBieSBwbGF5bGlzdCBwb3NpdGlvbjsgdGhlIGZpcnN0IG1lbWJlciBpcyB0aGUgZW50cnkgdGhlXG4gKiBkZXRlY3RvciBzdWdnZXN0cyBrZWVwaW5nIChub3RoaW5nIGlzIGV2ZXIgcHJlc2VsZWN0ZWQgaW4gdGhlIFVJKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEdXBsaWNhdGVHcm91cCB7XG4gIHJlYWRvbmx5IG1lbWJlcnM6IHJlYWRvbmx5IFNjYW5uZWRUcmFja1tdO1xufVxuXG5leHBvcnQgdHlwZSBEdXBsaWNhdGVSZXN1bHRzID0gUmVjb3JkPEdyb3VwSWQsIHJlYWRvbmx5IER1cGxpY2F0ZUdyb3VwW10+O1xuXG4vKiogRGV0ZWN0aW9uIHBlcmZvcm1hbmNlIGd1YXJkOiB0b3RhbCBkdXJhdGlvbiB0b2xlcmFuY2UgZm9yIFwibGlrZWx5XCIvXCJwb3NzaWJsZVwiLiAqL1xuZXhwb3J0IGNvbnN0IERVUkFUSU9OX1RPTEVSQU5DRV9NUyA9IDVfMDAwO1xuIiwgIi8qKlxuICogRHVwbGljYXRlIGRldGVjdGlvbiBwaXBlbGluZS5cbiAqXG4gKiBQdXJlIGxvZ2ljIG92ZXIgYFBsYXlsaXN0RW50cnlgIHZhbHVlcyBcdTIwMTQgbm8gU3BpY2V0aWZ5IGRlcGVuZGVuY3kuXG4gKlxuICogTGV2ZWxzIGFyZSBldmFsdWF0ZWQgc2VxdWVudGlhbGx5IGluIGNvbmZpZGVuY2Ugb3JkZXI6XG4gKiAgIGV4YWN0IFx1MjE5MiBpc3JjIFx1MjE5MiBwcm9iYWJsZSBcdTIxOTIgbGlrZWx5IFx1MjE5MiBwb3NzaWJsZSBcdTIxOTIgbWF5YmUuXG4gKiBFdmVyeSBlbnRyeSBhc3NpZ25lZCB0byBhIGdyb3VwIGlzIGNvbnN1bWVkLCBzbyBhbiBlbnRyeSBhcHBlYXJzIGluIGV4YWN0bHlcbiAqIG9uZSAob3IgemVybykgZ3JvdXAsIGFsd2F5cyBhdCB0aGUgaGlnaGVzdC1jb25maWRlbmNlIGxldmVsIHRoYXQgbWF0Y2hlZC5cbiAqL1xuaW1wb3J0IHsgbm9ybWFsaXplQXJ0aXN0LCBub3JtYWxpemVGdXp6eSwgbm9ybWFsaXplVGl0bGVTdHJpY3QgfSBmcm9tIFwiLi9ub3JtYWxpemUudHNcIjtcbmltcG9ydCB7XG4gIGJpZ3JhbVNpbWlsYXJpdHksXG4gIE1BWUJFX0xFTkdUSF9SQVRJT19HVUFSRCxcbiAgTUFZQkVfU0lNSUxBUklUWV9USFJFU0hPTEQsXG59IGZyb20gXCIuL3NpbWlsYXJpdHkudHNcIjtcbmltcG9ydCB7XG4gIERVUkFUSU9OX1RPTEVSQU5DRV9NUyxcbiAgdHlwZSBEdXBsaWNhdGVHcm91cCxcbiAgdHlwZSBEdXBsaWNhdGVSZXN1bHRzLFxuICBHUk9VUF9PUkRFUixcbiAgdHlwZSBHcm91cElkLFxuICB0eXBlIFBsYXlsaXN0RW50cnksXG4gIHR5cGUgU2Nhbm5lZFRyYWNrLFxufSBmcm9tIFwiLi90eXBlcy50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZHVwT3B0aW9ucyB7XG4gIC8qKiBUaXRsZXMnIG5vaXNlIHdvcmRzIHJlbW92ZWQgd2hlbiBidWlsZGluZyBmdXp6eSBrZXlzLiAqL1xuICBzdHJpcFdvcmRzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIC8qKiBNYXhpbXVtIGR1cmF0aW9uIGRpZmZlcmVuY2UgKG1zKSBhY2NlcHRlZCBieSBgbGlrZWx5YCBhbmQgYHBvc3NpYmxlYC4gKi9cbiAgZHVyYXRpb25Ub2xlcmFuY2VNcz86IG51bWJlcjtcbiAgLyoqIFNpbWlsYXJpdHkgdGhyZXNob2xkIGZvciB0aGUgYG1heWJlYCBsZXZlbC4gKi9cbiAgbWF5YmVTaW1pbGFyaXR5VGhyZXNob2xkPzogbnVtYmVyO1xuICAvKipcbiAgICogSG93IG1hbnkgc29ydGVkIG5laWdoYm91cnMgYXJlIGNvbXBhcmVkIHBlciBjYW5kaWRhdGUgaW4gdGhlIGBtYXliZWAgbGV2ZWwuXG4gICAqIFNpbWlsYXIgdGl0bGVzIGFyZSBhZGphY2VudCBvbmNlIHRoZSBwb29sIGlzIHNvcnRlZCBieSBmdXp6eSBrZXksIHNvIGFcbiAgICogc21hbGwgd2luZG93IGtlZXBzIHRoZSBsZXZlbCBuZWFyIE8obikgaW5zdGVhZCBvZiBPKG5cdTAwQjIpLlxuICAgKi9cbiAgbWF5YmVOZWlnaGJvcldpbmRvdz86IG51bWJlcjtcbn1cblxuY29uc3QgREVGQVVMVF9EVVJBVElPTl9UT0xFUkFOQ0VfTVMgPSBEVVJBVElPTl9UT0xFUkFOQ0VfTVM7XG5jb25zdCBERUZBVUxUX01BWUJFX1NJTUlMQVJJVFlfVEhSRVNIT0xEID0gTUFZQkVfU0lNSUxBUklUWV9USFJFU0hPTEQ7XG5jb25zdCBERUZBVUxUX01BWUJFX05FSUdIQk9SX1dJTkRPVyA9IDIwO1xuXG4vKiogVHJ1ZSBmb3IgU3BvdGlmeSAqdHJhY2sqIFVSSXMgXHUyMDE0IHRoZSBvbmx5IGtpbmQgdGhlIElTUkMgcXVlcnkgY2FuIGFuc3dlci4gKi9cbmNvbnN0IGlzVHJhY2tVcmkgPSAodXJpOiBzdHJpbmcpOiBib29sZWFuID0+IHVyaS5zdGFydHNXaXRoKFwic3BvdGlmeTp0cmFjazpcIik7XG5cbi8qKiBVbmtub3duIGR1cmF0aW9ucyBuZXZlciBkaXNhZ3JlZTsga25vd24gb25lcyBtdXN0IHN0YXkgd2l0aGluIHRvbGVyYW5jZS4gKi9cbmZ1bmN0aW9uIGR1cmF0aW9uc0FncmVlKGE6IFNjYW5uZWRUcmFjaywgYjogU2Nhbm5lZFRyYWNrLCB0b2xlcmFuY2VNczogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYS5kdXJhdGlvbk1zID09IG51bGwgfHxcbiAgICBiLmR1cmF0aW9uTXMgPT0gbnVsbCB8fFxuICAgIE1hdGguYWJzKGEuZHVyYXRpb25NcyAtIGIuZHVyYXRpb25NcykgPD0gdG9sZXJhbmNlTXNcbiAgKTtcbn1cblxuLyoqXG4gKiBTcGxpdCBhIGJ1Y2tldCBpbnRvIHN1Yi1ncm91cHMgd2hvc2UgZW50cmllcyBhZ3JlZSB3aXRoIHRoZSBidWNrZXQncyBoZWFkLlxuICogVGl0bGUgZXF1YWxpdHkgaXMgYW4gZXF1aXZhbGVuY2UgcmVsYXRpb24sIHNvIGNvbXBhcmluZyBhZ2FpbnN0IHRoZSBoZWFkIGlzXG4gKiBlbm91Z2g7IGR1cmF0aW9ucyBhY3QgYXMgYSBvbmUtd2F5IHNhbml0eSBjaGVjay5cbiAqL1xuZnVuY3Rpb24gc3BsaXRCeTxUPihpdGVtczogcmVhZG9ubHkgVFtdLCBhZ3JlZXM6IChhOiBULCBiOiBUKSA9PiBib29sZWFuKTogVFtdW10ge1xuICBjb25zdCBncm91cHM6IFRbXVtdID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IGhvc3QgPSBncm91cHMuZmluZCgoZ3JvdXApID0+IGFncmVlcyhncm91cFswXSwgaXRlbSkpO1xuICAgIGlmIChob3N0KSBob3N0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBncm91cHMucHVzaChbaXRlbV0pO1xuICB9XG4gIHJldHVybiBncm91cHM7XG59XG5cbi8qKiBGcmVzaCByZXN1bHRzIG9iamVjdCB3aXRoIGFuIGVtcHR5IGdyb3VwIGxpc3QgZm9yIGV2ZXJ5IGxldmVsLiAqL1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlSZXN1bHRzKCk6IFJlY29yZDxHcm91cElkLCBEdXBsaWNhdGVHcm91cFtdPiB7XG4gIGNvbnN0IHJlc3VsdHMgPSB7fSBhcyBSZWNvcmQ8R3JvdXBJZCwgRHVwbGljYXRlR3JvdXBbXT47XG4gIGZvciAoY29uc3QgaWQgb2YgR1JPVVBfT1JERVIpIHJlc3VsdHNbaWRdID0gW107XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vKiogQnVja2V0IGl0ZW1zIGJ5IGtleTsgaXRlbXMgd2hvc2Uga2V5IGlzIGBudWxsYCBhcmUgc2tpcHBlZC4gKi9cbmZ1bmN0aW9uIGdyb3VwQnk8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSwga2V5OiAoaXRlbTogVCkgPT4gc3RyaW5nIHwgbnVsbCk6IE1hcDxzdHJpbmcsIFRbXT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb25zdCBrID0ga2V5KGl0ZW0pO1xuICAgIGlmIChrID09IG51bGwpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGxpc3QgPSBtYXAuZ2V0KGspO1xuICAgIGlmIChsaXN0KSBsaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBtYXAuc2V0KGssIFtpdGVtXSk7XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBTY2FuIGEgZnVsbHkgbG9hZGVkIHBsYXlsaXN0IGFuZCBjb21wdXRlIHRoZSBkdXBsaWNhdGUgZ3JvdXBzIHBlciBsZXZlbC5cbiAqIEVudHJpZXMgbXVzdCBjYXJyeSBhIHVuaXF1ZSwgc3RhYmxlIGBwb3NpdGlvbmAgKHRoZWlyIHBsYXlsaXN0IGluZGV4KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdER1cGxpY2F0ZXMoXG4gIGVudHJpZXM6IHJlYWRvbmx5IFBsYXlsaXN0RW50cnlbXSxcbiAgb3B0aW9uczogRGVkdXBPcHRpb25zID0ge30sXG4pOiBEdXBsaWNhdGVSZXN1bHRzIHtcbiAgY29uc3QgcmVzdWx0cyA9IGNyZWF0ZUVtcHR5UmVzdWx0cygpO1xuICBpZiAoZW50cmllcy5sZW5ndGggPCAyKSByZXR1cm4gcmVzdWx0cztcblxuICBjb25zdCB0b2xlcmFuY2VNcyA9IG9wdGlvbnMuZHVyYXRpb25Ub2xlcmFuY2VNcyA/PyBERUZBVUxUX0RVUkFUSU9OX1RPTEVSQU5DRV9NUztcbiAgY29uc3QgbWF5YmVUaHJlc2hvbGQgPSBvcHRpb25zLm1heWJlU2ltaWxhcml0eVRocmVzaG9sZCA/PyBERUZBVUxUX01BWUJFX1NJTUlMQVJJVFlfVEhSRVNIT0xEO1xuICBjb25zdCBuZWlnaGJvcldpbmRvdyA9IG9wdGlvbnMubWF5YmVOZWlnaGJvcldpbmRvdyA/PyBERUZBVUxUX01BWUJFX05FSUdIQk9SX1dJTkRPVztcblxuICBjb25zdCBwb29sOiBTY2FubmVkVHJhY2tbXSA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gKHtcbiAgICAuLi5lbnRyeSxcbiAgICB0aXRsZUtleTogbm9ybWFsaXplVGl0bGVTdHJpY3QoZW50cnkubmFtZSksXG4gICAgZnV6enlLZXk6IG5vcm1hbGl6ZUZ1enp5KGVudHJ5Lm5hbWUsIG9wdGlvbnMuc3RyaXBXb3JkcyksXG4gICAgYXJ0aXN0S2V5czogZW50cnkuYXJ0aXN0cy5tYXAobm9ybWFsaXplQXJ0aXN0KS5maWx0ZXIoKG5hbWUpID0+IG5hbWUubGVuZ3RoID4gMCksXG4gIH0pKTtcblxuICBjb25zdCBjb25zdW1lZCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICAvKiogUmVjb3JkIGEgZ3JvdXAgYXQgYSBsZXZlbCBhbmQgY29uc3VtZSBpdHMgbWVtYmVycyAoc2tpcHBpbmcgc2luZ2xlcykuICovXG4gIGNvbnN0IG1lbWJlcnNBdCA9IChpZDogR3JvdXBJZCwgY2FuZGlkYXRlczogU2Nhbm5lZFRyYWNrW10pID0+IHtcbiAgICBjb25zdCBtZW1iZXJzID0gWy4uLmNhbmRpZGF0ZXNdLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKTtcbiAgICBpZiAobWVtYmVycy5sZW5ndGggPCAyKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgbWVtYmVycykgY29uc3VtZWQuYWRkKG1lbWJlci5wb3NpdGlvbik7XG4gICAgcmVzdWx0c1tpZF0ucHVzaCh7IG1lbWJlcnMgfSk7XG4gIH07XG5cbiAgLy8gLS0tIGV4YWN0OiB0aGUgdmVyeSBzYW1lIFVSSSBtb3JlIHRoYW4gb25jZS4gQW55IGNvbnRleHQgZW50cnkgY291bnRzLiAtLS1cbiAgLy8gU2hhcmluZyBhIFVSSSBpcyBuZWNlc3NhcnkgYnV0IG5vdCBzdWZmaWNpZW50OiBzb21lIHBheWxvYWRzIGhhbmQgdGhlIHNhbWVcbiAgLy8gKG9mdGVuIGRlZ2VuZXJhdGUpIFVSSSB0byB1bnJlbGF0ZWQgZW50cmllcyBcdTIwMTQgbG9jYWwgZmlsZXMgd2l0aCBubyB0YWdzLCBmb3JcbiAgLy8gaW5zdGFuY2UgXHUyMDE0IHNvIHRoZSBkaXNwbGF5ZWQgaWRlbnRpdHkgaGFzIHRvIGFncmVlIHRvby4gRW50cmllcyB0aGF0XG4gIC8vIGRpc2FncmVlIHN0YXkgdW5jb25zdW1lZCBhbmQga2VlcCBmbG93aW5nIGRvd24gdG8gdGhlIGxvd2VyIGxldmVscy5cbiAgY29uc3QgYnlVcmkgPSBncm91cEJ5KHBvb2wsICh0KSA9PiAodC51cmkgPyB0LnVyaSA6IG51bGwpKTtcbiAgZm9yIChjb25zdCBidWNrZXQgb2YgYnlVcmkudmFsdWVzKCkpIHtcbiAgICBjb25zdCB0d2lucyA9IHNwbGl0QnkoXG4gICAgICBidWNrZXQsXG4gICAgICAoYSwgYikgPT4gYS50aXRsZUtleSA9PT0gYi50aXRsZUtleSAmJiBkdXJhdGlvbnNBZ3JlZShhLCBiLCB0b2xlcmFuY2VNcyksXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHR3aW5zKSBtZW1iZXJzQXQoXCJleGFjdFwiLCBncm91cCk7XG4gIH1cblxuICAvLyAtLS0gaXNyYzogZGlmZmVyZW50IFVSSXMgZm9yIHRoZSBzYW1lIHJlY29yZGluZy4gUmVxdWlyZXMgYSBrbm93biBJU1JDLlxuICAvLyBUaXRsZXMgbGVnaXRpbWF0ZWx5IGRpZmZlciBiZXR3ZWVuIHJlbGVhc2VzLCBzbyBvbmx5IGR1cmF0aW9uIGFncmVlcyBoZXJlIFx1MjAxNFxuICAvLyBhIHNoYXJlZCBib2d1cyBVUkkgd291bGQgb3RoZXJ3aXNlIHBhaXIgdW5yZWxhdGVkIHRyYWNrcyB0aHJvdWdoIG9uZSBJU1JDLlxuICBjb25zdCBieUlzcmMgPSBncm91cEJ5KFxuICAgIHBvb2wuZmlsdGVyKCh0KSA9PiAhY29uc3VtZWQuaGFzKHQucG9zaXRpb24pICYmIGlzVHJhY2tVcmkodC51cmkpICYmIHQuaXNyYyksXG4gICAgKHQpID0+IHQuaXNyYyxcbiAgKTtcbiAgZm9yIChjb25zdCBidWNrZXQgb2YgYnlJc3JjLnZhbHVlcygpKSB7XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBzcGxpdEJ5KGJ1Y2tldCwgKGEsIGIpID0+IGR1cmF0aW9uc0FncmVlKGEsIGIsIHRvbGVyYW5jZU1zKSkpIHtcbiAgICAgIG1lbWJlcnNBdChcImlzcmNcIiwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBwcm9iYWJsZSAvIGxpa2VseTogaWRlbnRpY2FsIG5vcm1hbGl6ZWQgdGl0bGVzLCByZWZpbmVkIGJ5IGEgcHJlZGljYXRlLlxuICAvKiogQXQgbGVhc3Qgb25lIGFydGlzdCBpbiBjb21tb24sIGFuZCBuZWl0aGVyIHNpZGUgbWF5IGhhdmUgYW4gZW1wdHkgbGlzdC4gKi9cbiAgY29uc3QgYXJ0aXN0T3ZlcmxhcCA9IChhOiBTY2FubmVkVHJhY2ssIGI6IFNjYW5uZWRUcmFjayk6IGJvb2xlYW4gPT4ge1xuICAgIGlmIChhLmFydGlzdEtleXMubGVuZ3RoID09PSAwIHx8IGIuYXJ0aXN0S2V5cy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBvdGhlciA9IG5ldyBTZXQoYi5hcnRpc3RLZXlzKTtcbiAgICByZXR1cm4gYS5hcnRpc3RLZXlzLnNvbWUoKG5hbWUpID0+IG90aGVyLmhhcyhuYW1lKSk7XG4gIH07XG4gIC8qKiBCb3RoIGR1cmF0aW9ucyBrbm93biBhbmQgd2l0aGluIHRoZSBsZXZlbCdzIHRvbGVyYW5jZSBvZiBlYWNoIG90aGVyLiAqL1xuICBjb25zdCBjbG9zZUR1cmF0aW9ucyA9IChhOiBTY2FubmVkVHJhY2ssIGI6IFNjYW5uZWRUcmFjayk6IGJvb2xlYW4gPT5cbiAgICBhLmR1cmF0aW9uTXMgIT0gbnVsbCAmJlxuICAgIGIuZHVyYXRpb25NcyAhPSBudWxsICYmXG4gICAgTWF0aC5hYnMoYS5kdXJhdGlvbk1zIC0gYi5kdXJhdGlvbk1zKSA8PSB0b2xlcmFuY2VNcztcblxuICAvKiogVGl0bGVzIG9mIHRoZSBlbnRyaWVzIHN0aWxsIGF2YWlsYWJsZSwgY2x1c3RlcmVkIGJ5IHN0cmljdCB0aXRsZSBrZXkuICovXG4gIGNvbnN0IHRpdGxlQ2x1c3RlcnMgPSAoKSA9PlxuICAgIGdyb3VwQnkoXG4gICAgICBwb29sLmZpbHRlcigodCkgPT4gIWNvbnN1bWVkLmhhcyh0LnBvc2l0aW9uKSAmJiBpc1RyYWNrVXJpKHQudXJpKSAmJiB0LnRpdGxlS2V5KSxcbiAgICAgICh0KSA9PiB0LnRpdGxlS2V5LFxuICAgICkudmFsdWVzKCk7XG5cbiAgZm9yIChjb25zdCBjbHVzdGVyIG9mIHRpdGxlQ2x1c3RlcnMoKSkge1xuICAgIGZvciAoY29uc3QgYmFzZSBvZiBjbHVzdGVyKSB7XG4gICAgICBpZiAoY29uc3VtZWQuaGFzKGJhc2UucG9zaXRpb24pKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBbYmFzZV07XG4gICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGNsdXN0ZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSBiYXNlIHx8IGNvbnN1bWVkLmhhcyhvdGhlci5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgICAvLyBBbiBlbXB0eSBhcnRpc3QgbGlzdCBjYW4gbmV2ZXIgb3ZlcmxhcCwgc28gaXQgY2Fubm90IGpvaW4gYSBncm91cC5cbiAgICAgICAgaWYgKG90aGVyLmFydGlzdEtleXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGFydGlzdE92ZXJsYXAoYmFzZSwgb3RoZXIpKSBtYXRjaGVzLnB1c2gob3RoZXIpO1xuICAgICAgfVxuICAgICAgbWVtYmVyc0F0KFwicHJvYmFibGVcIiwgbWF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBjbHVzdGVyIG9mIHRpdGxlQ2x1c3RlcnMoKSkge1xuICAgIGZvciAoY29uc3QgYmFzZSBvZiBjbHVzdGVyKSB7XG4gICAgICBpZiAoY29uc3VtZWQuaGFzKGJhc2UucG9zaXRpb24pKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBbYmFzZV07XG4gICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGNsdXN0ZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSBiYXNlIHx8IGNvbnN1bWVkLmhhcyhvdGhlci5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgICBpZiAob3RoZXIuZHVyYXRpb25NcyA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNsb3NlRHVyYXRpb25zKGJhc2UsIG90aGVyKSkgbWF0Y2hlcy5wdXNoKG90aGVyKTtcbiAgICAgIH1cbiAgICAgIG1lbWJlcnNBdChcImxpa2VseVwiLCBtYXRjaGVzKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gcG9zc2libGUgLyBtYXliZTogZnV6enkgdGl0bGVzLiBDbHVzdGVycyBuZWVkIGEgdXNhYmxlIGZ1enp5IGtleS5cbiAgY29uc3QgZnV6enlQb29sID0gcG9vbC5maWx0ZXIoXG4gICAgKHQpID0+ICFjb25zdW1lZC5oYXModC5wb3NpdGlvbikgJiYgaXNUcmFja1VyaSh0LnVyaSkgJiYgdC5mdXp6eUtleS5sZW5ndGggPj0gMixcbiAgKTtcblxuICBjb25zdCBieUZ1enp5S2V5ID0gZ3JvdXBCeShmdXp6eVBvb2wsICh0KSA9PiB0LmZ1enp5S2V5KTtcbiAgZm9yIChjb25zdCBjbHVzdGVyIG9mIGJ5RnV6enlLZXkudmFsdWVzKCkpIHtcbiAgICBmb3IgKGNvbnN0IGJhc2Ugb2YgY2x1c3Rlcikge1xuICAgICAgaWYgKGNvbnN1bWVkLmhhcyhiYXNlLnBvc2l0aW9uKSkgY29udGludWU7XG4gICAgICBjb25zdCBtYXRjaGVzID0gW2Jhc2VdO1xuICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBjbHVzdGVyKSB7XG4gICAgICAgIGlmIChvdGhlciA9PT0gYmFzZSB8fCBjb25zdW1lZC5oYXMob3RoZXIucG9zaXRpb24pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKG90aGVyLmR1cmF0aW9uTXMgPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIGlmIChjbG9zZUR1cmF0aW9ucyhiYXNlLCBvdGhlcikpIG1hdGNoZXMucHVzaChvdGhlcik7XG4gICAgICB9XG4gICAgICBtZW1iZXJzQXQoXCJwb3NzaWJsZVwiLCBtYXRjaGVzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXliZVBvb2wgPSBmdXp6eVBvb2wuZmlsdGVyKCh0KSA9PiAhY29uc3VtZWQuaGFzKHQucG9zaXRpb24pKTtcblxuICBmb3IgKGNvbnN0IGJ1Y2tldCBvZiBncm91cEJ5KG1heWJlUG9vbCwgKHQpID0+IHQuZnV6enlLZXkuY2hhckF0KDApKS52YWx1ZXMoKSkge1xuICAgIGJ1Y2tldC5zb3J0KChhLCBiKSA9PiAoYS5mdXp6eUtleSA8IGIuZnV6enlLZXkgPyAtMSA6IGEuZnV6enlLZXkgPiBiLmZ1enp5S2V5ID8gMSA6IDApKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYmFzZSA9IGJ1Y2tldFtpXTtcbiAgICAgIGlmIChjb25zdW1lZC5oYXMoYmFzZS5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IFtiYXNlXTtcbiAgICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5taW4oaSArIG5laWdoYm9yV2luZG93LCBidWNrZXQubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGxpbWl0OyBqKyspIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gYnVja2V0W2pdO1xuICAgICAgICAvLyBBIGNhbmRpZGF0ZSBtYXkgYWxyZWFkeSBzaXQgaW4gYW4gZWFybGllciBncm91cDogcmUtdXNpbmcgaXQgd291bGRcbiAgICAgICAgLy8gcmVuZGVyIChhbmQgc2VsZWN0KSB0aGUgc2FtZSBvY2N1cnJlbmNlIHR3aWNlLlxuICAgICAgICBpZiAoY29uc3VtZWQuaGFzKGNhbmRpZGF0ZS5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgICBpZiAobGVuZ3RoTWlzbWF0Y2goYmFzZSwgY2FuZGlkYXRlKSkgY29udGludWU7XG4gICAgICAgIGlmIChiaWdyYW1TaW1pbGFyaXR5KGJhc2UuZnV6enlLZXksIGNhbmRpZGF0ZS5mdXp6eUtleSkgPCBtYXliZVRocmVzaG9sZCkgY29udGludWU7XG4gICAgICAgIG1hdGNoZXMucHVzaChjYW5kaWRhdGUpO1xuICAgICAgfVxuICAgICAgbWVtYmVyc0F0KFwibWF5YmVcIiwgbWF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKiBDaGVhcCBwcmUtZmlsdGVyOiBwYWlycyB3aXRoIGEgaHVnZSBsZW5ndGggZ2FwIGNhbiBuZXZlciByZWFjaCB0aGUgdGhyZXNob2xkLiAqL1xuZnVuY3Rpb24gbGVuZ3RoTWlzbWF0Y2goYTogU2Nhbm5lZFRyYWNrLCBiOiBTY2FubmVkVHJhY2spOiBib29sZWFuIHtcbiAgY29uc3QgbG9uZ2VyID0gTWF0aC5tYXgoYS5mdXp6eUtleS5sZW5ndGgsIGIuZnV6enlLZXkubGVuZ3RoKTtcbiAgY29uc3Qgc2hvcnRlciA9IE1hdGgubWluKGEuZnV6enlLZXkubGVuZ3RoLCBiLmZ1enp5S2V5Lmxlbmd0aCk7XG4gIHJldHVybiBzaG9ydGVyID4gMCAmJiBsb25nZXIgPiBzaG9ydGVyICogTUFZQkVfTEVOR1RIX1JBVElPX0dVQVJEO1xufVxuIiwgImltcG9ydCB7IHR5cGUgTW91c2VFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCwgdHlwZSBSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zLnRzeFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hQbGF5bGlzdEVkaXRhYmlsaXR5LFxuICBmZXRjaFBsYXlsaXN0RW50cmllcyxcbiAgaHlkcmF0ZUlzcmNzLFxuICBub3RpY2VzLFxuICBub3RpZnlGYWlsdXJlLFxuICBub3RpZnlTdWNjZXNzLFxuICB0eXBlIFBsYXlsaXN0SWRlbnRpdHksXG4gIFJFTU9WQUxfQkFUQ0hfU0laRSxcbiAgdHlwZSBSZW1vdmFsU3VtbWFyeSxcbiAgcmVtb3ZlRW50cmllcyxcbn0gZnJvbSBcIi4uL2FkYXB0ZXIudHNcIjtcbmltcG9ydCB7IGRldGVjdER1cGxpY2F0ZXMgfSBmcm9tIFwiLi4vZGV0ZWN0aW9uL2RlZHVwLnRzXCI7XG5pbXBvcnQge1xuICB0eXBlIER1cGxpY2F0ZUdyb3VwLFxuICBHUk9VUF9PUkRFUixcbiAgR1JPVVBfUkVMSUFCSUxJVFksXG4gIHR5cGUgR3JvdXBJZCxcbiAgdHlwZSBQbGF5bGlzdEVudHJ5LFxufSBmcm9tIFwiLi4vZGV0ZWN0aW9uL3R5cGVzLnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3N0cmluZ3MudHNcIjtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtYXRlcnMgKi9cblxuLyoqIGBtOnNzYCBmb3IgYSBkdXJhdGlvbiwgb3IgYC0tOi0tYCB3aGVuIFNwb3RpZnkgZ2F2ZSB1cyBub3RoaW5nIHVzYWJsZS4gKi9cbmZ1bmN0aW9uIGZvcm1hdER1cmF0aW9uKG1zOiBudW1iZXIgfCBudWxsKTogc3RyaW5nIHtcbiAgaWYgKG1zID09IG51bGwgfHwgbXMgPD0gMCkgcmV0dXJuIFwiLS06LS1cIjtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwKTtcbiAgcmV0dXJuIGAke01hdGguZmxvb3IocyAvIDYwKX06JHsocyAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xufVxuXG4vKiogSHVtYW4tcmVhZGFibGUgXCJhZGRlZFwiIGRhdGU7IHRoZSByYXcgc3RyaW5nIHdoZW4gaXQgaXMgbm90IHBhcnNlYWJsZS4gKi9cbmZ1bmN0aW9uIGZvcm1hdEFkZGVkRGF0ZShpc286IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNvKSByZXR1cm4gXCJcIjtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzbyk7XG4gIGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSByZXR1cm4gaXNvO1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwiLCBkYXk6IFwibnVtZXJpY1wiIH0pO1xufVxuXG4vKiogU2VnbWVudCBjb2xvciBwZXIgcmVsaWFiaWxpdHkgc2NvcmUgKDEgPSB3YXJtIHJlZCwgNiA9IFNwb3RpZnkgZ3JlZW4pLiAqL1xuY29uc3QgUkVMSUFCSUxJVFlfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiNlMDc0NWNcIixcbiAgMjogXCIjZDk5ZTRhXCIsXG4gIDM6IFwiI2JmYmE1MFwiLFxuICA0OiBcIiM4ZGJkNTFcIixcbiAgNTogXCIjNGJjMDVlXCIsXG4gIDY6IFwiIzFkYjk1NFwiLFxufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbW9kYWwgcm9vdCAqL1xuXG5jb25zdCBNT0RBTF9DT05UQUlORVJfSUQgPSBcImR1cGxpY2F0ZS1maW5kZXItbW9kYWwtY29udGFpbmVyXCI7XG5sZXQgbW9kYWxSb290OiBSb290IHwgbnVsbCA9IG51bGw7XG5cbi8qKiBDbG9zZSBhbmQgZnVsbHkgdW5tb3VudCB0aGUgZHVwbGljYXRlIGZpbmRlciBtb2RhbC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpOiB2b2lkIHtcbiAgaWYgKG1vZGFsUm9vdCkge1xuICAgIG1vZGFsUm9vdC51bm1vdW50KCk7XG4gICAgbW9kYWxSb290ID0gbnVsbDtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChNT0RBTF9DT05UQUlORVJfSUQpPy5yZW1vdmUoKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufVxuXG4vKiogT3BlbiB0aGUgZHVwbGljYXRlIGZpbmRlciBmb3IgdGhlIGdpdmVuIHBsYXlsaXN0LiBSZXBsYWNlcyBhbiBvcGVuIG9uZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RHVwbGljYXRlRmluZGVyTW9kYWwocGxheWxpc3Q6IFBsYXlsaXN0SWRlbnRpdHkpOiB2b2lkIHtcbiAgY2xvc2VEdXBsaWNhdGVGaW5kZXIoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gTU9EQUxfQ09OVEFJTkVSX0lEO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIG1vZGFsUm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgbW9kYWxSb290LnJlbmRlcig8RHVwbGljYXRlRmluZGVyTW9kYWwgcGxheWxpc3Q9e3BsYXlsaXN0fSAvPik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50cyAqL1xuXG50eXBlIFBoYXNlID0gXCJsb2FkaW5nXCIgfCBcInJlYWR5XCIgfCBcImVycm9yXCIgfCBcImVtcHR5XCI7XG5cbmludGVyZmFjZSBUcmFja1Jvd1Byb3BzIHtcbiAgdHJhY2s6IFBsYXlsaXN0RW50cnk7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGNhbkVkaXQ6IGJvb2xlYW47XG4gIG5vd1BsYXlpbmc6IE5vd1BsYXlpbmc7XG4gIG9uVG9nZ2xlOiAocG9zaXRpb246IG51bWJlcikgPT4gdm9pZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBub3cgcGxheWluZyAqL1xuXG5pbnRlcmZhY2UgTm93UGxheWluZyB7XG4gIHVyaTogc3RyaW5nIHwgbnVsbDtcbiAgaXNQYXVzZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBFeHRyYWN0IGp1c3Qgd2hhdCB0aGUgcm93cyBjYXJlIGFib3V0IGZyb20gYSBwbGF5ZXIgc3RhdGUgKG9yIG5vdGhpbmcpLiAqL1xuZnVuY3Rpb24gcmVhZE5vd1BsYXlpbmcoc3RhdGU6IFNwaWNldGlmeS5QbGF5ZXJTdGF0ZSB8IHVuZGVmaW5lZCk6IE5vd1BsYXlpbmcge1xuICByZXR1cm4geyB1cmk6IHN0YXRlPy5pdGVtPy51cmkgPz8gbnVsbCwgaXNQYXVzZWQ6IHN0YXRlPy5pc1BhdXNlZCA/PyB0cnVlIH07XG59XG5cbi8qKiBTaW5nbGUgbW9kYWwtd2lkZSBzdWJzY3JpcHRpb24gdG8gcGxheS9wYXVzZS90cmFjayBjaGFuZ2VzLiBEZWxpYmVyYXRlbHlcbiAqICBOT1QgdGhlIDEwIEh6IHByb2dyZXNzIHN0cmVhbTogdGhlIHJvd3Mgb25seSBuZWVkIHRvIGtub3cgd2hpY2ggdHJhY2sgaXNcbiAqICBwbGF5aW5nIFx1MjAxNCBzdWJzY3JpYmluZyBldmVyeSByb3cgdG8gdGhhdCBzdHJlYW0gZmxvb2RzIFJlYWN0IHdpdGggcmUtcmVuZGVyc1xuICogIGFuZCB0ZWFycyB0aGUgcGFuZWwncyBwYWludCBvbiBsYXJnZSBwbGF5bGlzdHMuICovXG5mdW5jdGlvbiB1c2VOb3dQbGF5aW5nKCk6IE5vd1BsYXlpbmcge1xuICBjb25zdCBbbm93UGxheWluZywgc2V0Tm93UGxheWluZ10gPSB1c2VTdGF0ZTxOb3dQbGF5aW5nPigoKSA9PlxuICAgIHJlYWROb3dQbGF5aW5nKFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3N0YXRlKSxcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qKiBVcGRhdGUgdGhlIHNoYXJlZCBzdGF0ZSBmb3Igb25lIHBsYXllciBcInVwZGF0ZVwiIGV2ZW50LiAqL1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50OiB7IGRhdGE6IFNwaWNldGlmeS5QbGF5ZXJTdGF0ZSB9KSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gcmVhZE5vd1BsYXlpbmcoZXZlbnQuZGF0YSk7XG4gICAgICAvLyBQb3NpdGlvbiB0aWNrcyBhbHNvIGVtaXQgXCJ1cGRhdGVcIjoga2VlcCB0aGUgc2FtZSBvYmplY3Qgd2hpbGUgbmVpdGhlclxuICAgICAgLy8gdGhlIHRyYWNrIG5vciB0aGUgcGF1c2Ugc3RhdGUgY2hhbmdlZCwgc28gUmVhY3Qgc2tpcHMgdGhlIHJlLXJlbmRlci5cbiAgICAgIHNldE5vd1BsYXlpbmcoKHByZXYpID0+XG4gICAgICAgIHByZXYudXJpID09PSBuZXh0LnVyaSAmJiBwcmV2LmlzUGF1c2VkID09PSBuZXh0LmlzUGF1c2VkID8gcHJldiA6IG5leHQsXG4gICAgICApO1xuICAgIH07XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIG9uQ2hhbmdlLCB7fSk7XG4gICAgcmV0dXJuICgpID0+IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcihcInVwZGF0ZVwiLCBvbkNoYW5nZSwge30pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vd1BsYXlpbmc7XG59XG5cbi8qKiBBdWRpdGlvbiBidXR0b246IHBsYXkgdGhpcyBjYW5kaWRhdGUgdG8gY29tcGFyZSBpdCBieSBlYXIuICovXG5mdW5jdGlvbiBSb3dQbGF5QnV0dG9uKHsgdXJpLCBub3dQbGF5aW5nIH06IHsgdXJpOiBzdHJpbmc7IG5vd1BsYXlpbmc6IE5vd1BsYXlpbmcgfSkge1xuICBjb25zdCBpc1RoaXNUcmFjayA9IG5vd1BsYXlpbmcudXJpID09PSB1cmk7XG4gIGNvbnN0IGlzUGxheWluZ1RoaXMgPSBpc1RoaXNUcmFjayAmJiAhbm93UGxheWluZy5pc1BhdXNlZDtcbiAgY29uc3QgbGFiZWwgPSBpc1BsYXlpbmdUaGlzID8gc3RyaW5ncy5yb3cucGF1c2UgOiBzdHJpbmdzLnJvdy5wbGF5O1xuXG4gIC8qKiBUb2dnbGUgdGhpcyB0cmFjazogcGxheSBpdCwgcGF1c2UgaXQsIG9yIHJlc3VtZSBpdCBpbiBwbGFjZS4gKi9cbiAgY29uc3Qgb25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChpc1RoaXNUcmFjaykge1xuICAgICAgaWYgKG5vd1BsYXlpbmcuaXNQYXVzZWQpIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucmVzdW1lKHt9KTtcbiAgICAgIGVsc2UgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5wYXVzZSh7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGxheSh7IHVyaSB9LCB7fSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICBjbGFzc05hbWU9e2BkdXBmaW5kLXJvd19fcGxheSR7aXNQbGF5aW5nVGhpcyA/IFwiIGR1cGZpbmQtcm93X19wbGF5LS1vblwiIDogXCJcIn1gfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHtpc1BsYXlpbmdUaGlzID8gPEljb25zLlJlYWN0LnBhdXNlIHNpemU9ezE0fSAvPiA6IDxJY29ucy5SZWFjdC5wbGF5IHNpemU9ezE0fSAvPn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuLyoqIE9uZSBwbGF5bGlzdCByb3c6IGNoZWNrYm94LCBhcnR3b3JrLCBtZXRhZGF0YSBhbmQgdGhlIGF1ZGl0aW9uIGJ1dHRvbi4gKi9cbmZ1bmN0aW9uIFRyYWNrUm93KHsgdHJhY2ssIGNoZWNrZWQsIGNhbkVkaXQsIG5vd1BsYXlpbmcsIG9uVG9nZ2xlIH06IFRyYWNrUm93UHJvcHMpIHtcbiAgY29uc3QgY2FuUGxheSA9IHRyYWNrLnVyaS5zdGFydHNXaXRoKFwic3BvdGlmeTp0cmFjazpcIik7XG4gIC8vIFJlbW92YWwgdGFyZ2V0cyBhbiBvY2N1cnJlbmNlIGlkLCBzbyByb3dzIHdpdGhvdXQgb25lIHN0YXkgdmlzaWJsZSBmb3JcbiAgLy8gcmV2aWV3IGJ1dCBhcmUgbG9ja2VkIFx1MjAxNCBhbmQgdGhlIGhvdmVyIHRleHQgbmFtZXMgdGhlIGFjdHVhbCByZWFzb24uXG4gIGNvbnN0IGRpc2FibGVkID0gIWNhbkVkaXQgfHwgIXRyYWNrLnVpZDtcbiAgY29uc3QgZGlzYWJsZWRUaXRsZSA9ICFjYW5FZGl0ID8gc3RyaW5ncy5zdGF0ZXMucmVhZE9ubHlOb3RpY2UgOiBzdHJpbmdzLnN0YXRlcy5ub1VpZE5vdGljZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGR1cGZpbmQtcm93JHtjaGVja2VkID8gXCIgZHVwZmluZC1yb3ctLWNoZWNrZWRcIiA6IFwiXCJ9JHtkaXNhYmxlZCA/IFwiIGR1cGZpbmQtcm93LS1kaXNhYmxlZFwiIDogXCJcIn1gfVxuICAgICAgb25DbGljaz17ZGlzYWJsZWQgPyB1bmRlZmluZWQgOiAoKSA9PiBvblRvZ2dsZSh0cmFjay5wb3NpdGlvbil9XG4gICAgPlxuICAgICAgey8qIFRoZSBjaGVja2JveCBzdG9wcyB0aGUgZXZlbnQgc28gdGhlIHJvdyBoYW5kbGVyIGRvZXMgbm90IHRvZ2dsZSB0d2ljZS4gKi99XG4gICAgICA8aW5wdXRcbiAgICAgICAgYXJpYS1sYWJlbD17dHJhY2submFtZX1cbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1yb3dfX2NoZWNrYm94XCJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25Ub2dnbGUodHJhY2sucG9zaXRpb24pfVxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICB0aXRsZT17ZGlzYWJsZWQgPyBkaXNhYmxlZFRpdGxlIDogdW5kZWZpbmVkfVxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgLz5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1yb3dfX2FydFwiXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgb25FcnJvcj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfX1cbiAgICAgICAgc3JjPXt0cmFjay5pbWFnZVVybH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtcm93X19pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1yb3dfX3RpdGxlbGluZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtcm93X190aXRsZVwiPnt0cmFjay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXJvd19fZHVyYXRpb25cIj57Zm9ybWF0RHVyYXRpb24odHJhY2suZHVyYXRpb25Ncyl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1yb3dfX21ldGFcIj5cbiAgICAgICAgICB7dHJhY2suYXJ0aXN0cy5sZW5ndGggPiAwID8gdHJhY2suYXJ0aXN0cy5qb2luKFwiLCBcIikgOiBzdHJpbmdzLnJvdy5ub0FydGlzdHN9XG4gICAgICAgICAge1wiIFx1MDBCNyBcIn1cbiAgICAgICAgICB7dHJhY2suYWxidW1OYW1lIHx8IHN0cmluZ3Mucm93LnVua25vd25BbGJ1bX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXJvd19fd2hlcmVcIj5cbiAgICAgICAgICB7YCMke3RyYWNrLnBvc2l0aW9uICsgMX1gfVxuICAgICAgICAgIHt0cmFjay5hZGRlZEF0ID8gYCBcdTAwQjcgYWRkZWQgJHtmb3JtYXRBZGRlZERhdGUodHJhY2suYWRkZWRBdCl9YCA6IFwiXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2NhblBsYXkgJiYgPFJvd1BsYXlCdXR0b24gbm93UGxheWluZz17bm93UGxheWluZ30gdXJpPXt0cmFjay51cml9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKiogQ2FyZCBob2xkaW5nIGV2ZXJ5IG9jY3VycmVuY2Ugb2Ygb25lIGR1cGxpY2F0ZSBncm91cC4gKi9cbmZ1bmN0aW9uIEdyb3VwQ2FyZCh7XG4gIGdyb3VwLFxuICBzZWxlY3RlZCxcbiAgY2FuRWRpdCxcbiAgbm93UGxheWluZyxcbiAgb25Ub2dnbGUsXG59OiB7XG4gIGdyb3VwOiBEdXBsaWNhdGVHcm91cDtcbiAgc2VsZWN0ZWQ6IFJlYWRvbmx5U2V0PG51bWJlcj47XG4gIGNhbkVkaXQ6IGJvb2xlYW47XG4gIG5vd1BsYXlpbmc6IE5vd1BsYXlpbmc7XG4gIG9uVG9nZ2xlOiAocG9zaXRpb246IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgaWYgKGdyb3VwLm1lbWJlcnMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWdyb3VwXCI+XG4gICAgICB7Z3JvdXAubWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZ3JvdXBfX3Jvd1wiIGtleT17bWVtYmVyLnBvc2l0aW9ufT5cbiAgICAgICAgICA8VHJhY2tSb3dcbiAgICAgICAgICAgIGNhbkVkaXQ9e2NhbkVkaXR9XG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZC5oYXMobWVtYmVyLnBvc2l0aW9uKX1cbiAgICAgICAgICAgIG5vd1BsYXlpbmc9e25vd1BsYXlpbmd9XG4gICAgICAgICAgICBvblRvZ2dsZT17b25Ub2dnbGV9XG4gICAgICAgICAgICB0cmFjaz17bWVtYmVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8qKiBDb25maWRlbmNlIG1ldGVyOiBgdmFsdWVgIG9mIGBHUk9VUF9PUkRFUi5sZW5ndGhgIHNlZ21lbnRzIGxpdCB1cC4gKi9cbmZ1bmN0aW9uIEdhdWdlKHsgdmFsdWUgfTogeyB2YWx1ZTogbnVtYmVyIH0pIHtcbiAgY29uc3QgdG90YWwgPSBHUk9VUF9PUkRFUi5sZW5ndGg7XG4gIGNvbnN0IGNvbG9yID0gUkVMSUFCSUxJVFlfQ09MT1JTW3ZhbHVlXSA/PyBSRUxJQUJJTElUWV9DT0xPUlNbMV07XG4gIHJldHVybiAoXG4gICAgPGRpdiBhcmlhLWxhYmVsPXtgQ29uZmlkZW5jZSAke3ZhbHVlfSBvZiAke3RvdGFsfWB9IGNsYXNzTmFtZT1cImR1cGZpbmQtZ2F1Z2VcIiByb2xlPVwiaW1nXCI+XG4gICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWwgfSwgKF8sIGluZGV4KSA9PiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZHVwZmluZC1nYXVnZV9fc2VnJHtpbmRleCA8IHZhbHVlID8gXCIgZHVwZmluZC1nYXVnZV9fc2VnLS1vblwiIDogXCJcIn1gfVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgc3R5bGU9e2luZGV4IDwgdmFsdWUgPyB7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKiogVGhlIHdob2xlIGZpbmRlcjogc2NhbiBsaWZlY3ljbGUsIHNlbGVjdGlvbiBzdGF0ZSwgcmV2aWV3IGFuZCByZW1vdmFsLiAqL1xuZnVuY3Rpb24gRHVwbGljYXRlRmluZGVyTW9kYWwoeyBwbGF5bGlzdCB9OiB7IHBsYXlsaXN0OiBQbGF5bGlzdElkZW50aXR5IH0pIHtcbiAgY29uc3QgW3BoYXNlLCBzZXRQaGFzZV0gPSB1c2VTdGF0ZTxQaGFzZT4oXCJsb2FkaW5nXCIpO1xuICBjb25zdCBbcHJvZ3Jlc3NUZXh0LCBzZXRQcm9ncmVzc1RleHRdID0gdXNlU3RhdGU8c3RyaW5nPihzdHJpbmdzLnN0YXRlcy5sb2FkaW5nVHJhY2tzKTtcbiAgY29uc3QgW2VudHJpZXMsIHNldEVudHJpZXNdID0gdXNlU3RhdGU8UGxheWxpc3RFbnRyeVtdPihbXSk7XG4gIGNvbnN0IFtjYW5FZGl0LCBzZXRDYW5FZGl0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZUxldmVsLCBzZXRBY3RpdmVMZXZlbF0gPSB1c2VTdGF0ZTxHcm91cElkPihcImV4YWN0XCIpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPFJlYWRvbmx5U2V0PG51bWJlcj4+KG5ldyBTZXQoKSk7XG4gIGNvbnN0IFtjb25maXJtT3Blbiwgc2V0Q29uZmlybU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVtb3ZhbFByb2dyZXNzLCBzZXRSZW1vdmFsUHJvZ3Jlc3NdID0gdXNlU3RhdGU8eyBkb25lOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfSB8IG51bGw+KFxuICAgIG51bGwsXG4gICk7XG4gIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8vIE9uZSBwbGF5ZXIgc3Vic2NyaXB0aW9uIGZvciB0aGUgd2hvbGUgbW9kYWwgKHNlZSBgdXNlTm93UGxheWluZ2ApLlxuICBjb25zdCBub3dQbGF5aW5nID0gdXNlTm93UGxheWluZygpO1xuXG4gIGNvbnN0IGFib3J0UmVmID0gdXNlUmVmPEFib3J0Q29udHJvbGxlciB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFib3J0UmVmLmN1cnJlbnQ/LmFib3J0KCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqIEVzY2FwZSBjbG9zZXMgdGhlIHdpbmRvdyBcdTIwMTQgbmV2ZXIgd2hpbGUgYSByZW1vdmFsIGlzIGluIGZsaWdodC4gKi9cbiAgICBjb25zdCBvbktleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IFwiRXNjYXBlXCIpIHJldHVybjtcbiAgICAgIC8vIE5ldmVyIGRyb3AgdGhlIHdpbmRvdyB3aGlsZSBhIGRlbGV0aW9uIGlzIHJ1bm5pbmcuXG4gICAgICBpZiAocmVtb3ZhbFByb2dyZXNzKSByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VEdXBsaWNhdGVGaW5kZXIoKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gIH0sIFtyZW1vdmFsUHJvZ3Jlc3NdKTtcblxuICAvKiogTG9hZCB0aGUgcGxheWxpc3QsIHNob3cgaXQsIHRoZW4gaHlkcmF0ZSBJU1JDcyBpbiB0aGUgYmFja2dyb3VuZC4gKi9cbiAgY29uc3Qgc2NhbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBhYm9ydFJlZi5jdXJyZW50Py5hYm9ydCgpO1xuICAgIGNvbnN0IGFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGFib3J0UmVmLmN1cnJlbnQgPSBhYm9ydDtcblxuICAgIHNldFBoYXNlKFwibG9hZGluZ1wiKTtcbiAgICBzZXRQcm9ncmVzc1RleHQoc3RyaW5ncy5zdGF0ZXMubG9hZGluZ1RyYWNrcyk7XG4gICAgc2V0U2VsZWN0ZWQobmV3IFNldCgpKTtcbiAgICBzZXRDb25maXJtT3BlbihmYWxzZSk7XG4gICAgc2V0U3VtbWFyeShudWxsKTtcbiAgICBzZXRDYW5FZGl0KGZhbHNlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBlZGl0YWJpbGl0eSA9IGF3YWl0IGZldGNoUGxheWxpc3RFZGl0YWJpbGl0eShwbGF5bGlzdC51cmkpO1xuICAgICAgaWYgKGFib3J0LnNpZ25hbC5hYm9ydGVkKSByZXR1cm47XG4gICAgICBzZXRDYW5FZGl0KGVkaXRhYmlsaXR5LmNhbkVkaXQpO1xuXG4gICAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBmZXRjaFBsYXlsaXN0RW50cmllcyhwbGF5bGlzdC51cmksIHtcbiAgICAgICAgc2lnbmFsOiBhYm9ydC5zaWduYWwsXG4gICAgICAgIG9uUHJvZ3Jlc3M6IChsb2FkZWRDb3VudCkgPT4gc2V0UHJvZ3Jlc3NUZXh0KHN0cmluZ3Muc3RhdGVzLmxvYWRlZENvdW50KGxvYWRlZENvdW50KSksXG4gICAgICB9KTtcbiAgICAgIGlmIChhYm9ydC5zaWduYWwuYWJvcnRlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAobG9hZGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZXRFbnRyaWVzKFtdKTtcbiAgICAgICAgc2V0UGhhc2UoXCJlbXB0eVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRFbnRyaWVzKGxvYWRlZCk7XG4gICAgICBzZXRQaGFzZShcInJlYWR5XCIpO1xuXG4gICAgICBoeWRyYXRlSXNyY3MobG9hZGVkLCB7XG4gICAgICAgIHNpZ25hbDogYWJvcnQuc2lnbmFsLFxuICAgICAgICBvblByb2dyZXNzOiAoZG9uZSwgdG90YWwpID0+XG4gICAgICAgICAgc2V0UHJvZ3Jlc3NUZXh0KGAke3N0cmluZ3Muc3RhdGVzLmxvYWRpbmdEZXRhaWxzfSAke2RvbmV9LyR7dG90YWx9YCksXG4gICAgICB9KS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFib3J0LnNpZ25hbC5hYm9ydGVkKSByZXR1cm47XG4gICAgICAgICAgLy8gUmUtY29weSB3aGF0ZXZlciBpcyBjdXJyZW50IFx1MjAxNCBhIHJlbW92YWwgbWF5IGhhdmUgcmVwbGFjZWQgdGhlIGxpc3RcbiAgICAgICAgICAvLyB3aGlsZSBoeWRyYXRpb24gcmFuIFx1MjAxNCBzbyBkZXRlY3Rpb24gcmVydW5zIHdpdGggdGhlIElTUkNzIGJ1dFxuICAgICAgICAgIC8vIHJlc3VycmVjdGVkIGVudHJpZXMgbmV2ZXIgY29tZSBiYWNrLiBOZXcgaWRlbnRpdHkgXHUyMUQyIG1lbW8gcmVydW5zLlxuICAgICAgICAgIHNldEVudHJpZXMoKHByZXYpID0+IFsuLi5wcmV2XSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChhYm9ydC5zaWduYWwuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltwbGF5bGlzdER1cGxpY2F0ZUZpbmRlcl0gSVNSQyBoeWRyYXRpb24gc3RvcHBlZDpcIiwgZXJyb3IpO1xuICAgICAgICAgIHNldFByb2dyZXNzVGV4dChzdHJpbmdzLnN0YXRlcy5sb2FkaW5nRGV0YWlscyk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoYWJvcnQuc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIGNvbnNvbGUud2FybihcIltwbGF5bGlzdER1cGxpY2F0ZUZpbmRlcl0gc2NhbiBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAgIHNldFBoYXNlKFwiZXJyb3JcIik7XG4gICAgfVxuICB9LCBbcGxheWxpc3QudXJpXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2b2lkIHNjYW4oKTtcbiAgfSwgW3NjYW5dKTtcblxuICBjb25zdCByZXN1bHRzID0gdXNlTWVtbygoKSA9PiBkZXRlY3REdXBsaWNhdGVzKGVudHJpZXMpLCBbZW50cmllc10pO1xuICBjb25zdCBncm91cENvdW50cyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIE9iamVjdC5mcm9tRW50cmllcyhHUk9VUF9PUkRFUi5tYXAoKGlkKSA9PiBbaWQsIHJlc3VsdHNbaWRdLmxlbmd0aF0pKSBhcyBSZWNvcmQ8XG4gICAgICAgIEdyb3VwSWQsXG4gICAgICAgIG51bWJlclxuICAgICAgPixcbiAgICBbcmVzdWx0c10sXG4gICk7XG4gIGNvbnN0IGFueUR1cGxpY2F0ZXMgPSBHUk9VUF9PUkRFUi5zb21lKChpZCkgPT4gZ3JvdXBDb3VudHNbaWRdID4gMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBKdW1wIHRvIHRoZSBtb3N0IGNvbmZpZGVudCBsZXZlbCB0aGF0IGhhcyBtYXRjaGVzIG9uY2Ugc2Nhbm5pbmcgaXMgZG9uZVxuICAgIC8vIGFuZCByZS1ydW4gdGhpcyB3aGVuIGEgcmVtb3ZhbCBlbXB0aWVzIHRoZSBhY3RpdmUgbGV2ZWwuXG4gICAgaWYgKHBoYXNlICE9PSBcInJlYWR5XCIpIHJldHVybjtcbiAgICBpZiAoR1JPVVBfT1JERVIuc29tZSgoaWQpID0+IGdyb3VwQ291bnRzW2lkXSA+IDApICYmIGdyb3VwQ291bnRzW2FjdGl2ZUxldmVsXSA9PT0gMCkge1xuICAgICAgY29uc3QgZmlyc3RXaXRoR3JvdXBzID0gR1JPVVBfT1JERVIuZmluZCgoaWQpID0+IGdyb3VwQ291bnRzW2lkXSA+IDApO1xuICAgICAgaWYgKGZpcnN0V2l0aEdyb3Vwcykgc2V0QWN0aXZlTGV2ZWwoZmlyc3RXaXRoR3JvdXBzKTtcbiAgICB9XG4gIH0sIFtwaGFzZSwgZ3JvdXBDb3VudHMsIGFjdGl2ZUxldmVsXSk7XG5cbiAgLyoqIEFkZCBvciByZW1vdmUgb25lIHBsYXlsaXN0IHBvc2l0aW9uIGZyb20gdGhlIHNlbGVjdGlvbi4gKi9cbiAgY29uc3QgdG9nZ2xlUm93ID0gdXNlQ2FsbGJhY2soKHBvc2l0aW9uOiBudW1iZXIpID0+IHtcbiAgICBzZXRTdW1tYXJ5KG51bGwpO1xuICAgIHNldFNlbGVjdGVkKChwcmV2KSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gbmV3IFNldChwcmV2KTtcbiAgICAgIGlmIChuZXh0Lmhhcyhwb3NpdGlvbikpIG5leHQuZGVsZXRlKHBvc2l0aW9uKTtcbiAgICAgIGVsc2UgbmV4dC5hZGQocG9zaXRpb24pO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvKiogU2VsZWN0L2Rlc2VsZWN0IHRoZSBkdXBsaWNhdGUgZW50cmllcyBvZiB0aGUgbGV2ZWwgY3VycmVudGx5IGRpc3BsYXllZC5cbiAgICogIFwiU2VsZWN0IGFsbFwiIG9ubHkgY2hlY2tzIGR1cGxpY2F0ZXM6IHRoZSBmaXJzdCBtZW1iZXIgb2YgZWFjaCBncm91cCAoaXRzXG4gICAqICBlYXJsaWVzdCBvY2N1cnJlbmNlKSBpcyBsZWZ0IG91dCBzbyB0aGUgZ3JvdXAgZG9lcyBub3QgbG9zZSBldmVyeSBjb3B5LFxuICAgKiAgYW5kIHJvd3Mgd2l0aG91dCBhbiBvY2N1cnJlbmNlIGlkIGFyZSBuZXZlciBzZWxlY3RlZC4gKi9cbiAgY29uc3Qgc2V0TGV2ZWxTZWxlY3Rpb24gPSAobW9kZTogXCJhbGxcIiB8IFwibm9uZVwiKSA9PiB7XG4gICAgc2V0U3VtbWFyeShudWxsKTtcbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldik7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHJlc3VsdHNbYWN0aXZlTGV2ZWxdKSB7XG4gICAgICAgIGdyb3VwLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChtb2RlID09PSBcIm5vbmVcIikgbmV4dC5kZWxldGUobWVtYmVyLnBvc2l0aW9uKTtcbiAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IDAgJiYgbWVtYmVyLnVpZCkgbmV4dC5hZGQobWVtYmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9KTtcbiAgfTtcblxuICAvKiogUnVuIHRoZSBjb25maXJtZWQgcmVtb3ZhbCBpbiBiYXRjaGVzOyBmYWlsZWQgcm93cyBzdGF5IHNlbGVjdGFibGUuICovXG4gIGNvbnN0IHN0YXJ0UmVtb3ZhbCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWNhbkVkaXQpIHJldHVybjtcbiAgICAvLyBEZWZlbnNpdmU6IG9ubHkgcm93cyB3aXRoIGFuIG9jY3VycmVuY2UgaWQgY2FuIGJlIHRhcmdldGVkIHByZWNpc2VseSxcbiAgICAvLyB3aGF0ZXZlciBtYW5hZ2VkIHRvIHJlYWNoIHRoZSBzZWxlY3Rpb24gc2V0LlxuICAgIGNvbnN0IHNuYXBzaG90ID0gZW50cmllcy5maWx0ZXIoKGUpID0+IHNlbGVjdGVkLmhhcyhlLnBvc2l0aW9uKSAmJiBlLnVpZCk7XG4gICAgaWYgKHNuYXBzaG90Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHNldENvbmZpcm1PcGVuKGZhbHNlKTtcbiAgICBzZXRSZW1vdmFsUHJvZ3Jlc3MoeyBkb25lOiAwLCB0b3RhbDogc25hcHNob3QubGVuZ3RoIH0pO1xuXG4gICAgbGV0IG91dGNvbWU6IFJlbW92YWxTdW1tYXJ5IHwgbnVsbCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIG91dGNvbWUgPSBhd2FpdCByZW1vdmVFbnRyaWVzKFxuICAgICAgICBwbGF5bGlzdC51cmksXG4gICAgICAgIHNuYXBzaG90Lm1hcCgoZSkgPT4gKHsgdXJpOiBlLnVyaSwgdWlkOiBlLnVpZCB9KSksXG4gICAgICAgIChkb25lLCB0b3RhbCkgPT4gc2V0UmVtb3ZhbFByb2dyZXNzKHsgZG9uZSwgdG90YWwgfSksXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIHJlbW92YWwgY3Jhc2hlZDpcIiwgZXJyb3IpO1xuICAgICAgc2V0UmVtb3ZhbFByb2dyZXNzKG51bGwpO1xuICAgICAgc2V0U3VtbWFyeShzdHJpbmdzLnN0YXRlcy5uZXR3b3JrRXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9jY3VycmVuY2VzIGNvdmVyZWQgYnkgc3VjY2Vzc2Z1bCBiYXRjaGVzIGRpc2FwcGVhciBmcm9tIHRoZSB2aWV3O1xuICAgIC8vIGZhaWxlZCBvbmVzIHN0YXkgc2VsZWN0YWJsZSBzbyB0aGV5IGNhbiBiZSByZXRyaWVkIHdpdGhvdXQgYSByZXNjYW4uXG4gICAgY29uc3Qga2VlcEZhaWxlZCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICAgIGxldCBjdXJzb3IgPSAwO1xuICAgIGZvciAoY29uc3Qgb2sgb2Ygb3V0Y29tZS5iYXRjaFJlc3VsdHMpIHtcbiAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGN1cnNvciArIFJFTU9WQUxfQkFUQ0hfU0laRSwgc25hcHNob3QubGVuZ3RoKTtcbiAgICAgIGlmICghb2spIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBjdXJzb3I7IGluZGV4IDwgZW5kOyBpbmRleCsrKSBrZWVwRmFpbGVkLmFkZChzbmFwc2hvdFtpbmRleF0ucG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgY3Vyc29yID0gZW5kO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZWRQb3NpdGlvbnMgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHNuYXBzaG90KSB7XG4gICAgICBpZiAoIWtlZXBGYWlsZWQuaGFzKGVudHJ5LnBvc2l0aW9uKSkgcmVtb3ZlZFBvc2l0aW9ucy5hZGQoZW50cnkucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHNldEVudHJpZXMoKHByZXYpID0+IHByZXYuZmlsdGVyKChlKSA9PiAhcmVtb3ZlZFBvc2l0aW9ucy5oYXMoZS5wb3NpdGlvbikpKTtcbiAgICBzZXRTZWxlY3RlZChrZWVwRmFpbGVkKTtcblxuICAgIGlmIChvdXRjb21lLmZhaWxlZCA9PT0gMCkge1xuICAgICAgbm90aWZ5U3VjY2Vzcyhub3RpY2VzLmFsbFJlbW92ZWQob3V0Y29tZS5yZW1vdmVkKSk7XG4gICAgICBzZXRTdW1tYXJ5KG51bGwpO1xuICAgIH0gZWxzZSBpZiAob3V0Y29tZS5yZW1vdmVkID09PSAwKSB7XG4gICAgICBub3RpZnlGYWlsdXJlKG5vdGljZXMuYWxsRmFpbGVkKG91dGNvbWUuZmFpbGVkKSk7XG4gICAgICBzZXRTdW1tYXJ5KG5vdGljZXMuYWxsRmFpbGVkKG91dGNvbWUuZmFpbGVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGlmeUZhaWx1cmUobm90aWNlcy5wYXJ0aWFsRmFpbHVyZShvdXRjb21lLnJlbW92ZWQsIG91dGNvbWUuZmFpbGVkKSk7XG4gICAgICBzZXRTdW1tYXJ5KG5vdGljZXMucGFydGlhbEZhaWx1cmUob3V0Y29tZS5yZW1vdmVkLCBvdXRjb21lLmZhaWxlZCkpO1xuICAgIH1cblxuICAgIHNldFJlbW92YWxQcm9ncmVzcyhudWxsKTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmVHcm91cHMgPSByZXN1bHRzW2FjdGl2ZUxldmVsXTtcbiAgY29uc3Qgc2VsZWN0aW9uQ291bnQgPSBzZWxlY3RlZC5zaXplO1xuICBjb25zdCBidXN5ID0gcmVtb3ZhbFByb2dyZXNzICE9IG51bGw7XG4gIC8vIFRoZSBuYW1lIGxvb2t1cCBjYW4gZmFpbCBvbiBzb21lIGNsaWVudHM6IGZhbGwgYmFjayB0byB0aGUgVVJJIHNvIHRoZVxuICAvLyBoZWFkZXIgYW5kIHRoZSBjb25maXJtYXRpb24gc2VudGVuY2UgbmV2ZXIgZGlzYWdyZWUgKG9yIHNheSBgXCJcImApLlxuICBjb25zdCBwbGF5bGlzdExhYmVsID0gcGxheWxpc3QubmFtZSB8fCBwbGF5bGlzdC51cmk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtb3ZlcmxheVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BkdXBmaW5kLXdpbmRvdyR7YnVzeSA/IFwiIGR1cGZpbmQtd2luZG93LS1idXN5XCIgOiBcIlwifWB9XG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgIWJ1c3kpIGNsb3NlRHVwbGljYXRlRmluZGVyKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWhlYWRlcl9fdGl0bGVzXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZHVwZmluZC1oZWFkZXJfX3RpdGxlXCI+e3N0cmluZ3MubW9kYWwudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1oZWFkZXJfX3BsYXlsaXN0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtaGVhZGVyX19wbGF5bGlzdC1uYW1lXCI+e3BsYXlsaXN0TGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGR1cGZpbmQtYmFkZ2Uke2NhbkVkaXQgPyBcIiBkdXBmaW5kLWJhZGdlLS1lZGl0YWJsZVwiIDogXCIgZHVwZmluZC1iYWRnZS0tcmVhZG9ubHlcIn1gfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtjYW5FZGl0ID8gc3RyaW5ncy5iYWRnZXMuZWRpdGFibGVIaW50IDogc3RyaW5ncy5iYWRnZXMucmVhZE9ubHlIaW50fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhbkVkaXQgPyBzdHJpbmdzLmJhZGdlcy5lZGl0YWJsZSA6IHN0cmluZ3MuYmFkZ2VzLnJlYWRPbmx5fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtaGVhZGVyX19hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzdHJpbmdzLm1vZGFsLmdpdGh1Yn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1oZWFkZXJfX2dpdGh1YlwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmltTWFybGV5NDIwL3NwaWNldGlmeS1leHRlbnNpb25cIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgdGl0bGU9e3N0cmluZ3MubW9kYWwuZ2l0aHVifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogU2NyZWVuLXJlYWRlciB0ZXh0OiB0aGUgaWNvbiBhbG9uZSBpcyBub3QgYWNjZXNzaWJsZSBjb250ZW50LiAqL31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1zci1vbmx5XCI+e3N0cmluZ3MubW9kYWwuZ2l0aHVifTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3N0cmluZ3MubW9kYWwuY2xvc2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtaGVhZGVyX19jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmNsb3NlIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29udGVudCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWJvZHlcIj5cbiAgICAgICAgICB7cGhhc2UgPT09IFwibG9hZGluZ1wiICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1zdGF0ZSBkdXBmaW5kLXN0YXRlLS1sb2FkaW5nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+e3Byb2dyZXNzVGV4dH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3BoYXNlID09PSBcImVycm9yXCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLXN0YXRlIGR1cGZpbmQtc3RhdGUtLWVycm9yXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntzdHJpbmdzLnN0YXRlcy5uZXR3b3JrRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1idXR0b24gZHVwZmluZC1idXR0b24tLWdob3N0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIHNjYW4oKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdHJpbmdzLnN0YXRlcy5yZXRyeX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3BoYXNlID09PSBcImVtcHR5XCIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLXN0YXRlXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntzdHJpbmdzLnN0YXRlcy5lbXB0eVBsYXlsaXN0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7cGhhc2UgPT09IFwicmVhZHlcIiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZHVwZmluZC1yYWlsXCI+XG4gICAgICAgICAgICAgICAgey8qIE9ubHkgbGV2ZWxzIHRoYXQgYWN0dWFsbHkgZm91bmQgbWF0Y2hlcyBhcmUgbGlzdGVkLiAqL31cbiAgICAgICAgICAgICAgICB7R1JPVVBfT1JERVIuZmlsdGVyKChpZCkgPT4gZ3JvdXBDb3VudHNbaWRdID4gMCkubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkdXBmaW5kLXJhaWxfX2l0ZW0ke2FjdGl2ZUxldmVsID09PSBpZCA/IFwiIGR1cGZpbmQtcmFpbF9faXRlbS0tYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVMZXZlbChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17c3RyaW5ncy5sZXZlbHNbaWRdLmhpbnR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXJhaWxfX2xhYmVsXCI+e3N0cmluZ3MubGV2ZWxzW2lkXS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtcmFpbF9fY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5sZXZlbE1ldGEuZ3JvdXBzQ291bnQoZ3JvdXBDb3VudHNbaWRdKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8R2F1Z2UgdmFsdWU9e0dST1VQX1JFTElBQklMSVRZW2lkXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2FzaWRlPlxuXG4gICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImR1cGZpbmQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICB7YWN0aXZlR3JvdXBzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLXBhbmVsX19oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtcGFuZWxfX2xldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MubGV2ZWxzW2FjdGl2ZUxldmVsXS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Y2FuRWRpdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLXBhbmVsX19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtYnV0dG9uIGR1cGZpbmQtYnV0dG9uLS1naG9zdCBkdXBmaW5kLWJ1dHRvbi0tc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMZXZlbFNlbGVjdGlvbihcImFsbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3N0cmluZ3MucGFuZWwuc2VsZWN0QWxsSGludH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLnBhbmVsLnNlbGVjdEFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLWJ1dHRvbiBkdXBmaW5kLWJ1dHRvbi0tZ2hvc3QgZHVwZmluZC1idXR0b24tLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGV2ZWxTZWxlY3Rpb24oXCJub25lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MucGFuZWwuZGVzZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyFhbnlEdXBsaWNhdGVzICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXN0YXRlX190aXRsZVwiPntzdHJpbmdzLnN0YXRlcy5ub0R1cGxpY2F0ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLW11dGVkXCI+e3N0cmluZ3Muc3RhdGVzLm5vRHVwbGljYXRlc0hpbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YW55RHVwbGljYXRlcyAmJiBhY3RpdmVHcm91cHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RyaW5ncy5sZXZlbE1ldGEuZW1wdHlMZXZlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVHcm91cHMubWFwKChncm91cCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEdyb3VwQ2FyZFxuICAgICAgICAgICAgICAgICAgICBjYW5FZGl0PXtjYW5FZGl0fVxuICAgICAgICAgICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17YGcke2dyb3VwLm1lbWJlcnNbMF0/LnBvc2l0aW9uID8/IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgbm93UGxheWluZz17bm93UGxheWluZ31cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RvZ2dsZVJvd31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb290ZXIgKi99XG4gICAgICAgIHtwaGFzZSA9PT0gXCJyZWFkeVwiICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyXCI+XG4gICAgICAgICAgICB7IWNhbkVkaXQgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1mb290ZXJfX3JlYWRvbmx5XCI+e3N0cmluZ3Muc3RhdGVzLnJlYWRPbmx5Tm90aWNlfTwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7c3VtbWFyeSAmJiA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19zdW1tYXJ5XCI+e3N1bW1hcnl9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHshYnVzeSAmJiAhY29uZmlybU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLmZvb3Rlci5zZWxlY3Rpb24oc2VsZWN0aW9uQ291bnQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX193YXJuaW5nXCI+e3N0cmluZ3MuZm9vdGVyLndhcm5pbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1idXR0b24gZHVwZmluZC1idXR0b24tLWdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlRHVwbGljYXRlRmluZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5mb290ZXIuY2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtYnV0dG9uIGR1cGZpbmQtYnV0dG9uLS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGlvbkNvdW50ID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29uZmlybU9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5mb290ZXIucmVtb3ZlKHNlbGVjdGlvbkNvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshYnVzeSAmJiBjb25maXJtT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1mb290ZXJfX2NvbmZpcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5mb290ZXIuY29uZmlybUJvZHkoc2VsZWN0aW9uQ291bnQsIHBsYXlsaXN0TGFiZWwpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1mb290ZXJfX2J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLWJ1dHRvbiBkdXBmaW5kLWJ1dHRvbi0tZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29uZmlybU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuZm9vdGVyLmtlZXBFZGl0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtYnV0dG9uIGR1cGZpbmQtYnV0dG9uLS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBzdGFydFJlbW92YWwoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLmZvb3Rlci5jb25maXJtUmVtb3ZlKHNlbGVjdGlvbkNvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtidXN5ICYmIHJlbW92YWxQcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19idXN5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLmZvb3Rlci5yZW1vdmluZyhyZW1vdmFsUHJvZ3Jlc3MuZG9uZSwgcmVtb3ZhbFByb2dyZXNzLnRvdGFsKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLXByb2dyZXNzX19iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke01hdGgucm91bmQoKHJlbW92YWxQcm9ncmVzcy5kb25lIC8gTWF0aC5tYXgocmVtb3ZhbFByb2dyZXNzLnRvdGFsLCAxKSkgKiAxMDApfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHBhcnNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzXCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3hcIjtcbmltcG9ydCB7IHJlc29sdmVQbGF5bGlzdE5hbWUgfSBmcm9tIFwiLi9hZGFwdGVyLnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4vc3RyaW5ncy50c1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcbmltcG9ydCB7IHNob3dEdXBsaWNhdGVGaW5kZXJNb2RhbCB9IGZyb20gXCIuL3VpL2R1cGVzTW9kYWwudHN4XCI7XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbi8qKiBUcnVlIGZvciBib3RoIHBsYXlsaXN0IFVSSSBmbGF2b3VycyBTcG90aWZ5IGV4cG9zZXMgKHYxIGFuZCB2MikuICovXG5mdW5jdGlvbiBpc1BsYXlsaXN0VHlwZSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk/LnR5cGU7XG4gIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuUExBWUxJU1QgfHwgdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLlBMQVlMSVNUX1YyO1xufVxuXG5jb25zdCBmaW5kRHVwbGljYXRlc01lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogc3RyaW5ncy5tZW51Lml0ZW1MYWJlbCxcbiAgbGVhZGluZ0ljb246IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIiR7SWNvbnMuUkFXLmR1cGxpY2F0ZX1cIi8+PC9zdmc+YCxcbiAgLyoqIE9wZW4gdGhlIGZpbmRlciBmb3IgdGhlIHBsYXlsaXN0IGJlaGluZCB0aGUgY29udGV4dCBtZW51LiAqL1xuICBvbkNsaWNrOiBhc3luYyAoY29udGV4dDogdW5rbm93bikgPT4ge1xuICAgIC8vIENvbnRleHRNZW51VjIgaGFuZHMgdGhlIHJhdyBldmVudCBvdmVyOyB0aGUgY29udGV4dCBwYXlsb2FkIGl0c2VsZlxuICAgIC8vICh1cmksIG5hbWUsIFx1MjAyNikgbGl2ZXMgb24gYGV2ZW50LnByb3BzYCBcdTIwMTQgdGhlIHNhbWUgc2hhcGUgYXJ0aXN0U2VhcmNoIHVzZXMuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcygoY29udGV4dCBhcyB7IHByb3BzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfSk/LnByb3BzKTtcbiAgICBjb25zdCB1cmkgPSB0eXBlb2YgcGFyc2VkLnVyaSA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlZC51cmkgOiBcIlwiO1xuICAgIGlmICghdXJpIHx8ICFpc1BsYXlsaXN0VHlwZSh1cmkpKSByZXR1cm47XG5cbiAgICBjb25zdCBuYW1lID1cbiAgICAgIHR5cGVvZiBwYXJzZWQubmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBwYXJzZWQubmFtZS5sZW5ndGggPiAwXG4gICAgICAgID8gcGFyc2VkLm5hbWVcbiAgICAgICAgOiBhd2FpdCByZXNvbHZlUGxheWxpc3ROYW1lKHVyaSk7XG5cbiAgICBzaG93RHVwbGljYXRlRmluZGVyTW9kYWwoeyB1cmksIG5hbWUgfSk7XG4gIH0sXG4gIC8qKiBPZmZlciB0aGUgaXRlbSBvbmx5IG9uIHBsYXlsaXN0IHJvd3MuICovXG4gIHNob3VsZEFkZDogKHByb3BzOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhwcm9wcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXJzZWQudXJpID09PSBcInN0cmluZ1wiICYmIGlzUGxheWxpc3RUeXBlKHBhcnNlZC51cmkpO1xuICB9LFxufSk7XG5cbmZpbmREdXBsaWNhdGVzTWVudUl0ZW0ucmVnaXN0ZXIoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQU9PLFNBQVMsV0FBVyxPQUFvRDtBQUM3RSxNQUFJLENBQUMsTUFBTyxRQUFPLENBQUM7QUFFcEIsUUFBTSxTQUF1QixDQUFDO0FBRTlCLFFBQU0sYUFBYSxDQUFDLFFBQXlDLFdBQXlCO0FBQ3BGLFFBQUksQ0FBQyxVQUFVLE9BQU8sV0FBVyxTQUFVO0FBQzNDLGVBQVcsT0FBTyxRQUFRO0FBQ3hCLFVBQUksT0FBTyxPQUFPLFFBQVEsR0FBRyxHQUFHO0FBQzlCLFlBQUksT0FBTyxHQUFHLE1BQU0sUUFBVztBQUM3QixpQkFBTyxHQUFHLElBQUksT0FBTyxHQUFHO0FBQUEsUUFDMUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxhQUFXLE9BQU8sTUFBTTtBQUN4QixhQUFXLE1BQU0sTUFBTSxNQUFNO0FBQzdCLGFBQVcsTUFBTSxXQUFXLE1BQU07QUFFbEMsU0FBTztBQUNUOzs7QUM1Qk8sSUFBTSxFQUFFLFVBQVUsS0FBSyxLQUFLLElBQUksVUFBVTs7O0FDV2pELElBQU0sV0FBVztBQUFBLEVBQ2YsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FB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YyxTQUF1QjtBQUNuRCxtQkFBaUIsU0FBUyxJQUFJO0FBQ2hDO0FBRU8sSUFBTSxVQUFVLFFBQVE7OztBQ2phckIsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LEVBQ3ZCLGFBQWEsZ0ZBQWdGLE1BQU0sSUFBSSxTQUFTO0FBQUE7QUFBQSxFQUVoSCxTQUFTLE9BQU8sWUFBcUI7QUFHbkMsVUFBTSxTQUFTLFdBQVksU0FBaUQsS0FBSztBQUNqRixVQUFNLE1BQU0sT0FBTyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU07QUFDMUQsUUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsRUFBRztBQUVsQyxVQUFNLE9BQ0osT0FBTyxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssU0FBUyxJQUNwRCxPQUFPLE9BQ1AsTUFBTSxvQkFBb0IsR0FBRztBQUVuQyw2QkFBeUIsRUFBRSxLQUFLLEtBQUssQ0FBQztBQUFBLEVBQ3hDO0FBQUE7QUFBQSxFQUVBLFdBQVcsQ0FBQyxVQUFtQjtBQUM3QixVQUFNLFNBQVMsV0FBVyxLQUFnQztBQUMxRCxXQUFPLE9BQU8sT0FBTyxRQUFRLFlBQVksZUFBZSxPQUFPLEdBQUc7QUFBQSxFQUNwRTtBQUNGLENBQUM7QUFFRCx1QkFBdUIsU0FBUzsiLAogICJuYW1lcyI6IFsiQ29tcG9uZW50IiwgInJhdyIsICJGcmFnbWVudCIsICJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsICJ2ZXJzaW9uIiwgImlzVHJhY2tVcmkiXQp9Cg==
