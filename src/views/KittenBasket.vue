<script setup>
    import ParikuvaImage from '../assets/images/Parikuva_01.jpg'
    
    const parikuvaImage = ParikuvaImage;
</script>

<template>
    <div>
        <h1>Pentukori</h1>
    </div>

    <div class="content-container">
        <p>Pentukori toistaiseksi tyhjä. Seuraava pentue suunnitteilla (jos kaikki menee odotetusti) loppuvuodesta 2026.</p>
    </div>
</template>

<style lang="scss" scoped>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    tr > th {
        background-color: #F8F3FC;
    }

    tr > td {
        background-color: #F8F3FC;
    }
    
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    .image-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .row {
        display: flex;
    }

    .column {
        flex: 50%;
        padding: 5px;
        overflow: auto
    }

    .col {
        overflow-x: auto;
    }
</style>
