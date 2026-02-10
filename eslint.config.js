module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
        rules: {
            // Punto y coma obligatorio
            'semi': ['error', 'always'],
            // Comillas simples
            'quotes': ['error', 'single'],
            // Sin variables sin usar
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            // Espacios antes de llaves de función
            'space-before-blocks': 'error',
            // Sin espacios múltiples
            'no-multi-spaces': 'error',
            // Usar const cuando sea posible
            'prefer-const': 'error',
            // Sin var, usar let o const
            'no-var': 'error',
            // Comparaciones estrictas 
            'eqeqeq': ['error', 'always'],
        },
    },
];