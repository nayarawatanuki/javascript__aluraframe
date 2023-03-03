import { DateHelper } from "../helpers/Date.js";

import { Negotiation } from "../models/Negotiation.js";
import { ListNegotiations } from "../models/ListNegotiations.js";
import { NegotiationsView } from "../views/Negotiations.js";

import { Message } from "../models/Message.js";
import { MessageView } from "../views/Message.js";

export class NegotiationController {

    constructor() {

        let $ = document.querySelector.bind(document); //bind indica que a função/metodo pertence ao objeto.
        this._date = $("#date");
        this._quantity = $("#quantity");
        this._value = $("#value");
        this._listNegotiations = new ListNegotiations();

        this._negotiationsView = new NegotiationsView($("#negotiationsView"));
        this._negotiationsView.update(this._listNegotiations);
        
        this._message = new Message();
        this._messageView = new MessageView($("#messageView"));
        this._messageView.update(this._message);
    } // evita percorrer o DOM muitas vezes

    _create() {

        return new Negotiation(

            DateHelper.textforDate(this._date.value),
            this._quantity.value,
            this._value.value
        );
    }

    _cleanForm() {

        this._form = document.querySelector("form");

        this._form.reset();
        this._date.focus();
    }

    insert(event) {

        event.preventDefault();

        this._listNegotiations.add(this._create());
        this._negotiationsView.update(this._listNegotiations);
        
        this._message.text = "Negociação adicionada com sucesso.";
        this._messageView.update(this._message);
        

        this._cleanForm();
    }
}