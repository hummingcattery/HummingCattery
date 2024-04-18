<script>
    import Pentue5Img from '../assets/images/pentue_05_01.jpg'
    
    export default {
        data() {
            return {
                pentue5Img: Pentue5Img
            };
        }
    };
</script>

<template>
    <div>
      <h1>5. pentue</h1>
    </div>

    <div class="content-container">
      <h2>Humming Paranoid Android x Touchant Chance au Jeu</h2>
      <p>Synt. 4.6.2019</p>
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
                    <td>Humming Musik Non Stop</td>
                    <td>SBI c</td>
                    <td>uros</td>
                    <td>Lemmikki</td>
                  </tr>
                  <tr>
                    <td>Humming Stoppa Mig Juni</td>
                    <td>SBI b</td>
                    <td>uros</td>
                    <td>Lemmikki</td>
                  </tr>
                  <tr>
                    <td>Humming Visslaren</td>
                    <td>SBI c 21</td>
                    <td>naaras</td>
                    <td>Lemmikki</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      <img class="img-fluid" title="5. pentue" :src="pentue5Img" alt="5. pentue" width="1141" height="1600">
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
