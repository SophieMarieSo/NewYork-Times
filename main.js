const API_KEY = '102e645856ae42da864a934bfb72a4a0';
let news = [];

const getLatestNews = async () => {
    const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const resp = await fetch(url);
    const data = await resp.json();
    news = data.articles;
};

getLatestNews();
