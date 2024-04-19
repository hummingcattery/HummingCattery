<script>
    import BannerImg from '../assets/images/Banner.jpg'
    
    export default {
        data() {
            return {
                bannerImage: BannerImg
            };
        }
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
        justify-content: center; /* Centers content horizontally */
        align-items: center; /* Centers content vertically */
    }

    .banner-image {
        max-width: 100%; /* Ensures the image does not exceed its container's width */
        height: auto; /* Maintains aspect ratio */
    }
</style>
