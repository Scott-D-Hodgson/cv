<script setup lang="ts">
import Section from '../layout/Section.vue';
import TechnicalLead from './employment/TechnicalLead.vue';
import SeniorDeveloper from './employment/SeniorDeveloper.vue';
import SeniorProgrammerAnalyst from './employment/SeniorProgrammerAnalyst.vue';
import JuniorProgrammerAnalyst from './employment/JuniorProgrammerAnalyst.vue';
</script>

<template>
    <Section id="EmploymentSection" heading="Employment" icon="fa-id-badge">
        <TechnicalLead></TechnicalLead>
        <SeniorDeveloper></SeniorDeveloper>
        <SeniorProgrammerAnalyst></SeniorProgrammerAnalyst>
        <JuniorProgrammerAnalyst></JuniorProgrammerAnalyst>
    </Section>
</template>

<style scoped></style>