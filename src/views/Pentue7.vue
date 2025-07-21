<script setup>
    import KittensTable from '../components/KittensTable.vue';
    import Pentue7Img from '../assets/images/pentue_07.jpeg'

    const pentue7Img = Pentue7Img;
</script>

<template>
    <div>
        <h1>7. pentue</h1>
    </div>

    <div class="content-container">
        <h2>JCH KCH Unica vom Lilienweg x Lofanna Äärirajoille</h2>
        <p>Synt. 9.4.2025</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['FI*Humming Cornflake Girl', 'SBI h 21', 'naaras', 'N/A', ''],
            ['FI*Humming Silent All These Years', 'SBI c', 'uros', 'Näyttely', ''],
            ['FI*Humming Happy Phantom', 'SBI c 21', 'uros', 'Näyttely/siitos', '']
        ]"/>

        <img class="img-fluid" title="7. pentue" :src="pentue7Img" alt="7. pentue" width="1141" height="1600">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
