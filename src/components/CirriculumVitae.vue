<script setup lang="ts">
import { useBrightness } from '../composables/useBrightness';
import { useDarkMode } from '../composables/useDarkMode';
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Technologies from './cv/Technologies.vue';

const darkMode = useDarkMode();
const brightness = useBrightness();
</script>

<template>
    <div class="p-2 border rounded" 
        :class="{
            'bg-dark border-light': darkMode.isOn() && brightness.isHigh(),
            'bg-dark border-light-subtle': darkMode.isOn() && brightness.isLow(),
            'bg-light border-dark': darkMode.isOff() && brightness.isHigh(),
            'bg-light border-dark-subtle': darkMode.isOff() && brightness.isLow(),
        }">
        <Header></Header>
        <hr>
        <FlavourText></FlavourText>
        <Technologies></Technologies>
        <Employment></Employment>
    </div>
</template>

<style scoped></style>