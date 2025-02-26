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

    newsHtml = newsList.map(
        (news) => `<div class="row news pt-3 pb-3">
                    <div class="col-lg-4 col-12 pb-2">
                        <img
                            class="img-thumbnail rounded img-fluid news-img "
                            src=${news.urlToImage}
                        />
                    </div>
                    <div class="col-lg-8 col-12">
                        <h3 class="pb-2">${news.title}</h3>
                        <p>${news.description}</p>
                        <div>${news.source.name} ${news.publishedAt}</div>
                    </div>
                </div>`
    );

    document.getElementById('news-board').innerHTML = newsHtml.join('');
};

searchBtn.addEventListener('click', () =>
    document.getElementById('search-field').classList.toggle('active')
);

getLatestNews();
