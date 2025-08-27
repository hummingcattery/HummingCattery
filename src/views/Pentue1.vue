<script setup>
    import Pentue1Img from '../assets/images/pentue_01.jpg'
    import KittensTable from '../components/KittensTable.vue';
    
    const pentue1Img = Pentue1Img;
</script>

<template>
    <div>
        <h1>1. pentue</h1>
    </div>

    <div class="content-container">
        <h2>SC Zhamanen Harlequin DVM x Tamus Thunderbird</h2>
        <p>Synt. 3.3.2013</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['Humming Ummagumma', 'SBI b', 'uros', 'Näyttelytasoinen', 'Nominated for BIS'],
            ['Humming High Hopes', 'SBI c', 'naaras', 'Siitostasoinen', 'BIS-winner']
        ]"/>

        <img class="img-fluid smaller-img d-block mx-auto" title="1. pentue" :src="pentue1Img" alt="1. pentue">
    </div>
</template>

<style lang="scss" scoped>    
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
