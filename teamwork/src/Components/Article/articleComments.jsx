import React from 'react';
import dateFormat from 'dateformat';

const articleComment = ({ comment }) => (
  <>
    <div className='tm-comment-author'>Emmanuel</div>
    <section className='tm-article-comments'>
      <div className='tm-comment'>{comment.comment}</div>
      <div className='tm-comment-details'>{dateFormat(comment.createdon, 'mmmm dS, yyyy')}</div>
    </section>
  </>
);

export default articleComment;
