import './news.css';

interface ISourceNews {
  id: string;
  name: string;
}

interface IOneNews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISourceNews;
  title: string;
  url: string;
  urlToImage: string;
}

class News {
    draw(data: IOneNews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);
            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            (<HTMLDivElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (<HTMLLIElement>newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
            (<HTMLLIElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (<HTMLHeadingElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
            (<HTMLHeadingElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            (<HTMLParagraphElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
            (<HTMLParagraphElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (<HTMLDivElement>document.querySelector('.news')).innerHTML = '';
        (<HTMLDivElement>document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
