var path = require("path");
var fs = require("fs");
var archiver = require("archiver");
var HtmlWebpackPlugin = require("html-webpack-plugin");

function ArchiverPlugin() {
    this.manifestPath = path.resolve("src/manifest.json");
    this.manifestName = "manifest.json";
    this.archivePath = path.resolve("metadata/staticresources") + "/Realty.resource";
}
ArchiverPlugin.prototype.apply = function(compiler) {
    var manifestPath = this.manifestPath;
    var manifestName = this.manifestName;
    var archivePath = this.archivePath;
    compiler.plugin("after-emit", function(compiler, callback) {
        var output = fs.createWriteStream(archivePath);
        var archive = archiver("zip");
        archive.pipe(output);
        for (var fileName in compiler.assets) {
            if (compiler.assets.hasOwnProperty(fileName)) {
                var stream = fs.createReadStream(compiler.assets[fileName].existsAt);
                archive.append(stream, {name: fileName});
            }
        }
        var manifestStream = fs.createReadStream(manifestPath);
        archive.append(manifestStream, {name: manifestName});
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
        new ArchiverPlugin()
    ]
};