import React, {Component} from 'react'

export default class Header extends Component{

	render() {
		return (
			<div className="header">
				<h1 className="brand">{this.props.brand}</h1>
				{this.props.children}
				{this.props.displayHamburger !== 'never' && ( <button className={`hamburger ${this.props.hamburgerClasses}`} onClick={this.props.onHamburgerClick}/> ) }
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