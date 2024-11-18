import { computed, ref } from 'vue';

export interface ISection {
    icon: string;
    label: string;
    selector: string;
};

const sections = ref<ISection[]>([]);

export function useSections() {

    const get = computed(() => {
        return sections.value;
    });

    const add = (section: ISection) => {
        sections.value.push(section);
    };

    return {
        get, 
        add
    };
};