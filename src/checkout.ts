import { Product } from './product';
import { Receipt } from './receipt';

export class Checkout {

    public scanItem(product: Product): void {
        console.log('todo')
    }

    public generateReceipt(): Receipt {
        return new Receipt();
    }
}
