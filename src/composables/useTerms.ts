import { ref } from 'vue';

export interface ITerm {
    ref: string;
    value: string;
    acronym?: string;
    file?: string;
    content?: string;
    links?: []
};

const terms = ref<ITerm[]>([]);

(
    async () => {
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
    }
)();

export function useTerms() {

    const get = async (reference: string): Promise<ITerm | null> => {
        let term = terms.value.find(term => {
            return term.ref === reference;
        }); 
        if (!term) {
            return null;
        };
        if (term.content) {
            return term;
        };
        let response = await fetch(`/md/${term.file}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/text'
            }
        });
        if (!response) {
            return term;
        };
        term.content = await response.text();
        console.log(term.content);
        return term;
    };

    return {
        get
    };
};