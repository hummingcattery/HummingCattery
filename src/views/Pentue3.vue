<script setup>
    import Pentue3Img from '../assets/images/pentue_03.jpg'
    import KittensTable from '../components/KittensTable.vue';

    const pentue3Img = Pentue3Img;
</script>

<template>
    <div>
        <h1>3. pentue</h1>
    </div>

    <div class="content-container">
        <h2>SC Zhamanen Harlequin, DVM x Tamus Juke</h2>
        <p>Synt. 6.5.2015</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['Humming Hoppipolla', 'SBI b 21', 'uros', 'Lemmikki', ''],
            ['Humming Staralfur', 'SBI a 21', 'uros', 'Lemmikki', '']
        ]"/>

        <img class="img-fluid smaller-img d-block mx-auto" title="3. pentue" :src="pentue3Img" alt="3. pentue">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
