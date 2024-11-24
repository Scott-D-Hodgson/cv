<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
    <h1 :class="{
        'text-light': darkMode.isOn(),
        'text-dark': darkMode.isOff(),
    }">
        Scott D Hodgson
    </h1>
</template>

<style scoped></style>