<script setup>
    import HuldaPipsaImage from '../assets/images/HuldaPipsa01.jpg'
    
    const huldaPipsaImage = HuldaPipsaImage;
</script>

<template>
    <div>
        <h1>Tervetuloa FI*Humming pyhä birma -kissalan sivuille! 
        </h1>
    </div>
    <div class="content-container">
        <div style="padding-top: 1rem;">
            <p>8.2.2026 Seuraava pentue suunnitteilla keväälle 2026.
                Kuvassa (alla) Hulda ja Pippa.
            </p>
            <img class="img-fluid smaller-img d-block mx-auto" :src="huldaPipsaImage">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    span {
        text-decoration: underline;
    }

    span > a {
        display: contents;
        padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
        font-size: var(--bs-nav-link-font-size);
        font-weight: var(--bs-nav-link-font-weight);
        color: var(--bs-nav-link-color);
        text-decoration: none;
        background: none;
        border: 0;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }

    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
