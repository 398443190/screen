module.exports = {
    root: false,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'func-call-spacing': 'off',
        'space-in-parens': 'off',
        'eol-last': 'off',
        "semi": 'off',
        'comma-dangle': 'off',
        'quotes': 'off',
        "space-before-function-paren": 'off',
        'no-unused-expressions': 'off',
        'vue/no-unused-components': 'off',
        'quote-props': 'off',
        'key-spacing': 'off',
        'object-curly-spacing': 'off',
        'array-bracket-spacing': 'off',
        'comma-spacing': 'off',
        'padded-blocks': 'off',
        'no-trailing-spaces': 'off',
        'space-before-blocks': 'off'
    }
}