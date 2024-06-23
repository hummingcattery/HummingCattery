<script>
    import PentukoriImg01 from "../assets/images/Pentukori_01.jpg"
    import PentukoriImg02 from "../assets/images/Pentukori_02.jpg"
    import PentukoriImg03 from "../assets/images/Pentukori_03.jpg"
    import PentukoriImg04 from "../assets/images/Pentukori_04.jpg"
    import PentukoriImg05 from "../assets/images/Pentukori_05.jpg"
    import PentukoriImg06 from "../assets/images/Pentukori_06.jpg"
    import ValmaImg from "../assets/images/Valma_01.jpg"
    import VilmaImg from "../assets/images/Vilma_01.jpg"
    
    export default {
        data() {
            return {
                valmaImg: ValmaImg,
                vilmaImg: VilmaImg,
                pentukori01Img: PentukoriImg01,
                pentukori02Img: PentukoriImg02,
                pentukori03Img: PentukoriImg03,
                pentukori04Img: PentukoriImg04,
                pentukori05Img: PentukoriImg05,
                pentukori06Img: PentukoriImg06
            };
        }
    };
</script>

<template>
    <div>
        <h1>Pentukori</h1>
    </div>

    <div class="content-container">
        <p>
           Suunnitelmissa pentue Huldalle 2024-2025
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
    }

    tr > th {
        background-color: #F8F3FC;
    }

    tr > td {
        background-color: #F8F3FC;
    }

    .row {
        display: flex;
    }

    .column {
        flex: 50%;
        padding: 5px;
        overflow: auto
    }

    img {
        object-fit: contain;
    }

    .col {
        overflow-x: auto;
    }
</style>
