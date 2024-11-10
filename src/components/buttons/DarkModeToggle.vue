<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

const darkMode = useDarkMode();

const toggle = () => {
    darkMode.toggle();
};
</script>

<template>
    <button 
        class="btn btn-sm mt-3"
        :class="{
            'text-light text-muted': darkMode.isOn(),
            'text-dark': darkMode.isOff()
        }"
        :title="darkMode.isOn() ? 'Light mode' : 'Dark mode'"
        @click="toggle">
        <span class="fad fa-fw" :class="{
            'fa-moon': darkMode.isOff(),
            'fa-sun': darkMode.isOn()
        }"></span>
    </button>
</template>

<style scoped></style>