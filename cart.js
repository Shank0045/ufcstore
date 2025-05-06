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

function slidx() {
  let ham = document.querySelector(".ham");

  let slidebar = document.querySelector(".slidebar");

  ham.addEventListener("click", function () {
    let slideleft = window.getComputedStyle(slidebar).left;

    if (slideleft === "0px") {
      slidebar.style.left = "-500px";
    } else if (slideleft === "-500px") {
      slidebar.style.left = "0";
    }
  });
}

slidx();

function cart() {
  let add = document.querySelector(".hori button");

  let mainpage = document.querySelector(".mainpage");

  let count = 1;

  let imgarr = [
    "images/s1.webp",
    "images/s4.webp",
    "images/s9.webp",
    "images/s15.webp",
    "images/s1.webp",
    "images/s2.avif",
    "images/s3.avif",
    "images/s7.avif",
  ];

  add.addEventListener("click", function () {
    let cart = document.createElement("div");
    cart.setAttribute("class", "hori");

    let i = document.createElement("i");

    i.setAttribute("class", "fa-solid fa-xmark");

    count++;

    i.addEventListener("click", function () {
      i.parentElement.remove();
      add.disabled = false;
      count--;
    });

    if (count >= 7) {
      add.disabled = true;
    }

    cart.innerHTML = `   
       <img src="${imgarr[count]}" alt="s">
       <div class="detail">
            <p id="p">Men's UFC Unrivaled by VENUM Red Brandon Moreno Short Fit Fight Short</p>
            <p id="pp">In Stock - This item will ship within 2 business days.</p>
              <select name="size" id="ok">
                <option >xs</option>
                <option >s</option>
                <option >m</option>
                <option >l</option>
                <option >xl</option>
                <option >xxl</option>
              </select>

             <input type="number" value="1">
       </div>
          
`;

    let verti = document.querySelector(".verti");

    verti.innerHTML = ` <div class="code">
        <p>Apply Code Here!</p>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div class="order">
        <h3>Order Summary</h3>
        <div class="t"><p>Total item </p> <p> $129.99 x ${count}</p></div>
        <div class="c"><p>Total cart </p> <p>$${129.99 * count}</p></div>
      </div>
      <a  href="login.html">   <button id="b"><i class="fa-solid fa-lock"></i> Checkout</button></a>
      <button><i class="fa-brands fa-paypal"></i>Paypal checkout</button>
      `;

    cart.appendChild(i);

    mainpage.prepend(cart);
  });
}

cart();
