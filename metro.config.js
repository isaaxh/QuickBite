// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

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

module.exports = defaultConfig;
