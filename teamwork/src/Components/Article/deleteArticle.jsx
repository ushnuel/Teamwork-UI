import React from 'react';
import DeleteHelper from '../Helpers/Utils/deleteHelper';

const deleteArticle = (props) => (
  <DeleteHelper
    parent={props}
    url='https://teamwork-dev-app.herokuapp.com/api/v1/articles/'
    route='articles'
  />
);
export default deleteArticle;
