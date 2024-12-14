<script setup lang="ts">
import Section from '../layout/Section.vue';
import AlgonquinCollege from './education/AlgonquinCollege.vue';
import GlobalKnowledge from './education/GlobalKnowledge.vue';
import LearningTree from './education/LearningTree.vue';
</script>

<template>
    <Section id="EducationSection" heading="Education" icon="fa-graduation-cap">
        <AlgonquinCollege></AlgonquinCollege>
        <GlobalKnowledge></GlobalKnowledge>
        <LearningTree></LearningTree>
    </Section>
</template>

<style scoped>
</style>