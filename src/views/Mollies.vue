<script setup>
    import HilleviImg1 from '../assets/images/Hillevi_01.jpg'
    import HilleviImg2 from '../assets/images/Hillevi_02.jpg'
    import HilleviImg3 from '../assets/images/Hillevi_03.jpg'
    import HilleviImg4 from '../assets/images/Hillevi_04.jpg'
    import HilleviImg5 from '../assets/images/Hillevi_05.jpg'
    import HilleviImg6 from '../assets/images/Hillevi_06.jpg'
    import HuldaImg1 from '../assets/images/Hulda_01.jpg';
    import HuldaImg2 from '../assets/images/Hulda_02.jpg';
    import HuldaImg3 from '../assets/images/Hulda_03.jpg';
    import HuldaImg4 from '../assets/images/Hulda_04.jpg';
    import HuldaImg5 from '../assets/images/Hulda_05.jpg';
    import HuldaImg6 from '../assets/images/Hulda_06.jpg';
    import VilmaImg1 from '../assets/images/Vilma_01.jpg';
    import VilmaImg2 from '../assets/images/Vilma_02.jpg';
    import VilmaImg3 from '../assets/images/Vilma_03.jpg';
    import VilmaImg4 from '../assets/images/Vilma_04.jpg';
    import PipsaImg1 from '../assets/images/Pipsa_01.jpg';
    import PipsaImg2 from '../assets/images/Pipsa_02.jpg';
    import PipsaImg3 from '../assets/images/Pipsa_03.jpg';
    import PipsaImg4 from '../assets/images/Pipsa_04.jpg';
    import PipsaImg5 from '../assets/images/Pipsa_05.jpg';
    import CardWithThumbnails from '../components/CardWithThumbnails.vue';
    import Modal from '../components/Modal.vue';

    const hilleviImg = HilleviImg1;
    const huldaImg = HuldaImg1;
    const vilmaImg = VilmaImg2;
    const pipsaImg = PipsaImg2;

    const vilmaImages = [VilmaImg1, VilmaImg2, VilmaImg4, VilmaImg3];
    const huldaImages = [
        HuldaImg1,
        HuldaImg2,
        HuldaImg3,
        HuldaImg4,
        HuldaImg5,
        HuldaImg6,
    ];
    const hilleviImages = [
        HilleviImg1,
        HilleviImg2,
        HilleviImg3,
        HilleviImg4,
        HilleviImg5,
        HilleviImg6,
    ];
    const pipsaImages = [
        PipsaImg5,
        PipsaImg1,
        PipsaImg2,
        PipsaImg4,
        PipsaImg3,
    ];
</script>

<template>
    <!-- Pipsa Section -->
    <CardWithThumbnails 
        :name='`"Pippa" CH KCH FI*Humming Cornflake Girl`'
        :variety="'	SBI h 21'"
        :lifeDates="'9.4.2025'"
        :exhibitionSuccessResults="'1xNOM'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/perusnaytto_kissa.aspx?id=349832'"
        :image="pipsaImg"
        :gallery="pipsaImages"
        :modalComponent="Modal"
    />

    <hr />

    <!-- Vilma Section -->
    <CardWithThumbnails 
        :name='`"Vilma" IC JCH KCH Fi*Humming California Girls JW`'
        :variety="'SBI n'"
        :lifeDates="'26.2.2024'"
        :exhibitionSuccessResults="'13xNOM, 10xBIS, 5xBIV, Junior Winner'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/Pedigree?id=329981'"
        :image="vilmaImg"
        :gallery="vilmaImages"
        :modalComponent="Modal"
    />

    <hr />

    <!-- Hulda Section -->
    <CardWithThumbnails 
        :name='`"Hulda" JCH KCH Unica vom Lilienweg`'
        :variety="'SBI b 21'"
        :lifeDates="'7.8.2023'"
        :exhibitionSuccessResults="'7xNOM, 1xBIS, 2xBIV'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/Pedigree?id=323820'"
        :image="huldaImg"
        :gallery="huldaImages"
        :modalComponent="Modal"
    />

    <hr>

    <!-- Hillevi Section -->
    <CardWithThumbnails 
        :name='`"Hillevi" CH Demi Johnnatarie -E`'
        :variety="'SBI b'"
        :lifeDates="'1.3.2022'"
        :comments="'Yhteisomistuksessa LeeviL-kissalan kanssa'"
        :exhibitionSuccessResults="'5xBIV, 7xNOM, 3xBIS, International Champion'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/Pedigree?id=296517'"
        :image="hilleviImg"
        :gallery="hilleviImages"
        :modalComponent="Modal"
    />
</template>
