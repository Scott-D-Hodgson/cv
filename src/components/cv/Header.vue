<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
    <div class="sticky-top">
        <div class="p-2 border rounded" :class="{
            'bg-dark border-light': darkMode.isOn(),
            'bg-light border-dark': darkMode.isOff(),
        }">
            <h1 :class="{
                'text-light': darkMode.isOn(),
                'text-dark': darkMode.isOff(),
            }">
                Scott D Hodgson
            </h1>
        </div>
    </div>
</template>

<style scoped></style>