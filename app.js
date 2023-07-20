let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let firstButton=document.getElementById('button');
let firstEmailInput=document.getElementById('yourEmail');


firstButton.addEventListener('click', checkFirstEmail)
 function checkFirstEmail(){
    const email=firstEmailInput.parentElement;
    const errorMessage=email.querySelector('small');
    if(!firstEmailInput.value.match(pattern)){
    errorMessage.style.display="block"
}
   else{
    errorMessage.style.display="none"
   }
 }