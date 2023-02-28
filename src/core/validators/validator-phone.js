import {helpers} from "vuelidate/lib/validators";

export default function validatorPhone (message) {
    return {
        $validator: helpers.regex(
            "serial",
            /^((\+7|7|8) \(\d{3}\) \d{3}-\d{2}-\d{2})$/
        ),
        $message: message,
    }
}