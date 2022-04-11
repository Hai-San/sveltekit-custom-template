module.exports = {
    root: true,
    extends: [ 'eslint:recommended' ],
    plugins: [ 'svelte3' ],
    overrides: [ { files: [ '*.svelte' ], processor: 'svelte3/svelte3' } ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        'no-console': [
            'error',
            {
                allow: [ 'error' ]
            }
        ],
        'quotes': [ 'error', 'single' ],
        'comma-dangle': [ 'error', 'never' ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': 'first',
                'MemberExpression': 1,
                'ObjectExpression': 1,
                'FunctionExpression': {
                    'parameters': 'first'
                },
                'FunctionDeclaration': {
                    'parameters': 'first'
                },
                'CallExpression': {
                    'arguments': 'first'
                },
                'flatTernaryExpressions': true,
                'offsetTernaryExpressions': true
            }
        ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'semi': [ 'error', 'always' ]
    }
};

