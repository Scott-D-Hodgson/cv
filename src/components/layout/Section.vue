<script setup lang="ts">
export interface Props {
    id: string;
    heading?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div :id="props.id" class="row mt-3">
        <div class="col">
            <template v-if="props.heading">
                <h2>{{ heading }}</h2>
            </template>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
div[id] {
    scroll-margin-top: 5rem;
}
</style>