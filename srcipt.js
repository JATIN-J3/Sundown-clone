
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}


function a1(){
    var e1=document.querySelector("#e1");
var box1=document.querySelector("#box1");
e1.addEventListener("mouseenter",function(){
    box1.style.display="block"
       
})

e1.addEventListener("mouseleave",function(){
    box1.style.display="none"
})


var e2=document.querySelector("#e2");

var b2=document.querySelector("#box2");
e2.addEventListener("mouseenter",function(){
    b2.style.display="block"
       
})

e2.addEventListener("mouseleave",function(){
    b2.style.display="none"
})
//


var e3=document.querySelector("#e3");

var b3=document.querySelector("#box3");
e3.addEventListener("mouseenter",function(){
    b3.style.display="block"
       
})

e3.addEventListener("mouseleave",function(){
    b3.style.display="none"
})

//

var e4=document.querySelector("#e4");

var b4=document.querySelector("#box4");
e4.addEventListener("mouseenter",function(){
    b4.style.display="block"
       
})

e4.addEventListener("mouseleave",function(){
    b4.style.display="none"
})
//
var e5=document.querySelector("#e5");
var b5=document.querySelector("#box5");
e5.addEventListener("mouseenter",function(){
    b5.style.display="block"
       
})

e5.addEventListener("mouseleave",function(){
    b5.style.display="none"
})

/////////
var e6=document.querySelector("#e6");

var b6=document.querySelector("#box6");
e6.addEventListener("mouseenter",function(){
    b6.style.display="block"
       
})

e6.addEventListener("mouseleave",function(){
    b6.style.display="none"
})
//
var e7=document.querySelector("#e7");
var b7=document.querySelector("#box7");
e7.addEventListener("mouseenter",function(){
    b7.style.display="block"
       
})

e7.addEventListener("mouseleave",function(){
    b7.style.display="none"
})
}
a1();
var load=document.querySelector("#loader");
setTimeout(function(){
    load.style.top="-100%"
},1800)

swiperAnimation();