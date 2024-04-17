<script>
    export default {
        data() {
            return {
                pentue4ImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/pentue_04.jpg?sp=r&st=2024-04-16T18:48:00Z&se=2024-04-17T02:48:00Z&spr=https&sv=2022-11-02&sr=b&sig=71jT7NjNQhNh7OwOtWLSh1OkAvrFZ1NCB82UpxDQOzc%3D"
            };
        }
    }
</script>

<template>
    <div>
      <h1>4. pentue</h1>
    </div>

    <div class="content-container">
      <h2>Humming Birdy x Mototassun Rocket III</h2>
      <p>Synt. 20.6.2017</p>
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
                    <td>Humming Karma Police</td>
                    <td>SBI a</td>
                    <td>uros</td>
                    <td>Lemmikki</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Humming No Surprises</td>
                    <td>SBI n</td>
                    <td>uros</td>
                    <td>Lemmikki</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Humming Paranoid Android</td>
                    <td>SBI f</td>
                    <td>naaras</td>
                    <td>Näyttely/siitos</td>
                    <td>Nominated for BIS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <img class="img-fluid" title="4. pentue" :src="pentue4ImgUrl" alt="4. pentue" width="1600" height="1200">
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
