import { drawFilteredNews } from './drawFilteredNews';
import News, { IOneNews } from './news/news';
import Sources, { ISourcesNews } from './sources/sources';

export interface IResultsNews {
  status: string;
  totalResults: number;
  articles: IOneNews[];
}

export interface IResultsSources {
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
    drawFilteredNews(values, this.sources);
  }
}

export default AppView;