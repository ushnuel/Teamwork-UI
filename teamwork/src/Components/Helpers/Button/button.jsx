import React from 'react';
import './button.css';

const button = ({ classname, writeup }) => (
  <button className={classname}>{writeup}</button>
);

export default button;
