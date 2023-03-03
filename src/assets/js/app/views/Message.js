import { View } from "../views/View.js";

export class MessageView extends View {

    constructor(element) {
        
        super(element);
    }

    template(model) {

        // if(model.text != "") {
        //     return `<p class="alert alert-info">${model.text}</p>`;
        // } else {

        //     return `<p></p>`;
        // }

        return model.text ? `<p class="alert alert-info">${model.text}</p>` : "<p></p>";
    }
}