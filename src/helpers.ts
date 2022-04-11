/* eslint-disable @typescript-eslint/no-explicit-any */
export type ImportGlob = {
	defaultOnly?: boolean
	onFileName?: (path: string) => string
	onPropertyName?: (name: string) => string
}

export const pathToFilename = (path: string) => {
	return (
		path
			.replace(/^\.\/(.*)\.\w+$/, '$1')
			.split('/')
			.pop()
			?.split('.')
			.shift() || ''
	)
}

export const viteImport = async (globs: any | any[], options: ImportGlob) => {
	const {
		defaultOnly = false,
		onPropertyName = v => v,
		onFileName = pathToFilename,
	} = options

	globs = Array.isArray(globs) ? globs : [globs]

	const results: any = {}
	for (const modules of globs) {
		for (const pathName in modules) {
			const fileName = onFileName(pathName)
			const propertyName = onPropertyName(fileName)

			const module =
				typeof modules[pathName] == 'function'
					? await modules[pathName]()
					: modules[pathName]

			results[propertyName] = defaultOnly
				? module?.default ?? module
				: module
		}
	}

	return results
}
