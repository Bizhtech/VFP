var subButton=document.getElementById('sendMessage');
var it1=document.getElementById('formItem-1');
var it2=document.getElementById('formItem-2');
var it3=document.getElementById('formItem-3');
var it4=document.getElementById('formItem-4');

subButton.addEventListener("click", function(e) {
  if(it1.value==="" || it2.value==="" || it3.value==="" || it4.value===""){
    e.preventDefault();
    alert('Please fill in the fields');
  }else{
    alert('Submitted! I will get back to you soon.');
  }
});
