// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        camelcase: 'error',
        'spaced-comment': 'error',
        quotes: ['error', 'single'],
        'no-duplicate-imports': 'error',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
