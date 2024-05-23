

let cursor = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mouseover",function(details){
    cursor.style.left =details.x +"px";
    cursor.style.top =details.y +"px";
    blur.style.left =details.x -100 +"px";
    blur.style.top =details.y -100 +"px";
    // console.log('hey');
    
})

let foot1 = document.querySelectorAll("#f2 h3, #f3 h3 , #f4 h4");
// console.log(foot1);
foot1.forEach(function(elem){
    elem.addEventListener("mouseover",function(){
        elem.style.scale = 1.1;
        // elem.style.transition ="all ease 3s;";
    })
})

foot1.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        elem.style.scale = 1;   
    })
})


let h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseover",function(){
        cursor.style.scale = 3;
        cursor.style.border ="0.5px solid #fff";
        cursor.style.backgroundColor = "transparent"
    })
    
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border ="0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E"
    })
    
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scoller:"body",
        // markers:true,
        scrub:3,
        start:"top 60%",
        end:"top 55%",
    }
})

gsap.from(".card",{
    opacity:0,
    scale:0.5,
    duration:0.5,
    scrollTrigger:{
        trigger:".card",
        scoller:"body",
        // markers:true,
        scrub:1,
        start:"top 70%",
        end:"top 55%",
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        scrub:4,
        start:"top 55%",
        end:"top 45%",
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#page4 h1",{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:4,
    }
})