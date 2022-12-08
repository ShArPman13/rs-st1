import { IResultsNews } from '../../types/IResultsNews';
import { IResultsSources } from '../../types/IResultsSources';
import { drawFilteredNews } from './drawFilteredNews';
import News from './news/news';
import Sources from './sources/sources';

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