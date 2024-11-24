<script setup lang="ts">
import Section from '../layout/Section.vue';
import SeniorDeveloper from './employment/SeniorDeveloper.vue';
import SeniorProgrammerAnalyst from './employment/SeniorProgrammerAnalyst.vue';
import TechnicalLead from './employment/TechnicalLead.vue';
</script>

<template>
    <Section id="EmploymentSection" heading="Employment" label="Scroll to employment" icon="fa-id-badge">
        <TechnicalLead></TechnicalLead>
        <SeniorDeveloper></SeniorDeveloper>
        <SeniorProgrammerAnalyst></SeniorProgrammerAnalyst>
    </Section>
</template>

<style scoped>
</style>