<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import { useDarkMode } from '../../composables/useDarkMode';
import { computed, ref } from 'vue';

export interface Props {
    focus?: string | string[];
};

const props = defineProps<Props>();
const darkMode = useDarkMode();
const focus = useFocus();

const oddHighlight = ref(computed(() => {
    if (focus.get() === 'all') {
        return darkMode.isOn() ? 'rgba(128, 128, 128, 0.2)' : 'rgba(220, 20, 60, 0.1)';
    };
    return 'inherit';
}));

const markHighlight = ref(computed(() => {
    if (focus.get() !== 'all') {
        return darkMode.isOn() ? 'rgba(255, 255, 0, 0.2)' : 'rgba(255, 255, 0, 0.2)';
    };
    return 'inherit';
}));
</script>

<template>
    <li class="ps-2 pe-2 pt-1 pb-1 rounded" :class="{
        'marked': focus.get() !== 'all' && props.focus !== undefined && props.focus.includes(focus.get())
    }">
        <template v-if="focus.get() !== 'all' && props.focus !== undefined && props.focus.includes(focus.get())">
            <mark>
                <slot></slot>
            </mark>
        </template>
        <slot v-else></slot>
    </li>
</template>

<style scoped>
li:nth-child(odd) {
    background-color: v-bind('oddHighlight');
}

.marked {
    background-color: v-bind('markHighlight');
}

mark {
    padding: 0;
    background: none;
}
</style>