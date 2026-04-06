await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// extensions/addToPlaylistMulti/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.add-to-playlist-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.add-to-playlist-content {
  background: #181818;
  border-radius: 8px;
  width: 420px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.add-to-playlist-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-playlist-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-to-playlist-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.add-to-playlist-close:hover {
  background: #282828;
}

.add-to-playlist-close svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.add-to-playlist-close:hover svg {
  fill: #fff;
}

.add-to-playlist-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s;
}

.add-to-playlist-github:hover {
  background: #282828;
}

.add-to-playlist-github svg {
  width: 20px;
  height: 20px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.add-to-playlist-github:hover svg {
  fill: #fff;
}

.add-to-playlist-search {
  padding: 12px 16px;
  border-bottom: 1px solid #282828;
}

.add-to-playlist-search input {
  width: 100%;
  padding: 10px 12px;
  padding-left: 36px;
  background: #282828;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.add-to-playlist-search input::placeholder {
  color: #b3b3b3;
}

.add-to-playlist-search input:focus {
  background: #3e3e3e;
}

.add-to-playlist-search-wrapper {
  position: relative;
}

.add-to-playlist-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  fill: #b3b3b3;
  pointer-events: none;
}

.add-to-playlist-track-count {
  padding: 8px 20px;
  font-size: 12px;
  color: #b3b3b3;
  background: #181818;
}

.add-to-playlist-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 8px;
}

.add-to-playlist-list::-webkit-scrollbar {
  width: 8px;
}

.add-to-playlist-list::-webkit-scrollbar-track {
  background: transparent;
}

.add-to-playlist-list::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.add-to-playlist-list::-webkit-scrollbar-thumb:hover {
  background: #777;
}

.add-to-playlist-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
}

.add-to-playlist-item:hover {
  background: #282828;
}

.add-to-playlist-item.selected {
  background: #2a2a2a;
}

.add-to-playlist-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  flex-shrink: 0;
}

.add-to-playlist-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.add-to-playlist-checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #b3b3b3;
  border-radius: 4px;
  background: transparent;
  transition: all 0.15s;
  pointer-events: none;
}

.add-to-playlist-checkbox:checked + .add-to-playlist-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.add-to-playlist-checkbox-custom::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.add-to-playlist-checkbox:checked + .add-to-playlist-checkbox-custom::after {
  display: block;
}

.add-to-playlist-checkbox:focus + .add-to-playlist-checkbox-custom {
  box-shadow: 0 0 0 2px #1db954;
}

.add-to-playlist-name {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-to-playlist-empty {
  padding: 20px;
  text-align: center;
  color: #b3b3b3;
  font-size: 14px;
}

.add-to-playlist-buttons {
  padding: 16px 20px;
  border-top: 1px solid #282828;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-playlist-buttons-left {
  display: flex;
  gap: 8px;
}

.add-to-playlist-btn {
  padding: 10px 24px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}

.add-to-playlist-btn.cancel {
  background: transparent;
  color: #b3b3b3;
}

.add-to-playlist-btn.cancel:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.add-to-playlist-btn.confirm {
  background: #1db954;
  color: #000;
}

.add-to-playlist-btn.confirm:hover:not(:disabled) {
  background: #1ed760;
  transform: scale(1.02);
}

.add-to-playlist-btn.confirm:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
}

.add-to-playlist-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}

.add-to-playlist-select-all:hover {
  text-decoration: underline;
}

.add-to-playlist-confirm-content {
  background: #181818;
  border-radius: 8px;
  width: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.add-to-playlist-confirm-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
}

.add-to-playlist-confirm-list {
  flex: 1;
  overflow-y: auto;
  padding: 12px 20px;
  max-height: 200px;
}

.add-to-playlist-confirm-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #282828;
}

.add-to-playlist-confirm-item:last-child {
  border-bottom: none;
}

