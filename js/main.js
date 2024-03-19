let btn = document.querySelector(".toggle-btn");
let headerNav = document.querySelector(".home-nav");

btn.addEventListener("mouseover", (event)=>{
    event.target.src="img/vertical-logo-name.png";
})

btn.addEventListener("mouseout", (event)=>{
    event.target.src="img/horizontal-logo.png";
})

btn.addEventListener("click", ()=>{
    location.href = "home.html";
})