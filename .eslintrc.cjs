module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
     /** @js */
     quotes: [2, 'single'], // 强制使用一致的单引号
     semi: [2, 'never'], // 强制是否使用分号
     'no-undef': 'error', // 不能有未定义的变量
     'no-var': 'error', // 要求使用 let 或 const 而不是 var
     'no-debugger': 'off', // 是否允许使用debugger
     'no-console': 'off', //
	}
};
