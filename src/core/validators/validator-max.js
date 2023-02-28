import {maxLength} from "vuelidate/lib/validators";

export default function validatorMax (message, num) {
    return {
        $validator: maxLength(num),
        $message: message,
    }
}