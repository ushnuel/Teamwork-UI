import React from 'react';
import Comment from '.';

const articleComment = (props) => (
  <>
    <Comment
      route='articles'
      url='http://localhost:5000/api/v1/articles/'
      object={props}
    />
  </>
);

export default articleComment;
