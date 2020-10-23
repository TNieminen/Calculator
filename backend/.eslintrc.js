module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'jsdoc',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": ["error", "never"],
    // "no-mixed-spaces-and-tabs": "error",
    // spacing
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "func-call-spacing":["error","never"],
    "arrow-spacing":["error", { "before": true, "after": true }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
        node: true
      },
    },
  ],
}
