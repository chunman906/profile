const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');



myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();
  if (nameInput.value === '' || passwordInput.value === '') {
    msg.classList.add('error');
    msg.style.background = '#333';
    msg.innerHTML = 'Your input is empty!';
  } else {
    console.log('success!');
  }
}

// Event Listener
// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('.container').style.background = '#444';
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>HELLO !!!</h1>';
// });


// Single element
// console.log(document.getElementById('button-style'));
// console.log(document.querySelector('h1'));


// Mutiple element
// const allitems = document.querySelector('.items');

// allitems.firstElementChild.textContent = 'Hello!';

// allitems.lastElementChild.innerHTML = '<h2>Good to see you!</h2>';
