import React from 'react';
import EditArticle from '../Helpers/Forms/editArticle';
import Header from '../Helpers/Header/header';

const signIn = (props) => (
  <section>
    <Header name='Edit Article' />
    <EditArticle article={props} />
  </section>
);

export default signIn;
