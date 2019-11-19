import React from 'react';
import dateFormat from 'dateformat';

const articleComment = ({ comment }) => (
  <section className='tm-article-comments'>
    <div className='tm-comment'>{comment.comment}</div>
    <div className='tm-comment-details'>
      <span>Date created: </span>
      {dateFormat(comment.createdon, 'mmmm dS, yyyy')}
      <div>
        <span>Author: </span>
        {comment.authorid}
      </div>
    </div>
  </section>
);

export default articleComment;
