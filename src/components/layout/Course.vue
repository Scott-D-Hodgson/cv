<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useCourses } from '../../composables/useCourses';
import { useCourseModal } from '../../composables/useCourseModal';
import { ref, computed, onMounted } from 'vue';

const darkMode = useDarkMode();
const courses = useCourses();

const highlight = ref(computed(() => {
    return darkMode.isOn() ? 'rgba(128, 128, 128)' : 'rgba(220, 20, 60)';
}));

export interface ICourse {
    reference: string;
    focus?: string | string[],
    value: string,
    date?: string
};

export interface Props {
    reference: string;
    value: string;
    date?: string;
};

const props = defineProps<Props>();
const courseModal = useCourseModal();

const show = () => {
    courseModal.show({
        reference: props.reference,
        value: props.value
    });
};

onMounted(async () => {
    if (!await courses.has(props.reference)) {
        await courses.get(props.reference);
    };
});
</script>

<template>
    <button 
        class="p-0 border-0 text-start" 
        v-if="props.reference"
        @click="show">
        <template v-if="!props.value.includes('<abbr ')">
            <template v-if="props.date">
                {{ props.date }} - 
            </template>
            {{ props.value }}
        </template>
        <span v-else v-html="`${props.date} - ${props.value}`"></span>
    </button>
    <template v-else>
        <template v-if="!props.value.includes('<abbr ')">
            <template v-if="props.date">
                {{ props.date }} - 
            </template>
            {{ props.value }}
        </template>
        <template v-else>
            <span v-if="props.date" v-html="`${props.date} - ${props.value}`"></span>
            <span v-else v-html="props.value"></span>
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