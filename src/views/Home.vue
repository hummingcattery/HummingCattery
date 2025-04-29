<script setup>
    import VilmaImage03 from '../assets/images/Vilma_03.jpg'
    import { useTextStore } from "../stores/useTextStore"

    const vilmaImage03 = VilmaImage03;
    const textStore = useTextStore()
</script>

<template>
    <div>
        <h1>{{ textStore.getText("welcome") }}</h1>
    </div>
    <div class="content-container">
        <p>
            {{ textStore.getText("homeInfo") }}
            <br>
            <span>
                <router-link class="nav-link" to="/Pentu-info">
                {{textStore.getText("placementTerms")}}
                </router-link>
            </span>
        </p>
        <div style="padding-top: 1rem;">
            <p>{{ textStore.getText("homeInfoSecondary") }}</p>
            <img class="img-fluid" :src="vilmaImage03" width="700" height="1000">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }

    span {
        text-decoration: underline;
    }

    span > a {
        display: contents;
        padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
        font-size: var(--bs-nav-link-font-size);
        font-weight: var(--bs-nav-link-font-weight);
        color: var(--bs-nav-link-color);
        text-decoration: none;
        background: none;
        border: 0;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }

    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }
</style>
