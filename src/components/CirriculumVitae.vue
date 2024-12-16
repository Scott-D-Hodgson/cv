<script setup lang="ts">
import Banner from './cv/Banner.vue';
import Education from './cv/Education.vue';
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Systems from './cv/Systems.vue';
import Technologies from './cv/Technologies.vue';
</script>

<template>
    <div>
        <Header></Header>
        <Banner></Banner>
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