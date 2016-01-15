import React, {Component} from 'react'
import Header from './header'
import BlogRoll from './blogRoll'
import Drawer from './drawer'

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
				<Header brand="Style App" hamburgerClasses="visible-xs" onHamburgerClick={() => this.toggleDrawer()}>
					<ul className="nav hidden-xs right">
						{navItems.map( nav => {
							return (
								<li className="nav-link" key={nav.text}>
									<a href={nav.link}>{nav.text}</a>
								</li>
							)
						})}
					</ul>
				</Header>
				<BlogRoll />
				{this.state.displayDrawer && (
					<Drawer onHide={() => this.onHideDrawer()}>
						<ul className="nav">
							{navItems.map( nav => {
								return (
									<li className="nav-link" key={nav.text}>
										<a href={nav.link}>{nav.text}</a>
									</li>
								)
							})}
						</ul>
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
}