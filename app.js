const toggler = document.querySelector('.ham');
const ul = document.querySelector('#ul');
toggler.addEventListener('click',function(){
ul.classList.toggle('ul-toggle')
})