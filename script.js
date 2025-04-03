

function gl() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".mainloco"),
        smooth: true,
    });

    // Make sure ScrollTrigger is synced with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Tell ScrollTrigger to use Locomotive Scroll for scrolling
    ScrollTrigger.scrollerProxy(".mainloco", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".mainloco").style.transform ? "transform" : "fixed"
    });

    

    // Handle window resize and refresh ScrollTrigger
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // Refresh ScrollTrigger after everything is set up
    ScrollTrigger.refresh();

    // Fix for possible issues after page reload: call update() method
    window.addEventListener('load', () => {
        locoScroll.update();
        ScrollTrigger.refresh();
    });

    window.addEventListener('resize', () => {
        locoScroll.update();
        ScrollTrigger.refresh();
    });
}





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

    currentindex=(currentindex-1 +subpages.length )%subpages.length;

    subpages[currentindex].style.display="block"

}

left.addEventListener("click",previousslide)
}



gl()
ufclogo()
slider()
