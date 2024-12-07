<script setup lang="ts">
import Education from './cv/Education.vue';
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Systems from './cv/Systems.vue';
import Technologies from './cv/Technologies.vue';
</script>

<template>
    <Header></Header>
    <hr/>
    <FlavourText></FlavourText>
    <hr/>
    <Technologies></Technologies>
    <hr/>
    <Employment></Employment>
    <Education></Education>
    <Systems></Systems>
</template>

<style scoped>
</style>