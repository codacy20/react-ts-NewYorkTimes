export interface basicRequest {
  num_results: number;
  results: Result[];
}

export interface Result {
  abstract: string;
  title: string;
  url: string;
  media: Media[];
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
