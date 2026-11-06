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
    close: "Close"
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
    readOnlyNotice: "This playlist is read-only: you don't have edit permission on it (you are neither its owner nor a collaborator), so removing tracks is disabled. You can still review every group."
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
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
  const pendingUris = [...new Set(missing.map((e) => e.uri).filter((uri) => !isrcCache.has(uri)))];
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
          await delay(RETRY_BASE_DELAY_MS * 2 ** attempt * (1 + Math.random() * 0.5));
          continue;
        }
        console.warn(`[playlistDuplicateFinder] ISRC batch failed after retries:`, e);
      }
    }
    for (const uri of batch) {
      const isrc = fetched ? isrcFromMetadata(fetched.get(uri)) : null;
      isrcCache.set(uri, isrc);
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
    return { removed: 0, failed: targets.length, batchResults: [] };
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
var isTrackUri = (uri) => uri.startsWith("spotify:track:");
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
    pool.filter((t) => !consumed.has(t.position) && isTrackUri(t.uri) && t.isrc),
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
    pool.filter((t) => !consumed.has(t.position) && isTrackUri(t.uri) && t.titleKey),
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
    (t) => !consumed.has(t.position) && isTrackUri(t.uri) && t.fuzzyKey.length >= 2
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
function TrackRow({ track, checked, disabled, nowPlaying, onToggle }) {
  const canPlay = track.uri.startsWith("spotify:track:");
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
            title: disabled ? strings.states.readOnlyNotice : void 0,
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
      checked: selected.has(member.position),
      disabled: !canEdit,
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
          setEntries([...loaded]);
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
          else if (index > 0) next.add(member.position);
        });
      }
      return next;
    });
  };
  const startRemoval = async () => {
    if (!canEdit || selected.size === 0) return;
    const snapshot = entries.filter((e) => selected.has(e.position));
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
              /* @__PURE__ */ jsx("span", { className: "dupfind-header__playlist-name", children: playlist.name || playlist.uri }),
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
            /* @__PURE__ */ jsx("span", { className: "dupfind-footer__confirm", children: strings.footer.confirmBody(selectionCount, playlist.name) }),
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
  onClick: async (context) => {
    const parsed = parseProps(context?.props);
    const uri = typeof parsed.uri === "string" ? parsed.uri : "";
    if (!uri || !isPlaylistType(uri)) return;
    const name = typeof parsed.name === "string" && parsed.name.length > 0 ? parsed.name : await resolvePlaylistName(uri);
    showDuplicateFinderModal({ uri, name });
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    return typeof parsed.uri === "string" && isPlaylistType(parsed.uri);
  }
});
findDuplicatesMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3NoYXJlZC93ZWJwYWNrL3NjaGVtYS50cyIsICIuLi9zaGFyZWQvd2VicGFjay9wcm90b2J1Zi50cyIsICIuLi9zaGFyZWQvd2VicGFjay93ZWJwYWNrLnRzIiwgIi4uL3NoYXJlZC9hcGkvZmV0Y2hNZXRhZGF0YUZvclRyYWNrcy50cyIsICIuLi9leHRlbnNpb25zL3BsYXlsaXN0RHVwbGljYXRlRmluZGVyL3NyYy9zdHJpbmdzLnRzIiwgIi4uL2V4dGVuc2lvbnMvcGxheWxpc3REdXBsaWNhdGVGaW5kZXIvc3JjL2FkYXB0ZXIudHMiLCAiLi4vZXh0ZW5zaW9ucy9wbGF5bGlzdER1cGxpY2F0ZUZpbmRlci9zcmMvc3R5bGVzLmNzcyIsICIuLi90YXNrcy9zaGltcy9yZWFjdC1zaGltLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LWRvbS1zaGltLnRzIiwgIi4uL2V4dGVuc2lvbnMvcGxheWxpc3REdXBsaWNhdGVGaW5kZXIvc3JjL2RldGVjdGlvbi9ub3JtYWxpemUudHMiLCAiLi4vZXh0ZW5zaW9ucy9wbGF5bGlzdER1cGxpY2F0ZUZpbmRlci9zcmMvZGV0ZWN0aW9uL3NpbWlsYXJpdHkudHMiLCAiLi4vZXh0ZW5zaW9ucy9wbGF5bGlzdER1cGxpY2F0ZUZpbmRlci9zcmMvZGV0ZWN0aW9uL3R5cGVzLnRzIiwgIi4uL2V4dGVuc2lvbnMvcGxheWxpc3REdXBsaWNhdGVGaW5kZXIvc3JjL2RldGVjdGlvbi9kZWR1cC50cyIsICIuLi9leHRlbnNpb25zL3BsYXlsaXN0RHVwbGljYXRlRmluZGVyL3NyYy91aS9kdXBlc01vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL3BsYXlsaXN0RHVwbGljYXRlRmluZGVyL3NyYy9hcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ0eXBlIE1lcmdlZE9iamVjdCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmludGVyZmFjZSBQcm9wc0lucHV0IGV4dGVuZHMgTWVyZ2VkT2JqZWN0IHtcbiAgaXRlbT86IE1lcmdlZE9iamVjdDtcbiAgcmVmZXJlbmNlPzogTWVyZ2VkT2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wczogUHJvcHNJbnB1dCB8IG51bGwgfCB1bmRlZmluZWQpOiBNZXJnZWRPYmplY3Qge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkOiBNZXJnZWRPYmplY3QgPSB7fTtcblxuICBjb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZTogTWVyZ2VkT2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCwgdGFyZ2V0OiBNZXJnZWRPYmplY3QpID0+IHtcbiAgICBpZiAoIXNvdXJjZSB8fCB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093bihzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG1lcmdlUHJvcHMocHJvcHMsIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMuaXRlbSwgcGFyc2VkKTtcbiAgbWVyZ2VQcm9wcyhwcm9wcy5yZWZlcmVuY2UsIHBhcnNlZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiIsICJleHBvcnQgY29uc3QgeyBGcmFnbWVudCwganN4LCBqc3hzIH0gPSBTcGljZXRpZnkuUmVhY3RKU1g7XG4iLCAiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHNpemU/OiBudW1iZXI7XG4gIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0SWNvbkNvbXBvbmVudCA9IEZDPEljb25Qcm9wcz4gJiB7XG4gIGRlZmF1bHRQcm9wcz86IFBhcnRpYWw8SWNvblByb3BzPjtcbn07XG5cbmNvbnN0IGljb25EYXRhID0ge1xuICBzZWFyY2g6IHtcbiAgICBwYXRoOiBcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBwbGF5OiB7XG4gICAgcGF0aDogXCJNOCA1djE0bDExLTd6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBhdXNlOiB7XG4gICAgcGF0aDogXCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIGVkaXRCdXR0b246IHtcbiAgICBwYXRoOiBcIk0xNy4zMTggMS45NzVhMy4zMjkgMy4zMjkgMCAxMTQuNzA3IDQuNzA3TDguNDUxIDIwLjI1NmMtLjQ5LjQ5LTEuMDgyLjg2Ny0xLjczNSAxLjEwM0wyLjM0IDIyLjk0YTEgMSAwIDAxLTEuMjgtMS4yOGwxLjU4MS00LjM3NmE0LjcyNiA0LjcyNiAwIDAxMS4xMDMtMS43MzVMMTcuMzE4IDEuOTc1em0zLjI5MyAxLjQxNGExLjMyOSAxLjMyOSAwIDAwLTEuODggMEw1LjE1OSAxNi45NjNjLS4yODMuMjgzLS41LjYyNC0uNjM2IDFsLS44NTcgMi4zNzIgMi4zNzEtLjg1N2EyLjcyNiAyLjcyNiAwIDAwMS4wMDEtLjYzNkwyMC42MTEgNS4yNjhhMS4zMjkgMS4zMjkgMCAwMDAtMS44Nzl6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcGF0aDogXCJNNy45NiA1LjMzYTIuNjcgMi42NyAwIDExNS4zNCAyLjY3IDIuNjcgMi42NyAwIDAxLTUuMzQtMi42N1pNNi42NyA4QTEuMzMgMS4zMyAwIDEwOS4zMyA4IDEuMzMgMS4zMyAwIDAwNi42NyA4Wm00LjgyLTQuODFhLjk1Ljk0IDAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgMCAwMDkuNjguMTcgOC4xIDguMSAwIDAwNi4zMi4xNy40Ny40NyAwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDAgMDEtMS4yNS43MUwyLjU1IDIuNTFhLjQ3LjQ3IDAgMDAtLjUxLjEzQzEuMjggMy40Ny43MSA0LjQ2LjM2IDUuNTNhLjQ3LjQ3IDAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCAwIDAxMCAxLjQzTC41IDkuOTVhLjQ3LjQ3IDAgMDAtLjE0LjUxIDcuOTggNy45OCAwIDAwMS42OCAyLjkuNDcuNDcgMCAwMC41MS4xM2wxLjgxLS42NWEuOTQuOTQgMCAwMTEuMjUuNzJsLjM0IDEuODljLjA0LjE4LjE4LjMzLjM3LjM3YTguMSA4LjEgMCAwMDMuMzYgMCAuNDcuNDcgMCAwMC4zNy0uMzdsLjM0LTEuODlhLjk1Ljk1IDAgMDExLjI1LS43MmwxLjgxLjY1Yy4xOC4wNi4zOC4wMS41MS0uMTMuNzYtLjg0IDEuMzQtMS44MiAxLjY4LTIuOWEuNDcuNDcgMCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgMCAwMTAtMS40NEwxNS41IDYuMDRhLjQ3LjQ3IDAgMDAuMTQtLjUgNy45OCA3Ljk4IDAgMDAtMS42OC0yLjkuNDcuNDcgMCAwMC0uNTEtLjEzbC0xLjgxLjY1YS45NS45NSAwIDAxLS4xNS4wNFptLTguODIuNzggMS4yNS40NGEyLjI4IDIuMjggMCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSAwIDAxMS42OCAwbC4yNCAxLjNhMi4yOCAyLjI4IDAgMDAzLjAxIDEuNzNsMS4yNC0uNDRjLjM0LjQ0LjYzLjkzLjg0IDEuNDRsLTEgLjg1YTIuMjcgMi4yNyAwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSAwIDAxLS44NCAxLjQ0bC0xLjI0LS40NEEyLjI4IDIuMjggMCAwMDkuMDggMTMuMzJsLS4yNCAxLjI5YTYuOCA2LjggMCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCAwIDAwMy45MSAxMS41OWwtMS4yNC40NGE2LjY1IDYuNjUgMCAwMS0uODQtMS40NGwxLS44NmEyLjI3IDIuMjcgMCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgcGF0aDogXCJNMzEuMDk4IDI5Ljc5NCAxNi45NTUgMTUuNjUgMzEuMDk3IDEuNTEgMjkuNjgzLjA5MyAxNS41NCAxNC4yMzcgMS40LjA5NC0uMDE2IDEuNTA4IDE0LjEyNiAxNS42NS0uMDE2IDI5Ljc5NWwxLjQxNCAxLjQxNEwxNS41NCAxNy4wNjVsMTQuMTQ0IDE0LjE0M1wiLFxuICAgIHNpemU6IDMyLFxuICB9LFxuICBnaXRodWI6IHtcbiAgICBwYXRoOiBcIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIGR1cGxpY2F0ZToge1xuICAgIHBhdGg6IFwiTTE1IDMuNWMwLS41LS41LTEtMS0xSDExVjFjMC0uNS0uNS0xLTEtMUgyQzEuNSAwIDEgLjUgMSAxVjExLjVjMCAuNS41IDEgMSAxSDQuNVYxNWMwIC41LjUgMSAxIDFIMTRjLjUgMCAxLS41IDEtMVpNMi41IDJjMC0uMjUuMjUtLjUuNS0uNUg5Yy4yNSAwIC41LjI1LjUuNXY4LjVjMCAuMjUtLjI1LjUtLjUuNUgzYy0uMjUgMC0uNS0uMjUtLjUtLjVabTQgMTIuNWMtLjI1IDAtLjUtLjI1LS41LS41VjEyLjVoNGMuNSAwIDEtLjUgMS0xVjRoMmMuMjUgMCAuNS4yNS41LjVWMTRjMCAuMjUtLjI1LjUtLjUuNVpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBJY29uTmFtZSA9IGtleW9mIHR5cGVvZiBpY29uRGF0YTtcblxuY29uc3QgY3JlYXRlUmVhY3RDb21wb25lbnQgPSAobmFtZTogSWNvbk5hbWUpOiBSZWFjdEljb25Db21wb25lbnQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHNpemU6IGRlZmF1bHRTaXplIH0gPSBpY29uRGF0YVtuYW1lXTtcbiAgY29uc3QgQ29tcG9uZW50OiBSZWFjdEljb25Db21wb25lbnQgPSAoeyBzaXplID0gZGVmYXVsdFNpemUsIGZpbGwgPSBcImN1cnJlbnRDb2xvclwiIH0pID0+IChcbiAgICA8c3ZnXG4gICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICA+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IGRlZmF1bHRTaXplLFxuICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gIH07XG4gIHJldHVybiBDb21wb25lbnQ7XG59O1xuXG5pbnRlcmZhY2UgSWNvbkNvbGxlY3Rpb24ge1xuICByYXc6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbiAgcmVhY3Q6IFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PjtcbiAgaHRtbDogUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+O1xufVxuXG5jb25zdCB7IHJhdywgcmVhY3QsIGh0bWwgfSA9IChPYmplY3Qua2V5cyhpY29uRGF0YSkgYXMgSWNvbk5hbWVbXSkucmVkdWNlPEljb25Db2xsZWN0aW9uPihcbiAgKGFjYywgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBpY29uRGF0YVtuYW1lXS5zaXplO1xuICAgIGFjYy5yYXdbbmFtZV0gPSBpY29uRGF0YVtuYW1lXS5wYXRoO1xuICAgIGFjYy5yZWFjdFtuYW1lXSA9IGNyZWF0ZVJlYWN0Q29tcG9uZW50KG5hbWUpO1xuICAgIGFjYy5odG1sW25hbWVdID0gYDxzdmcgY2xhc3M9XCJhcnRpc3Qtc2VhcmNoLWljb25cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAke3NpemV9ICR7c2l6ZX1cIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIiR7aWNvbkRhdGFbbmFtZV0ucGF0aH1cIi8+PC9zdmc+YDtcbiAgICByZXR1cm4gYWNjO1xuICB9LFxuICB7XG4gICAgcmF3OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gICAgcmVhY3Q6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgUmVhY3RJY29uQ29tcG9uZW50PixcbiAgICBodG1sOiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz4sXG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgSWNvbnMgPSB7XG4gIFJlYWN0OiByZWFjdCxcbiAgSFRNTDogaHRtbCxcbiAgUkFXOiByYXcsXG59O1xuIiwgIi8vIHNvbWUgcHJvdG9idWYgZGVmcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZnaWFubHUvZ28tbGlicmVzcG90L3RyZWUvbWFzdGVyL3Byb3RvL3Nwb3RpZnkvbWV0YWRhdGEvbWV0YWRhdGEucHJvdG9cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEluZm8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVwZWF0ZWQ/OiBib29sZWFuO1xuICBlbnVtVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU2NoZW1hIHtcbiAgZmllbGRzOiBSZWNvcmQ8bnVtYmVyLCBGaWVsZEluZm8+O1xuICBlbnVtcz86IFJlY29yZDxzdHJpbmcsIFJlY29yZDxudW1iZXIsIHN0cmluZz4+O1xufVxuXG5leHBvcnQgdHlwZSBNZXRhZGF0YVNjaGVtYSA9IFJlY29yZDxzdHJpbmcsIE1lc3NhZ2VTY2hlbWE+O1xuXG5leHBvcnQgY29uc3QgbWV0YWRhdGFTY2hlbWE6IE1ldGFkYXRhU2NoZW1hID0ge1xuICBcInNwb3RpZnkubWV0YWRhdGEuVHJhY2tcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdpZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJhbGJ1bVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIiB9LFxuICAgICAgNDogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA1OiB7IG5hbWU6IFwibnVtYmVyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDY6IHsgbmFtZTogXCJkaXNjX251bWJlclwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA3OiB7IG5hbWU6IFwiZHVyYXRpb25cIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgODogeyBuYW1lOiBcInBvcHVsYXJpdHlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgOTogeyBuYW1lOiBcImV4cGxpY2l0XCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAxMDogeyBuYW1lOiBcImV4dGVybmFsX2lkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMTogeyBuYW1lOiBcInJlc3RyaWN0aW9uXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTI6IHsgbmFtZTogXCJmaWxlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb0ZpbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEzOiB7IG5hbWU6IFwiYWx0ZXJuYXRpdmVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNDogeyBuYW1lOiBcInNhbGVfcGVyaW9kXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5TYWxlUGVyaW9kXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNTogeyBuYW1lOiBcInByZXZpZXdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvRmlsZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTY6IHsgbmFtZTogXCJ0YWdzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNzogeyBuYW1lOiBcImVhcmxpZXN0X2xpdmVfdGltZXN0YW1wXCIsIHR5cGU6IFwiaW50NjRcIiB9LFxuICAgICAgMTg6IHsgbmFtZTogXCJoYXNfbHlyaWNzXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAxOTogeyBuYW1lOiBcImF2YWlsYWJpbGl0eVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXZhaWxhYmlsaXR5XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyMTogeyBuYW1lOiBcImxpY2Vuc29yXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5MaWNlbnNvclwiIH0sXG4gICAgICAyMjogeyBuYW1lOiBcImxhbmd1YWdlX29mX3BlcmZvcm1hbmNlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyNDogeyBuYW1lOiBcIm9yaWdpbmFsX2F1ZGlvXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb1wiIH0sXG4gICAgICAyNzogeyBuYW1lOiBcIm9yaWdpbmFsX3RpdGxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI4OiB7IG5hbWU6IFwidmVyc2lvbl90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzMjogeyBuYW1lOiBcImFydGlzdF93aXRoX3JvbGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFdpdGhSb2xlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzNjogeyBuYW1lOiBcImNhbm9uaWNhbF91cmlcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzc6IHsgbmFtZTogXCJwcmVyZWxlYXNlX2NvbmZpZ1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUHJlcmVsZWFzZUNvbmZpZ1wiIH0sXG4gICAgICAzOToge1xuICAgICAgICBuYW1lOiBcImNvbnRlbnRfYXV0aG9yaXphdGlvbl9hdHRyaWJ1dGVzXCIsXG4gICAgICAgIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5Db250ZW50QXV0aG9yaXphdGlvbkF0dHJpYnV0ZXNcIixcbiAgICAgIH0sXG4gICAgICA0MDogeyBuYW1lOiBcInRyYWNrX2NvbnRlbnRfcmF0aW5nXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5Db250ZW50UmF0aW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0MTogeyBuYW1lOiBcImF1ZGlvX2Zvcm1hdHNcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrQXVkaW9Gb3JtYXRcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDQzOiB7IG5hbWU6IFwidW5rbm93bl9maWVsZFwiLCB0eXBlOiBcImludDMyXCIgfSxcbiAgICAgIDQ0OiB7IG5hbWU6IFwiaW1wbGVtZW50YXRpb25fZGV0YWlsc1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1wbGVtZW50YXRpb25EZXRhaWxzXCIgfSxcbiAgICAgIDQ3OiB7IG5hbWU6IFwidGVzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuVGVzdENhdGVnb3J5XCIgfSxcbiAgICAgIDEyOTogeyBuYW1lOiBcIm1lZGlhX3R5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIk1lZGlhVHlwZVwiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBNZWRpYVR5cGU6IHsgMDogXCJNSVhFRFwiLCAxOiBcIkFVRElPXCIsIDI6IFwiVklERU9cIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BbGJ1bVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZ2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiVHlwZVwiIH0sXG4gICAgICA1OiB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgNjogeyBuYW1lOiBcImRhdGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIiB9LFxuICAgICAgNzogeyBuYW1lOiBcInBvcHVsYXJpdHlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgODogeyBuYW1lOiBcImdlbnJlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA5OiB7IG5hbWU6IFwiY292ZXJcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMDogeyBuYW1lOiBcImV4dGVybmFsX2lkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMTogeyBuYW1lOiBcImRpc2NcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRpc2NcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEyOiB7IG5hbWU6IFwicmV2aWV3XCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMzogeyBuYW1lOiBcImNvcHlyaWdodFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29weXJpZ2h0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNDogeyBuYW1lOiBcInJlc3RyaWN0aW9uXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTU6IHsgbmFtZTogXCJyZWxhdGVkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BbGJ1bVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTY6IHsgbmFtZTogXCJzYWxlX3BlcmlvZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuU2FsZVBlcmlvZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTc6IHsgbmFtZTogXCJjb3Zlcl9ncm91cFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VHcm91cFwiIH0sXG4gICAgICAxODogeyBuYW1lOiBcIm9yaWdpbmFsX3RpdGxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDE5OiB7IG5hbWU6IFwidmVyc2lvbl90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyMDogeyBuYW1lOiBcInR5cGVfc3RyXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDIzOiB7IG5hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdmFpbGFiaWxpdHlcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDI1OiB7IG5hbWU6IFwibGljZW5zb3JcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkxpY2Vuc29yXCIgfSxcbiAgICAgIDM3OiB7IG5hbWU6IFwicHJlcmVsZWFzZV9jb25maWdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIFR5cGU6IHsgMTogXCJBTEJVTVwiLCAyOiBcIlNJTkdMRVwiLCAzOiBcIkNPTVBJTEFUSU9OXCIsIDQ6IFwiRVBcIiwgNTogXCJBVURJT0JPT0tcIiwgNjogXCJQT0RDQVNUXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudFJhdGluZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidGFnXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJDb250ZW50UmF0aW5nVGFnXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJsYWJlbFwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgQ29udGVudFJhdGluZ1RhZzogeyAwOiBcIlVOS05PV05cIiwgMTogXCJFWFBMSUNJVFwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInllYXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm1vbnRoXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJkYXlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzaXplXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJTaXplXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJ3aWR0aFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiaGVpZ2h0XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IFNpemU6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiU01BTExcIiwgMjogXCJNRURJVU1cIiwgMzogXCJMQVJHRVwiLCA0OiBcIkVYVFJBX0xBUkdFXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9GaWxlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJmaWxlX2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImZvcm1hdFwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiRm9ybWF0XCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJiaXRyYXRlXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJwcmV2aWV3XCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIEZvcm1hdDogeyAxOiBcIk1QNFwiLCAyOiBcIk9HR1wiLCAzOiBcIldFQk1cIiwgNDogXCJVTktOT1dOXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiZ2VucmVcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDU6IHsgbmFtZTogXCJwcm9maWxlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RQcm9maWxlXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0UHJvZmlsZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYmlvZ3JhcGh5XCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJpbWFnZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJhcnRpc3RfbmFtZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuTG9jYWxpemVkU3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkxvY2FsaXplZFN0cmluZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibG9jYWxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzdHJpbmdcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJ0eXBlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlJlc3RyaWN0aW9uXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjb3VudHJpZXNcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJjYXRhbG9ndWVzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzOiB7IG5hbWU6IFwicmVhc29uXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJSZWFzb25cIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgUmVhc29uOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIk5PVF9BVkFJTEFCTEVfSU5fQ09VTlRSWVwiLCAyOiBcIk5PVF9BVkFJTEFCTEVfRk9SX0NVUlJFTkNZXCIsIDM6IFwiTk9UX0FWQUlMQUJMRV9GT1JfVVNFUlwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF2YWlsYWJpbGl0eVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwic3RhcnRfdGltZVwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJhZnRlcl9zdGFydF90aW1lXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaXNfYXZhaWxhYmxlXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrQXVkaW9Gb3JtYXRcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImNvZGVjXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJDb2RlY1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYml0cmF0ZVwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgfSxcbiAgICBlbnVtczoge1xuICAgICAgQ29kZWM6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiTVAzXCIsIDI6IFwiQUFDXCIsIDM6IFwiT0dHX1ZPUkJJU1wiLCA0OiBcIkZMQUNcIiwgNTogXCJXRUJNQV9PUFVTXCIsIDY6IFwiV0VCTUFfVk9SQklTXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9cIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdhaW5cIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInNhbXBsZV9vZmZzZXRcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5EaXNjXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJudW1iZXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RXaXRoUm9sZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiYXJ0aXN0XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInJvbGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFJvbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJoYXNfc2F2aW5nX3JpZ2h0c1wiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RSb2xlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiUm9sZUlkXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBSb2xlSWQ6IHsgMDogXCJNQUlOXCIsIDE6IFwiRkVBVFVSRURcIiwgMjogXCJSRU1JWFwiLCAzOiBcIlBST0RVQ0VSXCIsIDQ6IFwiQ09NUE9TRVJcIiwgNTogXCJMWVJJQ0lTVFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlNhbGVQZXJpb2RcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInN0YXJ0XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJlbmRcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZUdyb3VwXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJiYWNraW5nX3R5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIkJhY2tpbmdUeXBlXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpbWFnZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IEJhY2tpbmdUeXBlOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIkRFRkFVTFRcIiwgMjogXCJWSURFT19GUkFNRVwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvcHlyaWdodFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiVHlwZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwidGV4dFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBUeXBlOiB7IDA6IFwiUFwiLCAxOiBcIkNcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5WaWRlb0ZpbGVcIjoge1xuICAgIGZpZWxkczogeyAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuTGljZW5zb3JcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImxpY2Vuc29yX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudEF1dGhvcml6YXRpb25BdHRyaWJ1dGVzXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjYXRfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImNvbnRlbnRfcmlnaHRzXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJyaWdodHNfb3duZXJfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbXBsZW1lbnRhdGlvbkRldGFpbHNcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImltcGxfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuUHJlcmVsZWFzZUNvbmZpZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiaXNfcHJlbWl1bV9vbmx5XCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwicmVsZWFzZV9kYXRlXCIsIHR5cGU6IFwiaW50NjRcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5UZXN0Q2F0ZWdvcnlcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImNhdGVnb3J5XCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpc19lbmFibGVkXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgfSxcbiAgfSxcbn07IiwgImltcG9ydCB7IG1ldGFkYXRhU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hLnRzXCI7XG5cbmZ1bmN0aW9uIHdhcm4ocmVhc29uOiBzdHJpbmcsIGN0eE9yVGh1bms6IFJlY29yZDxzdHJpbmcsIGFueT4gfCAoKCkgPT4gUmVjb3JkPHN0cmluZywgYW55PikpIHtcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcyhcIkRlY29kZSBlcnJvclwiKSB8fCByZWFzb24uaW5jbHVkZXMoXCJTY2hlbWEgbm90IGZvdW5kXCIpKSB7XG4gICAgY29uc3QgY3R4ID0gdHlwZW9mIGN0eE9yVGh1bmsgPT09IFwiZnVuY3Rpb25cIiA/IGN0eE9yVGh1bmsoKSA6IGN0eE9yVGh1bms7XG4gICAgY29uc29sZS53YXJuKFwiW1Byb3RvYnVmXVwiLCByZWFzb24sIGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3RvYnVmUmVhZGVyIHtcbiAgcHJpdmF0ZSB2aWV3OiBEYXRhVmlldztcbiAgcHJpdmF0ZSBieXRlczogVWludDhBcnJheTtcbiAgcHVibGljIG9mZnNldDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBSZWNvcmQ8c3RyaW5nIHwgbnVtYmVyLCBudW1iZXI+IHwgQXJyYXlMaWtlPG51bWJlcj4gfCBVaW50OEFycmF5KSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICB0aGlzLmJ5dGVzID0gZGF0YTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgXCJsZW5ndGhcIiBpbiBkYXRhKSB7XG4gICAgICB0aGlzLmJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoQXJyYXkuZnJvbShkYXRhIGFzIEFycmF5TGlrZTxudW1iZXI+KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnl0ZXMgPSBuZXcgVWludDhBcnJheShPYmplY3QudmFsdWVzKGRhdGEpKTtcbiAgICB9XG4gICAgdGhpcy52aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuYnl0ZXMuYnVmZmVyLCB0aGlzLmJ5dGVzLmJ5dGVPZmZzZXQsIHRoaXMuYnl0ZXMuYnl0ZUxlbmd0aCk7XG4gIH1cblxuICBnZXQgaXNFeGhhdXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMuYnl0ZXMubGVuZ3RoO1xuICB9XG5cbiAgcmVhZFZhcmludCgpOiBiaWdpbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5pc0V4aGF1c3RlZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHJlc3VsdCA9IDBuO1xuICAgIGxldCBzaGlmdCA9IDBuO1xuICAgIHdoaWxlICghdGhpcy5pc0V4aGF1c3RlZCkge1xuICAgICAgY29uc3QgYnl0ZSA9IEJpZ0ludCh0aGlzLmJ5dGVzW3RoaXMub2Zmc2V0KytdKTtcbiAgICAgIHJlc3VsdCB8PSAoYnl0ZSAmIDB4N2ZuKSA8PCBzaGlmdDtcbiAgICAgIGlmICghKGJ5dGUgJiAweDgwbikpIHJldHVybiByZXN1bHQ7XG4gICAgICBzaGlmdCArPSA3bjtcbiAgICAgIGlmIChzaGlmdCA+IDcwbikge1xuICAgICAgICB3YXJuKFwiVmFyaW50IHRvbyBsb25nXCIsIHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIHNoaWZ0OiBzaGlmdC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVhZFppZ1phZ1ZhcmludCgpOiBiaWdpbnQge1xuICAgIGNvbnN0IG4gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICBpZiAobiA9PT0gbnVsbCkge1xuICAgICAgd2FybihcIkludmFsaWQgemlnemFnIHZhcmludFwiLCB7IG9mZnNldDogdGhpcy5vZmZzZXQgfSk7XG4gICAgICByZXR1cm4gMG47XG4gICAgfVxuICAgIHJldHVybiAobiA+PiAxbikgXiAtKG4gJiAxbik7XG4gIH1cblxuICByZWFkQnl0ZXMobGVuZ3RoOiBudW1iZXIpOiBVaW50OEFycmF5IHtcbiAgICBjb25zdCBhY3R1YWxMZW5ndGggPSBNYXRoLm1pbihsZW5ndGgsIHRoaXMuYnl0ZXMubGVuZ3RoIC0gdGhpcy5vZmZzZXQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYnl0ZXMuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgYWN0dWFsTGVuZ3RoKTtcbiAgICB0aGlzLm9mZnNldCArPSBhY3R1YWxMZW5ndGg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNraXAod2lyZVR5cGU6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAod2lyZVR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgaWYgKGxlbiAhPT0gbnVsbCkgdGhpcy5vZmZzZXQgKz0gTnVtYmVyKGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOlxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgICAgIGlmICh0YWcgPT09IG51bGwgfHwgKE51bWJlcih0YWcpICYgNykgPT09IDQpIGJyZWFrO1xuICAgICAgICAgIHRoaXMuc2tpcChOdW1iZXIodGFnKSAmIDcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHdhcm4oXCJVbmtub3duIHdpcmUgdHlwZVwiLCB7XG4gICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVjb2RlKHNjaGVtYU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3Qgc2NoZW1hID0gbWV0YWRhdGFTY2hlbWFbc2NoZW1hTmFtZV07XG4gICAgaWYgKCFzY2hlbWEpIHtcbiAgICAgIHdhcm4oXCJTY2hlbWEgbm90IGZvdW5kXCIsIHsgc2NoZW1hTmFtZSB9KTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICAgIHdoaWxlICghdGhpcy5pc0V4aGF1c3RlZCkge1xuICAgICAgY29uc3QgdGFnID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICBpZiAodGFnID09PSBudWxsIHx8IHRhZyA9PT0gMG4pIGJyZWFrO1xuXG4gICAgICBjb25zdCBmaWVsZE51bWJlciA9IE51bWJlcih0YWcgPj4gM24pO1xuICAgICAgY29uc3Qgd2lyZVR5cGUgPSBOdW1iZXIodGFnICYgN24pO1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEuZmllbGRzW2ZpZWxkTnVtYmVyXTtcblxuICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICBpZiAod2lyZVR5cGUgPT09IDIpIHtcbiAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgIGNvbnN0IHJhdyA9IHRoaXMucmVhZEJ5dGVzKGxlbik7XG5cbiAgICAgICAgICB3YXJuKFwiVW5rbm93biBmaWVsZFwiLCAoKSA9PiAoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgICB3aXJlVHlwZSxcbiAgICAgICAgICAgIGxlbmd0aDogbGVuLFxuICAgICAgICAgICAgaGV4OiBBcnJheS5mcm9tKHJhdylcbiAgICAgICAgICAgICAgLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKVxuICAgICAgICAgICAgICAuam9pbihcIiBcIiksXG4gICAgICAgICAgICBhc2NpaTogbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHJhdykucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgXCIuXCIpLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuKFwiVW5rbm93biBmaWVsZFwiLCB7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYU5hbWUsXG4gICAgICAgICAgICBmaWVsZE51bWJlcixcbiAgICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5za2lwKHdpcmVUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWU6IGFueTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHRoaXMucmVhZEJ5dGVzKGxlbikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJieXRlc1wiOiB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgICAgdmFsdWUgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICB0aGlzLnJlYWRCeXRlcyhsZW4pLFxuICAgICAgICAgICAgICAoYikgPT4gKGIgPCAxNiA/IFwiMFwiIDogXCJcIikgKyBiLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiYm9vbFwiOlxuICAgICAgICAgICAgdmFsdWUgPSAodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pICE9PSAwbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbnQzMlwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50MzJcIjpcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbnQ2NFwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50NjRcIjoge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMucmVhZFZhcmludCgpID8/IDBuO1xuICAgICAgICAgICAgdmFsdWUgPSB2IDw9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgPyBOdW1iZXIodikgOiB2LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcInNpbnQzMlwiOlxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodGhpcy5yZWFkWmlnWmFnVmFyaW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNpbnQ2NFwiOiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5yZWFkWmlnWmFnVmFyaW50KCk7XG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgIHYgPD0gQmlnSW50KE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSAmJiB2ID49IEJpZ0ludChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUilcbiAgICAgICAgICAgICAgICA/IE51bWJlcih2KVxuICAgICAgICAgICAgICAgIDogdi50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJmaXhlZDMyXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRVaW50MzIodGhpcy5vZmZzZXQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJmaXhlZDY0XCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRCaWdVaW50NjQodGhpcy5vZmZzZXQsIHRydWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImZsb2F0XCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRGbG9hdDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZG91YmxlXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRGbG9hdDY0KHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZW51bVwiOiB7XG4gICAgICAgICAgICBjb25zdCBlbnVtVmFsID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gKGZpZWxkLmVudW1UeXBlICYmIHNjaGVtYS5lbnVtcz8uW2ZpZWxkLmVudW1UeXBlXT8uW2VudW1WYWxdKSA/PyBlbnVtVmFsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm90b2J1ZlJlYWRlcih0aGlzLnJlYWRCeXRlcyhsZW4pKS5kZWNvZGUoZmllbGQudHlwZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3YXJuKFwiRGVjb2RlIGVycm9yXCIsIHtcbiAgICAgICAgICBzY2hlbWE6IHNjaGVtYU5hbWUsXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoZmllbGQucmVwZWF0ZWQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHRbZmllbGQubmFtZV0pIHJlc3VsdFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICByZXN1bHRbZmllbGQubmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbZmllbGQubmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQcm90b2J1ZihkYXRhOiBhbnksIHNjaGVtYU5hbWU6IHN0cmluZyk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm90b2J1ZlJlYWRlcihkYXRhKS5kZWNvZGUoc2NoZW1hTmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwgImNvbnN0IEdMT0JBTF9LRVkgPSBcIl9fY2FjaGVkX3dlYnBhY2tfbW9kdWxlc1wiO1xuXG5pZiAoIShnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV0pIHtcbiAgKGdsb2JhbFRoaXMgYXMgYW55KVtHTE9CQUxfS0VZXSA9IHtcbiAgICByZXF1aXJlOiBudWxsLFxuICAgIG1vZHVsZXM6IG51bGwsXG4gICAgbGFzdE1vZHVsZUNvdW50OiAwLFxuICAgIHNlcnZpY2VDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgICBzZWFyY2hDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgICBjb21wb25lbnRDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgfTtcbn1cblxuY29uc3Qgc2hhcmVkID0gKGdsb2JhbFRoaXMgYXMgYW55KVtHTE9CQUxfS0VZXTtcblxuZXhwb3J0IGNvbnN0IFNwb3RpZnlXZWJwYWNrID0ge1xuICBnZXRNb2R1bGVzKCkge1xuICAgIGlmICghc2hhcmVkLnJlcXVpcmUpIHtcbiAgICAgIGNvbnN0IHdlYnBhY2sgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYnBhY2tDaHVua2NsaWVudF93ZWI7XG4gICAgICBpZiAoIXdlYnBhY2spIHJldHVybiBzaGFyZWQubW9kdWxlcyA/PyBbXTtcbiAgICAgIHNoYXJlZC5yZXF1aXJlID0gd2VicGFjay5wdXNoKFtbU3ltYm9sKCldLCB7fSwgKHJlOiBhbnkpID0+IHJlXSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkgcmV0dXJuIHNoYXJlZC5tb2R1bGVzID8/IFtdO1xuXG4gICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzaGFyZWQucmVxdWlyZS5tKTtcblxuICAgIGlmIChzaGFyZWQubW9kdWxlcyAmJiBzaGFyZWQubGFzdE1vZHVsZUNvdW50ID09PSBjdXJyZW50S2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzaGFyZWQubW9kdWxlcztcbiAgICB9XG5cbiAgICBzaGFyZWQubW9kdWxlcyA9IGN1cnJlbnRLZXlzLm1hcCgoaWQpID0+ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHNoYXJlZC5yZXF1aXJlKGlkKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1vZHVsZSk7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbW9kdWxlXTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaGFyZWQubGFzdE1vZHVsZUNvdW50ID0gY3VycmVudEtleXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHNoYXJlZC5tb2R1bGVzO1xuICB9LFxuXG4gIGdldE1vZHVsZUJ5SWQoaWQ6IHN0cmluZykge1xuICAgIGlmICghc2hhcmVkLm1vZHVsZXMpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGlkKTtcbiAgICBpZiAoIWlzTmFOKGluZGV4KSAmJiBzaGFyZWQubW9kdWxlc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBzaGFyZWQubW9kdWxlc1tpbmRleF0oKTtcbiAgICB9XG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSkge1xuICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgbW9kdWxlID0gc2hhcmVkLnJlcXVpcmU/LihpZCk7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb2R1bGUpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbbW9kdWxlXTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICBmaW5kTW9kdWxlQnlDb250ZW50KGtleXdvcmRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0ga2V5d29yZHMuam9pbihcIixcIik7XG4gICAgaWYgKHNoYXJlZC5zZWFyY2hDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLnNlYXJjaENhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlPy5tKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBzaGFyZWQucmVxdWlyZS5tO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiBtb2R1bGVzKSB7XG4gICAgICBjb25zdCBtb2R1bGVGYWN0b3J5ID0gbW9kdWxlc1tpZF07XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZUZhY3RvcnkgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZHVsZUZhY3RvcnkpO1xuXG4gICAgICBpZiAoa2V5d29yZHMuZXZlcnkoKGspID0+IHN0ci5pbmNsdWRlcyhrKSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtb2QgPSBzaGFyZWQucmVxdWlyZShpZCk7XG4gICAgICAgICAgc2hhcmVkLnNlYXJjaENhY2hlLnNldChjYWNoZUtleSwgbW9kKTtcbiAgICAgICAgICByZXR1cm4gbW9kO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byByZXF1aXJlIG1vZHVsZSAke2lkfTpgLCBlcnIpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmVkLnNlYXJjaENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZmluZENvbXBvbmVudEJ5S2V5d29yZHMoa2V5d29yZHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBrZXl3b3Jkcy5qb2luKFwiLFwiKTtcbiAgICBpZiAoc2hhcmVkLmNvbXBvbmVudENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgIHJldHVybiBzaGFyZWQuY29tcG9uZW50Q2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlIHx8ICFzaGFyZWQucmVxdWlyZS5tKSB7XG4gICAgICB0cnkge1xuICAgICAgICBTcG90aWZ5V2VicGFjay5nZXRNb2R1bGVzKCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmU/Lm0pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbW9kdWxlcyA9IHNoYXJlZC5yZXF1aXJlLm07XG4gICAgbGV0IGZvdW5kTW9kdWxlSWQgPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiBtb2R1bGVzKSB7XG4gICAgICBjb25zdCBtb2R1bGVGYWN0b3J5ID0gbW9kdWxlc1tpZF07XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZUZhY3RvcnkgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZHVsZUZhY3RvcnkpO1xuICAgICAgICBpZiAoa2V5d29yZHMuZXZlcnkoKGspID0+IHN0ci5pbmNsdWRlcyhrKSkpIHtcbiAgICAgICAgICBmb3VuZE1vZHVsZUlkID0gaWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF9lKSB7fVxuICAgIH1cblxuICAgIGlmICghZm91bmRNb2R1bGVJZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgZXhwb3J0czogYW55O1xuICAgIHRyeSB7XG4gICAgICBleHBvcnRzID0gc2hhcmVkLnJlcXVpcmUoZm91bmRNb2R1bGVJZCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzaGFyZWQuY29tcG9uZW50Q2FjaGUuc2V0KGNhY2hlS2V5LCBudWxsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGlrZWx5Q29tcG9uZW50ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh2YWx1ZS4kJHR5cGVvZiAmJiBTeW1ib2wua2V5Rm9yKHZhbHVlLiQkdHlwZW9mKT8uaW5jbHVkZXMoXCJyZWFjdFwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoaXNMaWtlbHlDb21wb25lbnQoZXhwb3J0cykpIHtcbiAgICAgIHJlc3VsdCA9IGV4cG9ydHM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXhwb3J0cykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV4cG9ydHNba2V5XTtcbiAgICAgICAgaWYgKGlzTGlrZWx5Q29tcG9uZW50KHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2R1bGVzID0gU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuXG4gICAgZm9yIChjb25zdCBtb2R1bGVHZXR0ZXIgb2YgbW9kdWxlcykge1xuICAgICAgaWYgKCFtb2R1bGVHZXR0ZXIgfHwgdHlwZW9mIG1vZHVsZUdldHRlciAhPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZUdldHRlcigpO1xuICAgICAgaWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkobW9kdWxlKSA/IG1vZHVsZSA6IFttb2R1bGVdO1xuICAgICAgZm9yIChjb25zdCBtIG9mIGV4cG9ydHMpIHtcbiAgICAgICAgaWYgKG0gJiYgdHlwZW9mIG0gPT09IFwiZnVuY3Rpb25cIiAmJiBtLlNFUlZJQ0VfSUQgPT09IHNlcnZpY2VOYW1lKSByZXR1cm4gbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBnZXRDbGllbnQ8VCA9IGFueT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQge1xuICAgIGlmIChzaGFyZWQuc2VydmljZUNhY2hlLmhhcyhzZXJ2aWNlTmFtZSkpIHtcbiAgICAgIHJldHVybiBzaGFyZWQuc2VydmljZUNhY2hlLmdldChzZXJ2aWNlTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IFNlcnZpY2VDbGFzcyA9IFNwb3RpZnlXZWJwYWNrLmZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lKTtcbiAgICBpZiAoIVNlcnZpY2VDbGFzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcG90aWZ5IFNlcnZpY2Ugbm90IGZvdW5kOiAke3NlcnZpY2VOYW1lfWApO1xuICAgIH1cblxuICAgIGxldCBjbGllbnQ6IGFueTtcbiAgICBpZiAodHlwZW9mIFNlcnZpY2VDbGFzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCB0cmFuc3BvcnQgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlNwaWNldGlmeT8uUGxhdGZvcm0/LlJlZ2lzdHJ5Py5yZXNvbHZlKFN5bWJvbC5mb3IoXCJFc3BlcmFudG9UcmFuc3BvcnRcIikpO1xuICAgICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgICBjbGllbnQgPSBuZXcgU2VydmljZUNsYXNzKHRyYW5zcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3BlcmFudG9UcmFuc3BvcnQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50ID0gU2VydmljZUNsYXNzO1xuICAgIH1cblxuICAgIHNoYXJlZC5zZXJ2aWNlQ2FjaGUuc2V0KHNlcnZpY2VOYW1lLCBjbGllbnQpO1xuICAgIHJldHVybiBjbGllbnQ7XG4gIH0sXG59O1xuXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLlNwb3RpZnlXZWJwYWNrID0gU3BvdGlmeVdlYnBhY2s7IiwgImltcG9ydCB7IGRlY29kZVByb3RvYnVmIH0gZnJvbSBcIi4uL3dlYnBhY2svcHJvdG9idWYudHNcIjtcbmltcG9ydCB7IFNwb3RpZnlXZWJwYWNrIH0gZnJvbSBcIi4uL3dlYnBhY2svd2VicGFjay50c1wiO1xuXG5jb25zdCBNZXRhZGF0YVNlcnZpY2UgPSBcInNwb3RpZnkubWRhdGFfZXNwZXJhbnRvLnByb3RvLk1ldGFkYXRhU2VydmljZVwiO1xuY29uc3QgVFJBQ0tfVjQgPSAxMDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWV0YWRhdGFGb3JUcmFja3ModHJhY2tVUklzOiBzdHJpbmdbXSk6IFByb21pc2U8TWFwPHN0cmluZywgYW55Pj4ge1xuICBjb25zdCBNZXRhZGF0YUNsaWVudCA9IFNwb3RpZnlXZWJwYWNrLmdldENsaWVudChNZXRhZGF0YVNlcnZpY2UpO1xuICBjb25zdCB1bmlxdWVVUklzID0gWy4uLm5ldyBTZXQodHJhY2tVUklzKV07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNZXRhZGF0YUNsaWVudC5mZXRjaCh7XG4gICAgZXh0ZW5zaW9uUXVlcnk6IFt7IGV4dGVuc2lvbktpbmQ6IFRSQUNLX1Y0LCBlbnRpdHlVcmk6IHVuaXF1ZVVSSXMgfV0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cbiAgaWYgKHJlc3BvbnNlPy5leHRlbnNpb24/LlswXT8uZW50aXR5RXh0ZW5zaW9uKSB7XG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgcmVzcG9uc2UuZXh0ZW5zaW9uWzBdLmVudGl0eUV4dGVuc2lvbikge1xuICAgICAgY29uc3QgYnl0ZU9iamVjdCA9IGVudGl0eS5leHRlbnNpb25EYXRhPy52YWx1ZTtcbiAgICAgIGlmIChieXRlT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVQcm90b2J1ZihieXRlT2JqZWN0LCBcInNwb3RpZnkubWV0YWRhdGEuVHJhY2tcIik7XG4gICAgICAgIHJlc3VsdE1hcC5zZXQoZW50aXR5LmVudGl0eVVyaSwgZGVjb2RlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRNYXAuc2V0KGVudGl0eS5lbnRpdHlVcmksIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRNYXA7XG59IiwgIi8qKlxuICogRXZlcnkgdXNlci1mYWNpbmcgRW5nbGlzaCBzdHJpbmcgb2YgdGhlIGV4dGVuc2lvbiwgY2VudHJhbGl6ZWQgdG8ga2VlcCBhXG4gKiBmdXR1cmUgaTE4biBwYXNzIHRyaXZpYWwuIENvbXBvbmVudHMgbmV2ZXIgaGFyZC1jb2RlIGRpc3BsYXkgdGV4dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIG1lbnU6IHtcbiAgICBpdGVtTGFiZWw6IFwiRmluZCBEdXBsaWNhdGVzXCIsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgdGl0bGU6IFwiUGxheWxpc3QgRHVwbGljYXRlIEZpbmRlclwiLFxuICAgIGNsb3NlOiBcIkNsb3NlXCIsXG4gIH0sXG4gIGJhZGdlczoge1xuICAgIGVkaXRhYmxlOiBcIkVkaXRhYmxlXCIsXG4gICAgZWRpdGFibGVIaW50OlxuICAgICAgXCJZb3UgaGF2ZSBlZGl0IHBlcm1pc3Npb24gb24gdGhpcyBwbGF5bGlzdCAob3duZXIgb3IgY29sbGFib3JhdG9yKSwgc28geW91IGNhbiByZW1vdmUgdHJhY2tzIGZyb20gaXQuXCIsXG4gICAgcmVhZE9ubHk6IFwiUmVhZC1vbmx5XCIsXG4gICAgcmVhZE9ubHlIaW50OlxuICAgICAgXCJZb3UgZG9uJ3QgaGF2ZSBlZGl0IHBlcm1pc3Npb24gb24gdGhpcyBwbGF5bGlzdCAobmVpdGhlciBvd25lciBub3IgY29sbGFib3JhdG9yKSwgc28gcmVtb3ZhbCBpcyBkaXNhYmxlZC5cIixcbiAgfSxcbiAgc3RhdGVzOiB7XG4gICAgbG9hZGluZ1RyYWNrczogXCJMb2FkaW5nIHBsYXlsaXN0XHUyMDI2XCIsXG4gICAgbG9hZGVkQ291bnQ6IChuOiBudW1iZXIpID0+IGBMb2FkaW5nIHBsYXlsaXN0XHUyMDI2ICR7bn0gdHJhY2tzYCxcbiAgICBsb2FkaW5nRGV0YWlsczogXCJGZXRjaGluZyB0cmFjayBkZXRhaWxzIChJU1JDKVwiLFxuICAgIHNjYW5uaW5nOiBcIlNjYW5uaW5nIGZvciBkdXBsaWNhdGVzXHUyMDI2XCIsXG4gICAgZW1wdHlQbGF5bGlzdDogXCJUaGlzIHBsYXlsaXN0IGlzIGVtcHR5LCB0aGVyZSBpcyBub3RoaW5nIHRvIHNjYW4uXCIsXG4gICAgbm9EdXBsaWNhdGVzOiBcIk5vIGR1cGxpY2F0ZXMgZm91bmQgaW4gdGhpcyBwbGF5bGlzdC5cIixcbiAgICBub0R1cGxpY2F0ZXNIaW50OiBcIlRyeSB0aGUgbG93ZXItY29uZmlkZW5jZSBsZXZlbHMgXHUyMDE0IG9yIHRoZSBwbGF5bGlzdCBtYXkgc2ltcGx5IGJlIGNsZWFuLlwiLFxuICAgIG5ldHdvcmtFcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBsb2FkaW5nIHRoZSBwbGF5bGlzdC5cIixcbiAgICByZXRyeTogXCJSZXRyeVwiLFxuICAgIHJlYWRPbmx5Tm90aWNlOlxuICAgICAgXCJUaGlzIHBsYXlsaXN0IGlzIHJlYWQtb25seTogeW91IGRvbid0IGhhdmUgZWRpdCBwZXJtaXNzaW9uIG9uIGl0ICh5b3UgYXJlIG5laXRoZXIgaXRzIG93bmVyIG5vciBhIGNvbGxhYm9yYXRvciksIHNvIHJlbW92aW5nIHRyYWNrcyBpcyBkaXNhYmxlZC4gWW91IGNhbiBzdGlsbCByZXZpZXcgZXZlcnkgZ3JvdXAuXCIsXG4gIH0sXG4gIGxldmVsczoge1xuICAgIGV4YWN0OiB7XG4gICAgICBsYWJlbDogXCJJZGVudGljYWwgVHJhY2tzXCIsXG4gICAgICBoaW50OiBcIlRoZSBleGFjdCBzYW1lIFNwb3RpZnkgdHJhY2sgYWRkZWQgc2V2ZXJhbCB0aW1lcyB0byB0aGUgcGxheWxpc3QuXCIsXG4gICAgfSxcbiAgICBpc3JjOiB7XG4gICAgICBsYWJlbDogXCJTYW1lIFJlY29yZGluZ1wiLFxuICAgICAgaGludDogXCJEaWZmZXJlbnQgU3BvdGlmeSBlbnRyaWVzIHNoYXJpbmcgdGhlIHNhbWUgSVNSQyBcdTIwMTQgaWRlbnRpY2FsIGF1ZGlvLCBkaWZmZXJlbnQgcmVsZWFzZXMuXCIsXG4gICAgfSxcbiAgICBwcm9iYWJsZToge1xuICAgICAgbGFiZWw6IFwiU2FtZSBUaXRsZSAmIEFydGlzdFwiLFxuICAgICAgaGludDogXCJTYW1lIHRpdGxlIGFuZCBhdCBsZWFzdCBvbmUgc2hhcmVkIGFydGlzdC4gQWxtb3N0IGFsd2F5cyByZWFsIGR1cGxpY2F0ZXMuXCIsXG4gICAgfSxcbiAgICBsaWtlbHk6IHtcbiAgICAgIGxhYmVsOiBcIlRpdGxlICYgTGVuZ3RoIE1hdGNoXCIsXG4gICAgICBoaW50OiBcIlNhbWUgdGl0bGUgYW5kIGR1cmF0aW9ucyB3aXRoaW4gNSBzZWNvbmRzLlwiLFxuICAgIH0sXG4gICAgcG9zc2libGU6IHtcbiAgICAgIGxhYmVsOiBcIlNpbWlsYXIgU29uZ3NcIixcbiAgICAgIGhpbnQ6IFwiU2ltaWxhciB0aXRsZXMgYW5kIHNpbWlsYXIgZHVyYXRpb25zIFx1MjAxNCBtYXkgaW5jbHVkZSByZW1peGVzIGFuZCBjb3ZlcnMuXCIsXG4gICAgfSxcbiAgICBtYXliZToge1xuICAgICAgbGFiZWw6IFwiUG9zc2libGUgTWF0Y2hlc1wiLFxuICAgICAgaGludDogXCJMb3ctY29uZmlkZW5jZSB0aXRsZSBzaW1pbGFyaXR5IG9ubHkuIFJldmlldyB2ZXJ5IGNhcmVmdWxseS5cIixcbiAgICB9LFxuICB9LFxuICBsZXZlbE1ldGE6IHtcbiAgICBncm91cHNDb3VudDogKG46IG51bWJlcikgPT4gYCR7bn0gZ3JvdXAke24gPT09IDEgPyBcIlwiIDogXCJzXCJ9YCxcbiAgICBlbXB0eUxldmVsOiBcIk5vIG1hdGNoZXMgZm9yIHRoaXMgbGV2ZWwuXCIsXG4gIH0sXG4gIHBhbmVsOiB7XG4gICAgc2VsZWN0QWxsOiBcIlNlbGVjdCBhbGxcIixcbiAgICBzZWxlY3RBbGxIaW50OlxuICAgICAgXCJDaGVja3MgZXZlcnkgZHVwbGljYXRlIG9mIHRoaXMgbGV2ZWwsIGV4Y2VwdCBvbmUgZW50cnkgcGVyIGdyb3VwIFx1MjAxNCB5b3UgbmV2ZXIgd2lwZSBvdXQgYSBzb25nIGVudGlyZWx5LlwiLFxuICAgIGRlc2VsZWN0QWxsOiBcIkRlc2VsZWN0IGFsbFwiLFxuICB9LFxuICByb3c6IHtcbiAgICBub0FkZGVkRGF0ZTogXCJcIixcbiAgICB1bmtub3duQWxidW06IFwiVW5rbm93biBhbGJ1bVwiLFxuICAgIG5vQXJ0aXN0czogXCJcIixcbiAgICBwbGF5OiBcIlBsYXkgdGhpcyB0cmFjayB0byBjb21wYXJlIGl0XCIsXG4gICAgcGF1c2U6IFwiUGF1c2VcIixcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgc2VsZWN0aW9uOiAobjogbnVtYmVyKSA9PiBgJHtufSB0cmFjayR7biA9PT0gMSA/IFwiXCIgOiBcInNcIn0gc2VsZWN0ZWRgLFxuICAgIHdhcm5pbmc6IFwiUmVtb3ZhbCBpcyBwZXJtYW5lbnQgYW5kIGNhbm5vdCBiZSB1bmRvbmUuXCIsXG4gICAgY2FuY2VsOiBcIkNhbmNlbFwiLFxuICAgIHJlbW92ZTogKG46IG51bWJlcikgPT4gYFJlbW92ZSAke259IHRyYWNrJHtuID09PSAxID8gXCJcIiA6IFwic1wifWAsXG4gICAgY29uZmlybVRpdGxlOiBcIkNvbmZpcm0gcmVtb3ZhbFwiLFxuICAgIGNvbmZpcm1Cb2R5OiAobjogbnVtYmVyLCBwbGF5bGlzdDogc3RyaW5nKSA9PlxuICAgICAgYFJlbW92ZSAke259IHRyYWNrJHtuID09PSAxID8gXCJcIiA6IFwic1wifSBmcm9tIFwiJHtwbGF5bGlzdH1cIj8gVGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlLmAsXG4gICAgY29uZmlybVJlbW92ZTogKG46IG51bWJlcikgPT4gYFllcywgcmVtb3ZlICR7bn1gLFxuICAgIGtlZXBFZGl0aW5nOiBcIktlZXAgZWRpdGluZ1wiLFxuICAgIHJlbW92aW5nOiAoZG9uZTogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSA9PiBgUmVtb3ZpbmcgJHtkb25lfS8ke3RvdGFsfVx1MjAyNmAsXG4gIH0sXG4gIHN1bW1hcnk6IHtcbiAgICBhbGxSZW1vdmVkOiAobjogbnVtYmVyKSA9PiBgJHtufSB0cmFjayR7biA9PT0gMSA/IFwiXCIgOiBcInNcIn0gcmVtb3ZlZCBmcm9tIHRoZSBwbGF5bGlzdC5gLFxuICAgIHBhcnRpYWxGYWlsdXJlOiAocmVtb3ZlZDogbnVtYmVyLCBmYWlsZWQ6IG51bWJlcikgPT5cbiAgICAgIGAke3JlbW92ZWR9IHJlbW92ZWQsICR7ZmFpbGVkfSBmYWlsZWQuIFJldHJ5IHRoZSByZW1haW5pbmcgb25lcyBiZWxvdy5gLFxuICAgIGFsbEZhaWxlZDogKGZhaWxlZDogbnVtYmVyKSA9PiBgUmVtb3ZhbCBmYWlsZWQsIG5vIHRyYWNrIHdhcyByZW1vdmVkICgke2ZhaWxlZH0gYXR0ZW1wdGVkKS5gLFxuICB9LFxufSBhcyBjb25zdDtcbiIsICIvKipcbiAqIFRoaW4gYWRhcHRlciBhcm91bmQgdGhlIFNwaWNldGlmeSBBUElzLlxuICpcbiAqIEV2ZXJ5dGhpbmcgdGhhdCB0b3VjaGVzIGBTcGljZXRpZnkuKmAgbGl2ZXMgaGVyZSBzbyB0aGUgZGV0ZWN0aW9uIGxvZ2ljXG4gKiBzdGF5cyBpbmRlcGVuZGVudCBvZiBTcG90aWZ5IGludGVybmFscyAod2hpY2ggY2hhbmdlIGJldHdlZW4gY2xpZW50XG4gKiB2ZXJzaW9ucykuXG4gKi9cbmltcG9ydCB7IGZldGNoTWV0YWRhdGFGb3JUcmFja3MgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9mZXRjaE1ldGFkYXRhRm9yVHJhY2tzLnRzXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXlsaXN0RW50cnkgfSBmcm9tIFwiLi9kZXRlY3Rpb24vdHlwZXMudHNcIjtcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi9zdHJpbmdzLnRzXCI7XG5cbmNvbnN0IENPTlRFTlRTX1BBR0VfU0laRSA9IDIwMDtcbmNvbnN0IEVESVRBQklMSVRZX1BBR0VfU0laRSA9IDEwXzAwMDtcbmNvbnN0IElTUkNfQkFUQ0hfU0laRSA9IDEwMDtcbmV4cG9ydCBjb25zdCBSRU1PVkFMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBJU1JDX1JFVFJZX0FUVEVNUFRTID0gMztcbmNvbnN0IFJFVFJZX0JBU0VfREVMQVlfTVMgPSA1MDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RJZGVudGl0eSB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RFZGl0YWJpbGl0eSB7XG4gIGNhbkVkaXQ6IGJvb2xlYW47XG4gIGtub3duOiBib29sZWFuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgKi9cblxuY29uc3QgZGVsYXkgPSAobXM6IG51bWJlcikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblxuLyoqIE1pbmltYWwgc2hhcGUgb2YgdGhlIGludGVybmFsIHBsYXlsaXN0IEFQSSBzdXJmYWNlIHVzZWQgYnkgdGhpcyBhZGFwdGVyLiAqL1xuaW50ZXJmYWNlIFBsYXlsaXN0QXBpTGlrZSB7XG4gIGdldENvbnRlbnRzPzogKFxuICAgIHVyaTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHsgb2Zmc2V0PzogbnVtYmVyOyBsaW1pdD86IG51bWJlciB9LFxuICApID0+IFByb21pc2U8eyBpdGVtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10gfT47XG4gIGdldE1ldGFkYXRhPzogKHVyaTogc3RyaW5nLCBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IFByb21pc2U8eyBuYW1lPzogc3RyaW5nIH0+O1xuICByZW1vdmU/OiAodXJpOiBzdHJpbmcsIGl0ZW1zOiB7IHVyaTogc3RyaW5nOyB1aWQ6IHN0cmluZyB9W10pID0+IFByb21pc2U8dW5rbm93bj47XG59XG5cbmZ1bmN0aW9uIHBsYXlsaXN0QXBpKCk6IFBsYXlsaXN0QXBpTGlrZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTcGljZXRpZnk/LlBsYXRmb3JtPy5QbGF5bGlzdEFQSSBhcyBQbGF5bGlzdEFwaUxpa2UgfCB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nLCBpc0Vycm9yID0gZmFsc2UpOiB2b2lkIHtcbiAgU3BpY2V0aWZ5Py5zaG93Tm90aWZpY2F0aW9uPy4obWVzc2FnZSwgaXNFcnJvcik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGxheWxpc3QgZWRpdGFiaWxpdHkgKi9cblxuLyoqXG4gKiBBbiBlbnRyeSBvZiB0aGUgdXNlcidzIGxpYnJhcnkgbGlzdGluZy4gYGNhbkFkZFRvYCBpcyB0aGUgZWRpdC1yaWdodHMgcHJveHlcbiAqIHVzZWQgYWNyb3NzIHRoaXMgcmVwbydzIGV4dGVuc2lvbnMgKG93bmVyIG9yIGNvbGxhYm9yYXRvciBvbiB0aGUgcGxheWxpc3QpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaWJyYXJ5SXRlbShpdGVtOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFBsYXlsaXN0SWRlbnRpdHkgfCBudWxsIHtcbiAgaWYgKGl0ZW0udHlwZSAhPT0gXCJwbGF5bGlzdFwiKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgdXJpID0gdHlwZW9mIGl0ZW0udXJpID09PSBcInN0cmluZ1wiID8gaXRlbS51cmkgOiBudWxsO1xuICBpZiAoIXVyaSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiB7IHVyaSwgbmFtZTogdHlwZW9mIGl0ZW0ubmFtZSA9PT0gXCJzdHJpbmdcIiA/IGl0ZW0ubmFtZSA6IFwiXCIgfTtcbn1cblxuLyoqXG4gKiBMb29rIHVwIHRoZSBwbGF5bGlzdCBpbiB0aGUgdXNlcidzIGxpYnJhcnkgbGlzdGluZyB0byByZXNvbHZlIGl0c1xuICogZWRpdGFiaWxpdHkuIFBhZ2VzIHVudGlsIHRoZSBwbGF5bGlzdCBpcyBmb3VuZCAoZWFybHkgc3RvcCkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0RWRpdGFiaWxpdHkocGxheWxpc3RVcmk6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3RFZGl0YWJpbGl0eT4ge1xuICAvLyBUaGUgbGlicmFyeSBsaXN0aW5nIGVuZHBvaW50IGV4aXN0cyBhdCBydW50aW1lIGJ1dCBpcyBub3QgcGFydCBvZiB0aGVcbiAgLy8gcmVwbydzIGFtYmllbnQgZC50cywgaGVuY2UgdGhlIG5hcnJvdyBsb2NhbCBjYXN0LlxuICBjb25zdCBMaWJyYXJ5QVBJID0gKFxuICAgIFNwaWNldGlmeT8uUGxhdGZvcm0gYXMgdW5rbm93biBhcyB7XG4gICAgICBMaWJyYXJ5QVBJPzoge1xuICAgICAgICBnZXRDb250ZW50cz86IChcbiAgICAgICAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgKSA9PiBQcm9taXNlPHsgaXRlbXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdIH0+O1xuICAgICAgfTtcbiAgICB9XG4gICk/LkxpYnJhcnlBUEk7XG4gIGlmICghTGlicmFyeUFQST8uZ2V0Q29udGVudHMpIHJldHVybiB7IGNhbkVkaXQ6IGZhbHNlLCBrbm93bjogZmFsc2UgfTtcblxuICBsZXQgb2Zmc2V0ID0gMDtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBsaW1pdDogRURJVEFCSUxJVFlfUEFHRV9TSVpFLFxuICAgICAgICBmbGF0dGVuVHJlZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaXRlbXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10gPSByZXNwb25zZT8uaXRlbXMgPz8gW107XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW0/LnVyaSAhPT0gcGxheWxpc3RVcmkpIGNvbnRpbnVlO1xuICAgICAgICByZXR1cm4geyBjYW5FZGl0OiBpdGVtLmNhbkFkZFRvID09PSB0cnVlLCBrbm93bjogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA8IEVESVRBQklMSVRZX1BBR0VfU0laRSkgcmV0dXJuIHsgY2FuRWRpdDogZmFsc2UsIGtub3duOiBmYWxzZSB9O1xuICAgICAgb2Zmc2V0ICs9IEVESVRBQklMSVRZX1BBR0VfU0laRTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIGVkaXRhYmlsaXR5IGxvb2t1cCBmYWlsZWQ6XCIsIGUpO1xuICAgIHJldHVybiB7IGNhbkVkaXQ6IGZhbHNlLCBrbm93bjogZmFsc2UgfTtcbiAgfVxufVxuXG4vKiogUmVzb2x2ZSBhIHBsYXlsaXN0IGRpc3BsYXkgbmFtZSBmcm9tIHRoZSBzZWxlY3Rpb24gcGF5bG9hZCwgd2l0aCBmYWxsYmFjay4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlUGxheWxpc3ROYW1lKHVyaTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHBsYXlsaXN0QXBpKCk/LmdldE1ldGFkYXRhPy4odXJpLCB7fSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhPy5uYW1lID8/IFwiXCI7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGF5bGlzdCBjb250ZW50cyAqL1xuXG5mdW5jdGlvbiByZWFkRHVyYXRpb24oaXRlbTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBpdGVtLmR1cmF0aW9uTXMgPT09IFwibnVtYmVyXCIpIHJldHVybiBpdGVtLmR1cmF0aW9uTXM7XG4gIGlmICh0eXBlb2YgaXRlbS5kdXJhdGlvbiA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGl0ZW0uZHVyYXRpb247XG4gIGlmIChpdGVtLmR1cmF0aW9uICYmIHR5cGVvZiBpdGVtLmR1cmF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgZHVyYXRpb24gPSBpdGVtLmR1cmF0aW9uIGFzIHsgdG90YWxNcz86IHVua25vd247IG1pbGxpc2Vjb25kcz86IHVua25vd24gfTtcbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uLnRvdGFsTXMgPT09IFwibnVtYmVyXCIpIHJldHVybiBkdXJhdGlvbi50b3RhbE1zO1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb24ubWlsbGlzZWNvbmRzID09PSBcIm51bWJlclwiKSByZXR1cm4gZHVyYXRpb24ubWlsbGlzZWNvbmRzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZWFkSW1hZ2VVcmwoaXRlbTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBzdHJpbmcge1xuICBjb25zdCBhbGJ1bSA9IGl0ZW0uYWxidW0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGltYWdlcyA9IGFsYnVtPy5pbWFnZXMgYXMgQXJyYXk8eyB1cmw/OiB1bmtub3duIH0+IHwgdW5kZWZpbmVkO1xuICBjb25zdCBpbWFnZSA9IGltYWdlcz8uWzBdPy51cmw7XG4gIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIgJiYgaW1hZ2UpIHJldHVybiBpbWFnZTtcbiAgY29uc3QgY292ZXJBcnQgPSBhbGJ1bT8uY292ZXJBcnQgYXMgeyBzb3VyY2VzPzogQXJyYXk8eyB1cmw/OiB1bmtub3duIH0+IH0gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGNvdmVyID0gY292ZXJBcnQ/LnNvdXJjZXM/LlswXT8udXJsO1xuICByZXR1cm4gdHlwZW9mIGNvdmVyID09PSBcInN0cmluZ1wiID8gY292ZXIgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiByZWFkQWRkZWRBdChpdGVtOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHN0cmluZyB7XG4gIGNvbnN0IGFkZGVkQXQgPSBpdGVtLmFkZGVkQXQgPz8gaXRlbS5hZGRlZF9hdDtcbiAgaWYgKHR5cGVvZiBhZGRlZEF0ID09PSBcInN0cmluZ1wiKSByZXR1cm4gYWRkZWRBdDtcbiAgaWYgKGFkZGVkQXQgJiYgdHlwZW9mIGFkZGVkQXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBpc28gPVxuICAgICAgKGFkZGVkQXQgYXMgeyBpc29TdHJpbmc/OiB1bmtub3duOyBpc29fc3RyPzogdW5rbm93biB9KS5pc29TdHJpbmcgPz9cbiAgICAgIChhZGRlZEF0IGFzIHsgaXNvX3N0cj86IHVua25vd24gfSkuaXNvX3N0cjtcbiAgICByZXR1cm4gdHlwZW9mIGlzbyA9PT0gXCJzdHJpbmdcIiA/IGlzbyA6IFwiXCI7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG5cbi8qKlxuICogVVJJIG9mIHRoZSBwbGF5YWJsZSBlbnRyeSBpdHNlbGYuIFBsYXlsaXN0cywgYWxidW1zIGFuZCBhcnRpc3RzIGhhdmUgVVJJc1xuICogdG9vIFx1MjAxNCBhbmQgYSBiYXJlIGBzcG90aWZ5OmxvY2FsOmAgd2l0aCBubyBjb21wb25lbnRzIGlkZW50aWZpZXMgbm90aGluZyBcdTIwMTRcbiAqIHdoaWxlIHBheWxvYWRzIGNhbiBoYW5kIHN1Y2ggdmFsdWVzIHRvIHVucmVsYXRlZCBlbnRyaWVzLiBPbmx5IGEgVVJJIHRoYXRcbiAqIGFjdHVhbGx5IG5hbWVzIGEgdHJhY2thYmxlIGl0ZW0gaXMgYWNjZXB0ZWQsIHRoZSBpdGVtJ3Mgb3duIGZpZWxkIGZpcnN0LlxuICovXG5jb25zdCBDT05URU5UX1VSSSA9IC9ec3BvdGlmeTooPzp0cmFja3xsb2NhbHxlcGlzb2RlfGF1ZGlvfGZpbGV8dmlkZW8pOi4rLztcblxuZnVuY3Rpb24gcmVhZFRyYWNrVXJpKGl0ZW06IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBzdHJpbmcge1xuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBbaXRlbS51cmksIG1ldGFkYXRhLmxpbmtdKSB7XG4gICAgaWYgKHR5cGVvZiBjYW5kaWRhdGUgPT09IFwic3RyaW5nXCIgJiYgQ09OVEVOVF9VUkkudGVzdChjYW5kaWRhdGUpKSByZXR1cm4gY2FuZGlkYXRlO1xuICB9XG4gIHJldHVybiBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQbGF5bGlzdEl0ZW0oXG4gIGl0ZW06IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBwb3NpdGlvbjogbnVtYmVyLFxuKTogUGxheWxpc3RFbnRyeSB8IG51bGwge1xuICBjb25zdCBtZXRhZGF0YSA9IChpdGVtLnRyYWNrTWV0YWRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpID8/IHt9O1xuICBjb25zdCB1cmkgPSByZWFkVHJhY2tVcmkoaXRlbSwgbWV0YWRhdGEpO1xuICBpZiAoIXVyaSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbmFtZSA9XG4gICAgKHR5cGVvZiBpdGVtLm5hbWUgPT09IFwic3RyaW5nXCIgPyBpdGVtLm5hbWUgOiBcIlwiKSB8fFxuICAgICh0eXBlb2YgbWV0YWRhdGEubmFtZSA9PT0gXCJzdHJpbmdcIiA/IG1ldGFkYXRhLm5hbWUgOiBcIlwiKTtcbiAgY29uc3QgYXJ0aXN0RmllbGQgPSBpdGVtLmFydGlzdHMgPz8gbWV0YWRhdGEuYXJ0aXN0O1xuICBjb25zdCBhcnRpc3RzOiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoYXJ0aXN0RmllbGQpXG4gICAgPyBhcnRpc3RGaWVsZFxuICAgICAgICAuZmlsdGVyKChhKTogYSBpcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiB0eXBlb2YgYT8ubmFtZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgLm1hcCgoYSkgPT4gYS5uYW1lIGFzIHN0cmluZylcbiAgICA6IFtdO1xuICBjb25zdCBhbGJ1bSA9XG4gICAgKGl0ZW0uYWxidW0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQpID8/XG4gICAgKG1ldGFkYXRhLmFsYnVtIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKSA/P1xuICAgIHt9O1xuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb24sXG4gICAgdXJpLFxuICAgIHVpZDogdHlwZW9mIGl0ZW0udWlkID09PSBcInN0cmluZ1wiID8gaXRlbS51aWQgOiBcIlwiLFxuICAgIG5hbWUsXG4gICAgYXJ0aXN0cyxcbiAgICBhbGJ1bU5hbWU6IHR5cGVvZiBhbGJ1bS5uYW1lID09PSBcInN0cmluZ1wiID8gYWxidW0ubmFtZSA6IFwiXCIsXG4gICAgYWxidW1Vcmk6IHR5cGVvZiBhbGJ1bS51cmkgPT09IFwic3RyaW5nXCIgPyBhbGJ1bS51cmkgOiBcIlwiLFxuICAgIGltYWdlVXJsOiByZWFkSW1hZ2VVcmwoaXRlbSksXG4gICAgZHVyYXRpb25NczogcmVhZER1cmF0aW9uKGl0ZW0pLFxuICAgIGFkZGVkQXQ6IHJlYWRBZGRlZEF0KGl0ZW0pLFxuICAgIGlzcmM6IG51bGwsXG4gIH07XG59XG5cbi8qKiBGZXRjaCBldmVyeSBlbnRyeSBvZiBhIHBsYXlsaXN0IChwYWdpbmF0ZWQpLCBrZWVwaW5nIG9jY3VycmVuY2UgYHVpZGBzLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RFbnRyaWVzKFxuICBwbGF5bGlzdFVyaTogc3RyaW5nLFxuICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M/OiAobG9hZGVkOiBudW1iZXIpID0+IHZvaWQ7IHNpZ25hbD86IEFib3J0U2lnbmFsIH0gPSB7fSxcbik6IFByb21pc2U8UGxheWxpc3RFbnRyeVtdPiB7XG4gIGNvbnN0IGFwaSA9IHBsYXlsaXN0QXBpKCk7XG4gIGlmICghYXBpPy5nZXRDb250ZW50cykgdGhyb3cgbmV3IEVycm9yKFwiUGxheWxpc3RBUEkgaXMgdW5hdmFpbGFibGVcIik7XG5cbiAgY29uc3QgZW50cmllczogUGxheWxpc3RFbnRyeVtdID0gW107XG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgb3B0aW9ucy5zaWduYWw/LnRocm93SWZBYm9ydGVkKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0Q29udGVudHMocGxheWxpc3RVcmksIHtcbiAgICAgIG9mZnNldCxcbiAgICAgIGxpbWl0OiBDT05URU5UU19QQUdFX1NJWkUsXG4gICAgfSk7XG4gICAgY29uc3QgaXRlbXMgPSByZXNwb25zZT8uaXRlbXMgPz8gW107XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgYnJlYWs7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBsYXlsaXN0SXRlbShpdGVtc1tpXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgb2Zmc2V0ICsgaSk7XG4gICAgICBpZiAocGFyc2VkKSBlbnRyaWVzLnB1c2gocGFyc2VkKTtcbiAgICB9XG4gICAgb3B0aW9ucy5vblByb2dyZXNzPy4oZW50cmllcy5sZW5ndGgpO1xuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA8IENPTlRFTlRTX1BBR0VfU0laRSkgYnJlYWs7XG4gICAgb2Zmc2V0ICs9IENPTlRFTlRTX1BBR0VfU0laRTtcbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSVNSQyAqL1xuXG5pbnRlcmZhY2UgTWV0YWRhdGFMaWtlIHtcbiAgZHVyYXRpb24/OiB1bmtub3duO1xuICBleHRlcm5hbF9pZD86IEFycmF5PHsgdHlwZT86IHN0cmluZzsgaWQ/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZD47XG59XG5cbmZ1bmN0aW9uIGlzcmNGcm9tTWV0YWRhdGEobWV0YWRhdGE6IHVua25vd24pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgaWRzID0gKG1ldGFkYXRhIGFzIE1ldGFkYXRhTGlrZSB8IG51bGwgfCB1bmRlZmluZWQpPy5leHRlcm5hbF9pZDtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlkcykpIHJldHVybiBudWxsO1xuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGlkcykge1xuICAgIGlmIChlbnRyeT8udHlwZSA9PT0gXCJpc3JjXCIgJiYgdHlwZW9mIGVudHJ5LmlkID09PSBcInN0cmluZ1wiKSByZXR1cm4gZW50cnkuaWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKiBJbi1tZW1vcnkgSVNSQyBjYWNoZSBmb3IgdGhlIGN1cnJlbnQgU3BvdGlmeSBzZXNzaW9uLiAqL1xuY29uc3QgaXNyY0NhY2hlID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZyB8IG51bGw+KCk7XG5cbi8qKiBCYXRjaGVkIElTUkMgaHlkcmF0aW9uIHdpdGggcmV0cnkvYmFja29mZjsgZGVncmFkYXRpb24gaXMgc2lsZW50IHBlciB0cmFjay4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoeWRyYXRlSXNyY3MoXG4gIGVudHJpZXM6IHJlYWRvbmx5IFBsYXlsaXN0RW50cnlbXSxcbiAgb3B0aW9uczogeyBvblByb2dyZXNzPzogKGRvbmU6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4gdm9pZDsgc2lnbmFsPzogQWJvcnRTaWduYWwgfSA9IHt9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG1pc3NpbmcgPSBlbnRyaWVzLmZpbHRlcigoZSkgPT4gZS5pc3JjID09IG51bGwpO1xuICBjb25zdCBwZW5kaW5nVXJpcyA9IFsuLi5uZXcgU2V0KG1pc3NpbmcubWFwKChlKSA9PiBlLnVyaSkuZmlsdGVyKCh1cmkpID0+ICFpc3JjQ2FjaGUuaGFzKHVyaSkpKV07XG4gIGNvbnN0IHRvdGFsID0gcGVuZGluZ1VyaXMubGVuZ3RoO1xuICBpZiAodG90YWwgPT09IDApIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1pc3NpbmcpIGVudHJ5LmlzcmMgPSBpc3JjQ2FjaGUuZ2V0KGVudHJ5LnVyaSkgPz8gbnVsbDtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZG9uZSA9IDA7XG4gIGZvciAobGV0IHN0YXJ0ID0gMDsgc3RhcnQgPCBwZW5kaW5nVXJpcy5sZW5ndGg7IHN0YXJ0ICs9IElTUkNfQkFUQ0hfU0laRSkge1xuICAgIG9wdGlvbnMuc2lnbmFsPy50aHJvd0lmQWJvcnRlZCgpO1xuICAgIGNvbnN0IGJhdGNoID0gcGVuZGluZ1VyaXMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgSVNSQ19CQVRDSF9TSVpFKTtcblxuICAgIGxldCBmZXRjaGVkOiBNYXA8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgPSBudWxsO1xuICAgIGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDwgSVNSQ19SRVRSWV9BVFRFTVBUUyAmJiBmZXRjaGVkID09IG51bGw7IGF0dGVtcHQrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmV0Y2hlZCA9IGF3YWl0IGZldGNoTWV0YWRhdGFGb3JUcmFja3MoYmF0Y2gpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoYXR0ZW1wdCA8IElTUkNfUkVUUllfQVRURU1QVFMgLSAxKSB7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoUkVUUllfQkFTRV9ERUxBWV9NUyAqIDIgKiogYXR0ZW1wdCAqICgxICsgTWF0aC5yYW5kb20oKSAqIDAuNSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUud2FybihgW3BsYXlsaXN0RHVwbGljYXRlRmluZGVyXSBJU1JDIGJhdGNoIGZhaWxlZCBhZnRlciByZXRyaWVzOmAsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdXJpIG9mIGJhdGNoKSB7XG4gICAgICBjb25zdCBpc3JjID0gZmV0Y2hlZCA/IGlzcmNGcm9tTWV0YWRhdGEoZmV0Y2hlZC5nZXQodXJpKSkgOiBudWxsO1xuICAgICAgaXNyY0NhY2hlLnNldCh1cmksIGlzcmMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1pc3NpbmcpIHtcbiAgICAgIGlmIChpc3JjQ2FjaGUuaGFzKGVudHJ5LnVyaSkgJiYgZW50cnkuaXNyYyA9PSBudWxsKVxuICAgICAgICBlbnRyeS5pc3JjID0gaXNyY0NhY2hlLmdldChlbnRyeS51cmkpID8/IG51bGw7XG4gICAgfVxuXG4gICAgZG9uZSArPSBiYXRjaC5sZW5ndGg7XG4gICAgb3B0aW9ucy5vblByb2dyZXNzPy4oZG9uZSwgdG90YWwpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVtb3ZhbCAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW92YWxUYXJnZXQge1xuICB1cmk6IHN0cmluZztcbiAgdWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZhbFN1bW1hcnkge1xuICByZW1vdmVkOiBudW1iZXI7XG4gIGZhaWxlZDogbnVtYmVyO1xuICAvKiogUGVyLWJhdGNoIHN1Y2Nlc3MgZmxhZ3MsIGluIHRhcmdldCBvcmRlciwgZm9yIHBhcnRpYWwtZmFpbHVyZSByZWNvdmVyeS4gKi9cbiAgYmF0Y2hSZXN1bHRzOiBib29sZWFuW107XG59XG5cbi8qKiBSZW1vdmUgcGxheWxpc3Qgb2NjdXJyZW5jZXMgaW4gYmF0Y2hlcywgdGFyZ2V0aW5nIHVpZCArIFVSSSBmb3IgYWNjdXJhY3kuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRW50cmllcyhcbiAgcGxheWxpc3RVcmk6IHN0cmluZyxcbiAgdGFyZ2V0czogcmVhZG9ubHkgUmVtb3ZhbFRhcmdldFtdLFxuICBvblByb2dyZXNzPzogKGRvbmU6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4gdm9pZCxcbik6IFByb21pc2U8UmVtb3ZhbFN1bW1hcnk+IHtcbiAgY29uc3QgYXBpID0gcGxheWxpc3RBcGkoKTtcbiAgaWYgKCFhcGk/LnJlbW92ZSB8fCB0YXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7IHJlbW92ZWQ6IDAsIGZhaWxlZDogdGFyZ2V0cy5sZW5ndGgsIGJhdGNoUmVzdWx0czogW10gfTtcbiAgfVxuXG4gIGxldCByZW1vdmVkID0gMDtcbiAgbGV0IGZhaWxlZCA9IDA7XG4gIGxldCBkb25lID0gMDtcbiAgY29uc3QgYmF0Y2hSZXN1bHRzOiBib29sZWFuW10gPSBbXTtcblxuICBmb3IgKGxldCBzdGFydCA9IDA7IHN0YXJ0IDwgdGFyZ2V0cy5sZW5ndGg7IHN0YXJ0ICs9IFJFTU9WQUxfQkFUQ0hfU0laRSkge1xuICAgIGNvbnN0IGJhdGNoID0gdGFyZ2V0cy5zbGljZShzdGFydCwgc3RhcnQgKyBSRU1PVkFMX0JBVENIX1NJWkUpO1xuICAgIGNvbnN0IGJhdGNoSXRlbXMgPSBiYXRjaC5tYXAoKHQpID0+ICh7IHVyaTogdC51cmksIHVpZDogdC51aWQgfSkpO1xuICAgIGxldCBvayA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGkucmVtb3ZlKHBsYXlsaXN0VXJpLCBiYXRjaEl0ZW1zKTtcbiAgICAgIHJlbW92ZWQgKz0gYmF0Y2gubGVuZ3RoO1xuICAgICAgb2sgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGZhaWxlZCArPSBiYXRjaC5sZW5ndGg7XG4gICAgICBjb25zb2xlLndhcm4oXCJbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIHJlbW92YWwgYmF0Y2ggZmFpbGVkOlwiLCBlKTtcbiAgICB9XG4gICAgYmF0Y2hSZXN1bHRzLnB1c2gob2spO1xuICAgIGRvbmUgKz0gYmF0Y2gubGVuZ3RoO1xuICAgIG9uUHJvZ3Jlc3M/Lihkb25lLCB0YXJnZXRzLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4geyByZW1vdmVkLCBmYWlsZWQsIGJhdGNoUmVzdWx0cyB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbm90aWNlcyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeUZhaWx1cmUobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBub3RpY2VzID0gc3RyaW5ncy5zdW1tYXJ5O1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLyogUGxheWxpc3QgRHVwbGljYXRlIEZpbmRlciBcdTIwMTQgZGFyayBtb2RhbCBpbnRlZ3JhdGVkIHdpdGggdGhlIFNwb3RpZnkgdGhlbWUuICovXG5cbi5kdXBmaW5kLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uZHVwZmluZC13aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogY2xhbXAoNjgwcHgsIDYydncsIDg4MHB4KTtcbiAgbWF4LWhlaWdodDogODZ2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmR1cGZpbmQtd2luZG93LS1idXN5IHtcbiAgY3Vyc29yOiBwcm9ncmVzcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgKi9cblxuLmR1cGZpbmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNnB4IDIwcHggMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5kdXBmaW5kLWhlYWRlcl9fdGl0bGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmR1cGZpbmQtaGVhZGVyX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX3BsYXlsaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmR1cGZpbmQtaGVhZGVyX19wbGF5bGlzdC1uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kdXBmaW5kLWJhZGdlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmR1cGZpbmQtYmFkZ2UtLWVkaXRhYmxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyOSwgMTg1LCA4NCwgMC4xOCk7XG4gIGNvbG9yOiAjMWRiOTU0O1xufVxuXG4uZHVwZmluZC1iYWRnZS0tcmVhZG9ubHkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMTE2LCA5MiwgMC4xNik7XG4gIGNvbG9yOiAjZTA3NDVjO1xufVxuXG4uZHVwZmluZC1oZWFkZXJfX2Nsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kdXBmaW5kLWhlYWRlcl9fY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmR1cGZpbmQtaGVhZGVyX19jbG9zZTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJvZHkgKi9cblxuLmR1cGZpbmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIHN0YXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmR1cGZpbmQtc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kdXBmaW5kLXN0YXRlX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kdXBmaW5kLW11dGVkIHtcbiAgY29sb3I6ICM3ZjdmN2Y7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmR1cGZpbmQtc3Bpbm5lciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyODI4Mjg7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxZGI5NTQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBkdXBmaW5kLXNwaW4gMC45cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZHVwZmluZC1zcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLyogbGVmdCByYWlsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZHVwZmluZC1yYWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGdhcDogNnB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMTJweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI4MjgyODtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbn1cblxuLmR1cGZpbmQtcmFpbF9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2RkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1yYWlsX19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcbn1cblxuLmR1cGZpbmQtcmFpbF9faXRlbS0tYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuXG4uZHVwZmluZC1yYWlsX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmR1cGZpbmQtcmFpbF9fY291bnQge1xuICBjb2xvcjogIzhhOGE4YTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4vKiByZWxpYWJpbGl0eSBnYXVnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZHVwZmluZC1nYXVnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmR1cGZpbmQtZ2F1Z2VfX3NlZyB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG59XG5cbi8qIHJpZ2h0IHBhbmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5kdXBmaW5kLXBhbmVsIHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kdXBmaW5kLXBhbmVsX19oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZHVwZmluZC1wYW5lbF9fbGV2ZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZHVwZmluZC1wYW5lbF9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xufVxuXG4uZHVwZmluZC1wYW5lbCA+IC5kdXBmaW5kLXN0YXRlIHtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLyogXCJvdmVyZmxvdzogaGlkZGVuXCIgbWFrZXMgdGhlIG1pbi1jb250ZW50IGhlaWdodCAwIGluc2lkZSB0aGUgZmxleCBwYW5lbCxcbiAgIHNvIHdpdGhvdXQgYW4gZXhwbGljaXQgc2hyaW5rIGd1YXJkIHRoZSBicm93c2VyIHNxdWFzaGVzIGV2ZXJ5IGNhcmQuICovXG4uZHVwZmluZC1ncm91cCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjgyODI4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xufVxuXG4uZHVwZmluZC1ncm91cF9fcm93ICsgLmR1cGZpbmQtZ3JvdXBfX3JvdyB7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzJlMmUyZTtcbn1cblxuLyogdHJhY2sgcm93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5kdXBmaW5kLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmR1cGZpbmQtcm93OmhvdmVyOm5vdCguZHVwZmluZC1yb3ctLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyNDI0MjQ7XG59XG5cbi5kdXBmaW5kLXJvdy0tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAxMTYsIDkyLCAwLjEyKTtcbn1cblxuLmR1cGZpbmQtcm93LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5kdXBmaW5kLXJvd19fcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2IzYjNiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1yb3dfX3BsYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmR1cGZpbmQtcm93X19wbGF5LS1vbixcbi5kdXBmaW5kLXJvd19fcGxheS0tb246aG92ZXIge1xuICBjb2xvcjogIzFkYjk1NDtcbn1cblxuLmR1cGZpbmQtcm93X19jaGVja2JveCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGFjY2VudC1jb2xvcjogI2UwNzQ1YztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1yb3dfX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmR1cGZpbmQtcm93X19hcnQge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmR1cGZpbmQtcm93X19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbiAgZmxleDogMTtcbn1cblxuLmR1cGZpbmQtcm93X190aXRsZWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZHVwZmluZC1yb3dfX3RpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmR1cGZpbmQtcm93X19kdXJhdGlvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uZHVwZmluZC1yb3dfX21ldGEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmR1cGZpbmQtcm93X193aGVyZSB7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9vdGVyICovXG5cbi5kdXBmaW5kLWZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xuICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xufVxuXG4uZHVwZmluZC1mb290ZXJfX3JlYWRvbmx5IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmR1cGZpbmQtZm9vdGVyX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbn1cblxuLmR1cGZpbmQtZm9vdGVyX19jb3VudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kdXBmaW5kLWZvb3Rlcl9fd2FybmluZyB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZHVwZmluZC1mb290ZXJfX2NvbmZpcm0ge1xuICBmbGV4OiAxO1xuICBjb2xvcjogI2UwYjA1YztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZHVwZmluZC1mb290ZXJfX3N1bW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjZTA3NDVjO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kdXBmaW5kLWZvb3Rlcl9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBnYXA6IDhweDtcbn1cblxuLmR1cGZpbmQtZm9vdGVyX19idXN5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZHVwZmluZC1wcm9ncmVzcyB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5kdXBmaW5kLXByb2dyZXNzX19iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJ1dHRvbnMgKi9cblxuLmR1cGZpbmQtYnV0dG9uIHtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHVwZmluZC1idXR0b24tLXNtYWxsIHtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5kdXBmaW5kLWJ1dHRvbi0tZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbi5kdXBmaW5kLWJ1dHRvbi0tZ2hvc3Q6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmR1cGZpbmQtYnV0dG9uLS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZTA3NDVjO1xuICBjb2xvcjogIzE2MTYxNjtcbn1cblxuLmR1cGZpbmQtYnV0dG9uLS1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWE4ODczO1xufVxuXG4uZHVwZmluZC1idXR0b24tLWRhbmdlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMzZDNkM2Q7XG4gIGNvbG9yOiAjOGE4YThhO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZHVwZmluZC1idXR0b24tLWdob3N0OmRpc2FibGVkIHtcbiAgY29sb3I6ICM1NTU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzY3JvbGxiYXIgKi9cblxuLmR1cGZpbmQtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmR1cGZpbmQtcmFpbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG4uZHVwZmluZC1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4uZHVwZmluZC1yYWlsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzNkM2QzZDtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiZXhwb3J0IGNvbnN0IHtcbiAgQ2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIFByb2ZpbGVyLFxuICBQdXJlQ29tcG9uZW50LFxuICBTdHJpY3RNb2RlLFxuICBTdXNwZW5zZSxcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGFjdCxcbiAgY2xvbmVFbGVtZW50LFxuICBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGZvcndhcmRSZWYsXG4gIGlzVmFsaWRFbGVtZW50LFxuICBsYXp5LFxuICBtZW1vLFxuICBzdGFydFRyYW5zaXRpb24sXG4gIHVuc3RhYmxlX2FjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZURlYnVnVmFsdWUsXG4gIHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlSWQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUluc2VydGlvbkVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdDtcbiIsICJleHBvcnQgY29uc3Qge1xuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgY3JlYXRlUG9ydGFsLFxuICBjcmVhdGVSb290LFxuICBmaW5kRE9NTm9kZSxcbiAgZmx1c2hTeW5jLFxuICBoeWRyYXRlLFxuICBoeWRyYXRlUm9vdCxcbiAgcmVuZGVyLFxuICB1bm1vdW50Q29tcG9uZW50QXROb2RlLFxuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxcbiAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIsXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0RE9NO1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3RET007XG4iLCAiLyoqXG4gKiBUaXRsZSBub3JtYWxpemF0aW9uIGZvciB0aGUgZHVwbGljYXRlIGRldGVjdG9yLlxuICogUHVyZSBzdHJpbmcgZnVuY3Rpb25zIFx1MjAxNCBubyBTcGljZXRpZnkgZGVwZW5kZW5jeS5cbiAqL1xuXG4vKipcbiAqIFdob2xlIHdvcmRzIHRyZWF0ZWQgYXMgbm9pc2Ugd2hlbiBidWlsZGluZyBmdXp6eSBrZXlzLiBUaGV5IGRlc2NyaWJlXG4gKiB2YXJpYW50cyAocmVtYXN0ZXJzLCBlZGl0cywgbGl2ZSB0YWtlcywgXHUyMDI2KSByYXRoZXIgdGhhbiBhIGRpZmZlcmVudCBzb25nLFxuICogc28gcmVtb3ZpbmcgdGhlbSBsZXRzIGBTb25nICgyMDExIFJlbWFzdGVyKWAgYW5kIGBTb25nYCBjb21wYXJlIGVxdWFsLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVFJJUF9XT1JEUzogcmVhZG9ubHkgc3RyaW5nW10gPSBbXG4gIFwicmVtYXN0ZXJcIixcbiAgXCJyZW1hc3RlcmVkXCIsXG4gIFwicmVpc3N1ZVwiLFxuICBcInJlbWl4XCIsXG4gIFwibWl4XCIsXG4gIFwicmFkaW9cIixcbiAgXCJlZGl0XCIsXG4gIFwidmVyc2lvblwiLFxuICBcInZlclwiLFxuICBcImZlYXRcIixcbiAgXCJmdFwiLFxuICBcImxpdmVcIixcbiAgXCJhY291c3RpY1wiLFxuICBcImluc3RydW1lbnRhbFwiLFxuICBcIm1vbm9cIixcbiAgXCJzdGVyZW9cIixcbiAgXCJkZWx1eGVcIixcbiAgXCJkZW1vXCIsXG4gIFwiaW50cm9cIixcbiAgXCJvdXRyb1wiLFxuICBcImV4cGxpY2l0XCIsXG4gIFwiY2xlYW5cIixcbiAgXCJjb3ZlclwiLFxuICBcImV4dGVuZGVkXCIsXG4gIFwib3JpZ2luYWxcIixcbiAgXCJzaW5nbGVcIixcbiAgXCJhbGJ1bVwiLFxuICBcImJvbnVzXCIsXG5dO1xuXG4vKiogU3RyaWN0IG5vcm1hbGl6YXRpb246IGNhc2UgYW5kIHdoaXRlc3BhY2Ugb25seS4gQWNjZW50cyBhcmUgcHJlc2VydmVkLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRpdGxlU3RyaWN0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIik7XG59XG5cbi8qKlxuICogRnV6enkgbm9ybWFsaXphdGlvbiB1c2VkIGJ5IHRoZSBsb3ctY29uZmlkZW5jZSBsZXZlbHM6XG4gKiAxLiBzdHJpcCBkaWFjcml0aWNzIChcIkJleW9uY1x1MDBFOVwiIFx1MjE5MiBcIkJleW9uY2VcIikgc28gZnV6enkgbWF0Y2hpbmcgaXMgbm90XG4gKiAgICBkZWZlYXRlZCBieSBhY2NlbnQgZGlmZmVyZW5jZXM7XG4gKiAyLiBsb3dlcmNhc2U7XG4gKiAzLiBkcm9wIGJyYWNrZXRlZCBzZWdtZW50cyBcdTIwMTQgYCguLi4pYCwgYFsuLi5dYCwgYHsuLi59YCBcdTIwMTQgd2hpY2ggY2FycnkgdmFyaWFudFxuICogICAgZGVzY3JpcHRvcnM7XG4gKiA0LiBkcm9wIHRoZSBjb25maWd1cmVkIG5vaXNlIHdvcmRzICh3b3JkIGJvdW5kYXJpZXMgcmVzcGVjdGVkKTtcbiAqIDUuIHJlcGxhY2UgZGFzaGVzIHdpdGggc3BhY2VzO1xuICogNi4gcmVtb3ZlIGV2ZXJ5dGhpbmcgdGhhdCBpcyBub3QgYSBsZXR0ZXIsIG51bWJlciBvciBzcGFjZTtcbiAqIDcuIGNvbGxhcHNlIGFuZCB0cmltIHdoaXRlc3BhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVGdXp6eShcbiAgbmFtZTogc3RyaW5nLFxuICBzdHJpcFdvcmRzOiByZWFkb25seSBzdHJpbmdbXSA9IERFRkFVTFRfU1RSSVBfV09SRFMsXG4pOiBzdHJpbmcge1xuICBsZXQgb3V0ID0gbmFtZVxuICAgIC5ub3JtYWxpemUoXCJORkRcIilcbiAgICAucmVwbGFjZSgvXFxwe0RpYWNyaXRpY30vZ3UsIFwiXCIpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8XFxbW15cXF1dKlxcXXxcXHtbXn1dKlxcfS9nLCBcIiBcIik7XG5cbiAgaWYgKHN0cmlwV29yZHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBgKD88IVtcXFxccHtMfVxcXFxwe059XSkoJHtzdHJpcFdvcmRzLm1hcChlc2NhcGVSZWdFeHApLmpvaW4oXCJ8XCIpfSkoPyFbXFxcXHB7TH1cXFxccHtOfV0pYDtcbiAgICBvdXQgPSBvdXQucmVwbGFjZShuZXcgUmVnRXhwKHBhdHRlcm4sIFwiZ3VcIiksIFwiIFwiKTtcbiAgfVxuXG4gIHJldHVybiBvdXRcbiAgICAucmVwbGFjZSgvWy1cdTIwMTNcdTIwMTRfXSsvZywgXCIgXCIpXG4gICAgLnJlcGxhY2UoL1teXFxwe0x9XFxwe059IF0rL2d1LCBcIiBcIilcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcbiAgICAudHJpbSgpO1xufVxuXG4vKiogTm9ybWFsaXplZCBhcnRpc3QgbmFtZXMgdXNlZCBmb3IgXCJhdCBsZWFzdCBvbmUgc2hhcmVkIGFydGlzdFwiIGNoZWNrcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBcnRpc3QobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XG59XG4iLCAiLyoqXG4gKiBUaXRsZSBzaW1pbGFyaXR5IGZvciB0aGUgbG93LWNvbmZpZGVuY2UgZHVwbGljYXRlIGxldmVscy5cbiAqXG4gKiBEaWNlIGNvZWZmaWNpZW50IG92ZXIgY2hhcmFjdGVyIGJpZ3JhbXMsIGNvbXB1dGVkIG9uIHRoZSBzdHJpbmdzIHdpdGggYWxsXG4gKiB3aGl0ZXNwYWNlIHJlbW92ZWQgKGxlbmd0aCBkaWZmZXJlbmNlcyBmcm9tIHNwYWNpbmcgbXVzdCBub3QgcGVuYWxpemUgYVxuICogdGl0bGUpLiBQdXJlIGZ1bmN0aW9uIFx1MjAxNCBubyBTcGljZXRpZnkgZGVwZW5kZW5jeS5cbiAqL1xuXG4vKiogTWluaW11bSBzaW1pbGFyaXR5IGZvciB0d28gZnV6enkga2V5cyB0byBiZSBjb25zaWRlcmVkIFwibWF5YmVcIiBkdXBsaWNhdGVzLiAqL1xuZXhwb3J0IGNvbnN0IE1BWUJFX1NJTUlMQVJJVFlfVEhSRVNIT0xEID0gMC42NTtcblxuLyoqXG4gKiBDaGVhcCBsZW5ndGggZ3VhcmQ6IHdpdGggYSByYXRpbyBhYm92ZSB0aGlzLCB0aGUgYmVzdCBhY2hpZXZhYmxlIERpY2VcbiAqIHNjb3JlIGlzIGZhciBiZWxvdyB0aGUgdGhyZXNob2xkLCBzbyB0aGUgcGFpciBpcyBza2lwcGVkIHdpdGhvdXQgc2NvcmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IE1BWUJFX0xFTkdUSF9SQVRJT19HVUFSRCA9IDM7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWdyYW1TaW1pbGFyaXR5KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgczEgPSBhLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gIGNvbnN0IHMyID0gYi5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuXG4gIGlmIChzMSA9PT0gczIpIHJldHVybiAxLjA7XG4gIGlmIChzMS5sZW5ndGggPCAyIHx8IHMyLmxlbmd0aCA8IDIpIHJldHVybiAwLjA7XG5cbiAgY29uc3QgYmlncmFtcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgczEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYmcgPSBzMS5zdWJzdHJpbmcoaSwgaSArIDIpO1xuICAgIGJpZ3JhbXMuc2V0KGJnLCAoYmlncmFtcy5nZXQoYmcpID8/IDApICsgMSk7XG4gIH1cblxuICBsZXQgaW50ZXJzZWN0aW9uID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzMi5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBiZyA9IHMyLnN1YnN0cmluZyhpLCBpICsgMik7XG4gICAgY29uc3QgY291bnQgPSBiaWdyYW1zLmdldChiZykgPz8gMDtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICBiaWdyYW1zLnNldChiZywgY291bnQgLSAxKTtcbiAgICAgIGludGVyc2VjdGlvbisrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbigxLCAoMi4wICogaW50ZXJzZWN0aW9uKSAvIChzMS5sZW5ndGggKyBzMi5sZW5ndGggLSAyKSk7XG59XG4iLCAiLyoqXG4gKiBTaGFyZWQgZGF0YSBzaGFwZXMgZm9yIHRoZSBkdXBsaWNhdGUgZGV0ZWN0aW9uIHBpcGVsaW5lLlxuICpcbiAqIFRoaXMgbW9kdWxlIChhbmQgdGhlIHdob2xlIGBkZXRlY3Rpb24vYCBmb2xkZXIpIGlzIGludGVudGlvbmFsbHkgZnJlZSBvZiBhbnlcbiAqIFNwaWNldGlmeSBkZXBlbmRlbmN5IHNvIGl0IHN0YXlzIHB1cmUgYW5kIHVuaXQtdGVzdGFibGUuXG4gKi9cblxuLyoqIEhvdyBhIHNjYW4gZW50cnkgaXMgaGFuZGVkIHRvIHRoZSBkZXRlY3RvciBieSB0aGUgU3BpY2V0aWZ5IGFkYXB0ZXIuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0RW50cnkge1xuICAvKiogMC1iYXNlZCBwb3NpdGlvbiBpbiB0aGUgcGxheWxpc3QgYXQgc2NhbiB0aW1lLiBJZGVudGlmaWVzIGFuIG9jY3VycmVuY2UuICovXG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIC8qKiBUcmFjayBVUkkuIEV4YWN0IGR1cGxpY2F0ZXMgc2hhcmUgaXQ7IGVhY2ggb2NjdXJyZW5jZSBzdGlsbCBoYXMgaXRzIG93biB1aWQuICovXG4gIHVyaTogc3RyaW5nO1xuICAvKiogT2NjdXJyZW5jZSBpZCByZXR1cm5lZCBieSB0aGUgcGxheWxpc3QgY29udGVudHMgQVBJLiAqL1xuICB1aWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogQXJ0aXN0IGRpc3BsYXkgbmFtZXMsIGluIHBsYXlsaXN0IG9yZGVyLiAqL1xuICBhcnRpc3RzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgYWxidW1OYW1lOiBzdHJpbmc7XG4gIGFsYnVtVXJpOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIC8qKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMsIG9yIG51bGwgd2hlbiB1bmtub3duLiAqL1xuICBkdXJhdGlvbk1zOiBudW1iZXIgfCBudWxsO1xuICAvKiogSVNPIGRhdGUgc3RyaW5nIG9mIFwiYWRkZWQgYXRcIiwgb3IgXCJcIiB3aGVuIHVua25vd24uICovXG4gIGFkZGVkQXQ6IHN0cmluZztcbiAgLyoqIElTUkMgcmVjb3JkaW5nIGlkLCBvciBudWxsIHdoZW4gdW5rbm93biAvIG5vdCB5ZXQgZmV0Y2hlZC4gKi9cbiAgaXNyYzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqIEEgcGxheWxpc3QgZW50cnkgZW5yaWNoZWQgd2l0aCB0aGUgbm9ybWFsaXplZCBrZXlzIHVzZWQgYnkgdGhlIGRldGVjdG9yLiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2FubmVkVHJhY2sgZXh0ZW5kcyBQbGF5bGlzdEVudHJ5IHtcbiAgLyoqIHN0cmljdCBub3JtYWxpemVkIHRpdGxlIChsb3dlcmNhc2UsIHdoaXRlc3BhY2UgY29sbGFwc2VkKSAqL1xuICB0aXRsZUtleTogc3RyaW5nO1xuICAvKiogZnV6enkgbm9ybWFsaXplZCB0aXRsZSAoYWNjZW50cyBzdHJpcHBlZCwgbm9pc2Ugd29yZHMgcmVtb3ZlZCwgXHUyMDI2KSAqL1xuICBmdXp6eUtleTogc3RyaW5nO1xuICAvKiogbG93ZXJjYXNlIGFydGlzdCBuYW1lcyBmb3IgY29tcGFyaXNvbnMgKi9cbiAgYXJ0aXN0S2V5czogcmVhZG9ubHkgc3RyaW5nW107XG59XG5cbi8qKiBBbGwgc2l4IGNvbmZpZGVuY2UgbGV2ZWxzLCBmcm9tIG1vc3QgcmVsaWFibGUgdG8gbGVhc3QgcmVsaWFibGUuICovXG5leHBvcnQgdHlwZSBHcm91cElkID0gXCJleGFjdFwiIHwgXCJpc3JjXCIgfCBcInByb2JhYmxlXCIgfCBcImxpa2VseVwiIHwgXCJwb3NzaWJsZVwiIHwgXCJtYXliZVwiO1xuXG5leHBvcnQgY29uc3QgR1JPVVBfT1JERVI6IHJlYWRvbmx5IEdyb3VwSWRbXSA9IFtcbiAgXCJleGFjdFwiLFxuICBcImlzcmNcIixcbiAgXCJwcm9iYWJsZVwiLFxuICBcImxpa2VseVwiLFxuICBcInBvc3NpYmxlXCIsXG4gIFwibWF5YmVcIixcbl07XG5cbi8qKiBSZWxpYWJpbGl0eSBzY29yZSBwZXIgbGV2ZWwsIDEgKGxvdykgdG8gNiAoY2VydGFpbikuIFVzZWQgYnkgdGhlIFVJIGdhdWdlLiAqL1xuZXhwb3J0IGNvbnN0IEdST1VQX1JFTElBQklMSVRZOiBSZWNvcmQ8R3JvdXBJZCwgbnVtYmVyPiA9IHtcbiAgZXhhY3Q6IDYsXG4gIGlzcmM6IDUsXG4gIHByb2JhYmxlOiA0LFxuICBsaWtlbHk6IDMsXG4gIHBvc3NpYmxlOiAyLFxuICBtYXliZTogMSxcbn07XG5cbi8qKlxuICogT25lIGdyb3VwIG9mIGludGVyY2hhbmdlYWJsZSBlbnRyaWVzLlxuICogYG1lbWJlcnNgIGlzIHNvcnRlZCBieSBwbGF5bGlzdCBwb3NpdGlvbjsgdGhlIGZpcnN0IG1lbWJlciBpcyB0aGUgZW50cnkgdGhlXG4gKiBkZXRlY3RvciBzdWdnZXN0cyBrZWVwaW5nIChub3RoaW5nIGlzIGV2ZXIgcHJlc2VsZWN0ZWQgaW4gdGhlIFVJKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEdXBsaWNhdGVHcm91cCB7XG4gIHJlYWRvbmx5IG1lbWJlcnM6IHJlYWRvbmx5IFNjYW5uZWRUcmFja1tdO1xufVxuXG5leHBvcnQgdHlwZSBEdXBsaWNhdGVSZXN1bHRzID0gUmVjb3JkPEdyb3VwSWQsIHJlYWRvbmx5IER1cGxpY2F0ZUdyb3VwW10+O1xuXG4vKiogRGV0ZWN0aW9uIHBlcmZvcm1hbmNlIGd1YXJkOiB0b3RhbCBkdXJhdGlvbiB0b2xlcmFuY2UgZm9yIFwibGlrZWx5XCIvXCJwb3NzaWJsZVwiLiAqL1xuZXhwb3J0IGNvbnN0IERVUkFUSU9OX1RPTEVSQU5DRV9NUyA9IDVfMDAwO1xuIiwgIi8qKlxuICogRHVwbGljYXRlIGRldGVjdGlvbiBwaXBlbGluZS5cbiAqXG4gKiBQdXJlIGxvZ2ljIG92ZXIgYFBsYXlsaXN0RW50cnlgIHZhbHVlcyBcdTIwMTQgbm8gU3BpY2V0aWZ5IGRlcGVuZGVuY3kuXG4gKlxuICogTGV2ZWxzIGFyZSBldmFsdWF0ZWQgc2VxdWVudGlhbGx5IGluIGNvbmZpZGVuY2Ugb3JkZXI6XG4gKiAgIGV4YWN0IFx1MjE5MiBpc3JjIFx1MjE5MiBwcm9iYWJsZSBcdTIxOTIgbGlrZWx5IFx1MjE5MiBwb3NzaWJsZSBcdTIxOTIgbWF5YmUuXG4gKiBFdmVyeSBlbnRyeSBhc3NpZ25lZCB0byBhIGdyb3VwIGlzIGNvbnN1bWVkLCBzbyBhbiBlbnRyeSBhcHBlYXJzIGluIGV4YWN0bHlcbiAqIG9uZSAob3IgemVybykgZ3JvdXAsIGFsd2F5cyBhdCB0aGUgaGlnaGVzdC1jb25maWRlbmNlIGxldmVsIHRoYXQgbWF0Y2hlZC5cbiAqL1xuaW1wb3J0IHsgbm9ybWFsaXplQXJ0aXN0LCBub3JtYWxpemVGdXp6eSwgbm9ybWFsaXplVGl0bGVTdHJpY3QgfSBmcm9tIFwiLi9ub3JtYWxpemUudHNcIjtcbmltcG9ydCB7XG4gIGJpZ3JhbVNpbWlsYXJpdHksXG4gIE1BWUJFX0xFTkdUSF9SQVRJT19HVUFSRCxcbiAgTUFZQkVfU0lNSUxBUklUWV9USFJFU0hPTEQsXG59IGZyb20gXCIuL3NpbWlsYXJpdHkudHNcIjtcbmltcG9ydCB7XG4gIERVUkFUSU9OX1RPTEVSQU5DRV9NUyxcbiAgdHlwZSBEdXBsaWNhdGVHcm91cCxcbiAgdHlwZSBEdXBsaWNhdGVSZXN1bHRzLFxuICBHUk9VUF9PUkRFUixcbiAgdHlwZSBHcm91cElkLFxuICB0eXBlIFBsYXlsaXN0RW50cnksXG4gIHR5cGUgU2Nhbm5lZFRyYWNrLFxufSBmcm9tIFwiLi90eXBlcy50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZHVwT3B0aW9ucyB7XG4gIC8qKiBUaXRsZXMnIG5vaXNlIHdvcmRzIHJlbW92ZWQgd2hlbiBidWlsZGluZyBmdXp6eSBrZXlzLiAqL1xuICBzdHJpcFdvcmRzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIC8qKiBNYXhpbXVtIGR1cmF0aW9uIGRpZmZlcmVuY2UgKG1zKSBhY2NlcHRlZCBieSBgbGlrZWx5YCBhbmQgYHBvc3NpYmxlYC4gKi9cbiAgZHVyYXRpb25Ub2xlcmFuY2VNcz86IG51bWJlcjtcbiAgLyoqIFNpbWlsYXJpdHkgdGhyZXNob2xkIGZvciB0aGUgYG1heWJlYCBsZXZlbC4gKi9cbiAgbWF5YmVTaW1pbGFyaXR5VGhyZXNob2xkPzogbnVtYmVyO1xuICAvKipcbiAgICogSG93IG1hbnkgc29ydGVkIG5laWdoYm91cnMgYXJlIGNvbXBhcmVkIHBlciBjYW5kaWRhdGUgaW4gdGhlIGBtYXliZWAgbGV2ZWwuXG4gICAqIFNpbWlsYXIgdGl0bGVzIGFyZSBhZGphY2VudCBvbmNlIHRoZSBwb29sIGlzIHNvcnRlZCBieSBmdXp6eSBrZXksIHNvIGFcbiAgICogc21hbGwgd2luZG93IGtlZXBzIHRoZSBsZXZlbCBuZWFyIE8obikgaW5zdGVhZCBvZiBPKG5cdTAwQjIpLlxuICAgKi9cbiAgbWF5YmVOZWlnaGJvcldpbmRvdz86IG51bWJlcjtcbn1cblxuY29uc3QgREVGQVVMVF9EVVJBVElPTl9UT0xFUkFOQ0VfTVMgPSBEVVJBVElPTl9UT0xFUkFOQ0VfTVM7XG5jb25zdCBERUZBVUxUX01BWUJFX1NJTUlMQVJJVFlfVEhSRVNIT0xEID0gTUFZQkVfU0lNSUxBUklUWV9USFJFU0hPTEQ7XG5jb25zdCBERUZBVUxUX01BWUJFX05FSUdIQk9SX1dJTkRPVyA9IDIwO1xuXG5jb25zdCBpc1RyYWNrVXJpID0gKHVyaTogc3RyaW5nKTogYm9vbGVhbiA9PiB1cmkuc3RhcnRzV2l0aChcInNwb3RpZnk6dHJhY2s6XCIpO1xuXG4vKiogVW5rbm93biBkdXJhdGlvbnMgbmV2ZXIgZGlzYWdyZWU7IGtub3duIG9uZXMgbXVzdCBzdGF5IHdpdGhpbiB0b2xlcmFuY2UuICovXG5mdW5jdGlvbiBkdXJhdGlvbnNBZ3JlZShhOiBTY2FubmVkVHJhY2ssIGI6IFNjYW5uZWRUcmFjaywgdG9sZXJhbmNlTXM6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGEuZHVyYXRpb25NcyA9PSBudWxsIHx8XG4gICAgYi5kdXJhdGlvbk1zID09IG51bGwgfHxcbiAgICBNYXRoLmFicyhhLmR1cmF0aW9uTXMgLSBiLmR1cmF0aW9uTXMpIDw9IHRvbGVyYW5jZU1zXG4gICk7XG59XG5cbi8qKlxuICogU3BsaXQgYSBidWNrZXQgaW50byBzdWItZ3JvdXBzIHdob3NlIGVudHJpZXMgYWdyZWUgd2l0aCB0aGUgYnVja2V0J3MgaGVhZC5cbiAqIFRpdGxlIGVxdWFsaXR5IGlzIGFuIGVxdWl2YWxlbmNlIHJlbGF0aW9uLCBzbyBjb21wYXJpbmcgYWdhaW5zdCB0aGUgaGVhZCBpc1xuICogZW5vdWdoOyBkdXJhdGlvbnMgYWN0IGFzIGEgb25lLXdheSBzYW5pdHkgY2hlY2suXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Qnk8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSwgYWdyZWVzOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IFRbXVtdIHtcbiAgY29uc3QgZ3JvdXBzOiBUW11bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb25zdCBob3N0ID0gZ3JvdXBzLmZpbmQoKGdyb3VwKSA9PiBhZ3JlZXMoZ3JvdXBbMF0sIGl0ZW0pKTtcbiAgICBpZiAoaG9zdCkgaG9zdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgZ3JvdXBzLnB1c2goW2l0ZW1dKTtcbiAgfVxuICByZXR1cm4gZ3JvdXBzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVJlc3VsdHMoKTogUmVjb3JkPEdyb3VwSWQsIER1cGxpY2F0ZUdyb3VwW10+IHtcbiAgY29uc3QgcmVzdWx0cyA9IHt9IGFzIFJlY29yZDxHcm91cElkLCBEdXBsaWNhdGVHcm91cFtdPjtcbiAgZm9yIChjb25zdCBpZCBvZiBHUk9VUF9PUkRFUikgcmVzdWx0c1tpZF0gPSBbXTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGdyb3VwQnk8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSwga2V5OiAoaXRlbTogVCkgPT4gc3RyaW5nIHwgbnVsbCk6IE1hcDxzdHJpbmcsIFRbXT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb25zdCBrID0ga2V5KGl0ZW0pO1xuICAgIGlmIChrID09IG51bGwpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGxpc3QgPSBtYXAuZ2V0KGspO1xuICAgIGlmIChsaXN0KSBsaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBtYXAuc2V0KGssIFtpdGVtXSk7XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBTY2FuIGEgZnVsbHkgbG9hZGVkIHBsYXlsaXN0IGFuZCBjb21wdXRlIHRoZSBkdXBsaWNhdGUgZ3JvdXBzIHBlciBsZXZlbC5cbiAqIEVudHJpZXMgbXVzdCBjYXJyeSBhIHVuaXF1ZSwgc3RhYmxlIGBwb3NpdGlvbmAgKHRoZWlyIHBsYXlsaXN0IGluZGV4KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdER1cGxpY2F0ZXMoXG4gIGVudHJpZXM6IHJlYWRvbmx5IFBsYXlsaXN0RW50cnlbXSxcbiAgb3B0aW9uczogRGVkdXBPcHRpb25zID0ge30sXG4pOiBEdXBsaWNhdGVSZXN1bHRzIHtcbiAgY29uc3QgcmVzdWx0cyA9IGNyZWF0ZUVtcHR5UmVzdWx0cygpO1xuICBpZiAoZW50cmllcy5sZW5ndGggPCAyKSByZXR1cm4gcmVzdWx0cztcblxuICBjb25zdCB0b2xlcmFuY2VNcyA9IG9wdGlvbnMuZHVyYXRpb25Ub2xlcmFuY2VNcyA/PyBERUZBVUxUX0RVUkFUSU9OX1RPTEVSQU5DRV9NUztcbiAgY29uc3QgbWF5YmVUaHJlc2hvbGQgPSBvcHRpb25zLm1heWJlU2ltaWxhcml0eVRocmVzaG9sZCA/PyBERUZBVUxUX01BWUJFX1NJTUlMQVJJVFlfVEhSRVNIT0xEO1xuICBjb25zdCBuZWlnaGJvcldpbmRvdyA9IG9wdGlvbnMubWF5YmVOZWlnaGJvcldpbmRvdyA/PyBERUZBVUxUX01BWUJFX05FSUdIQk9SX1dJTkRPVztcblxuICBjb25zdCBwb29sOiBTY2FubmVkVHJhY2tbXSA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gKHtcbiAgICAuLi5lbnRyeSxcbiAgICB0aXRsZUtleTogbm9ybWFsaXplVGl0bGVTdHJpY3QoZW50cnkubmFtZSksXG4gICAgZnV6enlLZXk6IG5vcm1hbGl6ZUZ1enp5KGVudHJ5Lm5hbWUsIG9wdGlvbnMuc3RyaXBXb3JkcyksXG4gICAgYXJ0aXN0S2V5czogZW50cnkuYXJ0aXN0cy5tYXAobm9ybWFsaXplQXJ0aXN0KS5maWx0ZXIoKG5hbWUpID0+IG5hbWUubGVuZ3RoID4gMCksXG4gIH0pKTtcblxuICBjb25zdCBjb25zdW1lZCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBjb25zdCBtZW1iZXJzQXQgPSAoaWQ6IEdyb3VwSWQsIGNhbmRpZGF0ZXM6IFNjYW5uZWRUcmFja1tdKSA9PiB7XG4gICAgY29uc3QgbWVtYmVycyA9IFsuLi5jYW5kaWRhdGVzXS5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbik7XG4gICAgaWYgKG1lbWJlcnMubGVuZ3RoIDwgMikgcmV0dXJuO1xuICAgIGZvciAoY29uc3QgbWVtYmVyIG9mIG1lbWJlcnMpIGNvbnN1bWVkLmFkZChtZW1iZXIucG9zaXRpb24pO1xuICAgIHJlc3VsdHNbaWRdLnB1c2goeyBtZW1iZXJzIH0pO1xuICB9O1xuXG4gIC8vIC0tLSBleGFjdDogdGhlIHZlcnkgc2FtZSBVUkkgbW9yZSB0aGFuIG9uY2UuIEFueSBjb250ZXh0IGVudHJ5IGNvdW50cy4gLS0tXG4gIC8vIFNoYXJpbmcgYSBVUkkgaXMgbmVjZXNzYXJ5IGJ1dCBub3Qgc3VmZmljaWVudDogc29tZSBwYXlsb2FkcyBoYW5kIHRoZSBzYW1lXG4gIC8vIChvZnRlbiBkZWdlbmVyYXRlKSBVUkkgdG8gdW5yZWxhdGVkIGVudHJpZXMgXHUyMDE0IGxvY2FsIGZpbGVzIHdpdGggbm8gdGFncywgZm9yXG4gIC8vIGluc3RhbmNlIFx1MjAxNCBzbyB0aGUgZGlzcGxheWVkIGlkZW50aXR5IGhhcyB0byBhZ3JlZSB0b28uIEVudHJpZXMgdGhhdFxuICAvLyBkaXNhZ3JlZSBzdGF5IHVuY29uc3VtZWQgYW5kIGtlZXAgZmxvd2luZyBkb3duIHRvIHRoZSBsb3dlciBsZXZlbHMuXG4gIGNvbnN0IGJ5VXJpID0gZ3JvdXBCeShwb29sLCAodCkgPT4gKHQudXJpID8gdC51cmkgOiBudWxsKSk7XG4gIGZvciAoY29uc3QgYnVja2V0IG9mIGJ5VXJpLnZhbHVlcygpKSB7XG4gICAgY29uc3QgdHdpbnMgPSBzcGxpdEJ5KFxuICAgICAgYnVja2V0LFxuICAgICAgKGEsIGIpID0+IGEudGl0bGVLZXkgPT09IGIudGl0bGVLZXkgJiYgZHVyYXRpb25zQWdyZWUoYSwgYiwgdG9sZXJhbmNlTXMpLFxuICAgICk7XG4gICAgZm9yIChjb25zdCBncm91cCBvZiB0d2lucykgbWVtYmVyc0F0KFwiZXhhY3RcIiwgZ3JvdXApO1xuICB9XG5cbiAgLy8gLS0tIGlzcmM6IGRpZmZlcmVudCBVUklzIGZvciB0aGUgc2FtZSByZWNvcmRpbmcuIFJlcXVpcmVzIGEga25vd24gSVNSQy5cbiAgLy8gVGl0bGVzIGxlZ2l0aW1hdGVseSBkaWZmZXIgYmV0d2VlbiByZWxlYXNlcywgc28gb25seSBkdXJhdGlvbiBhZ3JlZXMgaGVyZSBcdTIwMTRcbiAgLy8gYSBzaGFyZWQgYm9ndXMgVVJJIHdvdWxkIG90aGVyd2lzZSBwYWlyIHVucmVsYXRlZCB0cmFja3MgdGhyb3VnaCBvbmUgSVNSQy5cbiAgY29uc3QgYnlJc3JjID0gZ3JvdXBCeShcbiAgICBwb29sLmZpbHRlcigodCkgPT4gIWNvbnN1bWVkLmhhcyh0LnBvc2l0aW9uKSAmJiBpc1RyYWNrVXJpKHQudXJpKSAmJiB0LmlzcmMpLFxuICAgICh0KSA9PiB0LmlzcmMsXG4gICk7XG4gIGZvciAoY29uc3QgYnVja2V0IG9mIGJ5SXNyYy52YWx1ZXMoKSkge1xuICAgIGZvciAoY29uc3QgZ3JvdXAgb2Ygc3BsaXRCeShidWNrZXQsIChhLCBiKSA9PiBkdXJhdGlvbnNBZ3JlZShhLCBiLCB0b2xlcmFuY2VNcykpKSB7XG4gICAgICBtZW1iZXJzQXQoXCJpc3JjXCIsIGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gcHJvYmFibGUgLyBsaWtlbHk6IGlkZW50aWNhbCBub3JtYWxpemVkIHRpdGxlcywgcmVmaW5lZCBieSBhIHByZWRpY2F0ZS5cbiAgY29uc3QgYXJ0aXN0T3ZlcmxhcCA9IChhOiBTY2FubmVkVHJhY2ssIGI6IFNjYW5uZWRUcmFjayk6IGJvb2xlYW4gPT4ge1xuICAgIGlmIChhLmFydGlzdEtleXMubGVuZ3RoID09PSAwIHx8IGIuYXJ0aXN0S2V5cy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBvdGhlciA9IG5ldyBTZXQoYi5hcnRpc3RLZXlzKTtcbiAgICByZXR1cm4gYS5hcnRpc3RLZXlzLnNvbWUoKG5hbWUpID0+IG90aGVyLmhhcyhuYW1lKSk7XG4gIH07XG4gIGNvbnN0IGNsb3NlRHVyYXRpb25zID0gKGE6IFNjYW5uZWRUcmFjaywgYjogU2Nhbm5lZFRyYWNrKTogYm9vbGVhbiA9PlxuICAgIGEuZHVyYXRpb25NcyAhPSBudWxsICYmXG4gICAgYi5kdXJhdGlvbk1zICE9IG51bGwgJiZcbiAgICBNYXRoLmFicyhhLmR1cmF0aW9uTXMgLSBiLmR1cmF0aW9uTXMpIDw9IHRvbGVyYW5jZU1zO1xuXG4gIGNvbnN0IHRpdGxlQ2x1c3RlcnMgPSAoKSA9PlxuICAgIGdyb3VwQnkoXG4gICAgICBwb29sLmZpbHRlcigodCkgPT4gIWNvbnN1bWVkLmhhcyh0LnBvc2l0aW9uKSAmJiBpc1RyYWNrVXJpKHQudXJpKSAmJiB0LnRpdGxlS2V5KSxcbiAgICAgICh0KSA9PiB0LnRpdGxlS2V5LFxuICAgICkudmFsdWVzKCk7XG5cbiAgZm9yIChjb25zdCBjbHVzdGVyIG9mIHRpdGxlQ2x1c3RlcnMoKSkge1xuICAgIGZvciAoY29uc3QgYmFzZSBvZiBjbHVzdGVyKSB7XG4gICAgICBpZiAoY29uc3VtZWQuaGFzKGJhc2UucG9zaXRpb24pKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBbYmFzZV07XG4gICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGNsdXN0ZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSBiYXNlIHx8IGNvbnN1bWVkLmhhcyhvdGhlci5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgICAvLyBBbiBlbXB0eSBhcnRpc3QgbGlzdCBjYW4gbmV2ZXIgb3ZlcmxhcCwgc28gaXQgY2Fubm90IGpvaW4gYSBncm91cC5cbiAgICAgICAgaWYgKG90aGVyLmFydGlzdEtleXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGFydGlzdE92ZXJsYXAoYmFzZSwgb3RoZXIpKSBtYXRjaGVzLnB1c2gob3RoZXIpO1xuICAgICAgfVxuICAgICAgbWVtYmVyc0F0KFwicHJvYmFibGVcIiwgbWF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBjbHVzdGVyIG9mIHRpdGxlQ2x1c3RlcnMoKSkge1xuICAgIGZvciAoY29uc3QgYmFzZSBvZiBjbHVzdGVyKSB7XG4gICAgICBpZiAoY29uc3VtZWQuaGFzKGJhc2UucG9zaXRpb24pKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBbYmFzZV07XG4gICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGNsdXN0ZXIpIHtcbiAgICAgICAgaWYgKG90aGVyID09PSBiYXNlIHx8IGNvbnN1bWVkLmhhcyhvdGhlci5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgICBpZiAob3RoZXIuZHVyYXRpb25NcyA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNsb3NlRHVyYXRpb25zKGJhc2UsIG90aGVyKSkgbWF0Y2hlcy5wdXNoKG90aGVyKTtcbiAgICAgIH1cbiAgICAgIG1lbWJlcnNBdChcImxpa2VseVwiLCBtYXRjaGVzKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gcG9zc2libGUgLyBtYXliZTogZnV6enkgdGl0bGVzLiBDbHVzdGVycyBuZWVkIGEgdXNhYmxlIGZ1enp5IGtleS5cbiAgY29uc3QgZnV6enlQb29sID0gcG9vbC5maWx0ZXIoXG4gICAgKHQpID0+ICFjb25zdW1lZC5oYXModC5wb3NpdGlvbikgJiYgaXNUcmFja1VyaSh0LnVyaSkgJiYgdC5mdXp6eUtleS5sZW5ndGggPj0gMixcbiAgKTtcblxuICBjb25zdCBieUZ1enp5S2V5ID0gZ3JvdXBCeShmdXp6eVBvb2wsICh0KSA9PiB0LmZ1enp5S2V5KTtcbiAgZm9yIChjb25zdCBjbHVzdGVyIG9mIGJ5RnV6enlLZXkudmFsdWVzKCkpIHtcbiAgICBmb3IgKGNvbnN0IGJhc2Ugb2YgY2x1c3Rlcikge1xuICAgICAgaWYgKGNvbnN1bWVkLmhhcyhiYXNlLnBvc2l0aW9uKSkgY29udGludWU7XG4gICAgICBjb25zdCBtYXRjaGVzID0gW2Jhc2VdO1xuICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBjbHVzdGVyKSB7XG4gICAgICAgIGlmIChvdGhlciA9PT0gYmFzZSB8fCBjb25zdW1lZC5oYXMob3RoZXIucG9zaXRpb24pKSBjb250aW51ZTtcbiAgICAgICAgaWYgKG90aGVyLmR1cmF0aW9uTXMgPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIGlmIChjbG9zZUR1cmF0aW9ucyhiYXNlLCBvdGhlcikpIG1hdGNoZXMucHVzaChvdGhlcik7XG4gICAgICB9XG4gICAgICBtZW1iZXJzQXQoXCJwb3NzaWJsZVwiLCBtYXRjaGVzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXliZVBvb2wgPSBmdXp6eVBvb2wuZmlsdGVyKCh0KSA9PiAhY29uc3VtZWQuaGFzKHQucG9zaXRpb24pKTtcblxuICBmb3IgKGNvbnN0IGJ1Y2tldCBvZiBncm91cEJ5KG1heWJlUG9vbCwgKHQpID0+IHQuZnV6enlLZXkuY2hhckF0KDApKS52YWx1ZXMoKSkge1xuICAgIGJ1Y2tldC5zb3J0KChhLCBiKSA9PiAoYS5mdXp6eUtleSA8IGIuZnV6enlLZXkgPyAtMSA6IGEuZnV6enlLZXkgPiBiLmZ1enp5S2V5ID8gMSA6IDApKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYmFzZSA9IGJ1Y2tldFtpXTtcbiAgICAgIGlmIChjb25zdW1lZC5oYXMoYmFzZS5wb3NpdGlvbikpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IFtiYXNlXTtcbiAgICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5taW4oaSArIG5laWdoYm9yV2luZG93LCBidWNrZXQubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGxpbWl0OyBqKyspIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gYnVja2V0W2pdO1xuICAgICAgICBpZiAobGVuZ3RoTWlzbWF0Y2goYmFzZSwgY2FuZGlkYXRlKSkgY29udGludWU7XG4gICAgICAgIGlmIChiaWdyYW1TaW1pbGFyaXR5KGJhc2UuZnV6enlLZXksIGNhbmRpZGF0ZS5mdXp6eUtleSkgPCBtYXliZVRocmVzaG9sZCkgY29udGludWU7XG4gICAgICAgIG1hdGNoZXMucHVzaChjYW5kaWRhdGUpO1xuICAgICAgfVxuICAgICAgbWVtYmVyc0F0KFwibWF5YmVcIiwgbWF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKiBDaGVhcCBwcmUtZmlsdGVyOiBwYWlycyB3aXRoIGEgaHVnZSBsZW5ndGggZ2FwIGNhbiBuZXZlciByZWFjaCB0aGUgdGhyZXNob2xkLiAqL1xuZnVuY3Rpb24gbGVuZ3RoTWlzbWF0Y2goYTogU2Nhbm5lZFRyYWNrLCBiOiBTY2FubmVkVHJhY2spOiBib29sZWFuIHtcbiAgY29uc3QgbG9uZ2VyID0gTWF0aC5tYXgoYS5mdXp6eUtleS5sZW5ndGgsIGIuZnV6enlLZXkubGVuZ3RoKTtcbiAgY29uc3Qgc2hvcnRlciA9IE1hdGgubWluKGEuZnV6enlLZXkubGVuZ3RoLCBiLmZ1enp5S2V5Lmxlbmd0aCk7XG4gIHJldHVybiBzaG9ydGVyID4gMCAmJiBsb25nZXIgPiBzaG9ydGVyICogTUFZQkVfTEVOR1RIX1JBVElPX0dVQVJEO1xufVxuIiwgImltcG9ydCB7IHR5cGUgTW91c2VFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCwgdHlwZSBSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zLnRzeFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hQbGF5bGlzdEVkaXRhYmlsaXR5LFxuICBmZXRjaFBsYXlsaXN0RW50cmllcyxcbiAgaHlkcmF0ZUlzcmNzLFxuICBub3RpY2VzLFxuICBub3RpZnlGYWlsdXJlLFxuICBub3RpZnlTdWNjZXNzLFxuICB0eXBlIFBsYXlsaXN0SWRlbnRpdHksXG4gIFJFTU9WQUxfQkFUQ0hfU0laRSxcbiAgdHlwZSBSZW1vdmFsU3VtbWFyeSxcbiAgcmVtb3ZlRW50cmllcyxcbn0gZnJvbSBcIi4uL2FkYXB0ZXIudHNcIjtcbmltcG9ydCB7IGRldGVjdER1cGxpY2F0ZXMgfSBmcm9tIFwiLi4vZGV0ZWN0aW9uL2RlZHVwLnRzXCI7XG5pbXBvcnQge1xuICB0eXBlIER1cGxpY2F0ZUdyb3VwLFxuICBHUk9VUF9PUkRFUixcbiAgR1JPVVBfUkVMSUFCSUxJVFksXG4gIHR5cGUgR3JvdXBJZCxcbiAgdHlwZSBQbGF5bGlzdEVudHJ5LFxufSBmcm9tIFwiLi4vZGV0ZWN0aW9uL3R5cGVzLnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3N0cmluZ3MudHNcIjtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtYXRlcnMgKi9cblxuZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24obXM6IG51bWJlciB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAobXMgPT0gbnVsbCB8fCBtcyA8PSAwKSByZXR1cm4gXCItLTotLVwiO1xuICBjb25zdCBzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xuICByZXR1cm4gYCR7TWF0aC5mbG9vcihzIC8gNjApfTokeyhzICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFkZGVkRGF0ZShpc286IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNvKSByZXR1cm4gXCJcIjtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzbyk7XG4gIGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSByZXR1cm4gaXNvO1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwiLCBkYXk6IFwibnVtZXJpY1wiIH0pO1xufVxuXG4vKiogU2VnbWVudCBjb2xvciBwZXIgcmVsaWFiaWxpdHkgc2NvcmUgKDEgPSB3YXJtIHJlZCwgNiA9IFNwb3RpZnkgZ3JlZW4pLiAqL1xuY29uc3QgUkVMSUFCSUxJVFlfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiNlMDc0NWNcIixcbiAgMjogXCIjZDk5ZTRhXCIsXG4gIDM6IFwiI2JmYmE1MFwiLFxuICA0OiBcIiM4ZGJkNTFcIixcbiAgNTogXCIjNGJjMDVlXCIsXG4gIDY6IFwiIzFkYjk1NFwiLFxufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbW9kYWwgcm9vdCAqL1xuXG5jb25zdCBNT0RBTF9DT05UQUlORVJfSUQgPSBcImR1cGxpY2F0ZS1maW5kZXItbW9kYWwtY29udGFpbmVyXCI7XG5sZXQgbW9kYWxSb290OiBSb290IHwgbnVsbCA9IG51bGw7XG5cbi8qKiBDbG9zZSBhbmQgZnVsbHkgdW5tb3VudCB0aGUgZHVwbGljYXRlIGZpbmRlciBtb2RhbC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpOiB2b2lkIHtcbiAgaWYgKG1vZGFsUm9vdCkge1xuICAgIG1vZGFsUm9vdC51bm1vdW50KCk7XG4gICAgbW9kYWxSb290ID0gbnVsbDtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChNT0RBTF9DT05UQUlORVJfSUQpPy5yZW1vdmUoKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufVxuXG4vKiogT3BlbiB0aGUgZHVwbGljYXRlIGZpbmRlciBmb3IgdGhlIGdpdmVuIHBsYXlsaXN0LiBSZXBsYWNlcyBhbiBvcGVuIG9uZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RHVwbGljYXRlRmluZGVyTW9kYWwocGxheWxpc3Q6IFBsYXlsaXN0SWRlbnRpdHkpOiB2b2lkIHtcbiAgY2xvc2VEdXBsaWNhdGVGaW5kZXIoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gTU9EQUxfQ09OVEFJTkVSX0lEO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIG1vZGFsUm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgbW9kYWxSb290LnJlbmRlcig8RHVwbGljYXRlRmluZGVyTW9kYWwgcGxheWxpc3Q9e3BsYXlsaXN0fSAvPik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50cyAqL1xuXG50eXBlIFBoYXNlID0gXCJsb2FkaW5nXCIgfCBcInJlYWR5XCIgfCBcImVycm9yXCIgfCBcImVtcHR5XCI7XG5cbmludGVyZmFjZSBUcmFja1Jvd1Byb3BzIHtcbiAgdHJhY2s6IFBsYXlsaXN0RW50cnk7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBub3dQbGF5aW5nOiBOb3dQbGF5aW5nO1xuICBvblRvZ2dsZTogKHBvc2l0aW9uOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbm93IHBsYXlpbmcgKi9cblxuaW50ZXJmYWNlIE5vd1BsYXlpbmcge1xuICB1cmk6IHN0cmluZyB8IG51bGw7XG4gIGlzUGF1c2VkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiByZWFkTm93UGxheWluZyhzdGF0ZTogU3BpY2V0aWZ5LlBsYXllclN0YXRlIHwgdW5kZWZpbmVkKTogTm93UGxheWluZyB7XG4gIHJldHVybiB7IHVyaTogc3RhdGU/Lml0ZW0/LnVyaSA/PyBudWxsLCBpc1BhdXNlZDogc3RhdGU/LmlzUGF1c2VkID8/IHRydWUgfTtcbn1cblxuLyoqIFNpbmdsZSBtb2RhbC13aWRlIHN1YnNjcmlwdGlvbiB0byBwbGF5L3BhdXNlL3RyYWNrIGNoYW5nZXMuIERlbGliZXJhdGVseVxuICogIE5PVCB0aGUgMTAgSHogcHJvZ3Jlc3Mgc3RyZWFtOiB0aGUgcm93cyBvbmx5IG5lZWQgdG8ga25vdyB3aGljaCB0cmFjayBpc1xuICogIHBsYXlpbmcgXHUyMDE0IHN1YnNjcmliaW5nIGV2ZXJ5IHJvdyB0byB0aGF0IHN0cmVhbSBmbG9vZHMgUmVhY3Qgd2l0aCByZS1yZW5kZXJzXG4gKiAgYW5kIHRlYXJzIHRoZSBwYW5lbCdzIHBhaW50IG9uIGxhcmdlIHBsYXlsaXN0cy4gKi9cbmZ1bmN0aW9uIHVzZU5vd1BsYXlpbmcoKTogTm93UGxheWluZyB7XG4gIGNvbnN0IFtub3dQbGF5aW5nLCBzZXROb3dQbGF5aW5nXSA9IHVzZVN0YXRlPE5vd1BsYXlpbmc+KCgpID0+XG4gICAgcmVhZE5vd1BsYXlpbmcoU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGUpLFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQ6IHsgZGF0YTogU3BpY2V0aWZ5LlBsYXllclN0YXRlIH0pID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSByZWFkTm93UGxheWluZyhldmVudC5kYXRhKTtcbiAgICAgIC8vIFBvc2l0aW9uIHRpY2tzIGFsc28gZW1pdCBcInVwZGF0ZVwiOiBrZWVwIHRoZSBzYW1lIG9iamVjdCB3aGlsZSBuZWl0aGVyXG4gICAgICAvLyB0aGUgdHJhY2sgbm9yIHRoZSBwYXVzZSBzdGF0ZSBjaGFuZ2VkLCBzbyBSZWFjdCBza2lwcyB0aGUgcmUtcmVuZGVyLlxuICAgICAgc2V0Tm93UGxheWluZygocHJldikgPT5cbiAgICAgICAgcHJldi51cmkgPT09IG5leHQudXJpICYmIHByZXYuaXNQYXVzZWQgPT09IG5leHQuaXNQYXVzZWQgPyBwcmV2IDogbmV4dCxcbiAgICAgICk7XG4gICAgfTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuYWRkTGlzdGVuZXIoXCJ1cGRhdGVcIiwgb25DaGFuZ2UsIHt9KTtcbiAgICByZXR1cm4gKCkgPT4gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIG9uQ2hhbmdlLCB7fSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm93UGxheWluZztcbn1cblxuLyoqIEF1ZGl0aW9uIGJ1dHRvbjogcGxheSB0aGlzIGNhbmRpZGF0ZSB0byBjb21wYXJlIGl0IGJ5IGVhci4gKi9cbmZ1bmN0aW9uIFJvd1BsYXlCdXR0b24oeyB1cmksIG5vd1BsYXlpbmcgfTogeyB1cmk6IHN0cmluZzsgbm93UGxheWluZzogTm93UGxheWluZyB9KSB7XG4gIGNvbnN0IGlzVGhpc1RyYWNrID0gbm93UGxheWluZy51cmkgPT09IHVyaTtcbiAgY29uc3QgaXNQbGF5aW5nVGhpcyA9IGlzVGhpc1RyYWNrICYmICFub3dQbGF5aW5nLmlzUGF1c2VkO1xuICBjb25zdCBsYWJlbCA9IGlzUGxheWluZ1RoaXMgPyBzdHJpbmdzLnJvdy5wYXVzZSA6IHN0cmluZ3Mucm93LnBsYXk7XG5cbiAgY29uc3Qgb25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChpc1RoaXNUcmFjaykge1xuICAgICAgaWYgKG5vd1BsYXlpbmcuaXNQYXVzZWQpIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucmVzdW1lKHt9KTtcbiAgICAgIGVsc2UgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5wYXVzZSh7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGxheSh7IHVyaSB9LCB7fSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICBjbGFzc05hbWU9e2BkdXBmaW5kLXJvd19fcGxheSR7aXNQbGF5aW5nVGhpcyA/IFwiIGR1cGZpbmQtcm93X19wbGF5LS1vblwiIDogXCJcIn1gfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHtpc1BsYXlpbmdUaGlzID8gPEljb25zLlJlYWN0LnBhdXNlIHNpemU9ezE0fSAvPiA6IDxJY29ucy5SZWFjdC5wbGF5IHNpemU9ezE0fSAvPn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gVHJhY2tSb3coeyB0cmFjaywgY2hlY2tlZCwgZGlzYWJsZWQsIG5vd1BsYXlpbmcsIG9uVG9nZ2xlIH06IFRyYWNrUm93UHJvcHMpIHtcbiAgY29uc3QgY2FuUGxheSA9IHRyYWNrLnVyaS5zdGFydHNXaXRoKFwic3BvdGlmeTp0cmFjazpcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BkdXBmaW5kLXJvdyR7Y2hlY2tlZCA/IFwiIGR1cGZpbmQtcm93LS1jaGVja2VkXCIgOiBcIlwifSR7ZGlzYWJsZWQgPyBcIiBkdXBmaW5kLXJvdy0tZGlzYWJsZWRcIiA6IFwiXCJ9YH1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogKCkgPT4gb25Ub2dnbGUodHJhY2sucG9zaXRpb24pfVxuICAgID5cbiAgICAgIHsvKiBUaGUgY2hlY2tib3ggc3RvcHMgdGhlIGV2ZW50IHNvIHRoZSByb3cgaGFuZGxlciBkb2VzIG5vdCB0b2dnbGUgdHdpY2UuICovfVxuICAgICAgPGlucHV0XG4gICAgICAgIGFyaWEtbGFiZWw9e3RyYWNrLm5hbWV9XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtcm93X19jaGVja2JveFwiXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uVG9nZ2xlKHRyYWNrLnBvc2l0aW9uKX1cbiAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgdGl0bGU9e2Rpc2FibGVkID8gc3RyaW5ncy5zdGF0ZXMucmVhZE9ubHlOb3RpY2UgOiB1bmRlZmluZWR9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAvPlxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLXJvd19fYXJ0XCJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBvbkVycm9yPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB9fVxuICAgICAgICBzcmM9e3RyYWNrLmltYWdlVXJsfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1yb3dfX2luZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLXJvd19fdGl0bGVsaW5lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1yb3dfX3RpdGxlXCI+e3RyYWNrLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtcm93X19kdXJhdGlvblwiPntmb3JtYXREdXJhdGlvbih0cmFjay5kdXJhdGlvbk1zKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXJvd19fbWV0YVwiPlxuICAgICAgICAgIHt0cmFjay5hcnRpc3RzLmxlbmd0aCA+IDAgPyB0cmFjay5hcnRpc3RzLmpvaW4oXCIsIFwiKSA6IHN0cmluZ3Mucm93Lm5vQXJ0aXN0c31cbiAgICAgICAgICB7XCIgXHUwMEI3IFwifVxuICAgICAgICAgIHt0cmFjay5hbGJ1bU5hbWUgfHwgc3RyaW5ncy5yb3cudW5rbm93bkFsYnVtfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtcm93X193aGVyZVwiPlxuICAgICAgICAgIHtgIyR7dHJhY2sucG9zaXRpb24gKyAxfWB9XG4gICAgICAgICAge3RyYWNrLmFkZGVkQXQgPyBgIFx1MDBCNyBhZGRlZCAke2Zvcm1hdEFkZGVkRGF0ZSh0cmFjay5hZGRlZEF0KX1gIDogXCJcIn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7Y2FuUGxheSAmJiA8Um93UGxheUJ1dHRvbiBub3dQbGF5aW5nPXtub3dQbGF5aW5nfSB1cmk9e3RyYWNrLnVyaX0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdyb3VwQ2FyZCh7XG4gIGdyb3VwLFxuICBzZWxlY3RlZCxcbiAgY2FuRWRpdCxcbiAgbm93UGxheWluZyxcbiAgb25Ub2dnbGUsXG59OiB7XG4gIGdyb3VwOiBEdXBsaWNhdGVHcm91cDtcbiAgc2VsZWN0ZWQ6IFJlYWRvbmx5U2V0PG51bWJlcj47XG4gIGNhbkVkaXQ6IGJvb2xlYW47XG4gIG5vd1BsYXlpbmc6IE5vd1BsYXlpbmc7XG4gIG9uVG9nZ2xlOiAocG9zaXRpb246IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgaWYgKGdyb3VwLm1lbWJlcnMubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWdyb3VwXCI+XG4gICAgICB7Z3JvdXAubWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZ3JvdXBfX3Jvd1wiIGtleT17bWVtYmVyLnBvc2l0aW9ufT5cbiAgICAgICAgICA8VHJhY2tSb3dcbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkLmhhcyhtZW1iZXIucG9zaXRpb24pfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5FZGl0fVxuICAgICAgICAgICAgbm93UGxheWluZz17bm93UGxheWluZ31cbiAgICAgICAgICAgIG9uVG9nZ2xlPXtvblRvZ2dsZX1cbiAgICAgICAgICAgIHRyYWNrPXttZW1iZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2F1Z2UoeyB2YWx1ZSB9OiB7IHZhbHVlOiBudW1iZXIgfSkge1xuICBjb25zdCB0b3RhbCA9IEdST1VQX09SREVSLmxlbmd0aDtcbiAgY29uc3QgY29sb3IgPSBSRUxJQUJJTElUWV9DT0xPUlNbdmFsdWVdID8/IFJFTElBQklMSVRZX0NPTE9SU1sxXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGFyaWEtbGFiZWw9e2BDb25maWRlbmNlICR7dmFsdWV9IG9mICR7dG90YWx9YH0gY2xhc3NOYW1lPVwiZHVwZmluZC1nYXVnZVwiIHJvbGU9XCJpbWdcIj5cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiB0b3RhbCB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2BkdXBmaW5kLWdhdWdlX19zZWcke2luZGV4IDwgdmFsdWUgPyBcIiBkdXBmaW5kLWdhdWdlX19zZWctLW9uXCIgOiBcIlwifWB9XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBzdHlsZT17aW5kZXggPCB2YWx1ZSA/IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9IDogdW5kZWZpbmVkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIER1cGxpY2F0ZUZpbmRlck1vZGFsKHsgcGxheWxpc3QgfTogeyBwbGF5bGlzdDogUGxheWxpc3RJZGVudGl0eSB9KSB7XG4gIGNvbnN0IFtwaGFzZSwgc2V0UGhhc2VdID0gdXNlU3RhdGU8UGhhc2U+KFwibG9hZGluZ1wiKTtcbiAgY29uc3QgW3Byb2dyZXNzVGV4dCwgc2V0UHJvZ3Jlc3NUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oc3RyaW5ncy5zdGF0ZXMubG9hZGluZ1RyYWNrcyk7XG4gIGNvbnN0IFtlbnRyaWVzLCBzZXRFbnRyaWVzXSA9IHVzZVN0YXRlPFBsYXlsaXN0RW50cnlbXT4oW10pO1xuICBjb25zdCBbY2FuRWRpdCwgc2V0Q2FuRWRpdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmVMZXZlbCwgc2V0QWN0aXZlTGV2ZWxdID0gdXNlU3RhdGU8R3JvdXBJZD4oXCJleGFjdFwiKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxSZWFkb25seVNldDxudW1iZXI+PihuZXcgU2V0KCkpO1xuICBjb25zdCBbY29uZmlybU9wZW4sIHNldENvbmZpcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlbW92YWxQcm9ncmVzcywgc2V0UmVtb3ZhbFByb2dyZXNzXSA9IHVzZVN0YXRlPHsgZG9uZTogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0gfCBudWxsPihcbiAgICBudWxsLFxuICApO1xuICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAvLyBPbmUgcGxheWVyIHN1YnNjcmlwdGlvbiBmb3IgdGhlIHdob2xlIG1vZGFsIChzZWUgYHVzZU5vd1BsYXlpbmdgKS5cbiAgY29uc3Qgbm93UGxheWluZyA9IHVzZU5vd1BsYXlpbmcoKTtcblxuICBjb25zdCBhYm9ydFJlZiA9IHVzZVJlZjxBYm9ydENvbnRyb2xsZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhYm9ydFJlZi5jdXJyZW50Py5hYm9ydCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gXCJFc2NhcGVcIikgcmV0dXJuO1xuICAgICAgLy8gTmV2ZXIgZHJvcCB0aGUgd2luZG93IHdoaWxlIGEgZGVsZXRpb24gaXMgcnVubmluZy5cbiAgICAgIGlmIChyZW1vdmFsUHJvZ3Jlc3MpIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgfSwgW3JlbW92YWxQcm9ncmVzc10pO1xuXG4gIGNvbnN0IHNjYW4gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgYWJvcnRSZWYuY3VycmVudD8uYWJvcnQoKTtcbiAgICBjb25zdCBhYm9ydCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBhYm9ydFJlZi5jdXJyZW50ID0gYWJvcnQ7XG5cbiAgICBzZXRQaGFzZShcImxvYWRpbmdcIik7XG4gICAgc2V0UHJvZ3Jlc3NUZXh0KHN0cmluZ3Muc3RhdGVzLmxvYWRpbmdUcmFja3MpO1xuICAgIHNldFNlbGVjdGVkKG5ldyBTZXQoKSk7XG4gICAgc2V0Q29uZmlybU9wZW4oZmFsc2UpO1xuICAgIHNldFN1bW1hcnkobnVsbCk7XG4gICAgc2V0Q2FuRWRpdChmYWxzZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZWRpdGFiaWxpdHkgPSBhd2FpdCBmZXRjaFBsYXlsaXN0RWRpdGFiaWxpdHkocGxheWxpc3QudXJpKTtcbiAgICAgIGlmIChhYm9ydC5zaWduYWwuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgc2V0Q2FuRWRpdChlZGl0YWJpbGl0eS5jYW5FZGl0KTtcblxuICAgICAgY29uc3QgbG9hZGVkID0gYXdhaXQgZmV0Y2hQbGF5bGlzdEVudHJpZXMocGxheWxpc3QudXJpLCB7XG4gICAgICAgIHNpZ25hbDogYWJvcnQuc2lnbmFsLFxuICAgICAgICBvblByb2dyZXNzOiAobG9hZGVkQ291bnQpID0+IHNldFByb2dyZXNzVGV4dChzdHJpbmdzLnN0YXRlcy5sb2FkZWRDb3VudChsb2FkZWRDb3VudCkpLFxuICAgICAgfSk7XG4gICAgICBpZiAoYWJvcnQuc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcblxuICAgICAgaWYgKGxvYWRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0RW50cmllcyhbXSk7XG4gICAgICAgIHNldFBoYXNlKFwiZW1wdHlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0RW50cmllcyhsb2FkZWQpO1xuICAgICAgc2V0UGhhc2UoXCJyZWFkeVwiKTtcblxuICAgICAgaHlkcmF0ZUlzcmNzKGxvYWRlZCwge1xuICAgICAgICBzaWduYWw6IGFib3J0LnNpZ25hbCxcbiAgICAgICAgb25Qcm9ncmVzczogKGRvbmUsIHRvdGFsKSA9PlxuICAgICAgICAgIHNldFByb2dyZXNzVGV4dChgJHtzdHJpbmdzLnN0YXRlcy5sb2FkaW5nRGV0YWlsc30gJHtkb25lfS8ke3RvdGFsfWApLFxuICAgICAgfSkudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmIChhYm9ydC5zaWduYWwuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgICAgIC8vIE5ldyBhcnJheSBpZGVudGl0eSBzbyB0aGUgbWVtb2l6ZWQgZGV0ZWN0aW9uIHJlcnVucyB3aXRoIElTUkNzLlxuICAgICAgICAgIHNldEVudHJpZXMoWy4uLmxvYWRlZF0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoYWJvcnQuc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIElTUkMgaHlkcmF0aW9uIHN0b3BwZWQ6XCIsIGVycm9yKTtcbiAgICAgICAgICBzZXRQcm9ncmVzc1RleHQoc3RyaW5ncy5zdGF0ZXMubG9hZGluZ0RldGFpbHMpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGFib3J0LnNpZ25hbC5hYm9ydGVkKSByZXR1cm47XG4gICAgICBjb25zb2xlLndhcm4oXCJbcGxheWxpc3REdXBsaWNhdGVGaW5kZXJdIHNjYW4gZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgICBzZXRQaGFzZShcImVycm9yXCIpO1xuICAgIH1cbiAgfSwgW3BsYXlsaXN0LnVyaV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdm9pZCBzY2FuKCk7XG4gIH0sIFtzY2FuXSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IHVzZU1lbW8oKCkgPT4gZGV0ZWN0RHVwbGljYXRlcyhlbnRyaWVzKSwgW2VudHJpZXNdKTtcbiAgY29uc3QgZ3JvdXBDb3VudHMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBPYmplY3QuZnJvbUVudHJpZXMoR1JPVVBfT1JERVIubWFwKChpZCkgPT4gW2lkLCByZXN1bHRzW2lkXS5sZW5ndGhdKSkgYXMgUmVjb3JkPFxuICAgICAgICBHcm91cElkLFxuICAgICAgICBudW1iZXJcbiAgICAgID4sXG4gICAgW3Jlc3VsdHNdLFxuICApO1xuICBjb25zdCBhbnlEdXBsaWNhdGVzID0gR1JPVVBfT1JERVIuc29tZSgoaWQpID0+IGdyb3VwQ291bnRzW2lkXSA+IDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSnVtcCB0byB0aGUgbW9zdCBjb25maWRlbnQgbGV2ZWwgdGhhdCBoYXMgbWF0Y2hlcyBvbmNlIHNjYW5uaW5nIGlzIGRvbmVcbiAgICAvLyBhbmQgcmUtcnVuIHRoaXMgd2hlbiBhIHJlbW92YWwgZW1wdGllcyB0aGUgYWN0aXZlIGxldmVsLlxuICAgIGlmIChwaGFzZSAhPT0gXCJyZWFkeVwiKSByZXR1cm47XG4gICAgaWYgKEdST1VQX09SREVSLnNvbWUoKGlkKSA9PiBncm91cENvdW50c1tpZF0gPiAwKSAmJiBncm91cENvdW50c1thY3RpdmVMZXZlbF0gPT09IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0V2l0aEdyb3VwcyA9IEdST1VQX09SREVSLmZpbmQoKGlkKSA9PiBncm91cENvdW50c1tpZF0gPiAwKTtcbiAgICAgIGlmIChmaXJzdFdpdGhHcm91cHMpIHNldEFjdGl2ZUxldmVsKGZpcnN0V2l0aEdyb3Vwcyk7XG4gICAgfVxuICB9LCBbcGhhc2UsIGdyb3VwQ291bnRzLCBhY3RpdmVMZXZlbF0pO1xuXG4gIGNvbnN0IHRvZ2dsZVJvdyA9IHVzZUNhbGxiYWNrKChwb3NpdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgc2V0U3VtbWFyeShudWxsKTtcbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldik7XG4gICAgICBpZiAobmV4dC5oYXMocG9zaXRpb24pKSBuZXh0LmRlbGV0ZShwb3NpdGlvbik7XG4gICAgICBlbHNlIG5leHQuYWRkKHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLyoqIFNlbGVjdC9kZXNlbGVjdCB0aGUgZHVwbGljYXRlIGVudHJpZXMgb2YgdGhlIGxldmVsIGN1cnJlbnRseSBkaXNwbGF5ZWQuXG4gICAqICBcIlNlbGVjdCBhbGxcIiBvbmx5IGNoZWNrcyBkdXBsaWNhdGVzOiB0aGUgZmlyc3QgbWVtYmVyIG9mIGVhY2ggZ3JvdXAgKGl0c1xuICAgKiAgZWFybGllc3Qgb2NjdXJyZW5jZSkgaXMgbGVmdCBvdXQgc28gdGhlIGdyb3VwIGRvZXMgbm90IGxvc2UgZXZlcnkgY29weS4gKi9cbiAgY29uc3Qgc2V0TGV2ZWxTZWxlY3Rpb24gPSAobW9kZTogXCJhbGxcIiB8IFwibm9uZVwiKSA9PiB7XG4gICAgc2V0U3VtbWFyeShudWxsKTtcbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldik7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHJlc3VsdHNbYWN0aXZlTGV2ZWxdKSB7XG4gICAgICAgIGdyb3VwLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChtb2RlID09PSBcIm5vbmVcIikgbmV4dC5kZWxldGUobWVtYmVyLnBvc2l0aW9uKTtcbiAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IDApIG5leHQuYWRkKG1lbWJlci5wb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRSZW1vdmFsID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghY2FuRWRpdCB8fCBzZWxlY3RlZC5zaXplID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc25hcHNob3QgPSBlbnRyaWVzLmZpbHRlcigoZSkgPT4gc2VsZWN0ZWQuaGFzKGUucG9zaXRpb24pKTtcbiAgICBzZXRDb25maXJtT3BlbihmYWxzZSk7XG4gICAgc2V0UmVtb3ZhbFByb2dyZXNzKHsgZG9uZTogMCwgdG90YWw6IHNuYXBzaG90Lmxlbmd0aCB9KTtcblxuICAgIGxldCBvdXRjb21lOiBSZW1vdmFsU3VtbWFyeSB8IG51bGwgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBvdXRjb21lID0gYXdhaXQgcmVtb3ZlRW50cmllcyhcbiAgICAgICAgcGxheWxpc3QudXJpLFxuICAgICAgICBzbmFwc2hvdC5tYXAoKGUpID0+ICh7IHVyaTogZS51cmksIHVpZDogZS51aWQgfSkpLFxuICAgICAgICAoZG9uZSwgdG90YWwpID0+IHNldFJlbW92YWxQcm9ncmVzcyh7IGRvbmUsIHRvdGFsIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKFwiW3BsYXlsaXN0RHVwbGljYXRlRmluZGVyXSByZW1vdmFsIGNyYXNoZWQ6XCIsIGVycm9yKTtcbiAgICAgIHNldFJlbW92YWxQcm9ncmVzcyhudWxsKTtcbiAgICAgIHNldFN1bW1hcnkoc3RyaW5ncy5zdGF0ZXMubmV0d29ya0Vycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPY2N1cnJlbmNlcyBjb3ZlcmVkIGJ5IHN1Y2Nlc3NmdWwgYmF0Y2hlcyBkaXNhcHBlYXIgZnJvbSB0aGUgdmlldztcbiAgICAvLyBmYWlsZWQgb25lcyBzdGF5IHNlbGVjdGFibGUgc28gdGhleSBjYW4gYmUgcmV0cmllZCB3aXRob3V0IGEgcmVzY2FuLlxuICAgIGNvbnN0IGtlZXBGYWlsZWQgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgICBsZXQgY3Vyc29yID0gMDtcbiAgICBmb3IgKGNvbnN0IG9rIG9mIG91dGNvbWUuYmF0Y2hSZXN1bHRzKSB7XG4gICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihjdXJzb3IgKyBSRU1PVkFMX0JBVENIX1NJWkUsIHNuYXBzaG90Lmxlbmd0aCk7XG4gICAgICBpZiAoIW9rKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gY3Vyc29yOyBpbmRleCA8IGVuZDsgaW5kZXgrKykga2VlcEZhaWxlZC5hZGQoc25hcHNob3RbaW5kZXhdLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIGN1cnNvciA9IGVuZDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkUG9zaXRpb25zID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBzbmFwc2hvdCkge1xuICAgICAgaWYgKCFrZWVwRmFpbGVkLmhhcyhlbnRyeS5wb3NpdGlvbikpIHJlbW92ZWRQb3NpdGlvbnMuYWRkKGVudHJ5LnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBzZXRFbnRyaWVzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoZSkgPT4gIXJlbW92ZWRQb3NpdGlvbnMuaGFzKGUucG9zaXRpb24pKSk7XG4gICAgc2V0U2VsZWN0ZWQoa2VlcEZhaWxlZCk7XG5cbiAgICBpZiAob3V0Y29tZS5mYWlsZWQgPT09IDApIHtcbiAgICAgIG5vdGlmeVN1Y2Nlc3Mobm90aWNlcy5hbGxSZW1vdmVkKG91dGNvbWUucmVtb3ZlZCkpO1xuICAgICAgc2V0U3VtbWFyeShudWxsKTtcbiAgICB9IGVsc2UgaWYgKG91dGNvbWUucmVtb3ZlZCA9PT0gMCkge1xuICAgICAgbm90aWZ5RmFpbHVyZShub3RpY2VzLmFsbEZhaWxlZChvdXRjb21lLmZhaWxlZCkpO1xuICAgICAgc2V0U3VtbWFyeShub3RpY2VzLmFsbEZhaWxlZChvdXRjb21lLmZhaWxlZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZnlGYWlsdXJlKG5vdGljZXMucGFydGlhbEZhaWx1cmUob3V0Y29tZS5yZW1vdmVkLCBvdXRjb21lLmZhaWxlZCkpO1xuICAgICAgc2V0U3VtbWFyeShub3RpY2VzLnBhcnRpYWxGYWlsdXJlKG91dGNvbWUucmVtb3ZlZCwgb3V0Y29tZS5mYWlsZWQpKTtcbiAgICB9XG5cbiAgICBzZXRSZW1vdmFsUHJvZ3Jlc3MobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZlR3JvdXBzID0gcmVzdWx0c1thY3RpdmVMZXZlbF07XG4gIGNvbnN0IHNlbGVjdGlvbkNvdW50ID0gc2VsZWN0ZWQuc2l6ZTtcbiAgY29uc3QgYnVzeSA9IHJlbW92YWxQcm9ncmVzcyAhPSBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLW92ZXJsYXlcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZHVwZmluZC13aW5kb3cke2J1c3kgPyBcIiBkdXBmaW5kLXdpbmRvdy0tYnVzeVwiIDogXCJcIn1gfVxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmICFidXN5KSBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1oZWFkZXJfX3RpdGxlc1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImR1cGZpbmQtaGVhZGVyX190aXRsZVwiPntzdHJpbmdzLm1vZGFsLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtaGVhZGVyX19wbGF5bGlzdFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLWhlYWRlcl9fcGxheWxpc3QtbmFtZVwiPntwbGF5bGlzdC5uYW1lIHx8IHBsYXlsaXN0LnVyaX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHVwZmluZC1iYWRnZSR7Y2FuRWRpdCA/IFwiIGR1cGZpbmQtYmFkZ2UtLWVkaXRhYmxlXCIgOiBcIiBkdXBmaW5kLWJhZGdlLS1yZWFkb25seVwifWB9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2NhbkVkaXQgPyBzdHJpbmdzLmJhZGdlcy5lZGl0YWJsZUhpbnQgOiBzdHJpbmdzLmJhZGdlcy5yZWFkT25seUhpbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2FuRWRpdCA/IHN0cmluZ3MuYmFkZ2VzLmVkaXRhYmxlIDogc3RyaW5ncy5iYWRnZXMucmVhZE9ubHl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3N0cmluZ3MubW9kYWwuY2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLWhlYWRlcl9fY2xvc2VcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2J1c3l9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25zLlJlYWN0LmNsb3NlIHNpemU9ezE4fSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1ib2R5XCI+XG4gICAgICAgICAge3BoYXNlID09PSBcImxvYWRpbmdcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtc3RhdGUgZHVwZmluZC1zdGF0ZS0tbG9hZGluZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtc3Bpbm5lclwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPntwcm9ncmVzc1RleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtwaGFzZSA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1zdGF0ZSBkdXBmaW5kLXN0YXRlLS1lcnJvclwiPlxuICAgICAgICAgICAgICA8c3Bhbj57c3RyaW5ncy5zdGF0ZXMubmV0d29ya0Vycm9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtYnV0dG9uIGR1cGZpbmQtYnV0dG9uLS1naG9zdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBzY2FuKCl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3RyaW5ncy5zdGF0ZXMucmV0cnl9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtwaGFzZSA9PT0gXCJlbXB0eVwiICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1zdGF0ZVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57c3RyaW5ncy5zdGF0ZXMuZW1wdHlQbGF5bGlzdH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3BoYXNlID09PSBcInJlYWR5XCIgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImR1cGZpbmQtcmFpbFwiPlxuICAgICAgICAgICAgICAgIHsvKiBPbmx5IGxldmVscyB0aGF0IGFjdHVhbGx5IGZvdW5kIG1hdGNoZXMgYXJlIGxpc3RlZC4gKi99XG4gICAgICAgICAgICAgICAge0dST1VQX09SREVSLmZpbHRlcigoaWQpID0+IGdyb3VwQ291bnRzW2lkXSA+IDApLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHVwZmluZC1yYWlsX19pdGVtJHthY3RpdmVMZXZlbCA9PT0gaWQgPyBcIiBkdXBmaW5kLXJhaWxfX2l0ZW0tLWFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlTGV2ZWwoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1PcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3N0cmluZ3MubGV2ZWxzW2lkXS5oaW50fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1yYWlsX19sYWJlbFwiPntzdHJpbmdzLmxldmVsc1tpZF0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXJhaWxfX2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MubGV2ZWxNZXRhLmdyb3Vwc0NvdW50KGdyb3VwQ291bnRzW2lkXSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPEdhdWdlIHZhbHVlPXtHUk9VUF9SRUxJQUJJTElUWVtpZF19IC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJkdXBmaW5kLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZUdyb3Vwcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1wYW5lbF9faGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLXBhbmVsX19sZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLmxldmVsc1thY3RpdmVMZXZlbF0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2NhbkVkaXQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1wYW5lbF9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLWJ1dHRvbiBkdXBmaW5kLWJ1dHRvbi0tZ2hvc3QgZHVwZmluZC1idXR0b24tLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGV2ZWxTZWxlY3Rpb24oXCJhbGxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzdHJpbmdzLnBhbmVsLnNlbGVjdEFsbEhpbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5wYW5lbC5zZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1idXR0b24gZHVwZmluZC1idXR0b24tLWdob3N0IGR1cGZpbmQtYnV0dG9uLS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExldmVsU2VsZWN0aW9uKFwibm9uZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLnBhbmVsLmRlc2VsZWN0QWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshYW55RHVwbGljYXRlcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1zdGF0ZV9fdGl0bGVcIj57c3RyaW5ncy5zdGF0ZXMubm9EdXBsaWNhdGVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwZmluZC1tdXRlZFwiPntzdHJpbmdzLnN0YXRlcy5ub0R1cGxpY2F0ZXNIaW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FueUR1cGxpY2F0ZXMgJiYgYWN0aXZlR3JvdXBzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0cmluZ3MubGV2ZWxNZXRhLmVtcHR5TGV2ZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlR3JvdXBzLm1hcCgoZ3JvdXApID0+IChcbiAgICAgICAgICAgICAgICAgIDxHcm91cENhcmRcbiAgICAgICAgICAgICAgICAgICAgY2FuRWRpdD17Y2FuRWRpdH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e2dyb3VwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BnJHtncm91cC5tZW1iZXJzWzBdPy5wb3NpdGlvbiA/PyBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgIG5vd1BsYXlpbmc9e25vd1BsYXlpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0b2dnbGVSb3d9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9vdGVyICovfVxuICAgICAgICB7cGhhc2UgPT09IFwicmVhZHlcIiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3RlclwiPlxuICAgICAgICAgICAgeyFjYW5FZGl0ID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19yZWFkb25seVwiPntzdHJpbmdzLnN0YXRlcy5yZWFkT25seU5vdGljZX08L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3N1bW1hcnkgJiYgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fc3VtbWFyeVwiPntzdW1tYXJ5fTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7IWJ1c3kgJiYgIWNvbmZpcm1PcGVuICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwZmluZC1mb290ZXJfX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5mb290ZXIuc2VsZWN0aW9uKHNlbGVjdGlvbkNvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fd2FybmluZ1wiPntzdHJpbmdzLmZvb3Rlci53YXJuaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cGZpbmQtYnV0dG9uIGR1cGZpbmQtYnV0dG9uLS1naG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZUR1cGxpY2F0ZUZpbmRlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuZm9vdGVyLmNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLWJ1dHRvbiBkdXBmaW5kLWJ1dHRvbi0tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3Rpb25Db3VudCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm1PcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuZm9vdGVyLnJlbW92ZShzZWxlY3Rpb25Db3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7IWJ1c3kgJiYgY29uZmlybU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19jb25maXJtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuZm9vdGVyLmNvbmZpcm1Cb2R5KHNlbGVjdGlvbkNvdW50LCBwbGF5bGlzdC5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGZpbmQtZm9vdGVyX19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1idXR0b24gZHVwZmluZC1idXR0b24tLWdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm1PcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLmZvb3Rlci5rZWVwRWRpdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdXBmaW5kLWJ1dHRvbiBkdXBmaW5kLWJ1dHRvbi0tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgc3RhcnRSZW1vdmFsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5mb290ZXIuY29uZmlybVJlbW92ZShzZWxlY3Rpb25Db3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YnVzeSAmJiByZW1vdmFsUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLWZvb3Rlcl9fYnVzeVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5mb290ZXIucmVtb3ZpbmcocmVtb3ZhbFByb2dyZXNzLmRvbmUsIHJlbW92YWxQcm9ncmVzcy50b3RhbCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBmaW5kLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwZmluZC1wcm9ncmVzc19fYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtNYXRoLnJvdW5kKChyZW1vdmFsUHJvZ3Jlc3MuZG9uZSAvIE1hdGgubWF4KHJlbW92YWxQcm9ncmVzcy50b3RhbCwgMSkpICogMTAwKX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBwYXJzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvcGFyc2VQcm9wcy50c1wiO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5pbXBvcnQgeyByZXNvbHZlUGxheWxpc3ROYW1lIH0gZnJvbSBcIi4vYWRhcHRlci50c1wiO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuL3N0cmluZ3MudHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBzaG93RHVwbGljYXRlRmluZGVyTW9kYWwgfSBmcm9tIFwiLi91aS9kdXBlc01vZGFsLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5mdW5jdGlvbiBpc1BsYXlsaXN0VHlwZSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk/LnR5cGU7XG4gIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuUExBWUxJU1QgfHwgdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLlBMQVlMSVNUX1YyO1xufVxuXG5jb25zdCBmaW5kRHVwbGljYXRlc01lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogc3RyaW5ncy5tZW51Lml0ZW1MYWJlbCxcbiAgbGVhZGluZ0ljb246IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIiR7SWNvbnMuUkFXLmR1cGxpY2F0ZX1cIi8+PC9zdmc+YCxcbiAgb25DbGljazogYXN5bmMgKGNvbnRleHQ6IHVua25vd24pID0+IHtcbiAgICAvLyBDb250ZXh0TWVudVYyIGhhbmRzIHRoZSByYXcgZXZlbnQgb3ZlcjsgdGhlIGNvbnRleHQgcGF5bG9hZCBpdHNlbGZcbiAgICAvLyAodXJpLCBuYW1lLCBcdTIwMjYpIGxpdmVzIG9uIGBldmVudC5wcm9wc2AgXHUyMDE0IHRoZSBzYW1lIHNoYXBlIGFydGlzdFNlYXJjaCB1c2VzLlxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMoKGNvbnRleHQgYXMgeyBwcm9wcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0pPy5wcm9wcyk7XG4gICAgY29uc3QgdXJpID0gdHlwZW9mIHBhcnNlZC51cmkgPT09IFwic3RyaW5nXCIgPyBwYXJzZWQudXJpIDogXCJcIjtcbiAgICBpZiAoIXVyaSB8fCAhaXNQbGF5bGlzdFR5cGUodXJpKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbmFtZSA9XG4gICAgICB0eXBlb2YgcGFyc2VkLm5hbWUgPT09IFwic3RyaW5nXCIgJiYgcGFyc2VkLm5hbWUubGVuZ3RoID4gMFxuICAgICAgICA/IHBhcnNlZC5uYW1lXG4gICAgICAgIDogYXdhaXQgcmVzb2x2ZVBsYXlsaXN0TmFtZSh1cmkpO1xuXG4gICAgc2hvd0R1cGxpY2F0ZUZpbmRlck1vZGFsKHsgdXJpLCBuYW1lIH0pO1xuICB9LFxuICBzaG91bGRBZGQ6IChwcm9wczogdW5rbm93bikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMocHJvcHMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pO1xuICAgIHJldHVybiB0eXBlb2YgcGFyc2VkLnVyaSA9PT0gXCJzdHJpbmdcIiAmJiBpc1BsYXlsaXN0VHlwZShwYXJzZWQudXJpKTtcbiAgfSxcbn0pO1xuXG5maW5kRHVwbGljYXRlc01lbnVJdGVtLnJlZ2lzdGVyKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFPTyxTQUFTLFdBQVcsT0FBb0Q7QUFDN0UsTUFBSSxDQUFDLE1BQU8sUUFBTyxDQUFDO0FBRXBCLFFBQU0sU0FBdUIsQ0FBQztBQUU5QixRQUFNLGFBQWEsQ0FBQyxRQUF5QyxXQUF5QjtBQUNwRixRQUFJLENBQUMsVUFBVSxPQUFPLFdBQVcsU0FBVTtBQUMzQyxlQUFXLE9BQU8sUUFBUTtBQUN4QixVQUFJLE9BQU8sT0FBTyxRQUFRLEdBQUcsR0FBRztBQUM5QixZQUFJLE9BQU8sR0FBRyxNQUFNLFFBQVc7QUFDN0IsaUJBQU8sR0FBRyxJQUFJLE9BQU8sR0FBRztBQUFBLFFBQzFCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsYUFBVyxPQUFPLE1BQU07QUFDeEIsYUFBVyxNQUFNLE1BQU0sTUFBTTtBQUM3QixhQUFXLE1BQU0sV0FBVyxNQUFNO0FBRWxDLFNBQU87QUFDVDs7O0FDNUJPLElBQU0sRUFBRSxVQUFVLEtBQUssS0FBSyxJQUFJLFVBQVU7OztBQ1dqRCxJQUFNLFdBQVc7QUFBQSxFQUNmLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBdWdCM0I7QUFDUyxJQUFPLGlCQUFROzs7QUMxZ0JsQixJQUFNO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUNBLFVBQUFDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyxxQkFBUSxVQUFVOzs7QUN2Q2xCLElBQU07QUFBQSxFQUNYLG9EQUFBQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FB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YjtBQUFBLGdDQUFDLFVBQ0Usa0JBQVEsT0FBTyxTQUFTLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLEdBQ3RFO0FBQUEsWUFDQSxvQkFBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDQyxXQUFVO0FBQUEsZ0JBQ1YsT0FBTztBQUFBLGtCQUNMLE9BQU8sR0FBRyxLQUFLLE1BQU8sZ0JBQWdCLE9BQU8sS0FBSyxJQUFJLGdCQUFnQixPQUFPLENBQUMsSUFBSyxHQUFHLENBQUM7QUFBQSxnQkFDekY7QUFBQTtBQUFBLFlBQ0YsR0FDRjtBQUFBLGFBQ0Y7QUFBQSxXQUVKLEdBRUo7QUFBQTtBQUFBO0FBQUEsRUFFSixHQUNGO0FBRUo7OztBQ25wQkEsU0FBUyxtQkFBbUIsS0FBSyxjQUFNO0FBRXZDLFNBQVMsZUFBZSxLQUFzQjtBQUM1QyxRQUFNLE9BQU8sVUFBVSxJQUFJLEtBQUssR0FBRyxHQUFHO0FBQ3RDLFNBQU8sU0FBUyxVQUFVLElBQUksS0FBSyxZQUFZLFNBQVMsVUFBVSxJQUFJLEtBQUs7QUFDN0U7QUFFQSxJQUFNLHlCQUF5QixJQUFJLFVBQVUsY0FBYyxLQUFLO0FBQUEsRUFDOUQsVUFBVSxRQUFRLEtBQUs7QUFBQSxFQUN2QixhQUFhLGdGQUFnRixNQUFNLElBQUksU0FBUztBQUFBLEVBQ2hILFNBQVMsT0FBTyxZQUFxQjtBQUduQyxVQUFNLFNBQVMsV0FBWSxTQUFpRCxLQUFLO0FBQ2pGLFVBQU0sTUFBTSxPQUFPLE9BQU8sUUFBUSxXQUFXLE9BQU8sTUFBTTtBQUMxRCxRQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxFQUFHO0FBRWxDLFVBQU0sT0FDSixPQUFPLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxTQUFTLElBQ3BELE9BQU8sT0FDUCxNQUFNLG9CQUFvQixHQUFHO0FBRW5DLDZCQUF5QixFQUFFLEtBQUssS0FBSyxDQUFDO0FBQUEsRUFDeEM7QUFBQSxFQUNBLFdBQVcsQ0FBQyxVQUFtQjtBQUM3QixVQUFNLFNBQVMsV0FBVyxLQUFnQztBQUMxRCxXQUFPLE9BQU8sT0FBTyxRQUFRLFlBQVksZUFBZSxPQUFPLEdBQUc7QUFBQSxFQUNwRTtBQUNGLENBQUM7QUFFRCx1QkFBdUIsU0FBUzsiLAogICJuYW1lcyI6IFsiQ29tcG9uZW50IiwgInJhdyIsICJGcmFnbWVudCIsICJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsICJ2ZXJzaW9uIl0KfQo=
