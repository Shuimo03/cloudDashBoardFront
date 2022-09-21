# 使用方式 npm install,再允许一下命令

* "npm run dev:dev": "cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c webpack.dev.js",
* "npm run dev:test": "cross-env NODE_ENV=development BASE_ENV=test webpack-dev-server -c webpack.dev.js",
* "npm run dev:pre": "cross-env NODE_ENV=development BASE_ENV=pre webpack-dev-server -c webpack.dev.js",
* "npm run dev:prod": "cross-env NODE_ENV=development BASE_ENV=production webpack-dev-server -c webpack.dev.js",
* "npm run build:dev": "cross-env NODE_ENV=production BASE_ENV=development webpack -c webpack.prod.js",
* "npm run build:test": "cross-env NODE_ENV=production BASE_ENV=test webpack -c webpack.prod.js",
* "npm run build:pre": "cross-env NODE_ENV=production BASE_ENV=pre webpack -c webpack.prod.js",
* "npm run build:prod": "cross-env NODE_ENV=production BASE_ENV=production webpack -c webpack.prod.js",
* "npm run build:analy": "cross-env NODE_ENV=production BASE_ENV=production webpack -c webpack.analy.js"
