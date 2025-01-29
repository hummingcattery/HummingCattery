<script setup>
    import Pentue4Img from '../assets/images/pentue_04.jpg'
    import KittensTable from '../components/KittensTable.vue';
    
    const pentue4Img = Pentue4Img;
</script>

<template>
    <div>
        <h1>4. pentue</h1>
    </div>

    <div class="content-container">
        <h2>Humming Birdy x Mototassun Rocket III</h2>
        <p>Synt. 20.6.2017</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['Humming Karma Police', 'SBI a', 'uros', 'Lemmikki', ''],
            ['Humming No Surprises', 'SBI n', 'uros', 'Lemmikki', ''],
            ['Humming Paranoid Android', 'SBI f', 'naaras', 'Näyttely/siitos', 'Nominated for BIS']
        ]"/>

        <img class="img-fluid" title="4. pentue" :src="pentue4Img" alt="4. pentue" width="1600" height="1200">
    </div>
</template>

<style lang="scss" scoped>
    img {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
