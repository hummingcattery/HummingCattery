<template>
    <div class="page-content">
        <div class="navbar-content">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item navbar-nav-hover">
                                <router-link class="nav-link" to="/Humming">Etusivu</router-link>
                            </li>
                            <li class="nav-item navbar-nav-hover">
                                <router-link class="nav-link" to="/Uutiset">Uutiset</router-link>
                            </li>
                            <li class="nav-item dropdown navbar-nav-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissat</a>
                                <ul class="dropdown-menu navbar-nav-hover" aria-labelledby="navbarDropdownMenuLink">
                                    <!-- <li><a class="dropdown-item" href="#">Naaraat</a></li> -->
                                    <li><router-link class="nav-link" to="/Naaraat">Naaraat</router-link></li>
                                    <li><router-link class="nav-link" to="/Kastraatit">Kastraatit</router-link></li>
                                    <li><router-link class="nav-link" to="/Muistoissa">Muistoissa</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item navbar-nav-hover">
                                <router-link class="nav-link" to="/Pentukori">Pentukori</router-link>
                            </li>
                            <li class="nav-item dropdown navbar-nav-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pentueet</a>
                                <ul class="dropdown-menu navbar-nav-hover" aria-labelledby="navbarDropdownMenuLink">
                                    <li><router-link class="nav-link" to="/1Pentue">1. pentue</router-link></li>
                                    <li><router-link class="nav-link" to="/2Pentue">2. pentue</router-link></li>
                                    <li><router-link class="nav-link" to="/3Pentue">3. pentue</router-link></li>
                                    <li><router-link class="nav-link" to="/4Pentue">4. pentue</router-link></li>
                                    <li><router-link class="nav-link" to="/5Pentue">5. pentue</router-link></li>
                                    <li><router-link class="nav-link" to="/6Pentue">6. pentue</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown navbar-nav-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissala</a>
                                <ul class="dropdown-menu navbar-nav-hover" aria-labelledby="navbarDropdownMenuLink">
                                    <li><router-link class="nav-link" to="/Kasvattaja">Kasvattaja</router-link></li>
                                    <li><router-link class="nav-link" to="/Pentu-info">Pentu-info</router-link></li>
                                    <li><router-link class="nav-link" to="/OtaYhteytta">Ota yhteyttä</router-link></li>
                                </ul>
                            </li>
                        </ul>
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

    .navbar-nav-hover:hover {
        background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), 
              url('/pentue_01.jpg');
        background-size: cover;
    }

    .navbar-nav .nav-item {
        border-radius: 8px;
    }
    
    .navbar-nav .nav-item .nav-link:hover {
        background-color: rgba(229, 216, 235, 0.5) !important;
    }
</style>
