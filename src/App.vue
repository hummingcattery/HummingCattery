<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import Banner from './components/Banner.vue'
</script>

<template>
  <div>
    <Banner></Banner>
  </div>
  <div>
    <Navbar></Navbar>
    <div>
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