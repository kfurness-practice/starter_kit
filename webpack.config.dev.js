import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,  // enables debugging info
  devtool: 'inline-source-map',
  noInfo: false,  // webpack will display a list of all the files it is bundling, usually set to true to get rid of noise
  entry: [
    path.resolve(__dirname, 'src/index')
  ], // entry point of application, __dirname is part of node to get full path
  target: 'web',  // could be 'node' (or electron) and will change the way webpack manages bundling vs manager
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  }, // where it should create our dev bundle
  // webpack won't actually generate any physical files for dev build. It will serve our build from memory
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true  // tells webpack to inject any necessary script tags, so do not have to have script tag pointing to bundle.js in index.html file!
    })
  ], // can enhance webpack power (hot relaoding, linting styles, catching errors, etc)
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  } // file types we want it to handle (how to handle different file types)
  // sass, less, images, etc
}
