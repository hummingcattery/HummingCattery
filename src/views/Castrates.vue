<script setup>
    import HeklaImg from '../assets/images/Hekla_01.jpeg'
    import Card from '../components/Card.vue'
    import { useTextStore } from "../stores/useTextStore"
    
    const heklaImg = HeklaImg;
    const textStore = useTextStore()
</script>

<template>
    <div>
        <Card
            :name="`${textStore.getText('cats.hekla.name')} ${textStore.getText('cats.hekla.fullname')}`"
            :variety="textStore.getText('cats.hekla.variety')"
            :lifeDates="textStore.getText('cats.hekla.lifeDates')"
            :tom="textStore.getText('cats.hekla.tom')"
            :queen="textStore.getText('cats.hekla.queen')"
            :exhibitionSuccessResults="textStore.getText('cats.hekla.exhibitionSuccessResults')"
            :image="heklaImg"
        />
  </div>
</template>
