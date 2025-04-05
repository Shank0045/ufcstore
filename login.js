
  
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
  
  slidx();


  function login(){
  let notmember=document.getElementById("nm");

  let log=document.querySelector(".log");


  let rigi=document.querySelector(".rigi")


  let alredaymember=document.getElementById("al");

  console.log(notmember)

  notmember.addEventListener("click",function(){
    
    console.log("ok")
  
    gsap.to(log,{      
      ease:"ease",
      opacity:0,
      display: "none",
      zIndex:-1,

    })


     gsap.to(rigi,{     
      ease:"ease",
      opacity:1,
      display: "flex",
      zIndex:1,

     })
  })


  
  alredaymember.addEventListener("click",function(){
    
    console.log("ok")
  
    gsap.to(rigi,{      

      ease:"ease",
      opacity:0,
      display: "none",
      zIndex:-1,

    })


     gsap.to(log,{     

      ease:"ease",
      opacity:1,
      display: "flex",
      zIndex:1,

     })
  })



  }

  login()




