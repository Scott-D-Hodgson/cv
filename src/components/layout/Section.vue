<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

export interface Props {
    heading?: string;
}

const props = defineProps<Props>();
const darkMode = useDarkMode();

</script>

<template>
    <div class="row mt-3">
        <div class="col">
            <div class="p-2 border rounded" 
                :class="{
                    'bg-dark border-light text-light': darkMode.isOn(),
                    'bg-light border-dark text-dark': darkMode.isOff(),
                }">
                <template v-if="props.heading">
                    <h2>{{ heading }}</h2>
                    <hr>
                </template>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>