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
    setTimeout(this.timeOutHandler, 10000);
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
  getOneHandler = (url) => {
    const response = fetch(
      url,
      utils('GET', 'application/json', null, this.setToken()),
    );
    return response;
  };
  getAllHandler = (url) => {
    const response = fetch(
      url,
      utils('GET', 'application/json', null, this.setToken()),
    );
    return response;
  };
  postHandler = (data, url, event, form) => {
    let contentType = 'application/json';
    let body = JSON.stringify(data);
    if (form) {
      body = form;
      contentType = undefined;
    }
    event.preventDefault();
    const response = fetch(
      url,
      utils('POST', contentType, body, this.setToken()),
    );
    return response;
  };
  render() {
    return <></>;
  }
}

export default Form;
