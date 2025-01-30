<script setup>
    import {defineProps} from "vue";

    const props = defineProps({
        name: String,
        variety: String,
        lifeDates: String,
        tom: String,
        queen: String,
        exhibitionSuccessResults: String,
        image: String
    });
</script>

<template>
    <div class="content-container">
        <h5>{{props.name}}</h5>
        <p>{{props.variety}}
            <br>
                s. {{props.lifeDates}}
            </p>
        <p>
            isä: {{props.tom}}
            <br>
            emo: {{props.queen}}
            </p>
        <p>Näyttelymenestys: {{props.exhibitionSuccessResults}}</p>
        <div col-3>
            <img class="img-fluid" :title="props.name" :src="props.image" :alt="props.name" width="900" height="600">
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
</style>
