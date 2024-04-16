<script>
    export default {
        data() {
            return {
                facebookImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Facebook_icon.svg?sp=r&st=2024-04-16T18:18:43Z&se=2024-04-17T02:18:43Z&spr=https&sv=2022-11-02&sr=b&sig=MgnbiA70mMjIxXYYqtZpxHbfWvUgSJMzBzXzdZRzpnQ%3D",
                instagramImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Instagram_icon.svg?sp=r&st=2024-04-16T18:19:53Z&se=2024-04-17T02:19:53Z&spr=https&sv=2022-11-02&sr=b&sig=aIQsC%2FoNHv5EoweSMidGHxO1KA81KvuCAho7J9A28ss%3D"
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