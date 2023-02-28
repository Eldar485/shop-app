<template>
    <div class="preview-photo">
        <div class="photo-container">
            <div class="big">
                <img src="../../../assets/images/preview-1.jpg" alt="">
            </div>
            <div class="medium">
                <img src="../../../assets/images/preview-3.jpg" alt="">
            </div>
            <div class="small">
                <img src="../../../assets/images/preview-2.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.preview-photo {
    position: absolute;
    background: #F1EADC;
    width: 45%;
    height: 51.625rem;
    z-index: -2;
    top: 0;
    right: 0;

    .photo-container {
        position: absolute;
        bottom: 3.75rem;
        left: 3.125rem;

        img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }
        .medium {
            position: absolute;
            bottom: -3.75rem;
            left: -8rem;
        }
        .small {
            position: absolute;
            top: 6.875rem;
            right: -7rem;
        }
    }
}
</style>