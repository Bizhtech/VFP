var navbarToggler=document.getElementById('navbarToggler');
var mobNavBar=document.getElementById("mob_banner");
var mobNavBarToggle=document.getElementById('mobNavBarToggle');

window.addEventListener('resize', function(){
  console.log(window.innerWidth);
  if (window.innerWidth>=992){
    // mobNavBar.style.display="none";
    mobNavBar.style.top="-1200px";

  }else {

  }
});
navbarToggler.addEventListener("click",function(e){
  e.preventDefault();
  // mobNavBar.style.display="block";
  // setTimeout(function(){
    mobNavBar.style.top="0px";
  // },10);
});

mobNavBarToggle.addEventListener("click",function(e){
  e.preventDefault();
  mobNavBar.style.top="-1200px";


});
