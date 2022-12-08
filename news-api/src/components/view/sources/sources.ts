import { ISourcesNews } from '../../../types/ISourcesNews';
import './sources.css';

class Sources {

  draw(data: ISourcesNews[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    data.forEach((item) => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
      (<HTMLSpanElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLDivElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    const sourceContainer = <HTMLDivElement>document.querySelector('.sources');
    sourceContainer.innerHTML = '';
    if (!data.length) {
      const emptyNews = document.createElement('span');
      emptyNews.className = 'emptyNews';
      emptyNews.textContent = 'Please, make another request!';
      sourceContainer.style.display = 'flex';
      sourceContainer.append(emptyNews);
    } else {
      sourceContainer.style.display = 'grid';
      sourceContainer.append(fragment);
    }
  }
}

export default Sources;
