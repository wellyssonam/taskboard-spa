export class Task {
    // ? = atributo não obrigatório
    constructor(
        public id?: number,
        public name?: string,
        public date?: string,
        public deliveryDate?: string,
        public progressBar?: number,
        public status?: string
    ) {}
}
