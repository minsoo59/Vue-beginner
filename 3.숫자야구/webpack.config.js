const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  entry: {
    app: path.join(__dirname, "main.js"), // 바뀌어질 파일명
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js", // 보여질 파일명
    path: path.join(__dirname, "dist"), // 경로
  },
  mode: "development",
  devtool: "eval", // 빌드하는 속도 빨라짐
  resolve: {
    extensions: [".js", ".vue"], // import할때 뒤에 파일확장자명 지워도 괜찮음.
  },
};
