export enum Color {
  white,
  black,
  red,
  green,
  blue,
  yellow,
  brown,
  pink,
}
export type ColorList = string[];
export const colorList: ColorList = [
  "white",
  "black",
  "red",
  "green",
  "blue",
  "yellow",
  "brown",
  "pink",
];
export enum Size {
  XS,
  S,
  M,
  L,
  XL,
}

export type SizeList = string[];
export const sizeList: SizeList = ["XS", "S", "M", "L", "XL"];
export interface IBrand {
  brandName: string;
  models: Array<IProduct>;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  price: number;
  sizes: Array<Size>; //ili sizes: Size[]
  colors: Array<Color>;
  brand: IBrand;
}
