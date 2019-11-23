import React, { Component } from 'react';
import utils from './utils';
import checkInput from '../Components/Helpers/Forms/checkInput';
import '../Components/Helpers/Forms/form.css';

class Form extends Component {
  InputHandler = (elementType, submitButton, smallTags) => {
    checkInput(elementType, submitButton, smallTags);
  };
  timeOutHandler = () => {
    const input = document.getElementById('tm-response');
    if (input) {
      input.style.display = 'none';
    }
    setTimeout(this.timeOutHandler, 20000);
  };
  removeProps = ({ success, errorResponse, successResponse, ...others }) => {
    return others;
  };
  check = (response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  };
  setToken = () => {
    let token = sessionStorage.getItem('token');
    if (token) {
      token = sessionStorage.getItem('token');
    }
    return token;
  };
  // getOneHandler = (url) => {
  //   return fetch(url, utils('GET', null, this.setToken()));
  // };
  getHandler = (url) => {
    return fetch(url, utils('GET', null, this.setToken()));
  };
  editHandler = (url, data, event) => {
    event.preventDefault();
    return fetch(url, utils('PATCH', JSON.stringify(data), this.setToken()));
  };
  deleteHandler = (url) => {
    return fetch(url, utils('DELETE', null, this.setToken()));
  };
  postImageHandler = (url, form) => {
    return fetch(url, {
      headers: { Authorization: `Bearer ${this.setToken()}` },
      body: form,
      method: 'POST',
    });
  };
  postHandler = (data, url, event) => {
    event.preventDefault();
    return fetch(url, utils('POST', JSON.stringify(data), this.setToken()));
  };
  render() {
    return <></>;
  }
}

export default Form;
