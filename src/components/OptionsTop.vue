<script setup lang="ts">
import BrightnesToggle from './buttons/BrightnesToggle.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import FocusSelect from './selects/FocusSelect.vue';
import { useDarkMode } from '../composables/useDarkMode';
import { useBrightness } from '../composables/useBrightness';

const darkMode = useDarkMode();
const brightness = useBrightness();
</script>

<template>
    <div class="row mt-3 mb-3">
        <div class="col-6">
            <div class="text-begin">
                <FocusSelect></FocusSelect>
            </div>
        </div>
        <div class="col-6">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
                }">
                    <BrightnesToggle></BrightnesToggle>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>