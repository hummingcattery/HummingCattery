<script setup>
    import Pentue5Img from '../assets/images/pentue_05_01.jpg'
    import KittensTable from '../components/KittensTable.vue';
    
    const pentue5Img = Pentue5Img;
</script>

<template>
    <div>
        <h1>5. pentue</h1>
    </div>

    <div class="content-container">
        <h2>Humming Paranoid Android x Touchant Chance au Jeu</h2>
        <p>Synt. 4.6.2019</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            ['Humming Musik Non Stop', 'SBI c', 'uros', 'Lemmikki', ''],
            ['Humming Stoppa Mig Juni', 'SBI b', 'uros', 'Lemmikki', ''],
            ['Humming Visslaren', 'SBI c 21', 'naaras', 'Lemmikki', '']
        ]"/>
  
        <img class="img-fluid smaller-img d-block mx-auto" title="5. pentue" :src="pentue5Img" alt="5. pentue">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
