import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { loadPosts } from "../actions";
import { getPosts } from "../utils/apiHelpers";

class PostsPage extends Component {
	componentDidMount() {
		this.fetchPosts();
	}
	componentDidUpdate() {}
	fetchPosts() {
		getPosts().then(posts => console.log(posts));
	}

	render() {
		const { category_name } = this.props.match.params;
		return (
			<div>
				<PageHeader>
					All Posts {category_name && <small>in {category_name}</small>}
				</PageHeader>
				<p>Posts</p>
			</div>
		);
	}
}

function mapStateToProps({ posts }) {
	return { posts };
}

function mapDispatchToProps(dispatch) {
	return {
		loadPosts: posts => dispatch(loadPosts(posts))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
