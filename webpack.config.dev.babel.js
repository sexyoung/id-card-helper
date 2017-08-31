import config from './webpack.config.babel';

const libraryName = 'id';

export default {
  ...config,
  entry: {
    id: `${__dirname}/src/index.js`,
    demo: `${__dirname}/example/demo.js`
  },
  devtool: 'eval-source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
};
