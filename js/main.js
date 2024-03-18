let btn = document.querySelector(".toggle-btn");
let headerNav = document.querySelector(".home-nav");


btn.addEventListener("click", (event)=>{
    event.target.classList.toggle("rotate");
    headerNav.classList.toggle("show-nav");
})
