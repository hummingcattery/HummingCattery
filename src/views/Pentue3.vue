<script>
    import Pentue3Img from '../assets/images/pentue_03.jpg'
    
    export default {
        data() {
            return {
                pentue3Img: Pentue3Img
            };
        }
    };
</script>

<template>
    <div>
      <h1>3. pentue</h1>
    </div>

    <div class="content-container">
      <h2>SC Zhamanen Harlequin, DVM x Tamus Juke</h2>
      <p>Synt. 6.5.2015</p>
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
                    <td>Humming Hoppipolla</td>
                    <td>SBI b 21</td>
                    <td>uros</td>
                    <td>Lemmikki</td>
                  </tr>
                  <tr>
                    <td>Humming Staralfur</td>
                    <td>SBI a 21</td>
                    <td>uros</td>
                    <td>Lemmikki</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      <img class="img-fluid" title="3. pentue" :src="pentue3Img" alt="3. pentue" width="1600" height="1064">
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
