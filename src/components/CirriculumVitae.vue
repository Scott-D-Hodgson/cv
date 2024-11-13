<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode';
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Technologies from './cv/Technologies.vue';

const darkMode = useDarkMode();
</script>

<template>
    <div>
        <Header></Header>
        <FlavourText></FlavourText>
        <Technologies></Technologies>
        <Employment></Employment>
    </div>
</template>

<style scoped></style>