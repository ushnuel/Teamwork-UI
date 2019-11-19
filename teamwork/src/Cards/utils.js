const removeStrings = (string) => {
  if (string.length > 120) {
    return string.substr(0, 130);
  }
  return string;
};

export default removeStrings;
