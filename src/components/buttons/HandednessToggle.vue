<script setup lang="ts">
import { useHandedness } from '../../composables/useHandedness';
import { useDarkMode } from '../../composables/useDarkMode';

const handedness = useHandedness();
const darkMode = useDarkMode();

const toggle = () => {
    handedness.toggle();
};
</script>

<template>
    <button 
        class="btn"
        :class="{
            'text-light': darkMode.isOn(),
            'text-dark': darkMode.isOff(),
        }"
        :title="handedness.isLeft() ? 'Left-handed' : 'Right-handed'"
        @click="toggle">
        <span class="fad fa-fw" :class="{
            'fa-hand': handedness.isLeft(),
            'fa-hand fa-flip-horizontal': handedness.isRight()
        }"></span>
    </button>
</template>

<style scoped></style>