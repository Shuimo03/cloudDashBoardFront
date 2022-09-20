# 使用方式
* "npm rundev:dev": "cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c webpack.dev.js",
* "npm rundev:test": "cross-env NODE_ENV=development BASE_ENV=test webpack-dev-server -c webpack.dev.js",
* "npm rundev:pre": "cross-env NODE_ENV=development BASE_ENV=pre webpack-dev-server -c webpack.dev.js",
* "npm rundev:prod": "cross-env NODE_ENV=development BASE_ENV=production webpack-dev-server -c webpack.dev.js",
* "npm runbuild:dev": "cross-env NODE_ENV=production BASE_ENV=development webpack -c webpack.prod.js",
* "npm runbuild:test": "cross-env NODE_ENV=production BASE_ENV=test webpack -c webpack.prod.js",
* "npm runbuild:pre": "cross-env NODE_ENV=production BASE_ENV=pre webpack -c webpack.prod.js",
* "npm runbuild:prod": "cross-env NODE_ENV=production BASE_ENV=production webpack -c webpack.prod.js",
* "npm runbuild:analy": "cross-env NODE_ENV=production BASE_ENV=production webpack -c webpack.analy.js"
