<script setup>
    import {defineProps} from "vue";

    const props = defineProps({
        name: String,
        variety: String,
        lifeDates: String,
        tom: String,
        queen: String,
        exhibitionSuccessResults: Array,
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
        <p>Näyttelymenestys:
            <span>{{props.exhibitionSuccessResults[0]}}</span>,
            <span>{{props.exhibitionSuccessResults[1]}}</span>
        </p>
        <div col-3>
            <img class="img-fluid" :title="props.name" :src="props.image" :alt="props.name" width="900" height="600">
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
    h5 {
        font-weight: bold;
    }

    img {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
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
