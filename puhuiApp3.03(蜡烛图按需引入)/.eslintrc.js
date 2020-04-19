module.exports = {
  root: true,
  globals: {
    BScroll: true,
    _: true,
    html2canvas: true,
    Android:true,
    VueRouter:true,
    ClipboardJS:true,
    app:true
  },
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-html2canvas':'off',
    'no-BMAP_STATUS_SUCCESS':'off',
    'no-ua':'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
