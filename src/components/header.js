import React, {Component} from 'react'
import Hamburger from './hamburger'
import merge from 'merge'
import defaultStyle from './header.style.js'
import flair from '../lib/flair'

export default class Header extends Component{

	render() {
		let style = merge.recursive({}, defaultStyle, this.context.style, this.props.style)

		return (
			<div className="header" style={flair(style.header)}>
				<h1 className="brand" style={flair(style.header.brand)}>{this.props.brand}</h1>
				{this.props.children}
				{this.props.displayHamburger !== 'never' && ( <Hamburger className={this.props.hamburgerClasses} onClick={this.props.onHamburgerClick}/> ) }
			</div>
		)
	}
}

Header.propTypes = {
	brand: React.PropTypes.string,
	hamburgerClasses: React.PropTypes.string,
	onHamburgerClick: React.PropTypes.func
}

Header.defaultProps = {
	onHamburgerClick: () => {console.log('clicky!')}
}

Header.contextTypes = {
	style: React.PropTypes.object
}
