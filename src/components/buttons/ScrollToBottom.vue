<script setup lang="ts">
import { useText } from '../../composables/useText';

const text = useText();

const scroll = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
</script>

<template>
    <button 
        class="btn"
        :class="text.standard()"
        title="Scroll to bottom"
        @click="scroll">
        <span class="fad fa-fw fa-down-to-line"></span>
    </button>
</template>

<style scoped></style>