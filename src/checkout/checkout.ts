import { Product } from "../product/product";
import { Receipt } from "../receipt/receipt";

export class Checkout {
  public scanItem(product: Product): void {
    console.log("todo");
  }

  public generateReceipt(): Receipt {
    return new Receipt();
  }
}
