import React, {Component} from 'react'
import TagItem from './tagItem'

export default ({tags = []}) => {
	return (
		<ul className="tag-list">
			{tags.map( tag => {
				return (
					<TagItem key={`tag-${tag}`} tag={tag} />
				)
			})}
		</ul>
	)
}