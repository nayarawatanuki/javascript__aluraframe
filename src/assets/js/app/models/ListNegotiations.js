export class ListNegotiations {
    constructor() {
        this._negotiations = [];
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        // return this._negotiations;

        return [].concat(this._negotiations); //evita que alguém consiga alterar a lista 
    }
}