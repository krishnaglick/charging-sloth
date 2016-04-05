
module.exports = {
  entry: "./public/javascript/game.js",
  output: {
    path: `${__dirname}/public/static/`,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: {
    includePaths: [require('path').resolve(__dirname, "./public/scss")]
  }
};
