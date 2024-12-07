<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import { useDarkMode } from '../../composables/useDarkMode';
import { onMounted, ref, watch } from 'vue';

export interface Props {
    focus?: string | string[];
};

const props = defineProps<Props>();
const darkMode = useDarkMode();
const focus = useFocus();

const oddHighlight = ref<string>('inherit');

watch(darkMode.isOn, async() => {
    oddHighlight.value = darkMode.isOn() ? 'rgba(128, 128, 128, 0.2)' : 'rgba(220, 20, 60, 0.1)';
});

onMounted(() => {
    oddHighlight.value = darkMode.isOn() ? 'rgba(128, 128, 128, 0.2)' : 'rgba(220, 20, 60, 0.1)';
});
</script>

<template>
    <li class="ps-2 pe-2 pt-1 pb-1 rounded" :class="{
        'marked': focus.get() !== 'all' && props.focus !== undefined && props.focus.includes(focus.get())
    }">
        <template v-if="focus.get() !== 'all' && props.focus !== undefined && props.focus.includes(focus.get())">
            <mark class="p-0">
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
    background-color: rgba(128, 128, 128, 0.1);
}

mark {
    background-color: inherit;
}
</style>