/* Add any JavaScript you need to this file. */
const data = [
  './image/1.jpg',
  './image/2.jpg',
  './image/3.jpg',
  './image/4.jpg',
  './image/5.jpg',
  './image/6.jpg',
  './image/7.jpg',
  './image/8.jpg'
];

let errors = {
  postalCode: ''
};

const handlers = {
  orderHandler: function(e) {
    const orderText = document.querySelector('#OrderValue');
    const { value } = e.target;
    if (value === 'Order') {
      orderText.style.display = 'flex';
      orderText.value = '';
    } else {
      orderText.style.display = 'none';
    }
  },
  postalHandler: function(e) {
    const postalRegex = /^[A-Za-z][0-9][A-Za-z][ ]*[0-9][A-Za-z][0-9]$/;
    const { value } = e.target;
    const postalError = document.querySelector('#postalError');
    if (postalRegex.test(value)) {
      errors.postalCode = '';
      postalError.innerText = errors.postalCode;
      postalError.style.display = 'none';
    } else {
      errors.postalCode = 'Postal code should follow the rule(A1A 1A1)';
      postalError.innerText = errors.postalCode;
      postalError.style.display = 'block';
    }
  },
  submitHandler: function() {
    for (let key in errors) {
      if (errors[key] !== '') {
        console.log(errors[key]);
        return false;
      }
    }
    return true;
  }
};

function getBackgroundImage() {
  const backgroundPhoto = document.querySelector('#backgroundPhoto');
  let count = 0;
  backgroundPhoto.style.backgroundImage = "url('./image/4.jpg')";
  setInterval(function() {
    backgroundPhoto.style.backgroundImage = `url(${data[count++ % data.length]})`;
  }, 3000);
}

window.onload = function() {
  getBackgroundImage();
  const sendEmailForm = document.querySelector('#sendEmail');
  sendEmailForm.onsubmit = handlers.submitHandler;
  const userPostalCode = document.querySelector('#userPostalCode');
  userPostalCode.addEventListener('input', handlers.postalHandler);
  const orderText = document.querySelector('#OrderValue');
  orderText.style.display = 'none';

  const orderRadio = document.querySelector('#Order');
  const Question = document.querySelector('#Question');
  const Comment = document.querySelector('#Comment');

  orderRadio.addEventListener('change', handlers.orderHandler);
  Question.addEventListener('change', handlers.orderHandler);
  Comment.addEventListener('change', handlers.orderHandler);
};
