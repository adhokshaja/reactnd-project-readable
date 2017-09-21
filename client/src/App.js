import React, { Component } from 'react';
import { connect } from "react-redux";

import {Switch, Route, withRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavHeader from './components/navheader'

import PostsPage from './pages/PostsPage';



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavHeader/>
        <div className='container'>
       
        <Switch>
          <Route exact path= "/" component={PostsPage}/> 
          <Route exact path= "/c/:category_name" component={PostsPage} /> 
          <Route path='/github' component={() => window.location = 'https://github.com/adhokshaja/reactnd-project-readable'}/>
        </Switch>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
	return {
		//loadCategories: categories => dispatch(loadCategories(categories))
	};
}
function mapStateToProps({ categories }) {
return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
