<script>
    export default {
        data() {
            return {
                bannerImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Banner.jpg?sp=r&st=2024-04-16T20:16:02Z&se=2024-04-17T04:16:02Z&spr=https&sv=2022-11-02&sr=b&sig=PC2%2BM119tkvLy0DCnJJIs1f8o3HAvG9MGVSdnIaj2%2BM%3D"
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