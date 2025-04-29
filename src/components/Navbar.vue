<script setup>
    import { useTextStore } from "../stores/useTextStore"

    const textStore = useTextStore()
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
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item navbar-nav-hover">
                                <router-link class="nav-link" :to="textStore.getText('routes.home')">{{textStore.getText("buttons.home")}}</router-link>
                            </li>
                            <li class="nav-item navbar-nav-hover">
                                <router-link class="nav-link" :to="textStore.getText('routes.news')">{{textStore.getText("buttons.news")}}</router-link>
                            </li>
                            <li class="nav-item dropdown navbar-nav-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{textStore.getText("buttons.cats")}}</a>
                                <ul class="dropdown-menu navbar-nav-hover" aria-labelledby="navbarDropdownMenuLink">
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.mollies')">{{textStore.getText("buttons.mollies")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.castrates')">{{textStore.getText("buttons.castrates")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.inMemoriam')">{{textStore.getText("buttons.inMemoriam")}}</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item navbar-nav-hover">
                                <router-link class="nav-link" :to="textStore.getText('routes.kittenBasket')">{{textStore.getText("buttons.kittenBasket")}}</router-link>
                            </li>
                            <li class="nav-item dropdown navbar-nav-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{textStore.getText("buttons.litters")}}</a>
                                <ul class="dropdown-menu navbar-nav-hover" aria-labelledby="navbarDropdownMenuLink">
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter1')">{{textStore.getText("buttons.litter1")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter2')">{{textStore.getText("buttons.litter2")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter3')">{{textStore.getText("buttons.litter3")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter4')">{{textStore.getText("buttons.litter4")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter5')">{{textStore.getText("buttons.litter5")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter6')">{{textStore.getText("buttons.litter6")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.litter7')">{{textStore.getText("buttons.litter7")}}</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown navbar-nav-hover">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{textStore.getText("buttons.kissala")}}</a>
                                <ul class="dropdown-menu navbar-nav-hover" aria-labelledby="navbarDropdownMenuLink">
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.breeder')">{{textStore.getText("buttons.breeder")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.kittenInfo')">{{textStore.getText("buttons.kittenInfo")}}</router-link></li>
                                    <li><router-link class="nav-link" :to="textStore.getText('routes.contact')">{{textStore.getText("buttons.contact")}}</router-link></li>
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
