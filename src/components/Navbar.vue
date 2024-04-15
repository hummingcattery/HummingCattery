<script>
</script>

<template>
    <div class="page-content">
        <div class="navbar-content">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <div class="d-flex justify-content-around">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/Humming">Etusivu</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/News">Uutiset</router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissat</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <!-- <li><a class="dropdown-item" href="#">Naaraat</a></li> -->
                                        <li><router-link class="nav-link" to="/Mollies">Naaraat</router-link></li>
                                        <li><router-link class="nav-link" to="/Castrates">Kastraatit</router-link></li>
                                        <li><router-link class="nav-link" to="/InMemoriam">Muistoissa</router-link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/KittenBasket">Pentukori</router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pentueet</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><router-link class="nav-link" to="/1Pentue">1. pentue</router-link></li>
                                        <li><router-link class="nav-link" to="/2Pentue">2. pentue</router-link></li>
                                        <li><router-link class="nav-link" to="/3Pentue">3. pentue</router-link></li>
                                        <li><router-link class="nav-link" to="/4Pentue">4. pentue</router-link></li>
                                        <li><router-link class="nav-link" to="/5Pentue">5. pentue</router-link></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissala</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><router-link class="nav-link" to="/Breeder">Kasvattaja</router-link></li>
                                        <li><router-link class="nav-link" to="/KittenInfo">Pentu-info</router-link></li>
                                        <li><router-link class="nav-link" to="/Contact">Ota yhteyttä</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <router-view />
</template>

<style lang="scss" scoped>
    .page-content {
        background-color: #F8F3FC;
        margin-bottom: 1rem;
    }
</style>
