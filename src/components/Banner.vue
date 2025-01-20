<script>
    import BannerImg from '../assets/images/Banner.jpg'
    
    export default {
        setup() {
            const bannerImage = BannerImg;

            return {
                bannerImage,
            };
        },
    };
</script>

<template>
    <div class="banner">
        <div class="banner-content">
            <div class="container">
                <img class="banner-image center" :src="bannerImage" alt="Banner" width="828" height="315">
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

    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-image {
        max-width: 100%;
        height: auto;
    }
</style>
