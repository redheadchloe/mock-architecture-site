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


const visuals = [
    {
        'title': 'モダンなミニマリズム',
        'id': '01',
        'img': '01.avif',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores quisquam assumenda earum autem inventore fugit repudiandae dignissimos maxime animi accusantium esse repellat obcaecati quasi minus quaerat rem sint nihil ab, officia iusto quibusdam praesentium. Quisquam, eligendi aut accusantium iusto quasi rerum dolor, at dolorem ad quaerat officia neque soluta.',
        'color': '#325064',
        'location': 'スペイン・マドリード',
    },
    {
        'title': '光に包まれたバルコニー',
        'id': '02',
        'img': '02.avif',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores quisquam assumenda earum autem inventore fugit repudiandae dignissimos maxime animi accusantium esse repellat obcaecati quasi minus quaerat rem sint nihil ab, officia iusto quibusdam praesentium. Quisquam, eligendi aut accusantium iusto quasi rerum dolor, at dolorem ad quaerat officia neque soluta.',
        'color': '#88736C',
        'location': 'フランス・モンペリエ',
    },
    {
        'title': 'ブティックホテルが並ぶ街',
        'id': '03',
        'img': '03.jpeg',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores quisquam assumenda earum autem inventore fugit repudiandae dignissimos maxime animi accusantium esse repellat obcaecati quasi minus quaerat rem sint nihil ab, officia iusto quibusdam praesentium. Quisquam, eligendi aut accusantium iusto quasi rerum dolor, at dolorem ad quaerat officia neque soluta.',
        'color': '#319180',
        'location': 'アメリカ・ニューヨーク',
    },
    {
        'title': '131階の超高層電波塔',
        'id': '04',
        'img': '04.jpeg',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores quisquam assumenda earum autem inventore fugit repudiandae dignissimos maxime animi accusantium esse repellat obcaecati quasi minus quaerat rem sint nihil ab, officia iusto quibusdam praesentium. Quisquam, eligendi aut accusantium iusto quasi rerum dolor, at dolorem ad quaerat officia neque soluta.',
        'color': '#FFCF29',
        'location': 'カナダ・トロント',
    },
    {
        'title': '有機的につながる',
        'id': '05',
        'img': '05.avif',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores quisquam assumenda earum autem inventore fugit repudiandae dignissimos maxime animi accusantium esse repellat obcaecati quasi minus quaerat rem sint nihil ab, officia iusto quibusdam praesentium. Quisquam, eligendi aut accusantium iusto quasi rerum dolor, at dolorem ad quaerat officia neque soluta.',
        'color': '#DB7642',
        'location': 'イタリア・ミラノ',
    }
]

const topContainer = document.querySelector('.top-container');
const cityContainer = document.querySelector('.city-wrapper');
for (let i = 0; i < visuals.length; i++) {
    topContainer.innerHTML += `<div class="top-wrapper grid" id="${visuals[i].id}" data-color="${visuals[i].color}">
    <div class="img-wrapper" data-text="discover">
        <img src="${visuals[i].img}" alt="building">
    </div>
    <div class="text-wrapper">
        <h2>${visuals[i].title}</h2>
        <p>${visuals[i].desc}</p>
    </div>
</div>`;

    cityContainer.innerHTML += `<span data-city="${visuals[i].id}">${visuals[i].location}</span>`;

}


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


const popular = [
    {
        'img': 'popular/1.avif',
        'date': 'ARTICLE | 2022.09.05',
        "title": '直線を多用した明るく軽やかなマンション',
    },
    {
        'img': 'popular/2.avif',
        'date': 'PROJECT | 2022.09.05',
        "title": 'ヘザウィックスタジオ初のアジアの住宅プロジェクト',
    },
    {
        'img': 'popular/3.avif',
        'date': 'ARCHIVE | 2022.09.05',
        "title": '複合ライフスタイル施設が京都に開業',
    },
    {
        'img': 'popular/4.avif',
        'date': 'INTERVIEW | 2022.09.05',
        "title": 'o+hが設計した山形市南部児童遊戯施設',
    },
    {
        'img': 'popular/5.avif',
        'date': 'ARTICLE | 2022.09.05',
        "title": '都市をつなぐ自由曲面の建築群',
    },
]

const popularContainer = document.querySelector('.popular-wrapper');
for (let i = 0; i < popular.length; i++) {
    popularContainer.innerHTML += `<div class="popular-article flex">
    <picture>
        <source srcset="${popular[i].img}" type="image/avif">
        <img src="${popular[i].img}" alt="building">
    </picture>
    <small class="m-1">${popular[i].date}</small>
    <h5>${popular[i].title}</h5>
</div>`;
}


const series = [
    {
        'img': 'series/2.jpeg',
        'date': '2022.08.15',
        'title': 'タイトルがここに入ります。',
        'text': '本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。'
    },
    {
        'img': 'series/3.avif',
        'date': '2022.08.15',
        'title': 'タイトルがここに入ります。',
        'text': '本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。'
    },
    {
        'img': 'series/4.avif',
        'date': '2022.08.15',
        'title': 'タイトルがここに入ります。',
        'text': '本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。'
    },
    {
        'img': 'series/5.avif',
        'date': '2022.08.15',
        'title': 'タイトルがここに入ります。',
        'text': '本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。本文がここに入ります。'
    },
]

const archiveRight = document.querySelector('.archive-right');
for (let i = 0; i < series.length; i++) {
    archiveRight.innerHTML += `<div class="archive-item flex">
    <img src="${series[i].img}" class="mr-1" alt="">
    <div class="title">
        <small>${series[i].date}</small>
        <h4 class="m-1">${series[i].title}</h4>
        <small>${series[i].text}</small>
    </div>
</div>`
}