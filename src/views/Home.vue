<script>
    import EtusivuImage from '../assets/images/Etusivu_01.jpg'
    
    export default {
        data() {
            return {
                etusivuImage: EtusivuImage
            };
        }
    };
</script>

<template>
    <div>
        <h1>Tervetuloa FI*Humming pyhä birma -kissalan sivuille!</h1>
    </div>
    <div class="content-container">
        <p>
            Meillä ei ole tällä hetkellä pentuja vapaana, mutta seuraava pentue on suunnitteilla 2024-2025 vaihteeseen. Etsinnässä erityisesti sijoituksesta kiinnostuneita koteja.
            <br>
            Lue sijoitusehdoista <span><router-link class="nav-link" to="/Pentu-info">täältä</router-link></span>.
        </p>
        <img class="img-fluid" :src="etusivuImage" width="700" height="1000">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    img {
        object-fit: contain;
        transform: scale(0.75);
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
</style>
