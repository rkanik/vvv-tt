let assets: any

const useAsset = (path?: string) => {
	if (!path) return ''
	if (!assets) assets = import.meta.globEager('@/assets/img/**/*.*')
	if (path.startsWith('@/')) path = path.replace('@/', '')
	const possiblePath = Object.keys(assets).find(key =>
		key.endsWith(path || '')
	)
	return possiblePath ? assets[possiblePath].default : null
}

export { useAsset }
