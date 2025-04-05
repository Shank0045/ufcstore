
  
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
  


  
  click();
  

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