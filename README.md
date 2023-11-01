# webpack-building-file-plugin

处理模块时打印模块的路径，对于跟踪 Webpack 构建过程非常有用

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

| 名称    | 类型   | 说明                                          |
| ------- | ------ | --------------------------------------------- |
| exclude | RegExp | 需要排除的文件，正则匹配                      |
| level   | String | 日志的类型，可以为 error、info、warning、none |
| output  | String | 将被处理的文件列表保存在文件里面，文件路径    |
