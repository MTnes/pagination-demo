export class Order {

  public id: string;
  public amount: number;
  public status: string;

  constructor(id: string, amt: number, status: string) {
    this.id = id;
    this.amount = amt;
    this.status = status;
  }

}
