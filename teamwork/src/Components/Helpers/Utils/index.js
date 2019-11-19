import React from 'react';

const handleResponse = (errorResponse, successResponse) => {
  let response = null;
  if (errorResponse) {
    response = (
      <div className='tm-error-class'>{errorResponse.error.toLowerCase()}</div>
    );
    return response;
  }
  if (successResponse) {
    response = (
      <div className='tm-success-class'>
        {successResponse.data.message.toLowerCase()}
      </div>
    );
    return response;
  }
};

export default handleResponse;
