module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 👈 importante para permitir module.exports
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
