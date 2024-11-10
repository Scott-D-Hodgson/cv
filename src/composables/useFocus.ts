import { ref } from 'vue';

const focus = ref<string>('all');

export function useFocus() {

    const get = (): string => {
        return focus.value;
    };

    const set = (value: string) => {
        focus.value = value.toLocaleLowerCase().trim();
    };

    const match = (scope: string | string[]): boolean => {
        if (typeof scope === 'string') {
            return scope.toLowerCase().trim() === focus.value;
        };
        for (let i = 0, ilen = scope.length; i < ilen; i++) {
            if (scope[i].toLowerCase().trim() === focus.value) {
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