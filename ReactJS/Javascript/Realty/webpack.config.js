var path = require("path");
var fs = require("fs");
var archiver = require("archiver");
var HtmlWebpackPlugin = require("html-webpack-plugin");

function ArchiverPlugin(staticResourceName) {
    this.path = path.resolve("metadata/staticresources") + "/" + staticResourceName + ".resource";
}
ArchiverPlugin.prototype.apply = function(compiler) {
    var path = this.path;
    compiler.plugin("after-emit", function(compiler, callback) {
        var output = fs.createWriteStream(path);
        var archive = archiver("zip");
        archive.pipe(output);
        for (var fileName in compiler.assets) {
            if (compiler.assets.hasOwnProperty(fileName)) {
                var stream = fs.createReadStream(compiler.assets[fileName].existsAt);
                archive.append(stream, {name: fileName});
            }
        }
        archive.finalize();
        callback();
    });
}

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve("build"),
        filename: "app.bundle.js",
        pathinfo: false
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file?context=node_modules/@salesforce-ux/design-system&name=[path][name].[ext]"
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body"
        }),
        new ArchiverPlugin("Realty")
    ]
};