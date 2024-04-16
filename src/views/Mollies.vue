<script>
    export default {
        data() {
            return {
                hilleviImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Hillevi_01.jpg?sp=r&st=2024-04-16T18:40:57Z&se=2024-04-17T02:40:57Z&spr=https&sv=2022-11-02&sr=b&sig=wYJXOHcrYLAs8CfQBQiWUOS7ibS%2FgfD3tvl23z8mAoA%3D",
                huldaImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Hulda_01.jpg?sp=r&st=2024-04-16T18:41:13Z&se=2024-04-17T02:41:13Z&spr=https&sv=2022-11-02&sr=b&sig=4N0G2%2Bi3KNNClmH%2B2G71JqXeva5la4UQ%2FwutW%2BfqK1g%3D"
            };
        }
    }
</script>

<template>
    <div>
        <div class="content-container">
            <h5>"Hillevi" Demi Johnnatarie -E</h5>
            <p>SBI b
                <br>
                s. 1.3.2022
            </p>
            <p>Yhteisomistuksessa LeeviL-kissalan kanssa</p>
            <p>Näyttelymenestys (nuorten luokka): 3xBIV, 5xNOM, 1xBIS</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=296517" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid" title="Demi Johnnatarie -E" :src="hilleviImgUrl" alt="Hillevi" width="1300" height="953">
            </div>
        </div>

        <hr>

        <div class="content-container">
            <h5>"Hulda" KCH Unica vom Lilienweg</h5>
            <p>SBI b 21
                <br>
                s. 7.8.2023
            </p>
            <p>Näyttelymenestys (pennut): Kitten Champion, 2xNOM</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=323820" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid" title="Unica vom Lilienweg" :src="huldaImgUrl" alt="Hulda" width="700" height="1000">
            </div>
        </div>

        <hr>
        
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
