export class Task {
  // ? = atributo não obrigatório
  constructor(
    public name?: string,
    public date?: string,
    public deliveryDate?: string,
    public progressBar?: number,
  ) { }
}
