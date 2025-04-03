function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.mainloco'),
        smooth: true,
        lerp:0.10,
    });
}

locomotive()

function gl(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".mainloco"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".mainloco" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".mainloco", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".mainloco").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

gl()

function ufclogo(){
    
let ufclogo=document.querySelector(".ufclogo");





let imgcon=document.querySelector(".sdiv")


imgcon.addEventListener("mouseenter",function(){
    gsap.to(ufclogo,{
        scale: 1,
        opacity: 1,
        zIndex:1
    })
});

imgcon.addEventListener("mouseleave",function(){
    gsap.to(ufclogo,{
        scale: 0,
        opacity: 0,
        zIndex:0
    })
});

imgcon.addEventListener("mousemove",function(e){
    gsap.to(ufclogo,{
        x: e.x - imgcon.getBoundingClientRect().x-720,
        y:e.y-imgcon.getBoundingClientRect().y-290

    })
})
}

ufclogo()


function slider(){
    
let right=document.querySelector("#right");

let left=document.querySelector("#left");




let subpages=document.querySelectorAll(".subpage");

let currentindex=0;

subpages[currentindex].style.display="block";


function nextslide(){
    subpages[currentindex].style.display="none";

    currentindex=(currentindex+1)%subpages.length;

    subpages[currentindex].style.display="block"
}

right.addEventListener("click",nextslide);


function previousslide(){
    subpages[currentindex].style.display="none";

    currentindex=(currentindex-1)%subpages.length;

    subpages[currentindex].style.display="block"

}

left.addEventListener("click",previousslide)
}


slider()
