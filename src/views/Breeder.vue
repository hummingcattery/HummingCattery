<script setup>
    import BreederImg from '../assets/images/Breeder.jpg'
    import { useTextStore } from "../stores/useTextStore"

    const breederImg = BreederImg;
    const textStore = useTextStore()
</script>

<template>
    <div>
        <h1>{{textStore.getText("headerBreeder")}}</h1>
    </div>

    <div class="content-container">
        <p>{{textStore.getText("breederIntrodction1")}}</p>
        <p>{{textStore.getText("breederIntrodction2")}}</p>
        <p>{{textStore.getText("breederIntrodction3")}}</p>
        <p>{{textStore.getText("breederIntrodction4")}}</p>
        
        <div class="image-container">
            <img class="img-fluid" :src="breederImg" alt="Jenni">
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    .image-container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
</style>
