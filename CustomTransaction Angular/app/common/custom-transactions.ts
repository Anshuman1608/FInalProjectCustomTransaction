import { TransactionProduct } from './transaction-product';

export class CustomTransactions {

  // "transactionId" : 2001,
  //     "custId" : 3001,
  //     "custName" : "Akash",
  //     "merchantId" : 1,
  //     "billingAddress" : "Kanpur",
  //     "timeStamp" : "2022-06-17T14:37:16.000+00:00",
  //     "pincode" : 208017,

  constructor(
    public transactionId : number,
    public custId : number,
    public custName : string,
    public merchantId : number,
    public billingAddress : string,
    public timeStamp : string,
    public pincode : number,
    public totalAmount : number,
    public transactionProduct : TransactionProduct[]
  ){}
}
