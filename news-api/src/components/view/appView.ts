import News, { IOneNews } from './news/news';
import Sources, { ISourcesNews } from './sources/sources';

interface IResultsNews {
    status: string;
    totalResults: number;
    articles: IOneNews[];
}

interface IResultsSources {
    status: string;
    sources: ISourcesNews[];
}

export class AppView {
    news = new News();
    sources = new Sources();

    drawNews(data: IResultsNews) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: IResultsSources) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
