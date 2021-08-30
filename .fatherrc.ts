// 这里是打包层的配置， 打包完缺损什么东西在这里配置: https://github.com/umijs/father#config

// package.json文件中配置sideEffects: ["*.css"] 则css不会被tree shaking

export default {
  esm: 'rollup',
  cjs: 'rollup',
  disableTypeCheck: true,
  extractCSS: true,
  cssModules: {
    generateScopedName: '[local]',
  },
};
