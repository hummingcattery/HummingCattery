<script setup>
    import Pentue2Img from '../assets/images/pentue_02.jpg'
    import KittensTable from '../components/KittensTable.vue';
    
    const pentue2Img = Pentue2Img;
</script>

<template>
    <div>
        <h1>2. pentue</h1>
    </div>

    <div class="content-container">
        <h2>SC Recknagel Tairapänks DVM x Tamus Thunderbird</h2>
        <p>Synt. 10.5.2013</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['Humming Birdy', 'SBI c', 'naaras', 'Siitostasoinen / Jäi kotiin', 'Nominated for BIS'],
            ['Humming Banshee Beat', 'SBI c', 'uros', 'Lemmikki', ''],
            ['Humming Baba O’Riley', 'SBI c', 'uros', 'Lemmikki', ''],
            ['Humming Bullet Boy', 'SBI c', 'uros', 'Lemmikki', '']
        ]"/>
      
        <img class="img-fluid smaller-img d-block mx-auto" title="2. pentue" :src="pentue2Img" alt="2. pentue">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
