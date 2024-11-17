<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useFocusModal } from '../../composables/useFocusModal';

const darkMode = useDarkMode();
const focusModal = useFocusModal();

const open = () => {
    focusModal.show();
};
</script>

<template>
    <button 
        class="btn"
        :class="{
            'text-light': darkMode.isOn(),
            'text-dark': darkMode.isOff(),
        }"
        title="Focus"
        @click="open">
        <span class="fad fa-fw fa-bullseye-arrow"></span>
    </button>
</template>

<style scoped></style>