import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Landing from './components/pages/Landing/Landing';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer/Footer';
import { Layout } from './components/Layout/Layout';
import {connect} from 'react-redux';
import {fetchUser} from './actions/authActions'

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
