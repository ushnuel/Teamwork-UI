import React from 'react';
import Comment from '.';

const articleComment = (props) => (
  <>
    <Comment
      route='articles'
      url='https://teamwork-dev-app.herokuapp.com/api/v1/articles/'
      object={props}
    />
  </>
);

export default articleComment;
