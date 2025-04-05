
  
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

  function size(){
    let div = document.querySelectorAll(".sizes div");

  div.forEach((val) => {
    val.addEventListener("click", function() {
      const currentColor = window.getComputedStyle(val).backgroundColor;

      if (currentColor === "rgb(255, 255, 255)") {  
        val.style.backgroundColor = "red";        
      } else {
        val.style.backgroundColor = "white"   
      }
    })
  })

  }

  size()
  

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
  
  

  let imgs=document.querySelectorAll(".samllimg img");

let mainimg=document.getElementById("mimg")

let imgsrc=["images/mm.webp","images/ai1.webp","images/ai2.webp","images/ai3.webp"];


imgs.forEach((img,index)=>{
   img.addEventListener("click",function(){
      mainimg.src=imgsrc[index]
   })
})