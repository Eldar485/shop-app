export default {
    mounted: (el, {value}) => {
        el.clickOutside = event => {
            if (!(el === event.target || el.contains(event.target))) {
                value(event);
            }
        };
        document.body.addEventListener('click', el.clickOutside);
    },
    unmounted: (el) => {
        document.body.removeEventListener('click', el.clickOutside)
    },
    name: 'click-outside',
}