.add-to-playlist-confirm-item .track-name {
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.add-to-playlist-confirm-item .playlist-name {
  font-size: 13px;
  color: #b3b3b3;
}

.add-to-playlist-confirm-more {
  padding: 8px 0;
  font-size: 13px;
  color: #b3b3b3;
  text-align: center;
}

.add-to-playlist-confirm-info {
  padding: 12px 20px;
  font-size: 13px;
  color: #b3b3b3;
  background: #181818;
}

.add-to-playlist-confirm-buttons {
  padding: 16px 20px;
  border-top: 1px solid #282828;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}`);
var styles_default = sheet;

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
          const raw = this.readBytes(len);
          warn("Unknown field", () => ({
            schema: schemaName,
            fieldNumber,
            wireType,
            length: len,
            hex: Array.from(raw).map((b) => b.toString(16).padStart(2, "0")).join(" "),
            ascii: new TextDecoder().decode(raw).replace(/[^\x20-\x7E]/g, ".")
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

// extensions/addToPlaylistMulti/src/modal.tsx
async function fetchPlaylists() {
  const LibraryAPI = Spicetify.Platform?.LibraryAPI;
  if (!LibraryAPI) {
    throw new Error("LibraryAPI not available");
  }
  const response = await LibraryAPI.getContents({
    offset: 0,
    limit: 1e7,
    flattenTree: true
  });
  const playlists = [];
  const items = response?.items || [];
  for (const item of items) {
    if (item.type === "playlist" && item.canAddTo) {
      playlists.push({
        name: item.name,
        uri: item.uri
      });
    }
  }
  return playlists;
}
async function getPlaylistTracks(playlistUri) {
  const trackUris = /* @__PURE__ */ new Set();
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    throw new Error("PlaylistAPI not available");
  }
  const response = await PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit: -1
  });
  if (response?.items) {
    for (const item of response.items) {
      if (item?.uri) {
        trackUris.add(item.uri);
      }
    }
  }
  return trackUris;
}
function getTrackName(uri) {
  const trackId = uri.split(":").pop() || "";
  return `Track (${trackId.slice(0, 8)}...)`;
}
function createConfirmModal(duplicates, trackCount, onConfirm, onCancel) {
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  const content = document.createElement("div");
  content.className = "add-to-playlist-confirm-content";
  const header = document.createElement("div");
  header.className = "add-to-playlist-confirm-header";
  header.textContent = "Tracks already in playlist(s)";
  const list = document.createElement("div");
  list.className = "add-to-playlist-confirm-list";
  const duplicateTrackUris = /* @__PURE__ */ new Set();
  for (const dup of duplicates) {
    duplicateTrackUris.add(dup.trackUri);
  }
  const uniqueDuplicateCount = duplicateTrackUris.size;
  for (const dup of duplicates.slice(0, 10)) {
    const item = document.createElement("div");
    item.className = "add-to-playlist-confirm-item";
    const trackName = document.createElement("span");
    trackName.className = "track-name";
    trackName.textContent = dup.trackName;
    const playlistName = document.createElement("span");
    playlistName.className = "playlist-name";
    playlistName.textContent = `in ${dup.playlistName}`;
    item.appendChild(trackName);
    item.appendChild(playlistName);
    list.appendChild(item);
  }
  if (duplicates.length > 10) {
    const more = document.createElement("div");
    more.className = "add-to-playlist-confirm-more";
    more.textContent = `...and ${duplicates.length - 10} more`;
    list.appendChild(more);
  }
  const info = document.createElement("div");
  info.className = "add-to-playlist-confirm-info";
  const playlistCount = new Set(duplicates.map((d) => d.playlistUri)).size;
  if (uniqueDuplicateCount === trackCount) {
    if (playlistCount === 1) {
      info.textContent = `This track is already in ${playlistCount} selected playlist.`;
    } else {
      info.textContent = `All ${uniqueDuplicateCount} track(s) are already in ${playlistCount} selected playlists.`;
    }
  } else {
    if (playlistCount === 1) {
      info.textContent = `${uniqueDuplicateCount} of ${trackCount} track(s) are already in ${playlistCount} selected playlist.`;
    } else {
      info.textContent = `${uniqueDuplicateCount} of ${trackCount} track(s) are already in ${playlistCount} selected playlists.`;
    }
  }
  const buttons = document.createElement("div");
  buttons.className = "add-to-playlist-confirm-buttons";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "add-to-playlist-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    modal.remove();
    onCancel();
  });
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "add-to-playlist-btn confirm";
  confirmBtn.textContent = "Add Anyway";
  confirmBtn.addEventListener("click", () => {
    modal.remove();
    onConfirm();
  });
  buttons.appendChild(cancelBtn);
  buttons.appendChild(confirmBtn);
  content.appendChild(header);
  content.appendChild(list);
  content.appendChild(info);
  content.appendChild(buttons);
  modal.appendChild(content);
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      onCancel();
    }
  });
}
async function addTracksToPlaylists(playlistUris, trackUris) {
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    throw new Error("No PlaylistAPI");
  }
  const success = [];
  const failed = [];
  for (const playlistUri of playlistUris) {
    try {
      await PlaylistAPI.add(playlistUri, trackUris, []);
      success.push(playlistUri);
    } catch (e) {
      failed.push(playlistUri);
    }
  }
  return { success, failed };
}
function createModal(trackUris) {
  let allPlaylists = [];
  let filteredPlaylists = [];
  const selectedSet = /* @__PURE__ */ new Set();
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  const content = document.createElement("div");
  content.className = "add-to-playlist-content";
  const header = document.createElement("div");
  header.className = "add-to-playlist-header";
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Add to Multiple Playlists";
  const headerRight = document.createElement("div");
  headerRight.className = "add-to-playlist-header-right";
  const githubLink = document.createElement("a");
  githubLink.className = "add-to-playlist-github";
  githubLink.href = "https://github.com/JimMarley420/spicetify-extension";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "add-to-playlist-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  closeBtn.addEventListener("click", () => modal.remove());
  headerRight.appendChild(githubLink);
  headerRight.appendChild(closeBtn);
  header.appendChild(headerTitle);
  header.appendChild(headerRight);
  const searchContainer = document.createElement("div");
  searchContainer.className = "add-to-playlist-search";
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "add-to-playlist-search-wrapper";
  const searchIcon = document.createElement("div");
  searchIcon.className = "add-to-playlist-search-icon";
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search playlists...";
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchContainer.appendChild(searchWrapper);
  const trackCount = document.createElement("div");
  trackCount.className = "add-to-playlist-track-count";
  trackCount.textContent = `${trackUris.length} track(s) selected`;
  const playlistList = document.createElement("div");
  playlistList.className = "add-to-playlist-list";
  const emptyState = document.createElement("div");
  emptyState.className = "add-to-playlist-empty";
  emptyState.textContent = "Loading playlists...";
  playlistList.appendChild(emptyState);
  function renderPlaylists(playlists) {
    playlistList.innerHTML = "";
    if (playlists.length === 0) {
      emptyState.textContent = searchInput.value ? "No playlists found" : "No playlists available";
      playlistList.appendChild(emptyState);
      return;
    }
    for (const playlist of playlists) {
      const item = document.createElement("label");
      item.className = "add-to-playlist-item" + (selectedSet.has(playlist.uri) ? " selected" : "");
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "add-to-playlist-checkbox-wrapper";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "add-to-playlist-checkbox";
      checkbox.checked = selectedSet.has(playlist.uri);
      const customCheckbox = document.createElement("div");
      customCheckbox.className = "add-to-playlist-checkbox-custom";
      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(customCheckbox);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSet.add(playlist.uri);
          item.classList.add("selected");
        } else {
          selectedSet.delete(playlist.uri);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      const name = document.createElement("span");
      name.className = "add-to-playlist-name";
      name.textContent = playlist.name;
      item.appendChild(checkboxWrapper);
      item.appendChild(name);
      playlistList.appendChild(item);
    }
  }
  function filterPlaylists() {
    const query = searchInput.value.toLowerCase();
    filteredPlaylists = allPlaylists.filter((p) => p.name.toLowerCase().includes(query));
    renderPlaylists(filteredPlaylists);
    updateButtonState();
  }
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackCount.textContent = `${trackUris.length} track(s) selected \u2022 ${selectedCount} playlist(s)`;
    confirmBtn.disabled = selectedCount === 0;
    const selectedWithinFiltered = filteredPlaylists.filter((p) => selectedSet.has(p.uri)).length;
    if (selectedWithinFiltered === 0) {
      selectAllBtn.textContent = "Select All";
    } else if (selectedWithinFiltered === filteredPlaylists.length) {
      selectAllBtn.textContent = "Deselect All";
    } else {
      selectAllBtn.textContent = "Select All";
    }
  }
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylists();
      filteredPlaylists = [...allPlaylists];
      renderPlaylists(filteredPlaylists);
      updateButtonState();
    } catch (e) {
      emptyState.textContent = "Failed to load playlists";
      playlistList.appendChild(emptyState);
      Spicetify.showNotification("Failed to load playlists", true);
    }
  }
  loadPlaylists();
  searchInput.addEventListener("input", filterPlaylists);
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "add-to-playlist-buttons";
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.alignItems = "center";
  const selectAllBtn = document.createElement("button");
  selectAllBtn.className = "add-to-playlist-select-all";
  selectAllBtn.textContent = "Select All";
  selectAllBtn.addEventListener("click", () => {
    const selectedWithinFiltered = filteredPlaylists.filter((p) => selectedSet.has(p.uri)).length;
    const allFilteredSelected = selectedWithinFiltered === filteredPlaylists.length;
    if (allFilteredSelected) {
      filteredPlaylists.forEach((p) => selectedSet.delete(p.uri));
      playlistList.querySelectorAll(".add-to-playlist-item").forEach((item) => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox");
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredPlaylists.forEach((p) => selectedSet.add(p.uri));
      playlistList.querySelectorAll(".add-to-playlist-item").forEach((item) => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox");
        if (checkbox) checkbox.checked = true;
      });
    }
    updateButtonState();
  });
  const buttonGroup = document.createElement("div");
  buttonGroup.style.display = "flex";
  buttonGroup.style.gap = "12px";
  buttonGroup.style.marginLeft = "auto";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "add-to-playlist-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => modal.remove());
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "add-to-playlist-btn confirm";
  confirmBtn.textContent = "Add";
  confirmBtn.disabled = true;
  confirmBtn.addEventListener("click", async () => {
    const playlistUris = Array.from(selectedSet);
    confirmBtn.disabled = true;
    confirmBtn.textContent = "Checking...";
    try {
      const duplicates = [];
      for (const playlistUri of playlistUris) {
        const playlist = allPlaylists.find((p) => p.uri === playlistUri);
        const playlistName = playlist?.name || "Unknown";
        const playlistTracks = await getPlaylistTracks(playlistUri);
        const duplicateUris = trackUris.filter((t) => playlistTracks.has(t));
        if (duplicateUris.length > 0) {
          confirmBtn.textContent = "Loading...";
          const trackMetadata = await fetchMetadataForTracks(duplicateUris);
          for (const trackUri of duplicateUris) {
            const meta = trackMetadata.get(trackUri);
            const trackName = meta?.name || meta?.title || meta?.track?.name || getTrackName(trackUri);
            duplicates.push({
              playlistUri,
              playlistName,
              trackUri,
              trackName
            });
          }
        }
      }
      if (duplicates.length > 0) {
        confirmBtn.textContent = "Adding...";
        createConfirmModal(
          duplicates,
          trackUris.length,
          async () => {
            const result = await addTracksToPlaylists(playlistUris, trackUris);
            if (result.success.length > 0) {
              Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${result.success.length} playlist(s)`);
            } else {
              Spicetify.showNotification("No tracks were added", true);
            }
            modal.remove();
          },
          () => {
            confirmBtn.disabled = false;
            confirmBtn.textContent = "Add";
          }
        );
      } else {
        const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
        if (!PlaylistAPI) {
          throw new Error("No PlaylistAPI");
        }
        let addedCount = 0;
        for (const playlistUri of playlistUris) {
          try {
            await PlaylistAPI.add(playlistUri, trackUris, []);
            addedCount++;
          } catch (e) {
          }
        }
        if (addedCount > 0) {
          Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${addedCount} playlist(s)`);
        } else {
          Spicetify.showNotification("Failed to add tracks", true);
        }
        modal.remove();
      }
    } catch (e) {
      Spicetify.showNotification("Failed to add tracks", true);
      confirmBtn.disabled = false;
      confirmBtn.textContent = "Add";
    }
  });
  buttonGroup.appendChild(cancelBtn);
  buttonGroup.appendChild(confirmBtn);
  buttonContainer.appendChild(selectAllBtn);
  buttonContainer.appendChild(buttonGroup);
  content.appendChild(header);
  content.appendChild(searchContainer);
  content.appendChild(trackCount);
  content.appendChild(playlistList);
  content.appendChild(buttonContainer);
  modal.appendChild(content);
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  searchInput.focus();
}

