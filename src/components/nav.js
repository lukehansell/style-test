import React from 'react'
import merge from 'merge'
import NavItem from './navItem'
import defaultStyle from './nav.style'
import flair from '../lib/flair'

module.exports = (props, context) => {
	const classes = `nav ${props.className}`

	let style = merge.recursive({}, defaultStyle, context.style, props.style)

	return (
		<ul className={classes} style={flair(style)}>
			{props.items.map( (nav, i) => {
				return (
					<NavItem key={i} {...nav} style={style.navItem} />
				)
			})}
		</ul>
	)
}