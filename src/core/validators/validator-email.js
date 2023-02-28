import {email} from "vuelidate/lib/validators";


export default function validatorEmail (message) {
    return {
        $validator: email,
        $message: message,
    }
}