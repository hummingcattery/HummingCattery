<script>
    import Pentue2Img from '../assets/images/pentue_02.jpg'
    
    export default {
        data() {
            return {
                pentue2Img: Pentue2Img
            };
        }
    };
</script>

<template>
    <div>
      <h1>2. pentue</h1>
    </div>

    <div class="content-container">
      <h2>SC Recknagel Tairapänks DVM x Tamus Thunderbird</h2>
      <p>Synt. 10.5.2013</p>
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
                      <td>Humming Birdy</td>
                      <td>SBI c</td>
                      <td>naaras</td>
                      <td>Siitostasoinen / Jäi kotiin</td>
                      <td>Nominated for BIS</td>
                    </tr>
                    <tr>
                      <td>Humming Banshee Beat</td>
                      <td>SBI c</td>
                      <td>uros</td>
                      <td>Lemmikki</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Humming Baba O’Riley</td>
                      <td>SBI c</td>
                      <td>uros</td>
                      <td>Lemmikki</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Humming Bullet Boy</td>
                      <td>SBI c</td>
                      <td>uros</td>
                      <td>Lemmikki</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
      
      <img class="img-fluid" title="2. pentue" :src="pentue2Img" alt="2. pentue" width="943" height="558">
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
