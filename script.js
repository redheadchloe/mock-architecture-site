console.clear();
// mobile nav
const mobileBtn = document.querySelector('.mobile-btn');
const nav = document.querySelector('ul');
mobileBtn.addEventListener('click', function () {
    mobileBtn.classList.toggle('active');
    nav.classList.toggle('active');
})

const btns = document.querySelectorAll('.btn');


const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


let contentIndex = 0;
showContents(contentIndex);

function currentContent(n) {
    showContents(contentIndex = n);
}

function plusContent(n) {
    showContents(contentIndex += n);
}

function showContents(n) {
    const btn = document.getElementsByClassName('btn');
    const content = document.getElementsByClassName('top-wrapper');
    const city = document.querySelectorAll('[data-city]');


    let i;
    if (n >= content.length) {
        contentIndex = 0;
    }
    if (n < 0) {
        contentIndex = content.length - 1;
    }
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove('active');
        content[i].classList.remove('active');
        city[i].classList.remove('active');

    }
    btn[contentIndex].classList.add('active');
    content[contentIndex].classList.add('active');
    const color = content[contentIndex].dataset.color;
    document.documentElement.style.setProperty('--accent-1', color);
    city[contentIndex].classList.add('active');


    const btnContainer = document.querySelector('.counter-wrapper');
    function display(e) {
        const currentBtn = e.target.dataset.id;
        contentIndex = currentBtn - 1;
        console.log(contentIndex);
        currentContent(contentIndex);
    }
    btnContainer.addEventListener('click', display);


}
