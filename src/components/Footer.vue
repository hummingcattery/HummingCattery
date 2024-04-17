<script>
    export default {
        data() {
            return {
                facebookImgUrl: import.meta.env.VITE_FACEBOOKIMGURL,
                instagramImgUrl: import.meta.env.VITE_INSTAGRAMIMGURL
            };
        }
    };
</script>

<template>
    <br>
    <div class="footer">
        <div class="footer-content">
            <footer class="text-center text-white" style="background-color: #F8F3FC;">
                <div class="container pt-4">
                    <section>
                    <!-- Facebook -->
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/hummingcattery/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target="blank_">
                        <img class="icon-image" :src="facebookImgUrl" alt="Facebook icon">
                    </a>

                    <!-- Instagram -->
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/hummingcattery/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target="blank_">
                        <img class="icon-image" :src="instagramImgUrl" alt="Instagram icon">
                    </a>
                    </section>
                </div>
                <div>
                    <p>Päivitetty 16.4.2024</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        width: auto;
        background-color: #F8F3FC;
    }

    .icon-image {
        height: 2rem;
        width: 2rem;
    }

    .footer-content {
        align-items: center;
    }

    div > p {
        color: black;
    }
</style>