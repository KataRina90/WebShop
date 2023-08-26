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
        imageURL: '',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    },
    {
        id: '002',
        name: 'AutumnVibe',
        colors: [Color.yellow, Color.green],
        brand: brands[0],
        description: 'your perfect summer choice',
        imageURL: '',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    },
    {
        id: '003',
        name: 'Winter',
        colors: [Color.white, Color.black],
        brand: brands[0],
        description: 'your perfect summer choice',
        imageURL: '',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    },
    {
        id: '004',
        name: 'SpringVibe',
        colors: [Color.yellow, Color.pink],
        brand: brands[0],
        description: 'your perfect summer choice',
        imageURL: '',
        price: 50,
        sizes: [Size.XS, Size.S, Size.M]
    }
]
export default function App() {
    return <ProductList list={products} />
}
