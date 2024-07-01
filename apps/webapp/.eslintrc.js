module.exports = {
  'root': true,
  'parserOptions': {
    'tsconfigRootDir': __dirname,
    'project': [
      'tsconfig.app.json',
      'tsconfig.spec.json',
      'tsconfig.eslint.json'
    ],
    'sourceType': 'module'
  },
  'extends': [
    '../../.eslintrc.js'
  ]
};
