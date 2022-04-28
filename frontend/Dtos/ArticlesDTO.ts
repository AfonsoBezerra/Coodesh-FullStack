export interface IArticlesDTO {
  events: [{
    id: string;
    provider: string;
  }];
  lauches: [{
    id: string;
    provider: string;
  }];
  featured: boolean;
  id: number;
  imageUrl: string;
  newsSite: string;
  publishedAt: Date;
  summary: string;
  title: string;
  updatedAt: Date
  url: string;
}

export interface ISearchHeaderPropsDTO {
  openSearch: (search: string) => void;
  sendListOrderArticles: (order: string) => void;
}

export interface IContentArticlesPropsDTO {
  sendSearch: string;
  sendListOrder: string;
}