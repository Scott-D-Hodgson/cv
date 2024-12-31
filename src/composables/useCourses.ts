import { ref } from 'vue';

export interface ICourse {
    ref: string;
    value: string;
    providerref: string;
    file?: string;
    content?: string;
};

const courses = ref<ICourse[]>([]);

export function useCourses() {

    const init = async () => {
        if (courses.value.length > 0) {
            return;
        };
        let response = await fetch('/json/courses.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response) {
            return;
        };
        let json = await response.json();
        courses.value = json;
    };

    const get = async (reference: string): Promise<ICourse | null> => {
        await init();
        let course = courses.value.find(course => {
            return course.ref === reference;
        }); 
        if (!course) {
            return null;
        };
        if (course.content) {
            return course;
        };
        let response = await fetch(`/md/courses/${course.file}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/text'
            }
        });
        if (!response) {
            return course;
        };
        course.content = await response.text();
        return course;
    };

    const has = async (reference: string): Promise<boolean> => {
        await init();
        return (courses.value.findIndex(course => {
            return course.ref === reference;
        })) >= 0;
    };

    return {
        get,
        has
    };
};