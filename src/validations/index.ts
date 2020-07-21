import { orderValidation } from './order.validation';
import {loginValidation, signupValidation} from './users.validation';
import { restauValidation } from './restauvants.validation'

class Validator {
    private loginValidation : any = loginValidation;
    private signupValidation : any = signupValidation;
    private restauValidation : any = restauValidation;
    private repasValidation : any = orderValidation
    constructor () {
        // to be updated
    }

    public getSignup () : any {
        return this.signupValidation
    }

    public getLogin () : any {
        return this.loginValidation
    }
    public getrRestau () : any {
        return this.restauValidation
    }
    public getRepas () : any {
        return  this.repasValidation
    }
}

export default new Validator ()