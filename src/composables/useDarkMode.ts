import { ref } from 'vue';
import { useBrightness } from './useBrightness';

const darkMode = ref<boolean>(false);

(() => {
    let darkMode = useDarkMode();
    // check if browser supports dark mode preference
    if (window.matchMedia) {
      let query = window.matchMedia('(prefers-color-scheme: dark)');
      darkMode.set(query.matches);
      // add event listener to monitor if browser settings change
      query.addEventListener('change', (event) => {
        darkMode.set(event.matches);
      });
    };
})();

export function useDarkMode() {

    const apply = () => {
        let brightnessHigh = useBrightness().isHigh();
        let elm = document.getElementsByTagName('html')[0];
        if (!elm) {
            return;
        };
        if (darkMode.value) {
            elm.setAttribute('data-bs-theme', 'dark');
        } else {
            elm.removeAttribute('data-bs-theme');
        };
        let body = document.getElementsByTagName('body')[0];
        if (body) {
            body.classList.remove(...body.classList);
            if (darkMode.value) {
                body.classList.add('bg-dark');
            } else {
                body.classList.add('bg-light-subtle');
            };
        };
    };

    const isOff = ():boolean => {
        return !isOn();
    };

    const isOn = ():boolean => {
        return darkMode.value === true;
    };

    const off = () => {
        darkMode.value = false;
        apply();
    };

    const on = () => {
        darkMode.value = true;
        apply();
    };

    const set = (value : boolean) => {
        darkMode.value = value;
        apply();
    };

    const toggle = () => {
        darkMode.value = !darkMode.value;
        apply();
    };

    return {
        isOn,
        isOff,
        off,
        on,
        set,
        toggle
    };
};