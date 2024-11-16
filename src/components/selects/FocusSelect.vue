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
            <option value="all" :selected="focus.get() === 'all'">All</option>
            <option value="front-end" :selected="focus.get() === 'front-end'">Front-end</option>
            <option value="back-end" :selected="focus.get() === 'back-end'">Back-end</option>
            <option value="full-stack" :selected="focus.get() === 'full-stack'">Full-stack</option>
            <option value="cross-functional" :selected="focus.get() === 'cross-functional'">Cross-functional</option>
            <option value="automated-testing" :selected="focus.get() === 'automated-testing'">Automated testing</option>
            <option value="infrastructure" :selected="focus.get() === 'infrastructure'">Infrastructure</option>
            <option value="mentoring" :selected="focus.get() === 'mentoring'">Mentoring</option>
        </select>
        <label for="floatingSelect">Focus</label>
    </div>
</template>

<style scoped></style>