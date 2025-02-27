// const API_KEY = '102e645856ae42da864a934bfb72a4a0';
let newsList = [];
const searchBtn = document.getElementById('search-btn');

const getLatestNews = async () => {
    const url = new URL(
        // `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`
    );
    const resp = await fetch(url);
    const data = await resp.json();
    newsList = data.articles;

    render();
    console.log(newsList);
};

const render = () => {
    let newsHtml = ``;

    newsHtml = newsList.map((news) => {
        const description =
            news.description == ''
                ? '내용 없음'
                : news.description.length > 100
                ? news.description.substring(0, 100) + '...'
                : news.description;
        const newsImg =
            news.urlToImage == '' ||
            news.urlToImage ==
                'https://image.imnews.imbc.com/news/2024/enter/article/__icsFiles/afieldfile/2024/02/17/20240217011629_158237cc-5857-4d74-92e4-a9c7f092b5c9.jpg'
                ? 'data:image/png;base64,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'
                : news.urlToImage;

        const source = news.source.name == '' ? 'no source' : news.source.name;
        const date = moment(news.publishedAt).format('YYYY년 MM월 DD일');

        return `<div class="row news pt-3 pb-3">
                    <div class="col-lg-4 col-12 pb-2">
                        <img
                            class="img-thumbnail rounded img-fluid news-img "
                            src=${newsImg}
                        />
                    </div>
                    <div class="col-lg-8 col-12">
                        <h3 class="pb-2">${news.title}</h3>
                        <p>${description}</p>
                        <div><span class='source'>${source}</span>${date}</div>
                    </div>
                </div>`;
    });

    document.getElementById('news-board').innerHTML = newsHtml.join('');
};

searchBtn.addEventListener('click', () =>
    document.getElementById('search-field').classList.toggle('active')
);

const navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click', () => {
    document.getElementById('side-menu');
    const sideMenu = document.getElementById('side-menu');

    if (sideMenu.style.display === 'none' || sideMenu.style.display === '')
        sideMenu.style.display = 'flex';
});

const menuCloseBtn = document.getElementById('menu-close-btn');
menuCloseBtn.addEventListener('click', () => {
    const sideMenu = document.getElementById('side-menu');

    console.log(sideMenu.style);

    if (sideMenu.style.display === 'flex') sideMenu.style.display = 'none';
});

getLatestNews();
