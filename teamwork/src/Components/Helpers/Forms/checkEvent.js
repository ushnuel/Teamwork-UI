const checkInput = (event, input, submitButton, smallTag) => {
  if (event.target.value.length === 0) {
    input.style.border = 'thin solid red';
    smallTag.style.display = 'block';
    submitButton.setAttribute('disabled', 'true');
  } else {
    input.style.border = 'thin solid green';
    smallTag.style.display = 'none';
    submitButton.removeAttribute('disabled');
  }
};

export default checkInput;
