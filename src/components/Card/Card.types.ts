export interface ImgMediaCardProps {
  picture: string;
  tokenId: number;
  clickable: boolean;
}

export type Response = {
  name: string,
  description: string,
  image: string
}