import { IOneNews } from './IOneNews';

export interface IResultsNews {
  status: string;
  totalResults: number;
  articles: IOneNews[];
}
