const config = {
  // productionだとコメントや改行が消えて、ファイルサイズの削減も行われて最適化される
  mode: "production",
  // 以下のオプションを指定することで、ブラウザのSources タブから変換前後のコードを見れる
  devtool: "source-map",
  // デフォルトでは devServer はホストのルートディレクトリ / を起点として起動する
  // そのため、サーブすべきディレクトリを webpack.config.js 内で指定してあげる必要があります。
  // ここでは index.html を置いているプロジェクト直下の ./dist を指定します。
  // Webpack Dev Serverは / へのリクエストに対しては index.html ファイルをおそらく返す
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        // js以外にもjsxのファイルもバベルローダーの対象にする
        // test プロパティには正規表現（RegExp）を使って、どのファイルがローダーの対象となるか
        // を指定する。正規表現が一致するファイルに対して、指定されたローダーが適用されます。
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    // Webpackは、エントリーファイルから開始して他のモジュールを読み込む際に、resolve オプションに指定されたルールに基づいてモジュールの解決を行います。
    // extensions: モジュールの解決時に自動的に解決されるファイル拡張子の配列を指定します。
    // これにより、import文やrequire文でファイルの拡張子を省略できます。例えば、extensions: ['.js', '.jsx', '.json'] と指定すると、
    // .js、.jsx、.json ファイルの拡張子が省略された場合にも自動的に解決されます。
    // これを指定することで、src/index.jsxをエントリーファイルとして扱うことができる
    extensions: [".js", ".json", ".jsx"],
  },
};

module.exports = config;
