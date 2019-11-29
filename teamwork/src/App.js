import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
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
import DeleteArticle from './Components/Article/deleteArticle';
import CreateArticleComment from './Components/Comment/articleComment';
import ViewGif from './Components/Gif/viewOne';
import CreateGifComment from './Components/Comment/gifComment';
import DeleteGif from './Components/Gif/deleteGif';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home2} />
            <Route path='/auth/create-user' component={SignUp} />
            <Route path='/auth/signin' component={SignIn} />
            <Route path='/articles' exact component={CreateArticle} />
            <Route path='/gifs' exact component={CreateGif} />
            <Route path='/feeds' component={ViewAllArticles} />
            <Route path='/articles/:id' exact component={ViewOneArticle} />
            <Route path='/articles/:id/edit' component={EditArticle} />
            <Route path='/articles/:id/delete' component={DeleteArticle} />
            <Route path='/articles/:id/comment' component={CreateArticleComment} />
            <Route path='/gifs/:id' exact component={ViewGif} />
            <Route path='/gifs/:id/comment' component={CreateGifComment} />
            <Route path='/gifs/:id/delete' component={DeleteGif} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
