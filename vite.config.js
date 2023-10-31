import { resolve } from 'path'
export default () =>  {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'webpack-building-file-plugin',
        fileName: 'webpack-building-file-plugin',
      },
      outDir: "lib",
    },
  }
}