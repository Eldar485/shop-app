<template>
    <button :class="styleType">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'v-button',
    props: {
        styleType: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}

.btn-about {
    background: #6E9C9F;
    border: none;
    color: #fff;
    padding: 22px 50px;
    width: 260px;
    height: 68px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 138.9%;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: #509498;
    }
}

.btn-success {
    background: none;
    border: 1px solid #6E9C9F;
    color: #6E9C9F;
    padding: 1.4rem 3.3rem;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: #6E9C9F;
        color: #FFFFFF;
    }
}

.btn-black {
    background: none;
    font-size: 1.0625rem;
    border: 1px solid #000000;
    color: #000000;
    letter-spacing: 0.02em;
    max-width: 18.13rem;
    max-height: 4.5rem;
    padding: 1.25rem 4.0625rem;
    transition: 0.2s;

    &:hover {
        background: #000000;
        color: #FFFFFF;
    }
}

.btn-download {
    width: 4.1875rem;
    height: 4.1875rem;
    border: none;
    cursor: pointer;
    background-color: rgba(110, 156, 159, 0.1);
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../../../assets/icons/arrow-download.svg");
    transition: .2s ease;

    &:hover {
        background-color: rgba(110, 156, 159, 0.3);
    }
}

.btn-add {
    background: none;
    font-size: 1.0625rem;
    border: 1px solid #000000;
    color: #000000;
    letter-spacing: 0.02em;
    padding: 1.25rem 4.0625rem;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: #000000;
        color: #FFFFFF;
    }
}
</style>