<script>
    import HilleviImg from '../assets/images/Hillevi_01.jpg'
    import HuldaImg1 from '../assets/images/Hulda_01.jpg'
    import HuldaImg2 from '../assets/images/Hulda_02.jpg'
    import HuldaImg3 from '../assets/images/Hulda_03.jpg'
    import HuldaImg4 from '../assets/images/Hulda_04.jpg'
    import HuldaImg5 from '../assets/images/Hulda_05.jpg'
    import HuldaImg6 from '../assets/images/Hulda_06.jpg'
    import VilmaImg1 from '../assets/images/Vilma_01.jpg'
    import VilmaImg2 from '../assets/images/Vilma_02.jpg'
    import VilmaImg3 from '../assets/images/Vilma_03.jpg'
    import VilmaImg4 from '../assets/images/Vilma_04.jpg'
    
    export default {
        data() {
            return {
                hilleviImg: HilleviImg,
                huldaImg: HuldaImg1,
                vilmaImg: VilmaImg2,

                vilmaImages: [ // Array of thumbnail image URLs
                    VilmaImg1,
                    VilmaImg2,
                    VilmaImg4,
                    VilmaImg3,
                ],

                huldaImages: [ // Array of thumbnail image URLs
                    HuldaImg1,
                    HuldaImg2,
                    HuldaImg3,
                    HuldaImg4,
                    HuldaImg5,
                    HuldaImg6,
                ],

                isModalOpenVilma: false, // Controls the modal visibility
                isModalOpenHulda: false, // Controls the modal visibility
                selectedIndexVilma: 0, // Currently selected image for modal
                selectedIndexHulda: 0, // Currently selected image for modal
            };
        },
        computed: {
            selectedImageVilma() {
                return this.vilmaImages[this.selectedIndexVilma];
            },
            selectedImageHulda() {
                return this.huldaImages[this.selectedIndexHulda];
            }
        },
        methods: {
            openModalVilma(index) {
                this.selectedIndexVilma = index;
                this.isModalOpenVilma = true;
            },
            openModalHulda(index) {
                this.selectedIndexHulda = index;
                this.isModalOpenHulda = true;
            },
            closeModal() {
                this.isModalOpenVilma = false;
                this.isModalOpenHulda = false;
            },
            showPreviousImageVilma() {
                if (this.selectedIndexVilma > 0) {
                    this.selectedIndexVilma--;
                } else {
                    this.selectedIndexVilma = this.vilmaImages.length - 1; // Loop back to the last image
                }
                },
                showNextImageVilma() {
                if (this.selectedIndexVilma < this.vilmaImages.length - 1) {
                    this.selectedIndexVilma++;
                } else {
                    this.selectedIndexVilma = 0; // Loop back to the first image
                }
            },
            showPreviousImageHulda() {
                if (this.selectedIndexHulda > 0) {
                    this.selectedIndexHulda--;
                } else {
                    this.selectedIndexHulda = this.huldaImages.length - 1; // Loop back to the last image
                }
                },
                showNextImageHulda() {
                if (this.selectedIndexHulda < this.huldaImages.length - 1) {
                    this.selectedIndexHulda++;
                } else {
                    this.selectedIndexHulda = 0; // Loop back to the first image
                }
            }
        },
    };
</script>

<template>
    <div>
        <div class="content-container">
            <h5>"Vilma" JCH KCH Fi*Humming California Girls JW</h5>
            <p>SBI n
                <br>
                s. 26.2.2024
            </p>
            <p>Näyttelymenestys: 7xNOM, 6xBIS, 2xBIV, Junior Winner</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=329981" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid scaledImg" title="Fi*Humming California Girls" :src="vilmaImg" alt="Vilma" width="1300" height="953">
                
                <!-- Thumbnails -->
                <div class="thumbnail-container">
                <img 
                    v-for="(image, index) in vilmaImages" 
                    :key="index" 
                    :src="image" 
                    alt="Thumbnail" 
                    @click="openModalVilma(index)"
                />
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpenVilma" class="modal-overlay" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <button @click="closeModal" class="close-btn">✖</button>
                    
                    <!-- Previous Button -->
                    <button class="nav-btn prev" @click="showPreviousImageVilma">&#8592;</button>

                    <img :src="selectedImageVilma" alt="Selected picture" />

                    <!-- Next Button -->
                    <button class="nav-btn next" @click="showNextImageVilma">&#8594;</button>
                </div>
            </div>

        </div>

        <hr>

        <div class="content-container">
            <h5>"Hulda" JCH KCH Unica vom Lilienweg</h5>
            <p>SBI b 21
                <br>
                s. 7.8.2023
            </p>
            <p>Näyttelymenestys: 7xNOM, 1xBIS, 2xBIV</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=323820" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid scaledImg" title="Unica vom Lilienweg" :src="huldaImg" alt="Hulda" width="700" height="1000">

                <!-- Thumbnails -->
                <div class="thumbnail-container">
                <img 
                    v-for="(image, index) in huldaImages" 
                    :key="index" 
                    :src="image" 
                    alt="Thumbnail" 
                    @click="openModalHulda(index)"
                />
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpenHulda" class="modal-overlay" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <button @click="closeModal" class="close-btn">✖</button>
                    
                    <!-- Previous Button -->
                    <button class="nav-btn prev" @click="showPreviousImageHulda">&#8592;</button>

                    <img :src="selectedImageHulda" alt="Selected picture" />

                    <!-- Next Button -->
                    <button class="nav-btn next" @click="showNextImageHulda">&#8594;</button>
                </div>
            </div>
        </div>

        <hr>

        <div class="content-container">
            <h5>"Hillevi" CH Demi Johnnatarie -E</h5>
            <p>SBI b
                <br>
                s. 1.3.2022
            </p>
            <p>Yhteisomistuksessa LeeviL-kissalan kanssa</p>
            <p>Näyttelymenestys: 5xBIV, 7xNOM, 3xBIS, International Champion</p>
            <a href="https://kissat.kissaliitto.fi/Pedigree?id=296517" target="_blank">Sukutaulu</a>
            <div>
                <img class="img-fluid scaledImg" title="Demi Johnnatarie -E" :src="hilleviImg" alt="Hillevi" width="1300" height="953">
            </div>
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

    .scaledImg {
        object-fit: contain;
        transform: scale(0.75);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .gallery {
        text-align: center;
    }

    .main-picture img {
        width: 100%;
        max-width: 600px;
        height: auto;
        margin-bottom: 20px;
    }

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
