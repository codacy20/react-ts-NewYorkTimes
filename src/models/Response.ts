export interface basicRequestEmailedArticle {
  num_results: number;
  results: EmailedArticle[];
}

export interface basicRequestArticle {
  num_results: number;
  results: Article[];
}

export interface Result {
  abstract: string;
  title: string;
  url: string;
}

export interface EmailedArticle extends Result {
  media: Media[];
}

export interface Article extends Result {
  multimedia: Metadata[];
}

export interface Media {
  "media-metadata": Metadata[];
}

export interface Metadata {
  format: string;
  height: number;
  url: string;
  width: number;
}
