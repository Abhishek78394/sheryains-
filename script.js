const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});


let show = document.querySelector(".show");
let shadow = document.querySelector(".shadow");
show.addEventListener("mouseover",function(){
   show.classList.add("shadow")
});
show.addEventListener("mouseleave",function(){
    show.classList.remove("shadow")
 });
let sho = document.querySelector(".sho");

 sho.addEventListener("mouseover",function(){
    sho.classList.add("shadow")
 });
 sho.addEventListener("mouseleave",function(){
     sho.classList.remove("shadow")
  });
 
 

 const left_1 =document.querySelector("#left-1");
 const right_1 =document.querySelector("#right-1");
 left_1.addEventListener("click",function(){

 })

function scrollwindow() {
   window.scrollTo(-25,0)
}