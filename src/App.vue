<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar></Navbar>
    <div>
      <!-- carousel => commented out, because it causes a lot of trouble -->
      <!-- <main class="carouselContent">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20230721_011959.jpg" class="d-block w-100 carouselImage" alt="...">
            </div>
            <div class="carousel-item">
              <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20230817_160944.jpg" class="d-block w-100 carouselImage" alt="...">
            </div>
            <div class="carousel-item">
              <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20230901_192112.jpg" class="d-block w-100 carouselImage" alt="...">
            </div>
            <div class="carousel-item">
              <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20231206_210954.jpg" class="d-block w-100 carouselImage" alt="...">
            </div>
            <div class="carousel-item">
              <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\1609504678664.jpg" class="d-block w-100 carouselImage" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </main> -->

      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: green;

  &:hover {
    color: greenyellow;
  }
  padding-left: 20%;
}

.header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.carouselImage {
  height: 800px;
  width: 500px;
}

.pageContent {
  width: 200%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>