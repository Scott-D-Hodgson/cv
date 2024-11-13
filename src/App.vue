<script setup lang="ts">
import CirriculumVitae from './components/CirriculumVitae.vue';
import OptionsTop from './components/OptionsTop.vue';
import OptionsBottom from './components/OptionsBottom.vue';
</script>

<template>
    <CirriculumVitae></CirriculumVitae>
    <OptionsTop></OptionsTop>
    <OptionsBottom></OptionsBottom>
</template>

<style>
html body {
    background-attachment: fixed;
}

html:not([data-bs-theme='dark']) body {
    background-image: url('/public/assets/BuffaloPlaidRed.svg');
}

html[data-bs-theme='dark'] body {
    background-image: url('/public/assets/BuffaloPlaidGrey.svg');
}
</style>