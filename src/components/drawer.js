import React, {Component} from 'react'

export default class Drawer extends Component {
	render() {
		return (
			<div className="drawer-background" onClick={this.props.onHide}>
				<div className="drawer">
					{this.props.children}
				</div>
			</div>
		)
	}
}

Drawer.propTypes = {
	onHide: React.PropTypes.func
}