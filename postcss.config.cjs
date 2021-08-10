// PostCSS configuration

// import site tokens
const variables = require('./lib/json.cjs').flatten( require('./tokens.json').design );

module.exports = (cfg) => {

  const productionMode = (cfg.env !== 'development');

  return {

    map: cfg.options.map,
    parser: cfg.file.extname === '.scss' ? 'postcss-scss' : false,
    plugins: [
      require('postcss-advanced-variables')({ variables }),
      require('postcss-nested')(),
      require('postcss-calc')(),
      require('autoprefixer')(),
      productionMode ? require('cssnano')() : null
    ]

  };

};
