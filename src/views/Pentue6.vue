<script>
    import Pentue6Img from '../assets/images/Pentukori_04.jpg'
    
    export default {
        data() {
            return {
                pentue6Img: Pentue6Img
            };
        }
    };
</script>

<template>
    <div>
      <h1>6. pentue</h1>
    </div>

    <div class="content-container">
      <h2>Demi JohnNatarie -E - US*Kyatwo T'Challa's Glory</h2>
      <p>Synt. 26.2.2024</p>
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
                        <td>FI*Humming California Dreamin'</td>
                        <td>SBI n</td>
                        <td>naaras</td>
                        <td>Lemmikki</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td class="custom-table-data">Fi*Humming California Girls</td>
                        <td>SBI n</td>
                        <td>naaras</td>
                        <td>Siitostasoinen</td>
                        <td></td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      <img class="img-fluid" title="6. pentue" :src="pentue6Img" alt="6. pentue" width="1141" height="1600">
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
