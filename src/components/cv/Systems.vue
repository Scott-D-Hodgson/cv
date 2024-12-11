<script setup lang="ts">
import Section from '../layout/Section.vue';
import ConnexionApps from './systems/ConnexionApps.vue';
import EdgeApps from './systems/EdgeApps.vue';
import IntranetApps from './systems/IntranetApps.vue';
import InternetApps from './systems/InternetApps.vue';
import eGemOriginal from './systems/eGemOriginal.vue';
import iCareOriginal from './systems/iCareOriginal.vue';
import iCareModernization from './systems/iCareModernization.vue';
import eSubmission from './systems/eSubmission.vue';
</script>

<template>
    <Section id="SystemsSection" heading="Systems" icon="fa-computer">
        <iCareModernization></iCareModernization>
        <InternetApps></InternetApps>
        <IntranetApps></IntranetApps>
        <eGemOriginal></eGemOriginal>
        <ConnexionApps></ConnexionApps>
        <EdgeApps></EdgeApps>
        <iCareOriginal></iCareOriginal>
        <eSubmission></eSubmission>
    </Section>
</template>

<style scoped>
</style>