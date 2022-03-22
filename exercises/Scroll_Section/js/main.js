
window.addEventListener("scroll", (e) => {
    const btnBack = document.querySelector(".back-top");
    const position = window.scrollY;

    if(position >= 783.75) {
        btnBack.classList.remove("hidden");
    } else {
        btnBack.classList.add("hidden");
    }
});



