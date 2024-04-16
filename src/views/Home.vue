<script>
    export default {
        data() {
            return {
                etusivuImgUrl: "https://hummingcatterystorage.blob.core.windows.net/hummingcattery/Etusivu.jpg?sp=r&st=2024-04-16T18:16:59Z&se=2024-04-17T02:16:59Z&spr=https&sv=2022-11-02&sr=b&sig=1THqLJ9%2F71CD3wjNya5qpdNdf9xoJ6XQUdkVYumRIco%3D"
            };
        }
    };
</script>

<template>
    <div>
        <h1>Tervetuloa FI*Humming pyhä birma -kissalan sivuille!</h1>
    </div>
    <div class="content-container">
        <p>
            Meillä on pentuja! Etsinnässä kaksi eri sijoituskotia PK-seudulta tai sopimuksen mukaan myös esim. Pirkanmaalta. Mahdollista myös sijoittaa molemmat tytöt samaan kotiin.
            <br>
            Lue sijoitusehdoista <span><router-link class="nav-link" to="/KittenInfo">täältä</router-link></span>.
        </p>
        <img class="img-fluid" :src="etusivuImgUrl" width="700" height="1000">
    </div>
</template>

<style lang="scss" scoped>
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    img {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
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
</style>
