export enum ContentTypes {
  hero = "hero",
  imageText = "image-text",
  data = "data",
}


export interface Data {
  type: ContentTypes.data;
  url: string;
}
