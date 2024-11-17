import { ref } from 'vue';

const focusState = ref<string>('all');

export function useFocus() {

    const get = (): string => {
        return focusState.value;
    };

    const set = (value: string) => {
        focusState.value = value.toLocaleLowerCase().trim();
    };

    const match = (scope: string | string[]): boolean => {
        if (typeof scope === 'string') {
            return scope.toLowerCase().trim() === focusState.value;
        };
        for (let i = 0, ilen = scope.length; i < ilen; i++) {
            if (scope[i].toLowerCase().trim() === focusState.value) {
                return true;
            };
        };
        return false;
    };

    return {
        match,
        get,
        set
    };
};