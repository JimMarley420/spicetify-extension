const GLOBAL_KEY = "__cached_webpack_modules";

if (!(globalThis as any)[GLOBAL_KEY]) {
  (globalThis as any)[GLOBAL_KEY] = {
    require: null,
    modules: null,
    lastModuleCount: 0,
    serviceCache: new Map<string, any>(),
    searchCache: new Map<string, any>(),
    componentCache: new Map<string, any>(),
  };
}

const shared = (globalThis as any)[GLOBAL_KEY];

export const SpotifyWebpack = {
  getModules() {
    if (!shared.require) {
      const webpack = (globalThis as any).webpackChunkclient_web;
      if (!webpack) return shared.modules ?? [];
      shared.require = webpack.push([[Symbol()], {}, (re: any) => re]);
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

  getModuleById(id: string) {
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

  findModuleByContent(keywords: string[]) {
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

  findComponentByKeywords(keywords: string[]) {
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
      } catch (_e) {}
    }

    if (!foundModuleId) return null;

    let exports: any;
    try {
      exports = shared.require(foundModuleId);
    } catch {
      shared.componentCache.set(cacheKey, null);
      return null;
    }

    const isLikelyComponent = (value: any) => {
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

  findService(serviceName: string) {
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

  getClient<T = any>(serviceName: string): T {
    if (shared.serviceCache.has(serviceName)) {
      return shared.serviceCache.get(serviceName);
    }
    const ServiceClass = SpotifyWebpack.findService(serviceName);
    if (!ServiceClass) {
      throw new Error(`Spotify Service not found: ${serviceName}`);
    }

    let client: any;
    if (typeof ServiceClass === "function") {
      const transport = (globalThis as any).Spicetify?.Platform?.Registry?.resolve(Symbol.for("EsperantoTransport"));
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
  },
};

(globalThis as any).SpotifyWebpack = SpotifyWebpack;