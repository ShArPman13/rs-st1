interface IApiKey {
  apiKey: string;
}
export interface ISourceOfNews {
  sources: string;
}

type IUrlOptions = Record<string, string>;

interface IForGetResp {
  endpoint: string;
  options?: ISourceOfNews;
}

class Loader {
  constructor(public baseLink: string, public options: IApiKey) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp({ endpoint, options }: IForGetResp, callback = () => { console.error('No callback for GET response'); }) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(endpoint: string, options?: ISourceOfNews) {
    const urlOptions: IUrlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });
    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (firstArg: string) => void, options?: ISourceOfNews) {
    fetch(this.makeUrl(endpoint, options), { method })
      .then((qqq) => {

        return this.errorHandler(qqq)
      })
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
