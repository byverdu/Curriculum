const destFolder = './dist';
const srcFolder = './src';

module.exports = {
  srcFolder,
  destFolder,
  filesToWatch: [`${srcFolder}/**/**.*`],
  srcJs: `${srcFolder}/main.js`,
  staticAssets: [`${srcFolder}/index.html`, `${srcFolder}/images/**`],
  srcSass: `${srcFolder}/sass/main.scss`,
  sourcemaps: './',
  bundleFile: 'bundle.js'
};
