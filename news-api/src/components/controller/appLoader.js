import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', { //https://newsapi.org/v2/
            apiKey: 'f74f146e196247a0901b90a947ac928a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
