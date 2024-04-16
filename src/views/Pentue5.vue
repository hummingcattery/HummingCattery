<script>
    export default {
        data() {
            return {
                pentue5ImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/pentue_05_01.jpg?sp=r&st=2024-04-16T18:48:29Z&se=2024-04-17T02:48:29Z&spr=https&sv=2022-11-02&sr=b&sig=m6y4ZbSgpZK2URVdsowPH6PDyN%2FPBFYvOwoa2LzbIDc%3D"
            };
        }
    }
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
  
      <img class="img-fluid" title="5. pentue" :src="pentue5ImgUrl" alt="5. pentue" width="1141" height="1600">
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
</style>
