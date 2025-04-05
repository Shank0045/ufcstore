function slider() {
  let right = document.querySelector("#right");

  let left = document.querySelector("#left");

  let subpages = document.querySelectorAll(".subpage");

  let currentindex = 0;

  subpages[currentindex].style.display = "block";

  function nextslide() {
    subpages[currentindex].style.display = "none";

    currentindex = (currentindex + 1) % subpages.length;

    subpages[currentindex].style.display = "block";
  }

  right.addEventListener("click", nextslide);

  function previousslide() {
    subpages[currentindex].style.display = "none";

    currentindex = (currentindex - 1 + subpages.length) % subpages.length;

    subpages[currentindex].style.display = "block";
  }

  left.addEventListener("click", previousslide);
}

function click() {
  let p = document.querySelector(".clickdiv p");

  let i = document.querySelector(".clickdiv i");

  gsap.from(p, {
    y: 40,
    duration: 1,
    repeat: -1,
    yoyo: true,
  });

  gsap.from(i, {
    y: 40,
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
}

function clickaa() {
  let ufclogo = document.querySelector(".ufclogo");
  let imgcon = document.querySelector(".sdiv");

  const smallScreenQuery = window.matchMedia("(max-width: 500px)");

  function handleMediaQueryChange(e) {
    if (e.matches) {
      console.log("Small screen: Adjusting logo interaction");

      imgcon.addEventListener("mouseenter", function () {
        gsap.to(ufclogo, {
          scale: 0.8,
          opacity: 1,
          zIndex: 1,
        });
      });

      imgcon.addEventListener("mouseleave", function () {
        gsap.to(ufclogo, {
          scale: 0,
          opacity: 0,
          zIndex: 0,
        });
      });

      imgcon.addEventListener("mousemove", function (e) {
        gsap.to(ufclogo, {
          x: e.x - imgcon.getBoundingClientRect().x - 200,
          y: e.y - imgcon.getBoundingClientRect().y - 900,
        });
      });
    } else {
      console.log("Large screen: Adjusting logo interaction");

      imgcon.addEventListener("mouseenter", function () {
        gsap.to(ufclogo, {
          scale: 1,
          opacity: 1,
          zIndex: 1,
        });
      });

      imgcon.addEventListener("mouseleave", function () {
        gsap.to(ufclogo, {
          scale: 0,
          opacity: 0,
          zIndex: 0,
        });
      });

      imgcon.addEventListener("mousemove", function (e) {
        gsap.to(ufclogo, {
          x: e.x - imgcon.getBoundingClientRect().x - 720,
          y: e.y - imgcon.getBoundingClientRect().y - 290,
        });
      });
    }
  }

  handleMediaQueryChange(smallScreenQuery);

  smallScreenQuery.addEventListener("change", handleMediaQueryChange);
}

function slidx(){
  let ham=document.querySelector(".ham");

let slidebar=document.querySelector(".slidebar");


ham.addEventListener("click",function(){
  let slideleft=window.getComputedStyle(slidebar).left

 if(slideleft==="0px"){
    slidebar.style.left="-500px"
 }
 
 else if(slideleft==="-500px"){
        slidebar.style.left="0"
 }
   
})
}

slidx()


clickaa();

click();

slider();
