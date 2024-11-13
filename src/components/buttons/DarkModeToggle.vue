<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

const darkMode = useDarkMode();

const toggle = () => {
    darkMode.toggle();
};
</script>

<template>
    <button 
        class="btn"
        :class="{
            'text-light': darkMode.isOn(),
            'text-dark': darkMode.isOff(),
        }"
        :title="darkMode.isOn() ? 'Light mode' : 'Dark mode'"
        @click="toggle">
        <span class="fad fa-fw" :class="{
            'fa-lightbulb-on': darkMode.isOff(),
            'fa-lightbulb': darkMode.isOn()
        }"></span>
    </button>
</template>

<style scoped></style>