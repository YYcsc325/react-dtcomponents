export default {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: {
    // 用 transformer 配置项代替，可选值参考：https://github.com/umijs/father/blob/master/docs/config.md#transformer
    output: 'es',
  },
  umd: {
    // 默认值为 dist/umd，如果想保持原目录，需增加 output 配置项
    output: 'dist',
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      antd: 'antd',
    },
  },
};
