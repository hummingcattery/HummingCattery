<script>
    export default {
        data() {
            return {
                valmaImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Valma_01.jpg?sp=r&st=2024-04-16T18:38:00Z&se=2024-04-17T02:38:00Z&spr=https&sv=2022-11-02&sr=b&sig=wEu%2BKGihj0GS4aIAJsCqzafiwxIaDclUw1pQ2v9%2F7Ew%3D",
                vilmaImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Vilma_01.jpg?sp=r&st=2024-04-16T18:38:29Z&se=2024-04-17T02:38:29Z&spr=https&sv=2022-11-02&sr=b&sig=vyxREJJvtvnoPXnLu%2BlKMt6KSpz0FcjaZ41PWx4HojU%3D"
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
        
        <div class="row">
            <img class="column" title="Valma" :src="valmaImgUrl" alt="Valma">
            <img class="column" title="Vilma" :src="vilmaImgUrl" alt="Vilma">
        </div>
    </div>

    <hr>
    
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
</style>
