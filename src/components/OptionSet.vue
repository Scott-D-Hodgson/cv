<script setup lang="ts">
import BrightnesToggle from './buttons/BrightnesToggle.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';

</script>

<template>
    <div class="row">
        <div class="col-12 text-end">
            <div class="btn-group btn-group-sm">
                <BrightnesToggle></BrightnesToggle>
                <DarkModeToggle></DarkModeToggle>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>