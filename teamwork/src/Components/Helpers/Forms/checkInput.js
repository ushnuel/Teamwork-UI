import checkEvent from './checkEvent';

const checkInput = (inputType, submitButton, smallTags) => {
  for (let i = 0; i < inputType.length; i += 1) {
    inputType[i].addEventListener('blur', (event) => {
      checkEvent(event, inputType[i], submitButton, smallTags[i]);
    });
  }
};

export default checkInput;
