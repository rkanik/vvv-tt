export const lazyImport = (path: string) => {
	return () => import(path)
}
