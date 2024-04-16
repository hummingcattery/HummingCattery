<script>
    export default {
        data() {
            return {
                pentue2ImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/pentue_02.jpg?sp=r&st=2024-04-16T18:46:00Z&se=2024-04-17T02:46:00Z&spr=https&sv=2022-11-02&sr=b&sig=aeB3YWeYaeTDPbUHvM8It8vFYzXfDlPtgBiDfjxlc60%3D"
            };
        }
    }
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
      
        <img class="img-fluid" title="2. pentue" :src="pentue2ImgUrl" alt="2. pentue" width="943" height="558">
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
