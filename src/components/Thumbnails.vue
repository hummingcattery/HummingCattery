<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        gallery: Array,
        modalOpening: Function
    });
</script>

<template>
    <div class="thumbnail-container">
          <img
            v-for="(image, index) in props.gallery"
            :key="index"
            :src="image"
            alt="Thumbnail"
            @click="props.modalOpening(props.gallery, index)"
          />
        </div>
</template>

<style lang="scss" scoped>
    .thumbnail-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }

    .thumbnail-container img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .thumbnail-container img:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
</style>
