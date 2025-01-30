<script setup lang="ts">
    import {defineProps} from "vue";
    import Thumbnails from "./Thumbnails.vue";

    const props = defineProps<{
        name: string;
        variety: string;
        lifeDates: string;
        comments?: string; // Optional prop
        exhibitionSuccessResults: string;
        pedigreeAddress: string;
        image: string;
        gallery: string[];
        modalComponent: Object;
    }>();
</script>

<template>
    <div class="content-container">
        <h5>{{props.name}}</h5>
        <p>{{props.variety}}<br />s. {{props.lifeDates}}</p>
        <p v-if="props.comments">{{props.comments}}</p>
        <p>Näyttelymenestys: {{props.exhibitionSuccessResults}}</p>
        <a
            :href="props.pedigreeAddress"
            target="_blank"
            >Sukutaulu</a
        >
        <div class="img-container">
            <img
                class="img-fluid"
                :title="props.name"
                :src="props.image"
                alt="Vilma"
                width="1300"
                height="953"
            />
            <Thumbnails :gallery="props.gallery" :modalComponent="props.modalComponent" />
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
    h5 {
        font-weight: bold;
    }
    
    .content-container {
        background-color: #F8F3FC;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 2rem;
    }

    .img-container {
        margin-left: auto;
        margin-right: auto;
    }
</style>
