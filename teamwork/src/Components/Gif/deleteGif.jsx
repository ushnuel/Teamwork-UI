import React from 'react';
import DeleteHelper from '../Helpers/Utils/deleteHelper';

const deleteGif = (props) => (
  <DeleteHelper
    parent={props}
    url='https://teamwork-dev-app.herokuapp.com/api/v1/gifs/'
    route='gifs'
  />
);
export default deleteGif;
