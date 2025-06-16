<script setup>
    import EtusivuImage from '../assets/images/Etusivu_01.jpeg'
    import VilmaImage03 from '../assets/images/Vilma_03.jpg'
    import PossuImage from '../assets/images/Possu_01.jpeg'
    
    const etusivuImage = EtusivuImage;
    const vilmaImage03 = VilmaImage03;
    const possuImage = PossuImage;
</script>

<template>
    <div>
        <h1>Tervetuloa FI*Humming pyhä birma -kissalan sivuille!</h1>
    </div>
    <div class="content-container">
        <div>
            <p>Suloinen lilatabbynaamio ”Possu” etsii vielä omaa, mahdollisesti myös vähän näyttelyistä kiinnostunutta, kotia!</p>
            <img class="img-fluid" :src="possuImage" width="700" height="1000">
        </div>

        <div style="padding-top: 1rem;">
            <p>
                Meillä on pentuja! Huldan ja Äijän pentue syntyi 9.4.2025. Pentueessa on yksi tyttö ja kaksi poikaa. Tyttö etsii sijoituskotia.
            </p>
            <img class="img-fluid" :src="etusivuImage" width="700" height="1000">
        </div>
        
        <div style="padding-top: 1rem;">
            <p>11.1.2025 Vilma on uusi Junior Winner!</p>
            <img class="img-fluid" :src="vilmaImage03" width="700" height="1000">
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
