import {minLength} from "vuelidate/lib/validators";

export default function validatorMin (message, num) {
    return {
        $validator: minLength(num),
        $message: message,
    }
}