<script setup lang="ts">
import Section from '../layout/Section.vue';
import EdgeAppsOriginal from './systems/EdgeAppsOriginal.vue';
import EdgeAppsModernization from './systems/EdgeAppsModernization.vue';
import eGemOriginal from './systems/eGemOriginal.vue';
import iCareOriginal from './systems/iCareOriginal.vue';
import iCareModernization from './systems/iCareModernization.vue';
</script>

<template>
    <Section id="SystemsSection" heading="Systems" icon="fa-computer">
        <iCareModernization></iCareModernization>
        <EdgeAppsModernization></EdgeAppsModernization>
        <eGemOriginal></eGemOriginal>
        <EdgeAppsOriginal></EdgeAppsOriginal>
        <iCareOriginal></iCareOriginal>
    </Section>
</template>

<style scoped>
</style>