<script>
    import HilleviImg from '../assets/images/Hillevi_01.jpg'
    import HuldaImg from '../assets/images/Hulda_01.jpg'
    import VilmaImg from '../assets/images/Vilma_02.jpg'
    
    export default {
        data() {
            return {
                hilleviImg: HilleviImg,
                huldaImg: HuldaImg,
                vilmaImg: VilmaImg
            };
        }
    };
</script>

<template>
    <div>
        <div class="content-container">
            <h5>"Vilma" KCH Fi*Humming California Girls</h5>
            <p>SBI n
                <br>
                s. 26.2.2024
            </p>
            <p>Näyttelymenestys: 3xNOM, 3xBIS</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=329981" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid" title="Fi*Humming California Girls" :src="vilmaImg" alt="Vilma" width="1300" height="953">
            </div>
        </div>

        <hr>

        <div class="content-container">
            <h5>"Hillevi" CH Demi Johnnatarie -E</h5>
            <p>SBI b
                <br>
                s. 1.3.2022
            </p>
            <p>Yhteisomistuksessa LeeviL-kissalan kanssa</p>
            <p>Näyttelymenestys: 4xBIV, 7xNOM, 3xBIS</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=296517" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid" title="Demi Johnnatarie -E" :src="hilleviImg" alt="Hillevi" width="1300" height="953">
            </div>
        </div>

        <hr>

        <div class="content-container">
            <h5>"Hulda" JCH KCH Unica vom Lilienweg</h5>
            <p>SBI b 21
                <br>
                s. 7.8.2023
            </p>
            <p>Näyttelymenestys: Kitten Champion, Junior Champion, 4xNOM, 1xBIV</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=323820" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid" title="Unica vom Lilienweg" :src="huldaImg" alt="Hulda" width="700" height="1000">
            </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 2rem;
    }

    h5 {
        font-weight: bold;
    }

    img {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
