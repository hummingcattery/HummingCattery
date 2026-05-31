<script setup>
    import ParikuvaImage from '../assets/images/Parikuva_01.jpg'
    
    const parikuvaImage = ParikuvaImage;
</script>

<template>
    <div>
        <h1>Pentukori</h1>
    </div>

    <div class="content-container">
        <p>Pennut syntyneet 7.4.2026 yhdistelmästä: CH JCH KCH Unica vom Lilienweg x KCH FI*Njaalan Puolâš</p>

        <br/>
        <ul>
            <li>Lilanaamio (poika)</li>
            <li>Suklaatabbynaamio (poika)</li>
            <li>Suklaatabbynaamio (tyttö)</li>
            <li>Suklaanaamio (tyttö)</li>
        </ul>

        <p>Tytöistä ainakin toinen etsii sijoituskotia. Jos pentueessa on näyttelytasoisia pentuja, etsimme ensisijaisesti näyttelyistä kiinnostuneita koteja.</p>
        <img class="img-fluid smaller-img d-block mx-auto" :src="parikuvaImage">
        <br/>
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
