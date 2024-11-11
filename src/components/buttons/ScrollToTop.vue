<script setup lang="ts">
import { useText } from '../../composables/useText';

const text = useText();

const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <button 
        class="btn"
        :class="text.standard()"
        title="Scroll to top"
        @click="scroll">
        <span class="fad fa-fw fa-up-to-line"></span>
    </button>
</template>

<style scoped></style>