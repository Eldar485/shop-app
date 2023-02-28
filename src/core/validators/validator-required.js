import {required} from "vuelidate/lib/validators";

export default function validatorRequired (message) {
    return {
        $validator: required,
        $message: message,
    }
}