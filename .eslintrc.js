module.exports = {
	// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
	// This option interrupts the configuration hierarchy at this file
	// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
	root: true,
	env: {
		node: true,
		es2021: true,
		browser: true,
	},
	// Rules order is important, please avoid shuffling them
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
		'@vue/typescript/recommended',
		// https://github.com/prettier/eslint-config-prettier#installation
		// usage with Prettier, provided by 'eslint-config-prettier'.
		'prettier',
	],
	// https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
	// Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
	// `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
	parserOptions: {
		ecmaVersion: 2021,
		extraFileExtensions: ['.vue'],
		parser: require.resolve('@typescript-eslint/parser'),
	},
	plugins: ['vue', 'prettier', '@typescript-eslint'],
	rules: {
		'prefer-promise-reject-errors': 'off',
		'vue/require-default-prop': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
};
