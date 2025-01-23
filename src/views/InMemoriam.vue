<script>
    import HarppuImg from '../assets/images/Harppu_01.jpg'
    import HalkaImg from '../assets/images/Halka_01.jpg'
    
    export default {
        setup() {
            const harppuImg = HarppuImg;
            const halkaImg = HalkaImg;

            return {
                harppuImg,
                halkaImg
            };
        },
    };
</script>

<template>
    <div>
        <div class="content-container">
            <h5>"Halka" SP, SC Recknagel Tairapänks, DVM, DSM</h5>
            <p>SBI a
                <br>
                s. 21.6.2009 - 23.1.2025
            </p>
            <p>
                isä: IC FI*Zhamanen Fangio, JW (SBI n)
                <br>
                emo: FI*Recknagel Fridakahlo (SBI b)
            </p>
            <p>Näyttelymenestys:
                <span>Multi BIS (& BIV & NOM) Winner</span>,
                <span>Vuoden kissa 2014</span>
            </p>
            <div col-3>
                <img class="img-fluid" title="SC FI*Recknagel Tairapänks" :src="halkaImg" alt="Halka" width="900" height="600">
            </div>
        </div>

        <hr>

        <div class="content-container">
            <h5>"Harppu" SP, SC Zhamanen Harlequin, DVM DSM</h5>
            <p>SBI n 21
                <br>
                28.7.2008 - 12.12.2023
            </p>
            <p>
                isä: EC FI*JoJon El Rayo Rumba (SBI n 21)
                <br>
                emo: IC FI*Zhamanen Ferrarina N.F.S. (SBI h)
            </p>
            <p>Näyttelymenestys:
                <span>Multi BIS, BIV, NOM -winner</span>
            </p>
            <div>
                <img class="img-fluid" title="SC FI*Zhamanen Harlequin, DVM" :src="harppuImg" alt="Harppu" width="900" height="660">
            </div>
        </div>
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
