type Size = {
	width?: number | string
	height?: number | string
}

const useSize = (size: Size) => {
	const units = ['px', 'em', 'rem', '%', 'vh', 'vw', 'auto']

	const toSize = (value: number | string = 'auto'): string => {
		if (!value) return value.toString()
		if (units.some(e => value.toString().endsWith(e))) {
			return value.toString()
		}
		return `${value}px`
	}

	const width = toSize(size.width)
	const height = toSize(size.height)

	return {
		width,
		height,
	}
}

export { useSize }
