export class Merchant {
  // _embedded" : {
  //   "merchants" : [ {
  //     "merchantId" : 1,
  //     "merchantName" : "Ajay",
  //     "email" : "Ajay@gmail.com",
  //     "password" : "Ajay@123",

  constructor(
    public merchantId : number,
    public merchantName : string,
    public email : string,
    public password : string
  ){}
}
