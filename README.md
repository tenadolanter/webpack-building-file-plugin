# webpack-building-file-plugin

跟踪 Webpack 构建过程，收集使用了哪些文件，用于 webpack 构建过程的优化

### 安装依赖

```bash
npm install @tenado/webpack-building-file-plugin -D

```

### 使用

```js
// webpack.config.js
const WebpackBuildingFilePlugin = require("@tenado/webpack-building-file-plugin");

configureWebpack: {
  plugins: [new WebpackBuildingFilePlugin()];
}

// vue.config.js
const WebpackBuildingFilePlugin = require("@tenado/webpack-building-file-plugin");
module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(new WebpackBuildingFilePlugin());
  },
};
```

### 配置

| 名称    | 类型   | 说明                                                                     |
| ------- | ------ | ------------------------------------------------------------------------ |
| exclude | RegExp | 需要排除的文件，正则匹配，例如/node_modules/                             |
| level   | String | 日志的类型，可以为 error、info、warning、none                            |
| output  | String | 将被使用的文件列收集起来，并保存在文件里面，文件路径，例如"./output.txt" |
