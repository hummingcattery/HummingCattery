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
            :exhibitionSuccessResults="['Useampi BIV & NOM pentuluokissa. Hekla ei ole näyttelytasoinen, joten aikuisena ei ole käyty näyttelyissä. :)']"
            :image="heklaImg"
        />
        <!-- <div class="content-container">
            <p>
                <h5>"Hekla" FI*Humming Birdy</h5>
                <p>SBI c
                <br>
                s. 10.5.2013
                </p>
                <p>
                    isä: CH*Tamus Thunderbird
                    <br>
                    emo: Recknagel Tairapänks
                </p>
                <p>Näyttelymenestys:
                    <span>Useampi BIV & NOM pentuluokissa. Hekla ei ole näyttelytasoinen, joten aikuisena ei ole käyty näyttelyissä. :)</span>
                </p>
                <div col-3>
                    <img class="img-fluid" title="Hekla" :src="heklaImg" alt="Hekla" width="1200" height="1600">
                </div>
            </p>
        </div> -->
  </div>
</template>

<style lang="scss" scoped>
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
    
    .content-container {
        background-color: #F8F3FC;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 2rem;
    }
</style>
