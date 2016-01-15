export default (...styles) => {
	const newStyle = Object.assign({}, ...styles)
	for(let i in newStyle) {
		if( typeof newStyle[i] === 'object') {
			delete newStyle[i]
		}
	}
	return newStyle
}