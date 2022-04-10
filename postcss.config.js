const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'postcss-preset-env',
    (PRODUCTION_MODE) ? 'postcss-combine-media-query' : false
  ]
};
