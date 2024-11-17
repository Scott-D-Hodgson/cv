import { ITerm } from '../components/layout/Term.vue';
import { useTerms } from './useTerms';
import dompurify from 'dompurify';
import { marked } from 'marked';
import { computed, ref } from 'vue';
import { Modal } from 'bootstrap';

export interface ITermWithContent extends ITerm {
    content: string;
};

const terms = useTerms();
const element = ref<HTMLElement | null>(null);
const openState = ref<boolean>(false);
const activeTerm = ref<ITermWithContent | null>(null);

export function useTermModal() {

    const term = computed(() => {
        return activeTerm.value;
    });

    const bind = (elm: HTMLElement) => {
        element.value = elm;
        elm?.addEventListener('hidden.bs.modal', () => {
            openState.value = false;
        });
    };

    const show = async (value: ITerm) => {
        if (element.value) {
            let modal = new Modal(element.value);
            if (openState.value === true) {
                modal.hide();
            };
            activeTerm.value = {
                ...value,
                content: 'Unable to load term content at the moment'
            };            
            let lookup = await terms.get(value.reference);
            if (lookup && lookup.content) {
                activeTerm.value.content = dompurify.sanitize(
                    await marked.parse(lookup.content))
            };
            modal.show();
        };
    };

    return {
        bind, 
        show,
        term
    };
};