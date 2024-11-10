<script setup lang="ts">
import { useBorder } from '../composables/useBorder';
import FlavourText from './cv/FlavourText.vue';
import Header from './cv/Header.vue';
import Technologies from './cv/Technologies.vue';

const border = useBorder();
</script>

<template>
    <div class="p-2 rounded" :class="border.standard()">
        <Header></Header>
        <hr>
        <FlavourText></FlavourText>
        <Technologies></Technologies>
    </div>
</template>

<style scoped></style>