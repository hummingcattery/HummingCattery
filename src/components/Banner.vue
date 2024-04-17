<script>
    export default {
        data() {
            return {
                bannerImgUrl: import.meta.env.VITE_BANNERIMGURL
            };
        }
    };
</script>

<template>
    <div class="banner">
        <div class="banner-content">
            <div class="container">
                <img class="banner-image" :src="bannerImgUrl" alt="Banner" width="828" height="315">
            </div>
        </div>
    </div>
    <br>
</template>

<style lang="scss" scoped>
    .banner {
        width: auto;
        background-color: #F8F3FC;
    }

    .banner-image {
        // height: 2rem;
        // width: 2rem;
        object-fit: contain;
        width: 100%;
    }

    .banner-content {
        align-items: center;
    }

    div > p {
        color: black;
    }
</style>