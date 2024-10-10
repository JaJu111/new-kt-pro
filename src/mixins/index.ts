export interface SalesInfo {
    id: number
    name: string
    date: string
    amount: string
    status: string
}

export interface Categories {
    id: number
    title: string
    active: boolean
    info: CategoriesInfo[]
}

export interface CategoriesInfo {
    text: string
    products: number
}

export interface ChartHeader {
    title: string
    link?: string
}

export interface Products {
    id: number
    title: string
    img: string
    category: string
    quantity: number
    amount: number
    status: string
}