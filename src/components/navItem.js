import React from 'react'
export default ({text, link}) => {
	return (
		<li className="nav-link">
			<a href={link}>{text}</a>
		</li>
	)
}