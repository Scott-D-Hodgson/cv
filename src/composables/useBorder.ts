import { useBrightness } from './useBrightness';
import { useDarkMode } from './useDarkMode';

export function useBorder() {

    const standard = () : string => {
        let darkModeOn = useDarkMode().isOn();
        let brightnessHigh = useBrightness().isHigh();
        let border: string[] = [];
        if (darkModeOn) {
            border.push('border');
            if (brightnessHigh) {
                border.push('border-light');
            } else {
                border.push('border-light-subtle');
            };
        } else {
            border.push('border');
            if (brightnessHigh) {
                border.push('border-dark');
            } else {
                border.push('border-dark-subtle');
            };
        };
        return border.join(' ');
    };

    return {
        standard
    };
};