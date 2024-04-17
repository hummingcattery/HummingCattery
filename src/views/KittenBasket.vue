<script>
    export default {
        data() {
            return {
                valmaImgUrl: import.meta.env.VITE_VALMAIMGURL,
                vilmaImgUrl: import.meta.env.VITE_VILMAIMGURL
            };
        }
    }
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
            <img class="column" title="Valma" :src="valmaImgUrl" alt="Valma">
            <img class="column" title="Vilma" :src="vilmaImgUrl" alt="Vilma">
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
