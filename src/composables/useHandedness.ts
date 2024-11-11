import { ref } from 'vue';

const leftHandedness = ref<boolean>(false);

export function useHandedness() {

    const isLeft = ():boolean => {
        return !isRight();
    };

    const isRight = ():boolean => {
        return leftHandedness.value === false;
    };

    const left = () => {
        leftHandedness.value = true;
    };

    const right = () => {
        leftHandedness.value = false;
    };

    const toggle = () => {
        leftHandedness.value = !leftHandedness.value;
    };

    return {
        isLeft,
        isRight,
        left,
        right,
        toggle
    };
};