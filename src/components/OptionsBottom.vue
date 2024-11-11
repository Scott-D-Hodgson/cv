<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import { useDarkMode } from '../composables/useDarkMode';
import { useBrightness } from '../composables/useBrightness';

const darkMode = useDarkMode();
const brightness = useBrightness();
</script>

<template>
    <div class="row mt-3 sticky-bottom">
        <div class="col-12">
            <div class="text-center">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
                }">
                    <ScrollToTop></ScrollToTop>
                    <ScrollToBottom></ScrollToBottom>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>