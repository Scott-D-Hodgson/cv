<script setup lang="ts">
import Section from '../layout/Section.vue';
import SeniorDeveloper from './employment/SeniorDeveloper.vue';
import SeniorProgrammerAnalyst from './employment/SeniorProgrammerAnalyst.vue';
import TechnicalLead from './employment/TechnicalLead.vue';
</script>

<template>
    <Section heading="Employment">
        <TechnicalLead></TechnicalLead>
        <SeniorDeveloper></SeniorDeveloper>
        <SeniorProgrammerAnalyst></SeniorProgrammerAnalyst>
    </Section>
</template>

<style scoped>
</style>