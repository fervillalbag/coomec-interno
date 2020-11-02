
const creditButton = document.querySelector('#credit-button');
const modalCustom = document.querySelector('#modal-custom');
const overlay = document.querySelector('#overlay');

creditButton.addEventListener('click', e => {
   e.preventDefault();
   modalCustom.classList.add('active');
   overlay.classList.add('active');
})

overlay.addEventListener('click', (e) => {
   modalCustom.classList.remove('active');
   e.target.classList.remove('active');
})