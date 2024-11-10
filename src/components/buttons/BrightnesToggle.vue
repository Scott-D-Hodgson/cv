<script setup lang="ts">
import { useBrightness } from '../../composables/useBrightness';
import { useText } from '../../composables/useText';

const brightness = useBrightness();
const text = useText();

const toggle = () => {
    brightness.toggle();
};
</script>

<template>
    <button 
        class="btn btn-sm mt-3"
        :class="text.standard()"
        :title="brightness.isLow() ? ' Low brightness' : 'High brightness'"
        @click="toggle">
        <span 
            class="fad fa-fw" 
            :class="{
                'fa-circle-half-stroke': brightness.isLow(),
                'fa-circle': brightness.isHigh()
            }"></span>
    </button>
</template>

<style scoped></style>