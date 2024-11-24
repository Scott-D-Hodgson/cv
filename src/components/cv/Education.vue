<script setup lang="ts">
import Section from '../layout/Section.vue';
import AlgonquinCollege from './education/AlgonquinCollege.vue';
import GlobalKnowledge from './education/GlobalKnowledge.vue';
import LearningTree from './education/LearningTree.vue';
</script>

<template>
    <Section id="EducationSection" heading="Education" label="Scroll to education" icon="fa-graduation-cap">
        <AlgonquinCollege></AlgonquinCollege>
        <LearningTree></LearningTree>
        <GlobalKnowledge></GlobalKnowledge>
    </Section>
</template>

<style scoped>
</style>