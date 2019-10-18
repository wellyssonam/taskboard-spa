export class Task {
    // ? = atributo não obrigatório
    constructor(
        public id?: number,
        public name?: string,
        public date?: Date,
        public deliveryDate?: Date,
        public progressBar?: number,
        public status?: string
    ){}
}