import React, { Component } from 'react';
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
  getAllHandler = (url) => {
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.setToken()}`,
      },
    };
    const response = fetch(url, init);
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
    const fetchData = {
      method: 'POST',
      body: `${body}`,
      headers: {
        'Content-Type': `${contentType}`,
        Authorization: `Bearer ${this.setToken()}`,
      },
    };
    const response = fetch(url, fetchData);
    return response;
  };
  render() {
    return <></>;
  }
}

export default Form;