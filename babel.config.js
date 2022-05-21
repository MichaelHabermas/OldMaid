module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);
  return {
    presets: ['babel-preset-expo', ['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  };
};
