<script setup>
    import HarppuImg from "../assets/images/Harppu_01.jpg";
    import HalkaImg from "../assets/images/Halka_01.jpg";
    import Card from "../components/Card.vue";
    import { useTextStore } from "../stores/useTextStore"
    
    const harppuImg = HarppuImg;
    const halkaImg = HalkaImg;
    const textStore = useTextStore()
</script>

<template>
    <div>
        <Card
            :name="`${textStore.getText('cats.halka.name')} ${textStore.getText('cats.halka.fullname')}`"
            :variety="textStore.getText('cats.halka.variety')"
            :lifeDates="textStore.getText('cats.halka.lifeDates')"
            :tom="textStore.getText('cats.halka.tom')"
            :queen="textStore.getText('cats.halka.queen')"
            :exhibitionSuccessResults="textStore.getText('cats.halka.exhibitionSuccessResults')"
            :image="halkaImg"
        />

        <hr>

        <Card
            :name="`${textStore.getText('cats.harppu.name')} ${textStore.getText('cats.harppu.fullname')}`"
            :variety="textStore.getText('cats.harppu.variety')"
            :lifeDates="textStore.getText('cats.harppu.lifeDates')"
            :tom="textStore.getText('cats.harppu.tom')"
            :queen="textStore.getText('cats.harppu.queen')"
            :exhibitionSuccessResults="textStore.getText('cats.harppu.exhibitionSuccessResults')"
            :image="harppuImg"
        />
  </div>
</template>
