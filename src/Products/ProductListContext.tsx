import { createContext } from 'react';
import { IBrand, IProduct } from '../Products/Product';

const brands: IBrand[] = [
  { brandName: 'Adidas', models: [] },
  { brandName: 'BOSS', models: [] },
  { brandName: 'La Coste', models: [] },
];
export const products: Array<IProduct> = [
  {
    id: '001',
    name: 'SummerVibe',
    colors: ['white', 'yellow', 'pink'],
    brand: brands[0],
    description: 'your perfect summer choice',
    imageURL: '/Images/white_adidas_01.jpg',
    price: 50,
    sizes: ['XS', 'S', 'M', 'XL'],
  },
  {
    id: '002',
    name: 'AutumnVibe',
    colors: ['yellow', 'green'],
    brand: brands[1],
    description: 'your perfect autumn choice',
    imageURL: '/Images/red_boss_02.jpg',
    price: 50,
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: '003',
    name: 'WinterVibe',
    colors: ['white', 'black'],
    brand: brands[1],
    description: 'your perfect winter choice',
    imageURL: '/Images/black_boss_03.avif',
    price: 50,
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: '004',
    name: 'SpringVibe',
    colors: ['yellow', 'pink'],
    brand: brands[0],
    description: 'your perfect spring choice',
    imageURL: '/Images/red_adidas_02.jpg',
    price: 50,
    sizes: ['XS', 'S', 'M'],
  },
];

//keiramo kontekst gde ucvamo stanje product liste
export const ProductListContext = createContext<IProduct[]>(products);

//inicijalna je niz products koji je tipa niz IProduct.
//export const ProductListContext= createContext <Array <IProduct> > (products)
// kontekst je konktejner koji cuva neke podatke. hoces da ti podaci budu dostupni nekim komponentama - napravi se kontejner

export function getProductByID(id: string): IProduct | undefined {
  return products.find((p) => p.id === id);
}
