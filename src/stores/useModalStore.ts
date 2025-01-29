import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";

export const useModalStore = defineStore("modal", () => {
    const  isOpen = ref(false);
    const  component = shallowRef<null | any>(null);
    const  props = ref<Record<string, any>>({});
    const  gallery = ref<string[]>([]);
    const  index = ref<number>(0);

    function openModal(modalComponent: any, modalProps: { gallery: string[]; index: number }) {
        component.value = modalComponent;
        isOpen.value = true;
        gallery.value = modalProps.gallery;
        index.value = modalProps.index;
    }

    function closeModal() {
        isOpen.value = false;
    };

    function showPreviousImage() {
        index.value =
            index.value > 0
            ? index.value - 1
            : gallery.value.length - 1;

        return index.value;
    };

    function showNextImage() {
        index.value =
        index.value < gallery.value.length - 1
        ? index.value + 1
        : 0;

        return index.value;
    };

    return { isOpen, component, props, gallery, index, openModal, closeModal, showPreviousImage, showNextImage };
});