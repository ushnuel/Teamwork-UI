import React from 'react';
import CreateArticle from '../Helpers/Forms/article';
import Header from '../Helpers/Header/header';

const signIn = () => (
  <section>
    <Header name='Create Article' />
    <CreateArticle />
  </section>
);

export default signIn;
