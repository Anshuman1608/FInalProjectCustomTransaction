export class Merchantprefer {
  // "merchantId" : 1,
  //     "pincode" : 208017,
  //     "upperLimit" : 30000.0,
  //     "lowerLimit" : 1000.0,
  //     "custName" : null,
  constructor(
    public merchantPrefId : number,
    public merchantId : number,
    public pincode : number,
    public upperLimit : number,
    public lowerLimit : number,
    public custName : string
  ){}
}
