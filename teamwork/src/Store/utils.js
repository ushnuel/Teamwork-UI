const Option = (method, data, setToken) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${setToken}`,
  };
  let options = null;
  switch (method) {
    case 'GET':
      options = {
        method: method,
        headers: headers,
      };
      break;
    case 'POST':
      options = {
        method: method,
        body: data,
        headers: headers,
      };
      break;
    case 'PATCH':
      options = {
        method: method,
        body: data,
        headers: headers,
      };
      break;
    case 'DELETE':
      options = {
        method: method,
        headers: headers,
      };
      break;
    default:
      break;
  }
  return options;
};

export default Option;
