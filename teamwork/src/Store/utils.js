const Option = (method, contentType, data, setToken) => {
  let options = null;
  switch (method) {
    case 'GET' || 'DELETE':
      options = {
        method: method,
        headers: {
          'Content-Type': contentType,
          Authorization: `Bearer ${setToken}`,
        },
      };
      break;
    case 'POST' || 'PATCH':
      options = {
        method: method,
        body: data,
        headers: {
          'Content-Type': contentType,
          Authorization: `Bearer ${setToken}`,
        },
      };
      break;
    default:
      break;
  }
  return options;
};

export default Option;
