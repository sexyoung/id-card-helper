import config from './webpack.config.babel';

const libraryName = 'id';
const outputFile = `${libraryName}.js`;

export default {
  ...config,
  entry: `${__dirname}/src/index.js`,
  devtool: 'nosources-source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
