export default {
    mounted(el, bindings) {
        let input
        if (el.querySelector('input')) {
            input = el.querySelector('input')
        } else {
            input = el.querySelector('textarea')
        }
        el.addError = () => {
            if (bindings.value.$invalid) {
                if (el.querySelector('.error-text')) {
                    el.removeChild(el.querySelector('.error-text'))
                }
                if (el.querySelector('.error-text-number')) {
                    el.removeChild(el.querySelector('.error-text-number'))
                }
                const error = document.createElement('div');
                if (input.type === 'number') {
                    el.classList.add('error-number');
                    error.classList.add('error-text-number')
                } else {
                    el.classList.add('error-input');
                    error.classList.add('error-text')
                }
                error.innerHTML = bindings.value.$silentErrors[0].$message;
                el.append(error)
            }
        }
        el.removeError = () => {
            el.classList.remove('error-input');
            el.classList.remove('error-number');
            if (el.querySelector('.error-text')) {
                el.removeChild(el.querySelector('.error-text'))
            }
            if (el.querySelector('.error-text-number')) {
                el.removeChild(el.querySelector('.error-text-number'))
            }
        }

        input.onblur = el.addError
        input.onfocus = el.removeError
    },
    name: 'validate-directive'
}