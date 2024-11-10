<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
    <div 
        class="p-3 border rounded"
        :class="{
            'border-light-subtle bg-dark': darkMode.isOn(),
            'border-dark bg-light-subtle': darkMode.isOff()
        }">
        <h1 
            :class="{
                'text-light-subtle': darkMode.isOn(),
                'text-dark': darkMode.isOff()
            }">
            Scott D Hodgson
        </h1>
    </div>
</template>

<style scoped>
</style>