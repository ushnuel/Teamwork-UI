import React from 'react';

const handleResponse = (errorResponse, successResponse) => {
  let response = null;
  if (errorResponse) {
    response = <div className='tm-error-class'>{errorResponse.error}</div>;
    return response;
  }
  if (successResponse) {
    if (successResponse.data.message)
      response = (
        <div className='tm-success-class'>{successResponse.data.message}</div>
      );
    return response;
  }
};

export default handleResponse;
