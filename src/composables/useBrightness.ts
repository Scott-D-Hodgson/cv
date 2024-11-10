import { ref } from 'vue';

const brightnessHigh = ref<boolean>(true);

export function useBrightness() {

    const apply = () => {
    };

    const isLow = ():boolean => {
        return !isHigh();
    };

    const isHigh = ():boolean => {
        return brightnessHigh.value === true;
    };

    const low = () => {
        brightnessHigh.value = false;
        apply();
    };

    const high = () => {
        brightnessHigh.value = true;
    };

    const toggle = () => {
        brightnessHigh.value = !brightnessHigh.value;
        apply();
    };

    return {
        isHigh,
        isLow,
        low,
        high,
        toggle
    };
};