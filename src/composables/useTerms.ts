import { ref } from 'vue';

export interface ITerm {
    ref: string;
    file?: string;
    content?: string;
    links?: []
};

const terms = ref<ITerm[]>([]);

export function useTerms() {

    const init = async () => {
        if (terms.value.length > 0) {
            return;
        };
        let response = await fetch('/json/terms.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response) {
            return;
        };
        let json = await response.json();
        terms.value = json;
    };

    const get = async (reference: string): Promise<ITerm | null> => {
        await init();
        let term = terms.value.find(term => {
            return term.ref === reference;
        }); 
        if (!term) {
            return null;
        };
        if (term.content) {
            return term;
        };
        let response = await fetch(`/md/terms/${term.file}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/text'
            }
        });
        if (!response) {
            return term;
        };
        term.content = await response.text();
        return term;
    };

    const has = async (reference: string): Promise<boolean> => {
        await init();
        return (terms.value.findIndex(term => {
            return term.ref === reference;
        })) >= 0;
    };

    return {
        get,
        has
    };
};