function openMenu() {
    const nav = document.querySelector("header nav");
    nav.classList.toggle("active");

    const isActive = nav.classList.contains("active");

    if (isActive) {
        const body = document.querySelector("body");
        body.style.overflowY = "hidden";
    }
}

function closeMenu() {
    const nav = document.querySelector("header nav");
    nav.classList.remove("active");

    const body = document.querySelector("body");
    body.style.overflowY = "auto";
}

window.addEventListener("scroll", (e) => {
    const btnBack = document.querySelector(".back-top");
    const position = window.scrollY;
    console.log(position);
    if(position >= 750) {
        btnBack.classList.remove("hidden");
    } else {
        btnBack.classList.add("hidden");
    }
});

const btnMobile = document.getElementById("mobile-menu");
const btnCloseMenu = document.getElementById("close-menu");

btnMobile.addEventListener("click", openMenu );


const links = document.querySelectorAll("nav ul li");
for (let link of links) {
    link.addEventListener("click", closeMenu );
}

btnCloseMenu.addEventListener("click", closeMenu );




