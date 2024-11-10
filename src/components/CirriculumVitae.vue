<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode';

const darkMode = useDarkMode();
</script>

<template>
<<<<<<< Updated upstream
    <h1>Scott D Hodgson</h1>
=======
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
>>>>>>> Stashed changes
</template>

<style scoped>
</style>