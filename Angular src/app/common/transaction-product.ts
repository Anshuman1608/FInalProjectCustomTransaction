import { Product } from './product';

export class TransactionProduct {

  constructor(
    public transProductId : number,
    public quantity : number,
    public productId : number,
    public product : Product[]
  ){}
}
