module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		// Add under other rules
		'@vue/prettier',
		'prettier',
		// '@vue/prettier/@typescript-eslint',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	plugins: ['vue', 'prettier', '@typescript-eslint'],
	rules: {
		// Enable vue/script-setup-uses-vars rule
		'vue/script-setup-uses-vars': 'error',

		'prefer-promise-reject-errors': 'off',
		'vue/require-default-prop': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		"prettier/prettier": [
			"error",
			{
				"endOfLine": "lf"
			},
		],
	},
}
