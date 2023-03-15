/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  env: {
    brower: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:prettier/recommended", // 使 eslint 使用 prettierrc 的规则来校验，避免两者之间的格式冲突，添加到数组的最后一个元素覆盖来去除不必要的规则冲突。
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // "vue/multi-word-component-names": 0,
  },
  parserOptions: {
    ecmaVersion: "latest",
    // parser: "@typescript-eslint/parser",
    // sourceType: "module",
  },
  // globals: {
  //   defineOptions: "readonly",
  // },
}
