<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

const darkMode = useDarkMode();

const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <button 
        class="btn"
        :class="{
            'text-light': darkMode.isOn(),
            'text-dark': darkMode.isOff(),
        }"
        title="Scroll to top"
        @click="scroll">
        <span class="fad fa-fw fa-up-to-line"></span>
    </button>
</template>

<style scoped></style>