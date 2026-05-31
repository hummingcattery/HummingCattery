<script setup>
    import HuldaPipsaImage from '../assets/images/HuldaPipsa01.jpg'
    import Pentue08Image from '../assets/images/pentue_08.jpg'
    import Parikuva01Image from '../assets/images/parikuva_01.jpg'
    import Ryhmakuva01Image from '../assets/images/ryhmakuva_01.jpg'
    
    const huldaPipsaImage = HuldaPipsaImage;
    const pentue08Image = Pentue08Image;
    const parikuva01Image = Parikuva01Image;
    const ryhmakuva01Image = Ryhmakuva01Image;
</script>

<template>
    <div>
        <h1>Tervetuloa FI*Humming pyhä birma -kissalan sivuille! 
        </h1>
    </div>

    <div class="content-container">
        <div>
            <p>31.5.2026 Huldan pennuista (s. 7.4.2026) vapaana lilanaamio poika, suklaanaamio tyttö etsii sijoituskotia pk-seudulta.</p>
            <img class="img-fluid smaller-img d-block mx-auto" :src="parikuva01Image">
            <br/>
            <img class="img-fluid smaller-img d-block mx-auto" :src="ryhmakuva01Image">
        </div>
    </div>

    <div class="content-container">
        <div>
            <p>22.4.2026 Meillä on pentuja!<br/>Huldan pennut syntyneet 7.4.2026, lisätietoja pentukorissa!</p>
            <img class="img-fluid smaller-img d-block mx-auto" :src="pentue08Image">
            <br/>
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
