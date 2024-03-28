let btn = document.querySelector(".toggle-btn");
let homeBtn = document.querySelector(".home-btn")
let headerNav = document.querySelector("header");
let headerLogo = document.querySelector(".logo");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");
let headerNavItem = document.querySelector(".home-nav");

btn.addEventListener("click", ()=>{
    headerNav.classList.toggle("show-nav");
    }
)

headerNavItem.addEventListener("click", ()=>{
    headerNav.classList.remove("show-nav");
    console.log("link is clicked")
})

// headerLogo.addEventListener("mouseover", (event)=>{
//     event.target.src="img/vertical-logo-name.png";
// })

// headerLogo.addEventListener("mouseout", (event)=>{
//     event.target.src="img/horizontal-logo.png";
// })


// homeBtn.addEventListener("mouseover", (event)=>{
//     event.target.src="img/vertical-logo-name.png";
// })

// homeBtn.addEventListener("mouseout", (event)=>{
//     event.target.src="img/horizontal-logo.png";
// })

// homeBtn.addEventListener("click", (event)=>{
//     location.href = "home.html";
// })

