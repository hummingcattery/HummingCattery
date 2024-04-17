<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    export default {
        data() {
            return {
                pentue1ImgUrl: import.meta.env.VITE_PENTUE1IMGURL
            };
        }
    }
</script>

<template>
    <div>
        <h1>1. pentue</h1>
    </div>

    <div class="content-container">
        <h2>SC Zhamanen Harlequin DVM x Tamus Thunderbird</h2>
        <p>Synt. 3.3.2013</p>
    </div>
    
    <h3>Pennut</h3>
    <div class="content-container">
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table table-bordered custom-table">
                        <tbody>
                            <tr>
                                <th>Nimi</th>
                                <th>Väri</th>
                                <th>Sukupuoli</th>
                                <th>Taso</th>
                                <th>Näyttelymenestys</th>
                            </tr>

                            <tr>
                                <td>Humming Ummagumma</td>
                                <td>SBI b</td>
                                <td>uros</td>
                                <td>Näyttelytasoinen</td>
                                <td>Nominated for BIS</td>
                            </tr>
                            <tr>
                                <td>Humming High Hopes</td>
                                <td>SBI c</td>
                                <td>naaras</td>
                                <td>Siitostasoinen</td>
                                <td>BIS-winner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <img class="img-fluid" title="1. pentue" :src="pentue1ImgUrl" alt="1. pentue" width="903" height="570">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    .custom-table tbody tr {
        --bs-table-bg: #F8F3FC !important;
    }

    img {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .col {
        overflow-x: auto;
    }
</style>
