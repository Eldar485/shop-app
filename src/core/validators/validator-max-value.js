import {maxValue} from "vuelidate/lib/validators";

export default function validatorMaxValue (message, num) {
    return {
        $validator: maxValue(num),
        $message: message,
    }
}