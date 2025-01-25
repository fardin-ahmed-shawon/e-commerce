// Menu btn open and hide
const pages = document.getElementById('pages');

function menuBtn() {
    pages.classList.toggle("width-minimizer");
}

// search bar open and close
const searchBtn = document.querySelector('.search-icon');
const closeSearchBtn = document.querySelector('.search-close-icon');

const searchBox = document.querySelector('.mobile-search-box');

searchBtn.addEventListener('click', () => {
    searchBox.style.display = 'block';
    closeSearchBtn.style.display = 'block';
    searchBtn.style.display = 'none';
});

closeSearchBtn.addEventListener('click', ()=>{
    searchBox.style.display = 'none';
    closeSearchBtn.style.display = 'none';
    searchBtn.style.display = 'block';
});

// Dropdown Menu Open and Close
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const content7 = document.querySelector('.content7');
const content8 = document.querySelector('.content8');


// number of buttons and contents is 8 (total 8 dropdown pages)
// function dropdownBtn(x) {
//     if (x == 1) {
//         content1.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 2) {
//         content2.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 3) {
//         content3.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 4) {
//         content4.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 5) {
//         content5.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 6) {
//         content6.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 7) {
//         content7.classList.toggle("dropdown-add-remove");
//     }
//     if (x == 8) {
//         content8.classList.toggle("dropdown-add-remove");
//     }
// }