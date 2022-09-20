const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDEV = process.env.NODE_ENV === "development"; // 是否是开发模式

module.exports = {
    entry: path.join(__dirname, "src/index.tsx"),
    // 打包文件出口
    output: {
        filename: "lib/[name].[chunkhash:8]js", // 每个输出js的名称
        path: path.join(__dirname, "dist"), // 打包结果输出路径
        clean: true,
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
        modules: ["node_modules"],
        extensions: [".js", ".tsx", ".ts"],
    },
    cache: {
        type: "filesystem", // 使用文件缓存
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
        new webpack.DefinePlugin({
            "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
        }),
    ],
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                include: [path.join(__dirname, "src")],
                use: ["thread-loader", "babel-loader"],
            },
            {
                test: /.css$/, //匹配所有的 css 文件
                include: [path.join(__dirname, "../src")],
                use: [
                    isDEV ? "style-loader" : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                include: [path.join(__dirname, "src")],
                use: [
                    isDEV ? "style-loader" : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    },
                },
                generator: {
                    filename: "static/images/[name].[contenthash:8][ext]", // 文件输出目录和命名
                },
            },
            {
                test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    },
                },
                generator: {
                    filename: "static/fonts/[name].[contenthash:8][ext]", // 文件输出目录和命名
                },
            },
            {
                test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    },
                },
                generator: {
                    filename: "static/media/[name].[contenthash:8][ext]", // 文件输出目录和命名
                },
            },
        ],
    },
};
