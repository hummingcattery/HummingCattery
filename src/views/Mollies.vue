<script setup>
    import { ref, computed } from 'vue';
    import HilleviImg1 from '../assets/images/Hillevi_01.jpg'
    import HilleviImg2 from '../assets/images/Hillevi_02.jpg'
    import HilleviImg3 from '../assets/images/Hillevi_03.jpg'
    import HilleviImg4 from '../assets/images/Hillevi_04.jpg'
    import HilleviImg5 from '../assets/images/Hillevi_05.jpg'
    import HilleviImg6 from '../assets/images/Hillevi_06.jpg'
    import HuldaImg1 from '../assets/images/Hulda_01.jpg';
    import HuldaImg2 from '../assets/images/Hulda_02.jpg';
    import HuldaImg3 from '../assets/images/Hulda_03.jpg';
    import HuldaImg4 from '../assets/images/Hulda_04.jpg';
    import HuldaImg5 from '../assets/images/Hulda_05.jpg';
    import HuldaImg6 from '../assets/images/Hulda_06.jpg';
    import VilmaImg1 from '../assets/images/Vilma_01.jpg';
    import VilmaImg2 from '../assets/images/Vilma_02.jpg';
    import VilmaImg3 from '../assets/images/Vilma_03.jpg';
    import VilmaImg4 from '../assets/images/Vilma_04.jpg';
    import CardWithThumbnails from '../components/CardWithThumbnails.vue';

    const hilleviImg = HilleviImg1;
    const huldaImg = HuldaImg1;
    const vilmaImg = VilmaImg2;

    const vilmaImages = [VilmaImg1, VilmaImg2, VilmaImg4, VilmaImg3];
    const huldaImages = [
        HuldaImg1,
        HuldaImg2,
        HuldaImg3,
        HuldaImg4,
        HuldaImg5,
        HuldaImg6,
    ];
    const hilleviImages = [
        HilleviImg1,
        HilleviImg2,
        HilleviImg3,
        HilleviImg4,
        HilleviImg5,
        HilleviImg6,
    ];

    const isModalOpen = ref(false);
    const currentGallery = ref([]);
    const selectedIndex = ref(0);

    const selectedImage = computed(() => currentGallery.value[selectedIndex.value]);

    const openModal = (gallery, index) => {
        currentGallery.value = gallery;
        selectedIndex.value = index;
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

    const showPreviousImage = () => {
        selectedIndex.value =
            selectedIndex.value > 0
            ? selectedIndex.value - 1
            : currentGallery.value.length - 1;
    };

    const showNextImage = () => {
        selectedIndex.value =
            selectedIndex.value < currentGallery.value.length - 1
            ? selectedIndex.value + 1
            : 0;
    };
</script>

<template>
    <!-- Vilma Section -->
    <CardWithThumbnails 
        :name='`"Vilma" JCH KCH Fi*Humming California Girls JW`'
        :variety="'SBI n'"
        :lifeDates="'26.2.2024'"
        :exhibitionSuccessResults="'7xNOM, 6xBIS, 2xBIV, Junior Winner'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/Pedigree?id=329981'"
        :image="vilmaImg"
        :gallery="vilmaImages"
        :modalOpening="openModal"
    />

    <hr />

    <!-- Hulda Section -->
    <CardWithThumbnails 
        :name='`"Hulda" JCH KCH Unica vom Lilienweg`'
        :variety="'SBI b 21'"
        :lifeDates="'7.8.2023'"
        :exhibitionSuccessResults="'7xNOM, 1xBIS, 2xBIV'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/Pedigree?id=323820'"
        :image="huldaImg"
        :gallery="huldaImages"
        :modalOpening="openModal"
    />

    <hr>

    <!-- Hillevi Section -->
    <CardWithThumbnails 
        :name='`"Hillevi" CH Demi Johnnatarie -E`'
        :variety="'SBI b'"
        :lifeDates="'1.3.2022'"
        :comments="'Yhteisomistuksessa LeeviL-kissalan kanssa'"
        :exhibitionSuccessResults="'5xBIV, 7xNOM, 3xBIS, International Champion'"
        :pedigreeAddress="'https://kissat.kissaliitto.fi/Pedigree?id=296517'"
        :image="hilleviImg"
        :gallery="hilleviImages"
        :modalOpening="openModal"
    />

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <button @click="closeModal" class="close-btn">✖</button>
            <button class="nav-btn prev" @click="showPreviousImage">&#8592;</button>
            <img :src="selectedImage" alt="Selected picture" />
            <button class="nav-btn next" @click="showNextImage">&#8594;</button>
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
