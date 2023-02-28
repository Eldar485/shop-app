import {minValue} from "vuelidate/lib/validators";

export default function validatorMinValue (message, num) {
    return {
        $validator: minValue(num),
        $message: message,
    }
}