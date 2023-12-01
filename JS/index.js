// function toggleHide() {
//     let btn = document.getElementById('btn');
//     let para = document.getElementById('para');
//     if (para.style.display != 'none') {
//         para.style.display = 'none';
//     } else {
//         para.style.display = 'block';
//     }
// }

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const tooggleNavbar = () => {
    // alert("plz Subscribe");
    nav_header.classList.toggle('active');
};

mobile_nav.addEventListener("click", () => tooggleNavbar());