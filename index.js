const input = document.querySelector('#subscribe');
const inputLabel = document.querySelector('.label');
const subscribeBtn = document.querySelector('.subscribe-button');

inputLabel.style.visibility = 'hidden';
input.addEventListener('click', function(e){
    inputLabel.style.visibility = 'visible';
})

input.addEventListener('blur', function(e){
    if(input.value === ''){
        inputLabel.style.visibility = 'hidden';
    } 
})

subscribeBtn.addEventListener('click', function(e){
    if(input.value !== ''){
        input.value = '';
        inputLabel.style.visibility = 'hidden';
    }else{
        inputLabel.textContent = 'Please enter a valid email address.'
    }
})