<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import { useDarkMode } from '../../composables/useDarkMode';

const darkMode = useDarkMode();
const focus = useFocus();
</script>

<template>
    <div class="form-floating">
        <select 
            class="form-select border"
            :class="{
                'bg-dark border-light': darkMode.isOn(),
                'bg-light border-dark': darkMode.isOff()
            }" 
            aria-label="Refine the scope of content provided"
            @change="focus.set(($event.target! as HTMLSelectElement).value)">
            <option value="all" selected>All</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="full-stack">Full-stack</option>
            <option value="cross-functional">Cross-functional</option>
            <option value="automated-testing">Automated testing</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="mentoring">Mentoring</option>
        </select>
        <label for="floatingSelect">Focus</label>
    </div>
</template>

<style scoped></style>