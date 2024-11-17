import { ref } from 'vue';
import { Modal } from 'bootstrap';

const element = ref<HTMLElement | null>(null);
const openState = ref<boolean>(false);

export function useFocusModal() {

    const bind = (elm: HTMLElement) => {
        element.value = elm;
        elm?.addEventListener('hidden.bs.modal', () => {
            openState.value = false;
        });
    };

    const show = async () => {
        if (element.value) {
            let modal = new Modal(element.value);
            modal.show();
        };
    };

    return {
        bind,
        show
    };
};