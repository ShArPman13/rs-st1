import { IOneNewsSources } from "./IOneNewsSources";

export interface IOneNews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: IOneNewsSources;
  title: string;
  url: string;
  urlToImage: string;
}