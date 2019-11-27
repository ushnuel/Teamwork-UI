import React from 'react';
import DeleteHelper from '../Helpers/Utils/deleteHelper';

const deleteArticle = (props) => (
  <DeleteHelper parent={props} url='http://localhost:5000/api/v1/articles/' route='articles' />
);
export default deleteArticle;
