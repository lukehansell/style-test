import React, {Component} from 'react'
import Header from './header'
import BlogRoll from './blogRoll'
import Drawer from './drawer'
import Nav from './nav'

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			displayDrawer: false
		}
	}

	render() {

		const navItems = [{
			text: 'home',
			link: '/'
		}, {
			text: 'away',
			link: '#away'
		}]

		return (
			<div className="app">
				<Header brand="Style App" hamburgerClasses="visible-xs" onHamburgerClick={() => this.toggleDrawer()} style={{header: {}}}>
					<Nav items={navItems} className="hidden-xs right"/>
				</Header>
				<BlogRoll />
				{this.state.displayDrawer && (
					<Drawer onHide={() => this.onHideDrawer()}>
						<Nav items={navItems} />
					</Drawer>
				)}
			</div>
		)
	}

	onHideDrawer() {
		this.setState({displayDrawer: false});
	}

	showDrawer() {
		this.setState({displayDrawer: true});
	}

	toggleDrawer() {
		this.setState({displayDrawer: !this.state.displayDrawer});
	}

	getChildContext() {
		return {
			style: {
				header: {
					
				}
			}
		}
	}
}

App.childContextTypes = {
	style: React.PropTypes.object
}
