<script setup lang="ts">
import { useText } from '../../composables/useText';

const text = useText();
</script>

<template>
    <h1 :class="text.standard()">
        Scott D Hodgson
    </h1>
</template>

<style scoped></style>