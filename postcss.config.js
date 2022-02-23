const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

const postCssPlugins = [
  ['postcss-preset-env', {}]
];

if (PRODUCTION_MODE) {
  postCssPlugins.push(['postcss-combine-media-query']);
}

module.exports = {
  plugins: postCssPlugins
};
