import React from 'react';
import Comment from '.';

const gifComment = (props) => (
  <>
    <Comment
      route='gifs'
      url='http://localhost:5000/api/v1/gifs/'
      object={props}
    />
  </>
);

export default gifComment;
