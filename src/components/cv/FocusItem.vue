<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';

export interface Props {
    focus?: string[];
};

const props = defineProps<Props>();
const focus = useFocus();
</script>

<template>
    <li>
        <template v-if="focus.get() !== 'all' && props.focus !== undefined && props.focus.includes(focus.get())">
            <mark class="p-0">
                <slot></slot>
            </mark>
        </template>
        <slot v-else></slot>
    </li>
</template>

<style scoped></style>