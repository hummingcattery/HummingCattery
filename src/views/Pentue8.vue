<script setup>
    import KittensTable from '../components/KittensTable.vue';
    import Pentue8Img from '../assets/images/pentue_08.jpg'

    const pentue8Img = Pentue8Img;
</script>

<template>
    <div>
        <h1>8. pentue</h1>
    </div>

    <div class="content-container">
        <h2>JCH KCH Unica vom Lilienweg x FI*Njaalan Puolâš</h2>
        <p>Synt. 7.4.2026</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['FI*Humming Surfing on a Rocket', 'SBI b 21', 'uros', '', ''],
            ['FI*Humming Cherry Blossom Girl', 'SBI b', 'naaras', '', ''],
            ['FI*Humming Alpha Beta Gaga', 'SBI c', 'uros', '', ''],
            ['FI*Humming Alone in Kyoto', 'SBI b 21', 'naaras', '', ''],
        ]"/>

        <img class="img-fluid smaller-img d-block mx-auto" title="8. pentue" :src="pentue8Img" alt="8. pentue">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
