// import { defineAsyncComponent } from '@vue/composition-api'

/* eslint-disable @typescript-eslint/no-explicit-any */
const views = import.meta.globEager('./**/*.vue')

export default Object.entries(views).reduce((acc: any, [key, value]) => {
	const path = key.replace(/^\.\/(.*)\.vue/, '$1')
	acc[path] = value.default
	return acc
}, {})
