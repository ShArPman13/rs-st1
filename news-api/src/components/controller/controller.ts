import AppLoader from './appLoader';
import { ISourceOfNews } from './loader';

class AppController extends AppLoader {
    getSources(callback: () => void, options: ISourceOfNews) {
        super.getResp({ endpoint: 'sources', options }, callback);
    }
    getNews(e: MouseEvent, callback: () => void) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLDivElement>e.currentTarget;
        console.log(newsContainer)
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                console.log(sourceId);
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            if (target.parentElement) {
                target = (target.parentElement);
            }
        }
    }
}

export default AppController;
