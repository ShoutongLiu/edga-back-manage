/*
 * @Author: your name
 * @Date: 2020-05-11 17:24:27
 * @LastEditTime: 2020-05-11 17:34:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \edu-kid-face-weapp-deve:\外接项目\edga-back-manage\.eslintrc.js
 */
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    // extends: ['plugin:vue/recommended', 'eslint:recommended'],

    // add your custom rules here
    // it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        // 禁止使用多个空格
        "no-multi-spaces": 2,
        // 禁止出现未使用过的变量
        "no-unused-vars": [2, { "vars": "all", "args": "none" }],
        // 不允许在变量定义之前使用它们
        "no-use-before-define": 0,
        // 禁止修改 const 声明的变量
        "no-const-assign": 2,
        // 控制逗号前后的空格
        "comma-spacing": [2, { "before": false, "after": true }],
        // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "array-bracket-spacing": [2, "never"],
        //  禁用行尾空格
        "no-trailing-spaces": 2,
        // 强制在花括号中使用一致的空格
        "object-curly-spacing": 0,
        // 强制在 function的左括号之前使用一致的空格
        "space-before-function-paren": [2, "always"],
        // 使用 === 替代 == allow-null允许null和undefined==
        "eqeqeq": [2, "allow-null"],
        // 关键字前后加空格
        "keyword-spacing": 2,
        // 操作符左右加空格
        "space-infix-ops": 2,
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": 2,
        // 强制在大括号中使用一致的空格
        "object-curly-spacing": [2, "always"]
    }
}
