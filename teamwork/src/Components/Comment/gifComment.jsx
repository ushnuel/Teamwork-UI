import React from 'react';
import Comment from '.';

const gifComment = (props) => (
  <>
    <Comment
      route='gifs'
      url='https://teamwork-dev-app.herokuapp.com/api/v1/gifs/'
      object={props}
    />
  </>
);

export default gifComment;
