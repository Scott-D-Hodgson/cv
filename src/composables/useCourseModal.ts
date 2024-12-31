import { ICourse } from '../components/layout/Course.vue';
import { useCourses } from './useCourses';
import dompurify from 'dompurify';
import { marked } from 'marked';
import { computed, ref } from 'vue';
import { Modal } from 'bootstrap';

export interface ICourseWithContent extends ICourse {
    content: string;
};

const courses = useCourses();
const element = ref<HTMLElement | null>(null);
const openState = ref<boolean>(false);
const activeCourse = ref<ICourseWithContent | null>(null);

export function useCourseModal() {

    const course = computed(() => {
        return activeCourse.value;
    });

    const bind = (elm: HTMLElement) => {
        element.value = elm;
        elm?.addEventListener('hidden.bs.modal', () => {
            openState.value = false;
        });
    };

    const show = async (value: ICourse) => {
        if (element.value) {
            let modal = new Modal(element.value);
            if (openState.value === true) {
                modal.hide();
            };
            activeCourse.value = {
                ...value,
                content: 'Unable to load course content at the moment'
            };            
            let lookup = await courses.get(value.reference);
            if (lookup && lookup.content) {
                activeCourse.value.content = dompurify.sanitize(
                    await marked.parse(lookup.content))
            };
            modal.show();
        };
    };

    return {
        bind, 
        show,
        course
    };
};