<script>
    import HarppuImg from '../assets/images/Harppu_01.jpg'
    
    export default {
        data() {
            return {
                harppuImg: HarppuImg
            };
        }
    };
</script>

<template>
    <div>
        <div class="content-container">
            <h5>Harppu</h5>
            <p>SP SC Zhamanen Harlequin, DVM DSM</p>
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
