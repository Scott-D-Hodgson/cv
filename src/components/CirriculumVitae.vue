<script setup lang="ts">
import CourseModal from './../components/modals/CourseModal.vue';
import TermModal from './../components/modals/TermModal.vue';
import Education from './cv/Education.vue';
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Systems from './cv/Systems.vue';
import Technologies from './cv/Technologies.vue';
</script>

<template>
    <main>
        <Header></Header>
        <CourseModal></CourseModal>
        <TermModal></TermModal>
        <FlavourText></FlavourText>
        <hr/>
        <Technologies></Technologies>
        <hr/>
        <Employment></Employment>
        <Education></Education>
        <Systems></Systems>
    </main>
</template>

<style scoped>
</style>