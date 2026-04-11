module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@": "./src",
          presentation: "./src/presentation",
          infrestructure: "./src/infrestructure",
          assets: "./src/assets",
          regex: "./src/regex"
        },
      },
    ],
    'react-native-worklets/plugin',
  ]
};