import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import logo from "../logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { loadCategories } from "../actions";
import { getCategories } from "../utils/apiHelpers";

class NavHeader extends Component {
	constructor(props) {
		super(props);
		this.fetchCategories();
	}
	fetchCategories() {
		getCategories().then(categories => {
			this.props.loadCategories(categories);
		});
	}
	render() {
		const { categories } = this.props;
		
		return (
			<div className="App-header">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<LinkContainer to="/">
								<img src={logo} className="App-logo" alt="Readable!" />
							</LinkContainer>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<LinkContainer to="/">
								<NavItem> All Posts</NavItem>
							</LinkContainer>
							<NavDropdown
								eventKey={3}
								title="Categories"
								id="basic-nav-dropdown"
							>
								{categories != null &&
									categories.map(category => (
										<LinkContainer
											to={`/c/${category.path}`}
											key={category.name}
										>
											<MenuItem> {category.name}</MenuItem>
										</LinkContainer>
									))}
							</NavDropdown>
						</Nav>
						<Nav pullRight>
							<LinkContainer target="_blank" to="/github/">
								<NavItem>View on Github</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadCategories: categories => dispatch(loadCategories(categories))
	};
}

function mapStateToProps({ categories }) {
	
	return {
		categories: Object.keys(categories).map(k => categories[k])
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
