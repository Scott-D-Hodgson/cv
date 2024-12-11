<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode';
import Education from './cv/Education.vue';
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Systems from './cv/Systems.vue';
import Technologies from './cv/Technologies.vue';

const darkMode = useDarkMode();
</script>

<template>
    <div>
        <div class="sticky-top" :class="darkMode.isOn() ? 'bg-dark' : 'bg-light'">
            <Header></Header>
        </div>
        <hr/>
        <FlavourText></FlavourText>
        <hr/>
        <Technologies></Technologies>
        <hr/>
        <Employment></Employment>
        <Education></Education>
        <Systems></Systems>
    </div>
</template>

<style scoped>
</style>