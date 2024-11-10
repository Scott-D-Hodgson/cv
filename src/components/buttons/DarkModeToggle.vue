<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useText } from '../../composables/useText';

const darkMode = useDarkMode();
const text = useText();

const toggle = () => {
    darkMode.toggle();
};
</script>

<template>
    <button 
        class="btn btn-sm mt-3"
        :class="text.standard()"
        :title="darkMode.isOn() ? 'Light mode' : 'Dark mode'"
        @click="toggle">
        <span class="fad fa-fw" :class="{
            'fa-lightbulb-on': darkMode.isOff(),
            'fa-lightbulb': darkMode.isOn()
        }"></span>
    </button>
</template>

<style scoped></style>