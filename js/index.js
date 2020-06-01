var swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   spaceBetween: 10,
   coverflowEffect: {
     rotate: 60,
     stretch: 0,
     depth: 300,

     modifier: 1,
     slideShadows : true,
   },
   pagination: {
     el: '.swiper-pagination',
   },
 });





 var burger=document.querySelector(".burger-action") ;
var lines=document.querySelectorAll(".burger-action div") ;

var nav=document.querySelector(".navigation-menu");
burger.addEventListener("click",()=>{
burgerchange() ;
nav.classList.toggle("nav-active") ;
})


function burgerchange(){
  lines.forEach((l,index)=>{

    l.classList.toggle(`line${index+1}-active`) ;
    })
}








 var switcher= document.querySelectorAll('.project .picker ul li') ;
 var swipecontainer=document.querySelectorAll('.project .project-switcher .swiper-container') ;


 switcher.forEach((l)=>{
     var index=l.getAttribute('key') ;
     l.addEventListener('click',()=>{
       
       swipecontainer.forEach(s=>{
           s.classList.remove('project-current') ;
       })
       switcher.forEach(s=>{
        s.classList.remove('active') ;
    })
      switcher[index-1].classList.add('active') ;
       swipecontainer[index-1].classList.add('project-current')
       
     })
 })








 gsap.registerPlugin(ScrollToPlugin);
var contact=document.querySelector('header .navbar ul li button').addEventListener("click"
,(e)=>{
  e.preventDefault() ;
  burgerchange() ;
  nav.classList.toggle("nav-active") ;
  gsap.to(window,{duration:1.5,scrollTo:{y:"#section6",offsetY:90,ease:Power3.inout}})
  
})
var skill=document.querySelector('header .navbar ul .skillsection a').addEventListener("click"
,(e)=>{
  e.preventDefault() ;
  burgerchange() ;
  nav.classList.toggle("nav-active") ;
  gsap.to(window,{duration:1,scrollTo:{y:"#section3",offsetY:80}})
  
})
var project=document.querySelector('header .navbar ul .projectsection a').addEventListener("click"
,(e)=>{
  e.preventDefault() ;
  burgerchange() ;
  nav.classList.toggle("nav-active") ;
  gsap.to(window,{duration:.5,scrollTo:{y:"#section2",offsetY:80}})
  
})

var home=document.querySelector('header .navbar ul .home a').addEventListener("click"
,(e)=>{
  e.preventDefault() ;
  burgerchange() ;
  nav.classList.toggle("nav-active") ;
  gsap.to(window,{duration:.5,scrollTo:{y:"header",offsetY:90}})
  
})


