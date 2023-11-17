export interface Product {
    id: number
    title: string
    description: string
    price: number
}

export interface ProductResponse {
    products: Array<Product>
    skip: number
    total: number
    limit: number    
}