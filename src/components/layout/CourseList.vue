<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import Course, { ICourse } from '../layout/Course.vue';

export interface Props {
    courses: ICourse[];
    focusSuppress?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    focusSuppress: false
});
const focus = useFocus();

const show = (courseFocus?: string | string[]) => {
    if (!props.focusSuppress) {
        return true;
    };
    if (focus.get() === 'all') {
        return true;
    };
    if (courseFocus === undefined) {
        return false;
    };
    if (typeof courseFocus === 'string' && courseFocus.trim().toLowerCase() === focus.get()) {
        return true;
    } else if (courseFocus.includes(focus.get())) {
        return true;
    };
    return false;
};
</script>

<template>
    <ul class="list">
        <template v-for="course in props.courses"> 
            <li v-if="show(course.focus)" class="list-item">
                <Course
                    :reference="course.reference"
                    :value="course.value"
                    :date="course.date">
                </Course>
            </li>
        </template>
    </ul>
</template>

<style scoped></style>