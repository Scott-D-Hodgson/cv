<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { computed, ref } from 'vue';

const darkMode = useDarkMode();

const oddHighlight = ref(computed(() => {
    return darkMode.isOn() ? 'rgba(128, 128, 128, 0.2)' : 'rgba(220, 20, 60, 0.1)';
}));
</script>

<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

ul > :deep(li:nth-child(odd)) {
    background-color: v-bind('oddHighlight');
}
</style>