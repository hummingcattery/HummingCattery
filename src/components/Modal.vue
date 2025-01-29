<script setup lang="ts">
    import {defineProps, computed, ref, watch} from "vue";
    import { useModalStore } from "../stores/useModalStore";

    const props = defineProps<{
        isOpen: boolean;
        currentGallery: string[];
        selectedIndex: number;
    }>();

    const modalStore = useModalStore();
    var selectedIndexInModal = ref(props.selectedIndex);

    watch(() => props.selectedIndex, (newIndex) => {
        selectedIndexInModal.value = newIndex;
    });

    var selectedImage = computed(() => props.currentGallery[selectedIndexInModal.value]);

    const handleModalCloseClick = () => {
        modalStore.closeModal();
    };

    const handleShowPreviousImageClick = () => {
        selectedIndexInModal.value = modalStore.showPreviousImage();
    };

    const handleShowNextImageClick = () => {
        selectedIndexInModal.value = modalStore.showNextImage();
    };
</script>

<template>
    <div v-if="modalStore.isOpen" class="modal-overlay" @click="handleModalCloseClick">
        <div class="modal-content" @click.stop>
            <button @click="handleModalCloseClick" class="close-btn">✖</button>
            <button class="nav-btn prev" @click="handleShowPreviousImageClick">&#8592;</button>
            <img :src="selectedImage" alt="Selected picture" />
            <button class="nav-btn next" @click="handleShowNextImageClick">&#8594;</button>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center; 
        align-items: center;     
        z-index: 9999;
    }

    .modal-content {
        background: white;       
        padding: 20px;           
        border-radius: 10px;     
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        display: flex;           
        justify-content: center; 
        align-items: center;     
    }

    .modal-content img {
        max-width: 90vw;         
        max-height: 80vh;        
        display: block;          
        border-radius: 5px;      
    }

    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        font-size: 24px;
        padding: 10px;
        cursor: pointer;
        z-index: 10;
        border-radius: 5px;
        height: 50%;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 5px;
        background: #e2e2e2;
        border: none;
        font-size: 2rem;
        font-weight: bold;
        color: #000000;
        cursor: pointer;
        outline: none;
        transition: color 0.2s ease;
        border-radius: 5px;
    }

    .close-btn:hover {
        color: #5e5e5e;
    }
</style>
