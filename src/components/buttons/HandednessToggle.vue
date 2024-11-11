<script setup lang="ts">
import { useHandedness } from '../../composables/useHandedness';
import { useText } from '../../composables/useText';

const handedness = useHandedness();
const text = useText();

const toggle = () => {
    handedness.toggle();
};
</script>

<template>
    <button 
        class="btn"
        :class="text.standard()"
        :title="handedness.isLeft() ? 'Left-handed' : 'Right-handed'"
        @click="toggle">
        <span class="fad fa-fw" :class="{
            'fa-hand': handedness.isLeft(),
            'fa-hand fa-flip-horizontal': handedness.isRight()
        }"></span>
    </button>
</template>

<style scoped></style>