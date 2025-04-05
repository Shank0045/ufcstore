
  
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
  

  