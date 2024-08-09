export enum ContentTypes {
  hero = "hero",
  imageText = "image-text",
  data = "data",
}


export interface ImageText {
  type: ContentTypes.imageText;
  imageURI: string;
  text: string;
  title?: string;
  leftToRight?: boolean;
}

export interface Data {
  type: ContentTypes.data;
  url: string;
}
