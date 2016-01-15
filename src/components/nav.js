import React from 'react'
import NavItem from './navItem'

module.exports = (props, context) => {
	const classes = `nav ${props.className}`
	return (
		<ul className={classes}>
			{props.items.map( (nav, i) => {
				return (
					<NavItem key={i} {...nav} />
				)
			})}
		</ul>
	)
}