import React, {Component} from 'react'
import TagList from './tagList'

export default class BlogItem extends Component {
	render() {
		return (
			<article>
				<h2>{this.props.title}</h2>
				<p>{this.props.content}</p>
				{this.props.tags && <TagList tags={this.props.tags} />}
			</article>
		)
	}
}

BlogItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired,
	tags: React.PropTypes.array
}