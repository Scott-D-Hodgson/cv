<script setup lang="ts">
import Employment from './cv/Employment.vue';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Technologies from './cv/Technologies.vue';
import FocusModal from './modals/FocusModal.vue';
</script>

<template>
    <div>
        <Header></Header>
        <FlavourText></FlavourText>
        <Technologies></Technologies>
        <Employment></Employment>
        <FocusModal></FocusModal>
    </div>
</template>

<style scoped></style>