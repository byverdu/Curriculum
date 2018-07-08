const destFolder = './dist';
const srcFolder = './src';

module.exports = {
  srcFolder,
  destFolder,
  filesToWatch: [`${srcFolder}/**.*`],
  srcJs: `${srcFolder}/main.js`,
  srcHtml: `${srcFolder}/index.html`,
  srcSass: `${srcFolder}/sass/resume-theme.scss`,
  sourcemaps: './',
  bundleFile: 'bundle.js'
};
