import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Hoc/Layout/layout';
import Home from './Components/Home';
import SignUp from './Components/Authentication/signup';
import SignIn from './Components/Authentication/signIn';
import CreateArticle from './Components/Article/create';
import Home2 from './Components/Home/home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home2} />
          <Route path='/auth/create-user' component={SignUp} />
          <Route path='/auth/signin' component={SignIn} />
          <Route path='/articles' component={CreateArticle} />
        </Router>
      </Layout>
    );
  }
}

export default App;
