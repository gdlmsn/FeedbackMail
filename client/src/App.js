import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchUser} from './actions/authActions';

import Login from './components/pages/Login/Login';
import Landing from './components/pages/Landing/Landing';
import Dashboard from './components/pages/Dashboard/Dashboard';

import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Layout } from './components/Layout/Layout';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <>
        <Header />
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard}/>
              {/* <Route exact path='/watchlist' component={Watchlist}/>
            <Route exact path='/portfolio' component={Portfolio}/> */}
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {fetchUser})(App);
