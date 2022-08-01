module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          Root: './',
          Assets: './src/assets',
          Components: './src/components',
          Screens: './src/screens',
          Constants: './src/constants',
          Navigation: './src/navigations',
          Redux: './src/redux',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
};
