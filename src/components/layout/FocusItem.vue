<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import { computed, ref } from 'vue';

export interface Props {
    focus?: string | string[];
};

const props = defineProps<Props>();
const focus = useFocus();

const shown = ref(computed(() => {
    if (focus.get() === 'all') {
        return true;
    };
    if (props.focus === undefined) {
        return false;
    };
    if (typeof props.focus === 'string' && props.focus.trim().toLowerCase() === focus.get()) {
        return true;
    } else if (props.focus.includes(focus.get())) {
        return true;
    };
    return false;
}));
</script>

<template>
    <li v-if="shown" class="ps-2 pe-2 pt-1 pb-1 rounded">
        <slot></slot>
    </li>
</template>

<style scoped></style>