<template>
    <div>
        <div class="content-container">
            <h5>"Halka" SP, SC Recknagel Tairapänks, DVM, DSM</h5>
            <p>SBI a
                <br>
                s. 21.6.2009
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
                <img class="img-fluid" title="SC FI*Recknagel Tairapänks" src="C:\Users\Tomi\Coding\FullStack\humming\humming-cattery\src\assets\images\Halka_01.jpg" alt="Halka" width="900" height="600">
            </div>
        </div>

        <hr>

        <div class="content-container">
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
                    <img class="img-fluid" title="Hekla" src="C:\Users\Tomi\Coding\FullStack\humming\humming-cattery\src\assets\images\Hekla_01.jpeg" alt="Hekla" width="1200" height="1600">
                </div>
            </p>
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
