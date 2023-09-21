export interface IProduct{
    quantity: number;
    description: string;
    status: boolean;
    position: number;
    _id: string;
    productName: string;
    catId: number;
    subId: number;
    unit: string;
    mrp: number;
    price: number;
    image: string;
}

export interface ProductResponse{
    error: boolean;
    count: number;
    data: IProduct[]
}