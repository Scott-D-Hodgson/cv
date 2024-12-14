<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useTermModal } from '../../composables/useTermModal';
import { ref, computed } from 'vue';

const darkMode = useDarkMode();

const highlight = ref(computed(() => {
    return darkMode.isOn() ? 'rgba(128, 128, 128)' : 'rgba(220, 20, 60)';
}));

export interface ITerm {
    reference: string;
    acronym?: string,
    focus?: string | string[],
    value: string
};

export interface Props {
    reference: string;
    acronym?: string;
    value: string;
    isExpanded?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    isExpanded: false
});
const termModal = useTermModal();

const show = () => {
    termModal.show({
        reference: props.reference,
        acronym: props.acronym,
        value: props.value
    });
};
</script>

<template>
    <button 
        class="p-0 border-0" 
        v-if="props.reference"
        @click="show">
        <abbr v-if="acronym && !isExpanded" :title="props.value">
            {{ props.acronym }}
        </abbr>
        <template v-if="acronym && isExpanded">
            {{ props.value }} ({{ props.acronym }})
        </template>
        <template v-if="!acronym">
            {{ props.value }}
        </template>
    </button>
    <template v-else>
        <abbr v-if="acronym && !isExpanded" :title="props.value">
            {{ props.acronym }}
        </abbr>
        <template v-if="acronym && isExpanded">
            {{ props.value }} ({{ props.acronym }})
        </template>
        <template v-if="!acronym">
            {{ props.value }}
        </template>
    </template>
</template>

<style scoped>
button {
    background-color: rgba(128,128,128,0);
    display: inline-block;
}

button:hover {
    text-decoration-line: underline;
    text-decoration-color: v-bind('highlight');
}
</style>