// extensions/addToPlaylistMulti/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
async function handleMenuClick(uris) {
  const trackUris = uris.filter((uri) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && uriObj.type === "track";
  });
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  createModal(trackUris);
}
var addToMultiplePlaylistsMenuItem = new Spicetify.ContextMenu.Item(
  "Add to Multiple Playlists",
  handleMenuClick,
  (uris) => {
    const hasTrack = uris.some((uri) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && uriObj.type === "track";
    });
    return hasTrack;
  },
  "plus-alt"
);
addToMultiplePlaylistsMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL3N0eWxlcy5jc3MiLCAiLi4vc2hhcmVkL3dlYnBhY2svc2NoZW1hLnRzIiwgIi4uL3NoYXJlZC93ZWJwYWNrL3Byb3RvYnVmLnRzIiwgIi4uL3NoYXJlZC93ZWJwYWNrL3dlYnBhY2sudHMiLCAiLi4vc2hhcmVkL2FwaS9mZXRjaE1ldGFkYXRhRm9yVHJhY2tzLnRzIiwgIi4uL2V4dGVuc2lvbnMvYWRkVG9QbGF5bGlzdE11bHRpL3NyYy9tb2RhbC50c3giLCAiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFkZC10by1wbGF5bGlzdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNwb3RpZnkpLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZTpob3ZlciBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWdpdGh1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWIgc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWI6aG92ZXIgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2gge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMzZTNlM2U7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZpbGw6ICNiM2IzYjM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXRyYWNrLWNvdW50IHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGJhY2tncm91bmQ6ICMxODE4MTg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbGlzdCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDhweCA4cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMyYTJhMmE7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94OmNoZWNrZWQgKyAuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICMxZGI5NTQ7XG4gIGJvcmRlci1jb2xvcjogIzFkYjk1NDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b206OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBsZWZ0OiA2cHg7XG4gIHRvcDogMnB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgIzAwMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94OmNoZWNrZWQgKyAuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveDpmb2N1cyArIC5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICMxZGI5NTQ7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZW1wdHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyODI4Mjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idXR0b25zLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jYW5jZWw6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtIHtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNvbmZpcm06aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMWVkNzYwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzUzNTM1MztcbiAgY29sb3I6ICMxODE4MTg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWxlY3QtYWxsOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LCBzcG90aWZ5KSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1pdGVtIC50cmFjay1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1pdGVtIC5wbGF5bGlzdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLW1vcmUge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0taW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG59YCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICIvLyBzb21lIHByb3RvYnVmIGRlZnMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGV2Z2lhbmx1L2dvLWxpYnJlc3BvdC90cmVlL21hc3Rlci9wcm90by9zcG90aWZ5L21ldGFkYXRhL21ldGFkYXRhLnByb3RvXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRJbmZvIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHJlcGVhdGVkPzogYm9vbGVhbjtcbiAgZW51bVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVNjaGVtYSB7XG4gIGZpZWxkczogUmVjb3JkPG51bWJlciwgRmllbGRJbmZvPjtcbiAgZW51bXM/OiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+Pjtcbn1cblxuZXhwb3J0IHR5cGUgTWV0YWRhdGFTY2hlbWEgPSBSZWNvcmQ8c3RyaW5nLCBNZXNzYWdlU2NoZW1hPjtcblxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhU2NoZW1hOiBNZXRhZGF0YVNjaGVtYSA9IHtcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiYWxidW1cIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFsYnVtXCIgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJhcnRpc3RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNTogeyBuYW1lOiBcIm51bWJlclwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA2OiB7IG5hbWU6IFwiZGlzY19udW1iZXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgNzogeyBuYW1lOiBcImR1cmF0aW9uXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDg6IHsgbmFtZTogXCJwb3B1bGFyaXR5XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDk6IHsgbmFtZTogXCJleHBsaWNpdFwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMTA6IHsgbmFtZTogXCJleHRlcm5hbF9pZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuRXh0ZXJuYWxJZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTE6IHsgbmFtZTogXCJyZXN0cmljdGlvblwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUmVzdHJpY3Rpb25cIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEyOiB7IG5hbWU6IFwiZmlsZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9GaWxlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMzogeyBuYW1lOiBcImFsdGVybmF0aXZlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5UcmFja1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTQ6IHsgbmFtZTogXCJzYWxlX3BlcmlvZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuU2FsZVBlcmlvZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTU6IHsgbmFtZTogXCJwcmV2aWV3XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb0ZpbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE2OiB7IG5hbWU6IFwidGFnc1wiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTc6IHsgbmFtZTogXCJlYXJsaWVzdF9saXZlX3RpbWVzdGFtcFwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICAgIDE4OiB7IG5hbWU6IFwiaGFzX2x5cmljc1wiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMTk6IHsgbmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkF2YWlsYWJpbGl0eVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMjE6IHsgbmFtZTogXCJsaWNlbnNvclwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuTGljZW5zb3JcIiB9LFxuICAgICAgMjI6IHsgbmFtZTogXCJsYW5ndWFnZV9vZl9wZXJmb3JtYW5jZVwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMjQ6IHsgbmFtZTogXCJvcmlnaW5hbF9hdWRpb1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9cIiB9LFxuICAgICAgMjc6IHsgbmFtZTogXCJvcmlnaW5hbF90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyODogeyBuYW1lOiBcInZlcnNpb25fdGl0bGVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzI6IHsgbmFtZTogXCJhcnRpc3Rfd2l0aF9yb2xlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RXaXRoUm9sZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMzY6IHsgbmFtZTogXCJjYW5vbmljYWxfdXJpXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM3OiB7IG5hbWU6IFwicHJlcmVsZWFzZV9jb25maWdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIiB9LFxuICAgICAgMzk6IHtcbiAgICAgICAgbmFtZTogXCJjb250ZW50X2F1dGhvcml6YXRpb25fYXR0cmlidXRlc1wiLFxuICAgICAgICB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudEF1dGhvcml6YXRpb25BdHRyaWJ1dGVzXCIsXG4gICAgICB9LFxuICAgICAgNDA6IHsgbmFtZTogXCJ0cmFja19jb250ZW50X3JhdGluZ1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudFJhdGluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNDE6IHsgbmFtZTogXCJhdWRpb19mb3JtYXRzXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5UcmFja0F1ZGlvRm9ybWF0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0MzogeyBuYW1lOiBcInVua25vd25fZmllbGRcIiwgdHlwZTogXCJpbnQzMlwiIH0sXG4gICAgICA0NDogeyBuYW1lOiBcImltcGxlbWVudGF0aW9uX2RldGFpbHNcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltcGxlbWVudGF0aW9uRGV0YWlsc1wiIH0sXG4gICAgICA0NzogeyBuYW1lOiBcInRlc3RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRlc3RDYXRlZ29yeVwiIH0sXG4gICAgICAxMjk6IHsgbmFtZTogXCJtZWRpYV90eXBlXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJNZWRpYVR5cGVcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgTWVkaWFUeXBlOiB7IDA6IFwiTUlYRURcIiwgMTogXCJBVURJT1wiLCAyOiBcIlZJREVPXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdpZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJhcnRpc3RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNDogeyBuYW1lOiBcInR5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIlR5cGVcIiB9LFxuICAgICAgNTogeyBuYW1lOiBcImxhYmVsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDY6IHsgbmFtZTogXCJkYXRlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICAgIDc6IHsgbmFtZTogXCJwb3B1bGFyaXR5XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDg6IHsgbmFtZTogXCJnZW5yZVwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgOTogeyBuYW1lOiBcImNvdmVyXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTA6IHsgbmFtZTogXCJleHRlcm5hbF9pZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuRXh0ZXJuYWxJZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTE6IHsgbmFtZTogXCJkaXNjXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EaXNjXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMjogeyBuYW1lOiBcInJldmlld1wiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTM6IHsgbmFtZTogXCJjb3B5cmlnaHRcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkNvcHlyaWdodFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTQ6IHsgbmFtZTogXCJyZXN0cmljdGlvblwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUmVzdHJpY3Rpb25cIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE1OiB7IG5hbWU6IFwicmVsYXRlZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE2OiB7IG5hbWU6IFwic2FsZV9wZXJpb2RcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlNhbGVQZXJpb2RcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDE3OiB7IG5hbWU6IFwiY292ZXJfZ3JvdXBcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlR3JvdXBcIiB9LFxuICAgICAgMTg6IHsgbmFtZTogXCJvcmlnaW5hbF90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAxOTogeyBuYW1lOiBcInZlcnNpb25fdGl0bGVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjA6IHsgbmFtZTogXCJ0eXBlX3N0clwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyMzogeyBuYW1lOiBcImF2YWlsYWJpbGl0eVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXZhaWxhYmlsaXR5XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyNTogeyBuYW1lOiBcImxpY2Vuc29yXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5MaWNlbnNvclwiIH0sXG4gICAgICAzNzogeyBuYW1lOiBcInByZXJlbGVhc2VfY29uZmlnXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5QcmVyZWxlYXNlQ29uZmlnXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBUeXBlOiB7IDE6IFwiQUxCVU1cIiwgMjogXCJTSU5HTEVcIiwgMzogXCJDT01QSUxBVElPTlwiLCA0OiBcIkVQXCIsIDU6IFwiQVVESU9CT09LXCIsIDY6IFwiUE9EQ0FTVFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvbnRlbnRSYXRpbmdcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInRhZ1wiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiQ29udGVudFJhdGluZ1RhZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IENvbnRlbnRSYXRpbmdUYWc6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiRVhQTElDSVRcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJ5ZWFyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJtb250aFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiZGF5XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImZpbGVfaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwic2l6ZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiU2l6ZVwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwid2lkdGhcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgNDogeyBuYW1lOiBcImhlaWdodFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBTaXplOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIlNNQUxMXCIsIDI6IFwiTUVESVVNXCIsIDM6IFwiTEFSR0VcIiwgNDogXCJFWFRSQV9MQVJHRVwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvRmlsZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJmb3JtYXRcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIkZvcm1hdFwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiYml0cmF0ZVwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA0OiB7IG5hbWU6IFwicHJldmlld1wiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBGb3JtYXQ6IHsgMTogXCJNUDRcIiwgMjogXCJPR0dcIiwgMzogXCJXRUJNXCIsIDQ6IFwiVU5LTk9XTlwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZ2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImltYWdlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgNDogeyBuYW1lOiBcImdlbnJlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA1OiB7IG5hbWU6IFwicHJvZmlsZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0UHJvZmlsZVwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFByb2ZpbGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImJpb2dyYXBoeVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiYXJ0aXN0X25hbWVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkxvY2FsaXplZFN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5Mb2NhbGl6ZWRTdHJpbmdcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImxvY2FsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwic3RyaW5nXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuRXh0ZXJuYWxJZFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiY291bnRyaWVzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiY2F0YWxvZ3Vlc1wiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMzogeyBuYW1lOiBcInJlYXNvblwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiUmVhc29uXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IFJlYXNvbjogeyAwOiBcIlVOS05PV05cIiwgMTogXCJOT1RfQVZBSUxBQkxFX0lOX0NPVU5UUllcIiwgMjogXCJOT1RfQVZBSUxBQkxFX0ZPUl9DVVJSRU5DWVwiLCAzOiBcIk5PVF9BVkFJTEFCTEVfRk9SX1VTRVJcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BdmFpbGFiaWxpdHlcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInN0YXJ0X3RpbWVcIiwgdHlwZTogXCJpbnQ2NFwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYWZ0ZXJfc3RhcnRfdGltZVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImlzX2F2YWlsYWJsZVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5UcmFja0F1ZGlvRm9ybWF0XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjb2RlY1wiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiQ29kZWNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImJpdHJhdGVcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIENvZGVjOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIk1QM1wiLCAyOiBcIkFBQ1wiLCAzOiBcIk9HR19WT1JCSVNcIiwgNDogXCJGTEFDXCIsIDU6IFwiV0VCTUFfT1BVU1wiLCA2OiBcIldFQk1BX1ZPUkJJU1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnYWluXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzYW1wbGVfb2Zmc2V0XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuRGlzY1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibnVtYmVyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0V2l0aFJvbGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJyb2xlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RSb2xlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaGFzX3NhdmluZ19yaWdodHNcIiwgdHlwZTogXCJib29sXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0Um9sZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiaWRcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIlJvbGVJZFwiIH0sXG4gICAgfSxcbiAgICBlbnVtczoge1xuICAgICAgUm9sZUlkOiB7IDA6IFwiTUFJTlwiLCAxOiBcIkZFQVRVUkVEXCIsIDI6IFwiUkVNSVhcIiwgMzogXCJQUk9EVUNFUlwiLCA0OiBcIkNPTVBPU0VSXCIsIDU6IFwiTFlSSUNJU1RcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5TYWxlUGVyaW9kXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJzdGFydFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuRGF0ZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiZW5kXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VHcm91cFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiYmFja2luZ190eXBlXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJCYWNraW5nVHlwZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBCYWNraW5nVHlwZTogeyAwOiBcIlVOS05PV05cIiwgMTogXCJERUZBVUxUXCIsIDI6IFwiVklERU9fRlJBTUVcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5Db3B5cmlnaHRcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInR5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIlR5cGVcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInRleHRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgVHlwZTogeyAwOiBcIlBcIiwgMTogXCJDXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuVmlkZW9GaWxlXCI6IHtcbiAgICBmaWVsZHM6IHsgMTogeyBuYW1lOiBcImZpbGVfaWRcIiwgdHlwZTogXCJieXRlc1wiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkxpY2Vuc29yXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJsaWNlbnNvcl9pZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvbnRlbnRBdXRob3JpemF0aW9uQXR0cmlidXRlc1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiY2F0X2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJjb250ZW50X3JpZ2h0c1wiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwicmlnaHRzX293bmVyX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuSW1wbGVtZW50YXRpb25EZXRhaWxzXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJpbXBsX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJkZXNjcmlwdGlvblwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImlzX3ByZW1pdW1fb25seVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInJlbGVhc2VfZGF0ZVwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuVGVzdENhdGVnb3J5XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjYXRlZ29yeVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiaXNfZW5hYmxlZFwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG59OyIsICJpbXBvcnQgeyBtZXRhZGF0YVNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS50c1wiO1xuXG5mdW5jdGlvbiB3YXJuKHJlYXNvbjogc3RyaW5nLCBjdHhPclRodW5rOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgKCgpID0+IFJlY29yZDxzdHJpbmcsIGFueT4pKSB7XG4gIGlmIChyZWFzb24uaW5jbHVkZXMoXCJEZWNvZGUgZXJyb3JcIikgfHwgcmVhc29uLmluY2x1ZGVzKFwiU2NoZW1hIG5vdCBmb3VuZFwiKSkge1xuICAgIGNvbnN0IGN0eCA9IHR5cGVvZiBjdHhPclRodW5rID09PSBcImZ1bmN0aW9uXCIgPyBjdHhPclRodW5rKCkgOiBjdHhPclRodW5rO1xuICAgIGNvbnNvbGUud2FybihcIltQcm90b2J1Zl1cIiwgcmVhc29uLCBjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm90b2J1ZlJlYWRlciB7XG4gIHByaXZhdGUgdmlldzogRGF0YVZpZXc7XG4gIHByaXZhdGUgYnl0ZXM6IFVpbnQ4QXJyYXk7XG4gIHB1YmxpYyBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUmVjb3JkPHN0cmluZyB8IG51bWJlciwgbnVtYmVyPiB8IEFycmF5TGlrZTxudW1iZXI+IHwgVWludDhBcnJheSkge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgdGhpcy5ieXRlcyA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IFwibGVuZ3RoXCIgaW4gZGF0YSkge1xuICAgICAgdGhpcy5ieXRlcyA9IG5ldyBVaW50OEFycmF5KEFycmF5LmZyb20oZGF0YSBhcyBBcnJheUxpa2U8bnVtYmVyPikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoT2JqZWN0LnZhbHVlcyhkYXRhKSk7XG4gICAgfVxuICAgIHRoaXMudmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJ5dGVzLmJ1ZmZlciwgdGhpcy5ieXRlcy5ieXRlT2Zmc2V0LCB0aGlzLmJ5dGVzLmJ5dGVMZW5ndGgpO1xuICB9XG5cbiAgZ2V0IGlzRXhoYXVzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCA+PSB0aGlzLmJ5dGVzLmxlbmd0aDtcbiAgfVxuXG4gIHJlYWRWYXJpbnQoKTogYmlnaW50IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaXNFeGhhdXN0ZWQpIHJldHVybiBudWxsO1xuICAgIGxldCByZXN1bHQgPSAwbjtcbiAgICBsZXQgc2hpZnQgPSAwbjtcbiAgICB3aGlsZSAoIXRoaXMuaXNFeGhhdXN0ZWQpIHtcbiAgICAgIGNvbnN0IGJ5dGUgPSBCaWdJbnQodGhpcy5ieXRlc1t0aGlzLm9mZnNldCsrXSk7XG4gICAgICByZXN1bHQgfD0gKGJ5dGUgJiAweDdmbikgPDwgc2hpZnQ7XG4gICAgICBpZiAoIShieXRlICYgMHg4MG4pKSByZXR1cm4gcmVzdWx0O1xuICAgICAgc2hpZnQgKz0gN247XG4gICAgICBpZiAoc2hpZnQgPiA3MG4pIHtcbiAgICAgICAgd2FybihcIlZhcmludCB0b28gbG9uZ1wiLCB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICBzaGlmdDogc2hpZnQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlYWRaaWdaYWdWYXJpbnQoKTogYmlnaW50IHtcbiAgICBjb25zdCBuID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgaWYgKG4gPT09IG51bGwpIHtcbiAgICAgIHdhcm4oXCJJbnZhbGlkIHppZ3phZyB2YXJpbnRcIiwgeyBvZmZzZXQ6IHRoaXMub2Zmc2V0IH0pO1xuICAgICAgcmV0dXJuIDBuO1xuICAgIH1cbiAgICByZXR1cm4gKG4gPj4gMW4pIF4gLShuICYgMW4pO1xuICB9XG5cbiAgcmVhZEJ5dGVzKGxlbmd0aDogbnVtYmVyKTogVWludDhBcnJheSB7XG4gICAgY29uc3QgYWN0dWFsTGVuZ3RoID0gTWF0aC5taW4obGVuZ3RoLCB0aGlzLmJ5dGVzLmxlbmd0aCAtIHRoaXMub2Zmc2V0KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmJ5dGVzLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIGFjdHVhbExlbmd0aCk7XG4gICAgdGhpcy5vZmZzZXQgKz0gYWN0dWFsTGVuZ3RoO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBza2lwKHdpcmVUeXBlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHdpcmVUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICAgIGlmIChsZW4gIT09IG51bGwpIHRoaXMub2Zmc2V0ICs9IE51bWJlcihsZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgICBpZiAodGFnID09PSBudWxsIHx8IChOdW1iZXIodGFnKSAmIDcpID09PSA0KSBicmVhaztcbiAgICAgICAgICB0aGlzLnNraXAoTnVtYmVyKHRhZykgJiA3KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB3YXJuKFwiVW5rbm93biB3aXJlIHR5cGVcIiwge1xuICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlY29kZShzY2hlbWFOYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHNjaGVtYSA9IG1ldGFkYXRhU2NoZW1hW3NjaGVtYU5hbWVdO1xuICAgIGlmICghc2NoZW1hKSB7XG4gICAgICB3YXJuKFwiU2NoZW1hIG5vdCBmb3VuZFwiLCB7IHNjaGVtYU5hbWUgfSk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICB3aGlsZSAoIXRoaXMuaXNFeGhhdXN0ZWQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgaWYgKHRhZyA9PT0gbnVsbCB8fCB0YWcgPT09IDBuKSBicmVhaztcblxuICAgICAgY29uc3QgZmllbGROdW1iZXIgPSBOdW1iZXIodGFnID4+IDNuKTtcbiAgICAgIGNvbnN0IHdpcmVUeXBlID0gTnVtYmVyKHRhZyAmIDduKTtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLmZpZWxkc1tmaWVsZE51bWJlcl07XG5cbiAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgaWYgKHdpcmVUeXBlID09PSAyKSB7XG4gICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICBjb25zdCByYXcgPSB0aGlzLnJlYWRCeXRlcyhsZW4pO1xuXG4gICAgICAgICAgd2FybihcIlVua25vd24gZmllbGRcIiwgKCkgPT4gKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hTmFtZSxcbiAgICAgICAgICAgIGZpZWxkTnVtYmVyLFxuICAgICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgICBsZW5ndGg6IGxlbixcbiAgICAgICAgICAgIGhleDogQXJyYXkuZnJvbShyYXcpXG4gICAgICAgICAgICAgIC5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSlcbiAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgYXNjaWk6IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShyYXcpLnJlcGxhY2UoL1teXFx4MjAtXFx4N0VdL2csIFwiLlwiKSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybihcIlVua25vd24gZmllbGRcIiwge1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgICB3aXJlVHlwZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuc2tpcCh3aXJlVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZSh0aGlzLnJlYWRCeXRlcyhsZW4pKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiYnl0ZXNcIjoge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgdGhpcy5yZWFkQnl0ZXMobGVuKSxcbiAgICAgICAgICAgICAgKGIpID0+IChiIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgYi50b1N0cmluZygxNiksXG4gICAgICAgICAgICApLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcImJvb2xcIjpcbiAgICAgICAgICAgIHZhbHVlID0gKHRoaXMucmVhZFZhcmludCgpID8/IDBuKSAhPT0gMG47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaW50MzJcIjpcbiAgICAgICAgICBjYXNlIFwidWludDMyXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaW50NjRcIjpcbiAgICAgICAgICBjYXNlIFwidWludDY0XCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbjtcbiAgICAgICAgICAgIHZhbHVlID0gdiA8PSBCaWdJbnQoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpID8gTnVtYmVyKHYpIDogdi50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJzaW50MzJcIjpcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHRoaXMucmVhZFppZ1phZ1ZhcmludCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzaW50NjRcIjoge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMucmVhZFppZ1phZ1ZhcmludCgpO1xuICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICB2IDw9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgJiYgdiA+PSBCaWdJbnQoTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgICAgICAgPyBOdW1iZXIodilcbiAgICAgICAgICAgICAgICA6IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiZml4ZWQzMlwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0VWludDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZml4ZWQ2NFwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0QmlnVWludDY0KHRoaXMub2Zmc2V0LCB0cnVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJmbG9hdFwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0RmxvYXQzMih0aGlzLm9mZnNldCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImRvdWJsZVwiOlxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZpZXcuZ2V0RmxvYXQ2NCh0aGlzLm9mZnNldCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImVudW1cIjoge1xuICAgICAgICAgICAgY29uc3QgZW51bVZhbCA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IChmaWVsZC5lbnVtVHlwZSAmJiBzY2hlbWEuZW51bXM/LltmaWVsZC5lbnVtVHlwZV0/LltlbnVtVmFsXSkgPz8gZW51bVZhbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgUHJvdG9idWZSZWFkZXIodGhpcy5yZWFkQnl0ZXMobGVuKSkuZGVjb2RlKGZpZWxkLnR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgd2FybihcIkRlY29kZSBlcnJvclwiLCB7XG4gICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIGZpZWxkTnVtYmVyLFxuICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgaWYgKGZpZWxkLnJlcGVhdGVkKSB7XG4gICAgICAgIGlmICghcmVzdWx0W2ZpZWxkLm5hbWVdKSByZXN1bHRbZmllbGQubmFtZV0gPSBbXTtcbiAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlUHJvdG9idWYoZGF0YTogYW55LCBzY2hlbWFOYW1lOiBzdHJpbmcpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSBuZXcgUHJvdG9idWZSZWFkZXIoZGF0YSkuZGVjb2RlKHNjaGVtYU5hbWUpO1xuICByZXR1cm4gcmVzdWx0O1xufSIsICJjb25zdCBHTE9CQUxfS0VZID0gXCJfX2NhY2hlZF93ZWJwYWNrX21vZHVsZXNcIjtcblxuaWYgKCEoZ2xvYmFsVGhpcyBhcyBhbnkpW0dMT0JBTF9LRVldKSB7XG4gIChnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV0gPSB7XG4gICAgcmVxdWlyZTogbnVsbCxcbiAgICBtb2R1bGVzOiBudWxsLFxuICAgIGxhc3RNb2R1bGVDb3VudDogMCxcbiAgICBzZXJ2aWNlQ2FjaGU6IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCksXG4gICAgc2VhcmNoQ2FjaGU6IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCksXG4gICAgY29tcG9uZW50Q2FjaGU6IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCksXG4gIH07XG59XG5cbmNvbnN0IHNoYXJlZCA9IChnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV07XG5cbmV4cG9ydCBjb25zdCBTcG90aWZ5V2VicGFjayA9IHtcbiAgZ2V0TW9kdWxlcygpIHtcbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlKSB7XG4gICAgICBjb25zdCB3ZWJwYWNrID0gKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJwYWNrQ2h1bmtjbGllbnRfd2ViO1xuICAgICAgaWYgKCF3ZWJwYWNrKSByZXR1cm4gc2hhcmVkLm1vZHVsZXMgPz8gW107XG4gICAgICBzaGFyZWQucmVxdWlyZSA9IHdlYnBhY2sucHVzaChbW1N5bWJvbCgpXSwge30sIChyZTogYW55KSA9PiByZV0pO1xuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmUgfHwgIXNoYXJlZC5yZXF1aXJlLm0pIHJldHVybiBzaGFyZWQubW9kdWxlcyA/PyBbXTtcblxuICAgIGNvbnN0IGN1cnJlbnRLZXlzID0gT2JqZWN0LmtleXMoc2hhcmVkLnJlcXVpcmUubSk7XG5cbiAgICBpZiAoc2hhcmVkLm1vZHVsZXMgJiYgc2hhcmVkLmxhc3RNb2R1bGVDb3VudCA9PT0gY3VycmVudEtleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLm1vZHVsZXM7XG4gICAgfVxuXG4gICAgc2hhcmVkLm1vZHVsZXMgPSBjdXJyZW50S2V5cy5tYXAoKGlkKSA9PiAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBzaGFyZWQucmVxdWlyZShpZCk7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb2R1bGUpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIFttb2R1bGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2hhcmVkLmxhc3RNb2R1bGVDb3VudCA9IGN1cnJlbnRLZXlzLmxlbmd0aDtcblxuICAgIHJldHVybiBzaGFyZWQubW9kdWxlcztcbiAgfSxcblxuICBnZXRNb2R1bGVCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAoIXNoYXJlZC5tb2R1bGVzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihpZCk7XG4gICAgaWYgKCFpc05hTihpbmRleCkgJiYgc2hhcmVkLm1vZHVsZXNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLm1vZHVsZXNbaW5kZXhdKCk7XG4gICAgfVxuICAgIGlmICghc2hhcmVkLnJlcXVpcmUpIHtcbiAgICAgIFNwb3RpZnlXZWJwYWNrLmdldE1vZHVsZXMoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IHNoYXJlZC5yZXF1aXJlPy4oaWQpO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlICE9PSBudWxsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMobW9kdWxlKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcmV0dXJuIFttb2R1bGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZmluZE1vZHVsZUJ5Q29udGVudChrZXl3b3Jkczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGtleXdvcmRzLmpvaW4oXCIsXCIpO1xuICAgIGlmIChzaGFyZWQuc2VhcmNoQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgcmV0dXJuIHNoYXJlZC5zZWFyY2hDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmUgfHwgIXNoYXJlZC5yZXF1aXJlLm0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFNwb3RpZnlXZWJwYWNrLmdldE1vZHVsZXMoKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBzaGFyZWQuc2VhcmNoQ2FjaGUuc2V0KGNhY2hlS2V5LCBudWxsKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZT8ubSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBtb2R1bGVzID0gc2hhcmVkLnJlcXVpcmUubTtcblxuICAgIGZvciAoY29uc3QgaWQgaW4gbW9kdWxlcykge1xuICAgICAgY29uc3QgbW9kdWxlRmFjdG9yeSA9IG1vZHVsZXNbaWRdO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGVGYWN0b3J5ICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBzdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb2R1bGVGYWN0b3J5KTtcblxuICAgICAgaWYgKGtleXdvcmRzLmV2ZXJ5KChrKSA9PiBzdHIuaW5jbHVkZXMoaykpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbW9kID0gc2hhcmVkLnJlcXVpcmUoaWQpO1xuICAgICAgICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG1vZCk7XG4gICAgICAgICAgcmV0dXJuIG1vZDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gcmVxdWlyZSBtb2R1bGUgJHtpZH06YCwgZXJyKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGZpbmRDb21wb25lbnRCeUtleXdvcmRzKGtleXdvcmRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0ga2V5d29yZHMuam9pbihcIixcIik7XG4gICAgaWYgKHNoYXJlZC5jb21wb25lbnRDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLmNvbXBvbmVudENhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNoYXJlZC5jb21wb25lbnRDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlPy5tKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBzaGFyZWQucmVxdWlyZS5tO1xuICAgIGxldCBmb3VuZE1vZHVsZUlkID0gbnVsbDtcblxuICAgIGZvciAoY29uc3QgaWQgaW4gbW9kdWxlcykge1xuICAgICAgY29uc3QgbW9kdWxlRmFjdG9yeSA9IG1vZHVsZXNbaWRdO1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGVGYWN0b3J5ICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb2R1bGVGYWN0b3J5KTtcbiAgICAgICAgaWYgKGtleXdvcmRzLmV2ZXJ5KChrKSA9PiBzdHIuaW5jbHVkZXMoaykpKSB7XG4gICAgICAgICAgZm91bmRNb2R1bGVJZCA9IGlkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfZSkge31cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kTW9kdWxlSWQpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IGV4cG9ydHM6IGFueTtcbiAgICB0cnkge1xuICAgICAgZXhwb3J0cyA9IHNoYXJlZC5yZXF1aXJlKGZvdW5kTW9kdWxlSWQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0xpa2VseUNvbXBvbmVudCA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodmFsdWUuJCR0eXBlb2YgJiYgU3ltYm9sLmtleUZvcih2YWx1ZS4kJHR5cGVvZik/LmluY2x1ZGVzKFwicmVhY3RcIikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKGlzTGlrZWx5Q29tcG9uZW50KGV4cG9ydHMpKSB7XG4gICAgICByZXN1bHQgPSBleHBvcnRzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGV4cG9ydHMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBleHBvcnRzW2tleV07XG4gICAgICAgIGlmIChpc0xpa2VseUNvbXBvbmVudCh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNoYXJlZC5jb21wb25lbnRDYWNoZS5zZXQoY2FjaGVLZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBmaW5kU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kdWxlcyA9IFNwb3RpZnlXZWJwYWNrLmdldE1vZHVsZXMoKTtcblxuICAgIGZvciAoY29uc3QgbW9kdWxlR2V0dGVyIG9mIG1vZHVsZXMpIHtcbiAgICAgIGlmICghbW9kdWxlR2V0dGVyIHx8IHR5cGVvZiBtb2R1bGVHZXR0ZXIgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG4gICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVHZXR0ZXIoKTtcbiAgICAgIGlmICghbW9kdWxlKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGV4cG9ydHMgPSBBcnJheS5pc0FycmF5KG1vZHVsZSkgPyBtb2R1bGUgOiBbbW9kdWxlXTtcbiAgICAgIGZvciAoY29uc3QgbSBvZiBleHBvcnRzKSB7XG4gICAgICAgIGlmIChtICYmIHR5cGVvZiBtID09PSBcImZ1bmN0aW9uXCIgJiYgbS5TRVJWSUNFX0lEID09PSBzZXJ2aWNlTmFtZSkgcmV0dXJuIG07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZ2V0Q2xpZW50PFQgPSBhbnk+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoc2hhcmVkLnNlcnZpY2VDYWNoZS5oYXMoc2VydmljZU5hbWUpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLnNlcnZpY2VDYWNoZS5nZXQoc2VydmljZU5hbWUpO1xuICAgIH1cbiAgICBjb25zdCBTZXJ2aWNlQ2xhc3MgPSBTcG90aWZ5V2VicGFjay5maW5kU2VydmljZShzZXJ2aWNlTmFtZSk7XG4gICAgaWYgKCFTZXJ2aWNlQ2xhc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3BvdGlmeSBTZXJ2aWNlIG5vdCBmb3VuZDogJHtzZXJ2aWNlTmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY2xpZW50OiBhbnk7XG4gICAgaWYgKHR5cGVvZiBTZXJ2aWNlQ2xhc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgdHJhbnNwb3J0ID0gKGdsb2JhbFRoaXMgYXMgYW55KS5TcGljZXRpZnk/LlBsYXRmb3JtPy5SZWdpc3RyeT8ucmVzb2x2ZShTeW1ib2wuZm9yKFwiRXNwZXJhbnRvVHJhbnNwb3J0XCIpKTtcbiAgICAgIGlmICh0cmFuc3BvcnQpIHtcbiAgICAgICAgY2xpZW50ID0gbmV3IFNlcnZpY2VDbGFzcyh0cmFuc3BvcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXNwZXJhbnRvVHJhbnNwb3J0IG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWVudCA9IFNlcnZpY2VDbGFzcztcbiAgICB9XG5cbiAgICBzaGFyZWQuc2VydmljZUNhY2hlLnNldChzZXJ2aWNlTmFtZSwgY2xpZW50KTtcbiAgICByZXR1cm4gY2xpZW50O1xuICB9LFxufTtcblxuKGdsb2JhbFRoaXMgYXMgYW55KS5TcG90aWZ5V2VicGFjayA9IFNwb3RpZnlXZWJwYWNrOyIsICJpbXBvcnQgeyBkZWNvZGVQcm90b2J1ZiB9IGZyb20gXCIuLi93ZWJwYWNrL3Byb3RvYnVmLnRzXCI7XG5pbXBvcnQgeyBTcG90aWZ5V2VicGFjayB9IGZyb20gXCIuLi93ZWJwYWNrL3dlYnBhY2sudHNcIjtcblxuY29uc3QgTWV0YWRhdGFTZXJ2aWNlID0gXCJzcG90aWZ5Lm1kYXRhX2VzcGVyYW50by5wcm90by5NZXRhZGF0YVNlcnZpY2VcIjtcbmNvbnN0IFRSQUNLX1Y0ID0gMTA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1ldGFkYXRhRm9yVHJhY2tzKHRyYWNrVVJJczogc3RyaW5nW10pOiBQcm9taXNlPE1hcDxzdHJpbmcsIGFueT4+IHtcbiAgY29uc3QgTWV0YWRhdGFDbGllbnQgPSBTcG90aWZ5V2VicGFjay5nZXRDbGllbnQoTWV0YWRhdGFTZXJ2aWNlKTtcbiAgY29uc3QgdW5pcXVlVVJJcyA9IFsuLi5uZXcgU2V0KHRyYWNrVVJJcyldO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTWV0YWRhdGFDbGllbnQuZmV0Y2goe1xuICAgIGV4dGVuc2lvblF1ZXJ5OiBbeyBleHRlbnNpb25LaW5kOiBUUkFDS19WNCwgZW50aXR5VXJpOiB1bmlxdWVVUklzIH1dLFxuICB9KTtcblxuICBjb25zdCByZXN1bHRNYXAgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuXG4gIGlmIChyZXNwb25zZT8uZXh0ZW5zaW9uPy5bMF0/LmVudGl0eUV4dGVuc2lvbikge1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHJlc3BvbnNlLmV4dGVuc2lvblswXS5lbnRpdHlFeHRlbnNpb24pIHtcbiAgICAgIGNvbnN0IGJ5dGVPYmplY3QgPSBlbnRpdHkuZXh0ZW5zaW9uRGF0YT8udmFsdWU7XG4gICAgICBpZiAoYnl0ZU9iamVjdCkge1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlUHJvdG9idWYoYnl0ZU9iamVjdCwgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCIpO1xuICAgICAgICByZXN1bHRNYXAuc2V0KGVudGl0eS5lbnRpdHlVcmksIGRlY29kZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0TWFwLnNldChlbnRpdHkuZW50aXR5VXJpLCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0TWFwO1xufSIsICJpbXBvcnQgeyBmZXRjaE1ldGFkYXRhRm9yVHJhY2tzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvZmV0Y2hNZXRhZGF0YUZvclRyYWNrcy50c1wiO1xuXG5pbnRlcmZhY2UgUGxheWxpc3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVyaTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRHVwbGljYXRlQ2hlY2sge1xuICBwbGF5bGlzdFVyaTogc3RyaW5nO1xuICBwbGF5bGlzdE5hbWU6IHN0cmluZztcbiAgdHJhY2tVcmk6IHN0cmluZztcbiAgdHJhY2tOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0cygpOiBQcm9taXNlPFBsYXlsaXN0W10+IHtcbiAgY29uc3QgTGlicmFyeUFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uTGlicmFyeUFQSTtcbiAgXG4gIGlmICghTGlicmFyeUFQSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxpYnJhcnlBUEkgbm90IGF2YWlsYWJsZVwiKTtcbiAgfVxuICBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgbGltaXQ6IDEwMDAwMDAwLFxuICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICB9KTtcbiAgXG4gIGNvbnN0IHBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBjb25zdCBpdGVtcyA9IHJlc3BvbnNlPy5pdGVtcyB8fCBbXTtcbiAgXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgIGlmIChpdGVtLnR5cGUgPT09IFwicGxheWxpc3RcIiAmJiBpdGVtLmNhbkFkZFRvKSB7XG4gICAgICBwbGF5bGlzdHMucHVzaCh7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgdXJpOiBpdGVtLnVyaSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHBsYXlsaXN0cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpOiBQcm9taXNlPFNldDxzdHJpbmc+PiB7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICBcbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXlsaXN0QVBJIG5vdCBhdmFpbGFibGVcIik7XG4gIH1cbiAgXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUGxheWxpc3RBUEkuZ2V0Q29udGVudHMocGxheWxpc3RVcmksIHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgbGltaXQ6IC0xLFxuICB9KTtcbiAgXG4gIGlmIChyZXNwb25zZT8uaXRlbXMpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzcG9uc2UuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtPy51cmkpIHtcbiAgICAgICAgdHJhY2tVcmlzLmFkZChpdGVtLnVyaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdHJhY2tVcmlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhY2tOYW1lKHVyaTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHJhY2tJZCA9IHVyaS5zcGxpdChcIjpcIikucG9wKCkgfHwgXCJcIjtcbiAgcmV0dXJuIGBUcmFjayAoJHt0cmFja0lkLnNsaWNlKDAsIDgpfS4uLilgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uZmlybU1vZGFsKFxuICBkdXBsaWNhdGVzOiBEdXBsaWNhdGVDaGVja1tdLFxuICB0cmFja0NvdW50OiBudW1iZXIsXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZCxcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbikge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LW1vZGFsXCI7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWNvbnRlbnRcIjtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWhlYWRlclwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRyYWNrcyBhbHJlYWR5IGluIHBsYXlsaXN0KHMpXCI7XG4gIFxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWxpc3RcIjtcbiAgXG4gIGNvbnN0IGR1cGxpY2F0ZVRyYWNrVXJpcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IGR1cCBvZiBkdXBsaWNhdGVzKSB7XG4gICAgZHVwbGljYXRlVHJhY2tVcmlzLmFkZChkdXAudHJhY2tVcmkpO1xuICB9XG4gIGNvbnN0IHVuaXF1ZUR1cGxpY2F0ZUNvdW50ID0gZHVwbGljYXRlVHJhY2tVcmlzLnNpemU7XG4gIFxuICBmb3IgKGNvbnN0IGR1cCBvZiBkdXBsaWNhdGVzLnNsaWNlKDAsIDEwKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29uZmlybS1pdGVtXCI7XG4gICAgXG4gICAgY29uc3QgdHJhY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdHJhY2tOYW1lLmNsYXNzTmFtZSA9IFwidHJhY2stbmFtZVwiO1xuICAgIHRyYWNrTmFtZS50ZXh0Q29udGVudCA9IGR1cC50cmFja05hbWU7XG4gICAgXG4gICAgY29uc3QgcGxheWxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGxheWxpc3ROYW1lLmNsYXNzTmFtZSA9IFwicGxheWxpc3QtbmFtZVwiO1xuICAgIHBsYXlsaXN0TmFtZS50ZXh0Q29udGVudCA9IGBpbiAke2R1cC5wbGF5bGlzdE5hbWV9YDtcbiAgICBcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRyYWNrTmFtZSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwbGF5bGlzdE5hbWUpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cbiAgXG4gIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDEwKSB7XG4gICAgY29uc3QgbW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9yZS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLW1vcmVcIjtcbiAgICBtb3JlLnRleHRDb250ZW50ID0gYC4uLmFuZCAke2R1cGxpY2F0ZXMubGVuZ3RoIC0gMTB9IG1vcmVgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobW9yZSk7XG4gIH1cbiAgXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0taW5mb1wiO1xuICBcbiAgY29uc3QgcGxheWxpc3RDb3VudCA9IG5ldyBTZXQoZHVwbGljYXRlcy5tYXAoZCA9PiBkLnBsYXlsaXN0VXJpKSkuc2l6ZTtcbiAgXG4gIGlmICh1bmlxdWVEdXBsaWNhdGVDb3VudCA9PT0gdHJhY2tDb3VudCkge1xuICAgIGlmIChwbGF5bGlzdENvdW50ID09PSAxKSB7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYFRoaXMgdHJhY2sgaXMgYWxyZWFkeSBpbiAke3BsYXlsaXN0Q291bnR9IHNlbGVjdGVkIHBsYXlsaXN0LmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgQWxsICR7dW5pcXVlRHVwbGljYXRlQ291bnR9IHRyYWNrKHMpIGFyZSBhbHJlYWR5IGluICR7cGxheWxpc3RDb3VudH0gc2VsZWN0ZWQgcGxheWxpc3RzLmA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwbGF5bGlzdENvdW50ID09PSAxKSB7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYCR7dW5pcXVlRHVwbGljYXRlQ291bnR9IG9mICR7dHJhY2tDb3VudH0gdHJhY2socykgYXJlIGFscmVhZHkgaW4gJHtwbGF5bGlzdENvdW50fSBzZWxlY3RlZCBwbGF5bGlzdC5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYCR7dW5pcXVlRHVwbGljYXRlQ291bnR9IG9mICR7dHJhY2tDb3VudH0gdHJhY2socykgYXJlIGFscmVhZHkgaW4gJHtwbGF5bGlzdENvdW50fSBzZWxlY3RlZCBwbGF5bGlzdHMuYDtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25zLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tYnV0dG9uc1wiO1xuICBcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgb25DYW5jZWwoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idG4gY29uZmlybVwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGQgQW55d2F5XCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICBvbkNvbmZpcm0oKTtcbiAgfSk7XG4gIFxuICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIFxuICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICBcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICBvbkNhbmNlbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUcmFja3NUb1BsYXlsaXN0cyhcbiAgcGxheWxpc3RVcmlzOiBzdHJpbmdbXSxcbiAgdHJhY2tVcmlzOiBzdHJpbmdbXVxuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IHN0cmluZ1tdOyBmYWlsZWQ6IHN0cmluZ1tdIH0+IHtcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICBcbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFBsYXlsaXN0QVBJXCIpO1xuICB9XG4gIFxuICBjb25zdCBzdWNjZXNzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBmYWlsZWQ6IHN0cmluZ1tdID0gW107XG4gIFxuICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQbGF5bGlzdEFQSS5hZGQocGxheWxpc3RVcmksIHRyYWNrVXJpcywgW10pO1xuICAgICAgc3VjY2Vzcy5wdXNoKHBsYXlsaXN0VXJpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBmYWlsZWQucHVzaChwbGF5bGlzdFVyaSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4geyBzdWNjZXNzLCBmYWlsZWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRyYWNrVXJpczogc3RyaW5nW10pIHtcbiAgbGV0IGFsbFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBsZXQgZmlsdGVyZWRQbGF5bGlzdHM6IFBsYXlsaXN0W10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbW9kYWxcIjtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbnRlbnRcIjtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1oZWFkZXJcIjtcbiAgXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgdG8gTXVsdGlwbGUgUGxheWxpc3RzXCI7XG4gIFxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWhlYWRlci1yaWdodFwiO1xuICBcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWdpdGh1YlwiO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9KaW1NYXJsZXk0MjAvc3BpY2V0aWZ5LWV4dGVuc2lvblwiO1xuICBnaXRodWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIk9wZW4gR2l0SHViIHJlcG9zaXRvcnlcIik7XG4gIGdpdGh1YkxpbmsuaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiLz48L3N2Zz5gO1xuICBcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jbG9zZVwiO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPjwvc3ZnPmA7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5yZW1vdmUoKSk7XG4gIFxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcbiAgXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1zZWFyY2hcIjtcbiAgXG4gIGNvbnN0IHNlYXJjaFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC13cmFwcGVyXCI7XG4gIFxuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoSWNvbi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1zZWFyY2gtaWNvblwiO1xuICBzZWFyY2hJY29uLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAwMTYgOS41IDYuNSA2LjUgMCAxMDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIvPjwvc3ZnPmA7XG4gIFxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHBsYXlsaXN0cy4uLlwiO1xuICBcbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hXcmFwcGVyKTtcbiAgXG4gIGNvbnN0IHRyYWNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0NvdW50LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXRyYWNrLWNvdW50XCI7XG4gIHRyYWNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSBzZWxlY3RlZGA7XG4gIFxuICBjb25zdCBwbGF5bGlzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5bGlzdExpc3QuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbGlzdFwiO1xuICBcbiAgY29uc3QgZW1wdHlTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtcHR5U3RhdGUuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtZW1wdHlcIjtcbiAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZyBwbGF5bGlzdHMuLi5cIjtcbiAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICBcbiAgZnVuY3Rpb24gcmVuZGVyUGxheWxpc3RzKHBsYXlsaXN0czogUGxheWxpc3RbXSkge1xuICAgIHBsYXlsaXN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIGlmIChwbGF5bGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gc2VhcmNoSW5wdXQudmFsdWUgPyBcIk5vIHBsYXlsaXN0cyBmb3VuZFwiIDogXCJObyBwbGF5bGlzdHMgYXZhaWxhYmxlXCI7XG4gICAgICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgcGxheWxpc3RzKSB7XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1pdGVtXCIgKyAoc2VsZWN0ZWRTZXQuaGFzKHBsYXlsaXN0LnVyaSkgPyBcIiBzZWxlY3RlZFwiIDogXCJcIik7XG4gICAgICBcbiAgICAgIGNvbnN0IGNoZWNrYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjaGVja2JveFdyYXBwZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtd3JhcHBlclwiO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jaGVja2JveFwiO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHNlbGVjdGVkU2V0LmhhcyhwbGF5bGlzdC51cmkpO1xuICAgICAgXG4gICAgICBjb25zdCBjdXN0b21DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjdXN0b21DaGVja2JveC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b21cIjtcbiAgICAgIFxuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChjdXN0b21DaGVja2JveCk7XG4gICAgICBcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmFkZChwbGF5bGlzdC51cmkpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmRlbGV0ZShwbGF5bGlzdC51cmkpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbmFtZS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1uYW1lXCI7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcGxheWxpc3QubmFtZTtcbiAgICAgIFxuICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGZpbHRlclBsYXlsaXN0cygpIHtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgZmlsdGVyZWRQbGF5bGlzdHMgPSBhbGxQbGF5bGlzdHMuZmlsdGVyKHAgPT4gcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKTtcbiAgICByZW5kZXJQbGF5bGlzdHMoZmlsdGVyZWRQbGF5bGlzdHMpO1xuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvblN0YXRlKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSBzZWxlY3RlZFNldC5zaXplO1xuICAgIHRyYWNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt0cmFja1VyaXMubGVuZ3RofSB0cmFjayhzKSBzZWxlY3RlZCBcdTIwMjIgJHtzZWxlY3RlZENvdW50fSBwbGF5bGlzdChzKWA7XG4gICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHNlbGVjdGVkQ291bnQgPT09IDA7XG4gICAgXG4gICAgY29uc3Qgc2VsZWN0ZWRXaXRoaW5GaWx0ZXJlZCA9IGZpbHRlcmVkUGxheWxpc3RzLmZpbHRlcihwID0+IHNlbGVjdGVkU2V0LmhhcyhwLnVyaSkpLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRXaXRoaW5GaWx0ZXJlZCA9PT0gMCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFdpdGhpbkZpbHRlcmVkID09PSBmaWx0ZXJlZFBsYXlsaXN0cy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVzZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0cygpIHtcbiAgICB0cnkge1xuICAgICAgYWxsUGxheWxpc3RzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdHMoKTtcbiAgICAgIGZpbHRlcmVkUGxheWxpc3RzID0gWy4uLmFsbFBsYXlsaXN0c107XG4gICAgICByZW5kZXJQbGF5bGlzdHMoZmlsdGVyZWRQbGF5bGlzdHMpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIjtcbiAgICAgIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGxvYWQgcGxheWxpc3RzXCIsIHRydWUpO1xuICAgIH1cbiAgfVxuICBcbiAgbG9hZFBsYXlsaXN0cygpO1xuICBcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZpbHRlclBsYXlsaXN0cyk7XG4gIFxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnV0dG9uc1wiO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICBcbiAgY29uc3Qgc2VsZWN0QWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VsZWN0QWxsQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlbGVjdC1hbGxcIjtcbiAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gIHNlbGVjdEFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkV2l0aGluRmlsdGVyZWQgPSBmaWx0ZXJlZFBsYXlsaXN0cy5maWx0ZXIocCA9PiBzZWxlY3RlZFNldC5oYXMocC51cmkpKS5sZW5ndGg7XG4gICAgY29uc3QgYWxsRmlsdGVyZWRTZWxlY3RlZCA9IHNlbGVjdGVkV2l0aGluRmlsdGVyZWQgPT09IGZpbHRlcmVkUGxheWxpc3RzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoYWxsRmlsdGVyZWRTZWxlY3RlZCkge1xuICAgICAgZmlsdGVyZWRQbGF5bGlzdHMuZm9yRWFjaChwID0+IHNlbGVjdGVkU2V0LmRlbGV0ZShwLnVyaSkpO1xuICAgICAgcGxheWxpc3RMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRvLXBsYXlsaXN0LWl0ZW1cIikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFkZC10by1wbGF5bGlzdC1jaGVja2JveFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoY2hlY2tib3gpIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJlZFBsYXlsaXN0cy5mb3JFYWNoKHAgPT4gc2VsZWN0ZWRTZXQuYWRkKHAudXJpKSk7XG4gICAgICBwbGF5bGlzdExpc3QucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtdG8tcGxheWxpc3QtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkdyb3VwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgYnV0dG9uR3JvdXAuc3R5bGUuZ2FwID0gXCIxMnB4XCI7XG4gIGJ1dHRvbkdyb3VwLnN0eWxlLm1hcmdpbkxlZnQgPSBcImF1dG9cIjtcbiAgXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnRuIGNvbmZpcm1cIjtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBsYXlsaXN0VXJpcyA9IEFycmF5LmZyb20oc2VsZWN0ZWRTZXQpO1xuICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkNoZWNraW5nLi4uXCI7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGR1cGxpY2F0ZXM6IER1cGxpY2F0ZUNoZWNrW10gPSBbXTtcbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBwbGF5bGlzdFVyaSBvZiBwbGF5bGlzdFVyaXMpIHtcbiAgICAgICAgY29uc3QgcGxheWxpc3QgPSBhbGxQbGF5bGlzdHMuZmluZChwID0+IHAudXJpID09PSBwbGF5bGlzdFVyaSk7XG4gICAgICAgIGNvbnN0IHBsYXlsaXN0TmFtZSA9IHBsYXlsaXN0Py5uYW1lIHx8IFwiVW5rbm93blwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxheWxpc3RUcmFja3MgPSBhd2FpdCBnZXRQbGF5bGlzdFRyYWNrcyhwbGF5bGlzdFVyaSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkdXBsaWNhdGVVcmlzID0gdHJhY2tVcmlzLmZpbHRlcih0ID0+IHBsYXlsaXN0VHJhY2tzLmhhcyh0KSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZHVwbGljYXRlVXJpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHRyYWNrTWV0YWRhdGEgPSBhd2FpdCBmZXRjaE1ldGFkYXRhRm9yVHJhY2tzKGR1cGxpY2F0ZVVyaXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAoY29uc3QgdHJhY2tVcmkgb2YgZHVwbGljYXRlVXJpcykge1xuICAgICAgICAgICAgY29uc3QgbWV0YSA9IHRyYWNrTWV0YWRhdGEuZ2V0KHRyYWNrVXJpKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrTmFtZSA9IG1ldGE/Lm5hbWUgfHwgbWV0YT8udGl0bGUgfHwgbWV0YT8udHJhY2s/Lm5hbWUgfHwgZ2V0VHJhY2tOYW1lKHRyYWNrVXJpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZHVwbGljYXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgcGxheWxpc3RVcmksXG4gICAgICAgICAgICAgIHBsYXlsaXN0TmFtZSxcbiAgICAgICAgICAgICAgdHJhY2tVcmksXG4gICAgICAgICAgICAgIHRyYWNrTmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZHVwbGljYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZGluZy4uLlwiO1xuICAgICAgICBcbiAgICAgICAgY3JlYXRlQ29uZmlybU1vZGFsKFxuICAgICAgICAgIGR1cGxpY2F0ZXMsXG4gICAgICAgICAgdHJhY2tVcmlzLmxlbmd0aCxcbiAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhZGRUcmFja3NUb1BsYXlsaXN0cyhwbGF5bGlzdFVyaXMsIHRyYWNrVXJpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBBZGRlZCAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHRvICR7cmVzdWx0LnN1Y2Nlc3MubGVuZ3RofSBwbGF5bGlzdChzKWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJObyB0cmFja3Mgd2VyZSBhZGRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFBsYXlsaXN0QVBJXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkZWRDb3VudCA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBQbGF5bGlzdEFQSS5hZGQocGxheWxpc3RVcmksIHRyYWNrVXJpcywgW10pO1xuICAgICAgICAgICAgYWRkZWRDb3VudCsrO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChhZGRlZENvdW50ID4gMCkge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBBZGRlZCAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHRvICR7YWRkZWRDb3VudH0gcGxheWxpc3QocylgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBhZGQgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGFkZCB0cmFja3NcIiwgdHJ1ZSk7XG4gICAgICBjb25maXJtQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICB9XG4gIH0pO1xuICBcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIFxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrQ291bnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBsYXlsaXN0TGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIFxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcbn0iLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcbmltcG9ydCB7IGNyZWF0ZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwudHN4XCI7XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayh1cmlzOiBzdHJpbmdbXSkge1xuICBjb25zdCB0cmFja1VyaXMgPSB1cmlzLmZpbHRlcigodXJpOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgICByZXR1cm4gdXJpT2JqICYmICh1cmlPYmogYXMgYW55KS50eXBlID09PSBcInRyYWNrXCI7XG4gIH0pO1xuICBcbiAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPT09IDApIHtcbiAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIk5vIHRyYWNrcyBzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFsKHRyYWNrVXJpcyk7XG59XG5cbmNvbnN0IGFkZFRvTXVsdGlwbGVQbGF5bGlzdHNNZW51SXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnUuSXRlbShcbiAgXCJBZGQgdG8gTXVsdGlwbGUgUGxheWxpc3RzXCIsXG4gIGhhbmRsZU1lbnVDbGljayxcbiAgKHVyaXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgaGFzVHJhY2sgPSB1cmlzLnNvbWUoKHVyaTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyBhbnkpLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gaGFzVHJhY2s7XG4gIH0sXG4gIFwicGx1cy1hbHRcIiBhcyBTcGljZXRpZnkuSWNvblxuKTtcblxuYWRkVG9NdWx0aXBsZVBsYXlsaXN0c01lbnVJdGVtLnJlZ2lzdGVyKCk7Il0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQ1UsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQUEsUUFDOUYsT0FBTztBQUNMLG9CQUFVLGlCQUFpQix3QkFBd0IsSUFBSTtBQUFBLFFBQ3pEO0FBQ0EsY0FBTSxPQUFPO0FBQUEsTUFDZjtBQUFBLElBQ0YsU0FBUyxHQUFHO0FBQ1YsZ0JBQVUsaUJBQWlCLHdCQUF3QixJQUFJO0FBQ3ZELGlCQUFXLFdBQVc7QUFDdEIsaUJBQVcsY0FBYztBQUFBLElBQzNCO0FBQUEsRUFDRixDQUFDO0FBRUQsY0FBWSxZQUFZLFNBQVM7QUFDakMsY0FBWSxZQUFZLFVBQVU7QUFFbEMsa0JBQWdCLFlBQVksWUFBWTtBQUN4QyxrQkFBZ0IsWUFBWSxXQUFXO0FBRXZDLFVBQVEsWUFBWSxNQUFNO0FBQzFCLFVBQVEsWUFBWSxlQUFlO0FBQ25DLFVBQVEsWUFBWSxVQUFVO0FBQzlCLFVBQVEsWUFBWSxZQUFZO0FBQ2hDLFVBQVEsWUFBWSxlQUFlO0FBRW5DLFFBQU0sWUFBWSxPQUFPO0FBRXpCLFdBQVMsS0FBSyxZQUFZLEtBQUs7QUFFL0IsUUFBTSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDckMsUUFBSSxFQUFFLFdBQVcsT0FBTztBQUN0QixZQUFNLE9BQU87QUFBQSxJQUNmO0FBQUEsRUFDRixDQUFDO0FBRUQsY0FBWSxNQUFNO0FBQ3BCOzs7QUNsZ0JBLFNBQVMsbUJBQW1CLEtBQUssY0FBTTtBQUV2QyxlQUFlLGdCQUFnQixNQUFnQjtBQUM3QyxRQUFNLFlBQVksS0FBSyxPQUFPLENBQUMsUUFBZ0I7QUFDN0MsVUFBTSxTQUFTLFVBQVUsSUFBSSxLQUFLLEdBQUc7QUFDckMsV0FBTyxVQUFXLE9BQWUsU0FBUztBQUFBLEVBQzVDLENBQUM7QUFFRCxNQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLGNBQVUsaUJBQWlCLHNCQUFzQixJQUFJO0FBQ3JEO0FBQUEsRUFDRjtBQUVBLGNBQVksU0FBUztBQUN2QjtBQUVBLElBQU0saUNBQWlDLElBQUksVUFBVSxZQUFZO0FBQUEsRUFDL0Q7QUFBQSxFQUNBO0FBQUEsRUFDQSxDQUFDLFNBQW1CO0FBQ2xCLFVBQU0sV0FBVyxLQUFLLEtBQUssQ0FBQyxRQUFnQjtBQUMxQyxZQUFNLFNBQVMsVUFBVSxJQUFJLEtBQUssR0FBRztBQUNyQyxhQUFPLFVBQVcsT0FBZSxTQUFTO0FBQUEsSUFDNUMsQ0FBQztBQUNELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUNGO0FBRUEsK0JBQStCLFNBQVM7IiwKICAibmFtZXMiOiBbXQp9Cg==
