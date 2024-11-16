<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useFocus } from '../../composables/useFocus';

const darkMode = useDarkMode();
const focus = useFocus();

const open = () => {
    focus.open();
};
</script>

<template>
    <button 
        class="btn"
        :class="{
            'text-light': darkMode.isOn(),
            'text-dark': darkMode.isOff(),
        }"
        title="Focus"
        @click="open">
        <span class="fad fa-fw fa-bullseye-arrow"></span>
    </button>
</template>

<style scoped></style>