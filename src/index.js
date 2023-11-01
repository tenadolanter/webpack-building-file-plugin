const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const cwd = process.cwd();
class BuildingFilePlugin {
  constructor(options) {
    this.fileList = [];
    this.options = options;
  }
  apply(compiler) {
    const { exclude, level = "info", output } = this.options || {};
    // 注册插件
    compiler.hooks.compilation.tap("BuildingFilePlugin", (compilation) => {
      compilation.hooks.buildModule.tap("BuildingFilePlugin", (module) => {
        // 在构建模块时，打印当前模块的文件路径
        if (exclude) {
          if (!exclude.test(module.resource)) {
            if (level === "info") {
              console.log("正在处理:", module.resource);
            }
            this.fileList.push(module.resource);
          }
        } else {
          if (level === "info") {
            console.log("正在处理:", module.resource);
          }
          this.fileList.push(module.resource);
        }
      });
    });

    // 构建结束
    compiler.hooks.afterEmit.tap("BuildingFilePlugin", () => {
      if (output) {
        const configPath = path.join(cwd, output);
        if (!fs.existsSync(configPath)) {
          fs.writeFileSync(configPath, "", (err) => {
            if (err) {
              console.log(chalk.red(err));
              process.exit(2);
            }
          });
        }
        const content = this.fileList.join("\n");
        fs.writeFileSync(configPath, content, (err) => {
          if (err) {
            console.log(chalk.red(err));
            process.exit(2);
          }
        });
      }
    });
  }
}

module.exports = BuildingFilePlugin;
