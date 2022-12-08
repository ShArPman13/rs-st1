import { IResultsNews } from '../../types/IResultsNews';
import { IResultsSources } from '../../types/IResultsSources';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (firstArg?: IResultsSources) => void) {
        super.getResp({ endpoint: 'sources' }, callback);
    }
    getNews(e: MouseEvent, callback: (firstArg?: IResultsNews) => void) {

        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLDivElement>e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
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
