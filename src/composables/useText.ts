import { useBrightness } from './useBrightness';
import { useDarkMode } from './useDarkMode';

export function useText() {

    const standard = () : string => {
        let darkModeOn = useDarkMode().isOn();
        let brightnessHigh = useBrightness().isHigh();
        let text: string[] = [];
        if (darkModeOn) {
            if (brightnessHigh) {
                text.push('text-light');
            } else {
                text.push('text-light text-muted');
            };
        } else {
            if (brightnessHigh) {
                text.push('text-dark');
            } else {
                text.push('text-dark text-muted');
            };
        };
        return text.join(' ');
    };

    return {
        standard
    };
};