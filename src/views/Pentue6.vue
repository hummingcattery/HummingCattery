<script setup>
    import Pentue6Img from '../assets/images/Pentukori_04.jpg'
    import KittensTable from '../components/KittensTable.vue';
    
    const pentue6Img = Pentue6Img;
</script>

<template>
    <div>
        <h1>6. pentue</h1>
    </div>

    <div class="content-container">
        <h2>Demi JohnNatarie -E - US*Kyatwo T'Challa's Glory</h2>
        <p>Synt. 26.2.2024</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <KittensTable :cats="[
            [`FI*Humming California Dreamin'`, `SBI n`, `naaras`, `Lemmikki`, ``],
            [`Fi*Humming California Girls`, `SBI n`, `naaras`, `Siitostasoinen`, `8xNOM, 7xBIS, 4xBIV, Junior Winner`]
        ]"/>
  
        <img class="img-fluid smaller-img d-block mx-auto" title="6. pentue" :src="pentue6Img" alt="6. pentue">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
