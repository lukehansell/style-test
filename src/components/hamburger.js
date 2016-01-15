import React from 'react'
import merge from 'merge'
import flair from '../lib/flair'
import defaultStyle from './hamburger.style.js'
export default (props, context) => {
	let style = merge.recursive({}, defaultStyle, context.style, props.style)
	return (
		<button className={`hamburger ${props.className}`} onClick={props.onClick} style={flair(style)}>|||</button>
	)
}