<script setup>
    import HarppuImg from "../assets/images/Harppu_01.jpg";
    import HalkaImg from "../assets/images/Halka_01.jpg";
    import Card from "../components/Card.vue";
    
    const harppuImg = HarppuImg;
    const halkaImg = HalkaImg;
</script>

<template>
    <div>
        <Card
            :name='`"Halka" SP, SC Recknagel Tairapänks, DVM, DSM`'
            :variety="'SBI a'"
            :lifeDates="'21.6.2009 - 23.1.2025'"
            :tom="'IC FI*Zhamanen Fangio, JW (SBI n)'"
            :queen="'FI*Recknagel Fridakahlo (SBI b)'"
            :exhibitionSuccessResults="['Multi BIS (& BIV & NOM) Winner', 'Vuoden kissa 2014']"
            :image="halkaImg"
        />

        <hr>

        <Card
            :name='`"Harppu" SP, SC Zhamanen Harlequin, DVM DSM`'
            :variety="'SBI n 21'"
            :lifeDates="'28.7.2008 - 12.12.2023'"
            :tom="'EC FI*JoJon El Rayo Rumba (SBI n 21)'"
            :queen="'IC FI*Zhamanen Ferrarina N.F.S. (SBI h)'"
            :exhibitionSuccessResults="['Multi BIS, BIV, NOM -winner']"
            :image="harppuImg"
        />
  </div>
</template>
