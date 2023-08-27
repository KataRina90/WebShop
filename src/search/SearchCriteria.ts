import { Size, Color } from "../Products/Product"

export interface SearchCriteria {
    priceRange: {
        from: number,
        to:number
    } 
    sizes:Size[],
    colors:Color[]
}