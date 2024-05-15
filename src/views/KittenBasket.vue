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
            Meillä on pentuja yhdistelmästä Demi JohnNatarie -E - US*Kyatwo T'Challa's Glory
        </p>
        <p>
            s. 26.2.2024
        </p>
    </div>

    <div class="content-container">
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table table-bordered custom-table">
                        <tbody>
                            <tr>
                                <th>Nimi</th>
                                <th>Sukupuoli</th>
                                <th>Väri</th>
                                <th>Taso</th>
                                <th>Tila</th>
                            </tr>

                            <tr>
                                <td>FI*Humming California Dreamin'</td>
                                <td>naaras</td>
                                <td>SBI n</td>
                                <td>siitostasoinen, sijoitukseen</td>
                                <td>Vapaa</td>
                            </tr>

                            <tr>
                                <td class="custom-table-data">Fi*Humming California Girls</td>
                                <td>naaras</td>
                                <td>SBI n</td>
                                <td>näyttelytasoinen, sijoitukseen</td>
                                <td>Vapaa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="row">
            <img class="column" title="Vilma & Valma" :src="pentukori03Img" alt="Vilma & Valma">
            <img class="column" title="Vilma & Valma" :src="pentukori04Img" alt="Vilma & Valma">
            <img class="column" title="Vilma" :src="pentukori05Img" alt="Vilma">
            <img class="column" title="Valma" :src="pentukori06Img" alt="Valma">
            <img class="column" title="Vilma & Valma" :src="pentukori01Img" alt="Vilma & Valma">
            <img class="column" title="Vilma & Valma" :src="pentukori02Img" alt="Vilma & Valma">
            <img class="column" title="Valma" :src="valmaImg" alt="Valma">
            <img class="column" title="Vilma" :src="vilmaImg" alt="Vilma">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
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
