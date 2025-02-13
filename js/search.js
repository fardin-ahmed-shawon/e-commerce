// Search Data
let keywords = [
    'Navy Blue Jeans Pant For Men',
    'JAVASCRIPT',
    'CSS',
    'Easy Tutorial',
    'Where to learn coding',
    'How to create a website'
];

const resultBox = document.querySelector(".search-suggestions");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = keywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
}

function display(result) {
    if (result.length) {
        const content = result.map((list) => {
            return `<li><a class="dropdown-item" href="#">${list}</a></li>`;
        }).join('');
        resultBox.innerHTML = content;
        resultBox.style.display = 'block';
    } else {
        resultBox.innerHTML = '';
        resultBox.style.display = 'none';
    }
}