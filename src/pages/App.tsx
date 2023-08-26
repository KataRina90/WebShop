import { Color, IBrand, IProduct, Size } from "../Products/Product";
import { ProductList } from "../Products/ProductList";
const brands: IBrand[] = [
    { brandName: 'Adidas', models: [] },
    { brandName: 'BOSS', models: [] },
    { brandName: 'La Coste', models: [] }
]
const products: Array<IProduct> = [
    {
        id: '001',
        name: 'SummerVibe',
        colors: [Color.white, Color.yellow, Color.pink],
        brand: brands[0],
        description: 'your perfect summer choice',
        imageURL:'Images/white_adidas_01.jpg',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    },
    {
        id: '002',
        name: 'AutumnVibe',
        colors: [Color.yellow, Color.green],
        brand: brands[1],
        description: 'your perfect autumn choice',
        imageURL: 'Images/red_boss_02.jpg',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    },
    {
        id: '003',
        name: 'WinterVibe',
        colors: [Color.white, Color.black],
        brand: brands[1],
        description: 'your perfect winter choice',
        imageURL: 'Images/black_boss_03.avif',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    },
    {
        id: '004',
        name: 'SpringVibe',
        colors: [Color.yellow, Color.pink],
        brand: brands[0],
        description: 'your perfect spring choice',
        imageURL: 'Images/red_adidas_02.jpg',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    }
]
export default function App() {
    return <ProductList list={products} />
}
