<script setup lang="ts">
export interface Props {
    id: string;
    heading?: string;
    icon?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div :id="props.id" class="row mt-3">
        <div class="col">
            <template v-if="props.heading">
                <h2>{{ heading }}<span v-if="props.icon" class="text-muted small ms-2 fad" :class="`${props.icon}`"></span></h2>
            </template>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>