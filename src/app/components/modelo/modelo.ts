export class ClienteModule {
  id: string;
  Cliente: string;
  Pedido: string;
  Pago: Boolean;
  Valor: BigInteger;
  Entrega: boolean;

  constructor() {
    this.Entrega = true;
    this.Pago = true;
  }
}
