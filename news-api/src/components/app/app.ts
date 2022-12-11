import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  controller = new AppController();
  view = new AppView();

  start() {
    (<HTMLDivElement>document.querySelector('.sources')).addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => {
        if (data) {
          this.view.drawNews(data);
        }
      })
    );
    this.controller.getSources((data) => {
      if (data) {
        this.view.drawSources(data);
      }
    });
  }
}

export default App;
