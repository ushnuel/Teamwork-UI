import React from 'react';
import DeleteHelper from '../Helpers/Utils/deleteHelper';

const deleteGif = (props) => (
  <DeleteHelper parent={props} url='http://localhost:5000/api/v1/gifs/' route='gifs' />
);
export default deleteGif;
