const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';
module.exports = (...args) => {
    console.log(args);
    return {
        mode: "development",
        entry: {
            index: {
                import: "./src/index.js",
            },
        },
        devtool: "inline-source-map",
        devServer: {
            static: "./dist",
            hot: true,
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
        output: {
            filename: "[name][contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
            library: {
                name: "xhhLib",
                type: "umd",
            },
        },
        externals: {
            lodash: {
                commonjs: "lodash",
                commonjs2: "lodash",
                amd: "lodash",
                root: "_",
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(csv|tsv)$/i,
                    use: ["csv-loader"],
                },
                {
                    test: /\.xml$/i,
                    use: ["xml-loader"],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "xhh",
            }),
        ],
    };
};
