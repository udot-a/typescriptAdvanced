/// <reference path="form-namespace.ts"/>

namespace Form {
    class MyForm {
        private type: FormType = "inline";
        private state: FormState = "active";

        constructor(public email: string) {

        }

        getInfo():FormInfo {
            const { type, state } = this;

            return {
                type, state
            }
        }
    }

    const myForm = new MyForm("udot_a@ukr.net");

    console.log(myForm)
}
