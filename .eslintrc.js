module.exports = {
  root: true,
  'env': {
    'node': true,
    'es6': true
  },
  'plugins': [
    'prettier',
    'standard'
  ],
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'prettier',
    'prettier/standard'
  ],
  'rules': {
    'space-before-function-paren': 0,
    'new-cap': 0,
    'prettier/prettier': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  }
}
