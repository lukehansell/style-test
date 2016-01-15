import React from 'react'
import merge from 'merge'
import flair from '../lib/flair'
import defaultStyle from './navItem.style'

export default (props, context) => {

	let style = merge.recursive({}, defaultStyle, context.style, props.style)

	return (
		<li className="nav-link" style={flair(style)}>
			<a href={props.link} style={flair(style.a)}>{props.text}</a>
		</li>
	)
}