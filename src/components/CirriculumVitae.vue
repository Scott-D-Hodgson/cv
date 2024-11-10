<script setup lang="ts">
import { useBorder } from '../composables/useBorder';
import { useText } from '../composables/useText';

const border = useBorder();
const text = useText();
</script>

<template>
    <div class="p-3 rounded"
        :class="border.standard()">
        <h1 :class="text.standard()">
            Scott D Hodgson
        </h1>
    </div>
</template>

<style scoped>
</style>