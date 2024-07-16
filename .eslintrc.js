module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn', // 未使用的变量
    '@typescript-eslint/no-explicit-any': 'off', // 是否允许使用any
    '@typescript-eslint/ban-types': 'off', // https://typescript-eslint.io/rules/ban-types/
  },
}
