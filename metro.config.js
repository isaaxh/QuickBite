// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

// Firebase's "exports" maps resolve @firebase/app to its CJS build from some
// importers and its ESM build from others, producing two module instances with
// separate component registries - so auth registers into one while
// initializeApp reads the other ("Component auth has not been registered yet").
// Resolving firebase via main/browser/react-native fields instead keeps a
// single instance, and picks @firebase/auth's RN build (which is what provides
// getReactNativePersistence). Scoped to firebase so other packages (e.g. zod)
// keep package-exports resolution, which they require.
const { resolveRequest: defaultResolveRequest } = defaultConfig.resolver;
defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  const resolve = defaultResolveRequest ?? context.resolveRequest;
  if (moduleName === "firebase" || moduleName.startsWith("firebase/") ||
      moduleName === "@firebase" || moduleName.startsWith("@firebase/")) {
    return resolve(
      { ...context, unstable_enablePackageExports: false },
      moduleName,
      platform,
    );
  }
  return resolve(context, moduleName, platform);
};

/* defaultConfig.resolver = { */
/*   ...resolver, */
/*   assetExts: resolver.assetExts.filter((ext) => ext !== "svg"), */
/*   sourceExts: [...resolver.sourceExts, "svg"], */
/* }; */
/**/
/* defaultConfig.transformer = { */
/*   ...transformer, */
/*   babelTransformerPath: require.resolve("react-native-svg-transformer"), */
/* }; */

module.exports = withNativeWind(defaultConfig, { input: "./global.css" });
