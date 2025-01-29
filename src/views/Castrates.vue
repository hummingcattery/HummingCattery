<script setup>
    import HeklaImg from '../assets/images/Hekla_01.jpeg'
    import Card from '../components/Card.vue'
    
    const heklaImg = HeklaImg;
</script>

<template>
    <div>
        <Card
            :name='`"Hekla" FI*Humming Birdy`'
            :variety="'SBI c'"
            :lifeDates="'10.5.2013'"
            :tom="'CH*Tamus Thunderbird'"
            :queen="'Recknagel Tairapänks'"
            :exhibitionSuccessResults="'Useampi BIV & NOM pentuluokissa. Hekla ei ole näyttelytasoinen, joten aikuisena ei ole käyty näyttelyissä. :)'"
            :image="heklaImg"
        />
  </div>
</template>
