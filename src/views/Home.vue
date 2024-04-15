<script>
    export default {
        data() {
            return {
                imgUrl: 'src/assets/images/Etusivu.jpg'
            };
        }
        };
</script>

<template>
    <div>
        <h1>Tervetuloa FI*Humming pyhä birma -kissalan sivuille!</h1>
    </div>
    <div class="content-container">
        <p>
            Meillä on pentuja, etsinnässä kaksi eri sijoituskotia PK-seudulta tai sopimuksen mukaan myös esim. Pirkanmaalta. Mahdollista myös sijoittaa molemmat tytöt samaan kotiin.<br>
            Lue sijoitusehdoista Kissalan Pentu-infosta.
        </p>
        <img class="img-fluid" :src="imgUrl" width="700" height="1000">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    img {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
