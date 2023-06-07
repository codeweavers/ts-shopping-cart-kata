import { Product } from './product';
export class Receipt {
    public readonly items: Array<{ product: Product, quantity: number }> = [];
    public readonly totalPrice: number = 0;
}
