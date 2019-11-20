import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './Hoc/Layout/layout';
import Home from './Components/Home';
import SignUp from './Components/Authentication/signup';
import SignIn from './Components/Authentication/signIn';
import CreateArticle from './Components/Article/create';
import Home2 from './Components/Home/home';
import CreateGif from './Components/Gif/createGif';
import ViewAllArticles from './Components/Article/viewAll';
import ViewOneArticle from './Components/Article/viewOne';
import EditArticle from './Components/Article/editArticle';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home2} />
            <Route path='/auth/create-user' component={SignUp} />
            <Route path='/auth/signin' component={SignIn} />
            <Route path='/articles' exact component={CreateArticle} />
            <Route path='/gifs' component={CreateGif} />
            <Route path='/feeds' component={ViewAllArticles} />
            <Route path='/articles/:id' exact component={ViewOneArticle} />
            <Route path='/articles/:id/edit' component={EditArticle} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
