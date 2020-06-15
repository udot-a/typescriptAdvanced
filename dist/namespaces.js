"use strict";
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = "inline";
            this.state = "active";
        }
        getInfo() {
            const { type, state } = this;
            return {
                type, state
            };
        }
    }
    const myForm = new MyForm("udot_a@ukr.net");
    console.log(myForm);
})(Form || (Form = {}));
