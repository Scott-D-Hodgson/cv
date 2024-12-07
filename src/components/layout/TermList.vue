<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import Term, { ITerm } from '../layout/Term.vue';

export interface Props {
    orientation?: 'horizontal' | 'vertical';
    separator?: string;
    prefixFinal?: string;
    terms: ITerm[];
    focusSuppress?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    separator: `' '`,
    focusSuppress: false
});
const focus = useFocus();

const show = (termFocus?: string | string[]) => {
    if (!props.focusSuppress) {
        return true;
    };
    if (focus.get() === 'all') {
        return true;
    };
    if (termFocus === undefined) {
        return false;
    };
    if (typeof termFocus === 'string' && termFocus.trim().toLowerCase() === focus.get()) {
        return true;
    } else if (termFocus.includes(focus.get())) {
        return true;
    };
    return false;
};
</script>

<template>
    <ul :class="{
        'list-inline p-0 m-0': orientation === 'horizontal',
        'list': orientation === 'vertical'
    }">
        <template v-for="term in props.terms"> 
            <li v-if="show(term.focus)" :class="{
                    'list-inline-item': orientation === 'horizontal',
                    'list-item': orientation === 'vertical'
                }">
                <Term
                    :reference="term.reference"
                    :acronym="term.acronym" 
                    :value="term.value">
                </Term>
            </li>
        </template>
    </ul>
</template>

<style scoped>
ul {
    display: inline;
}

li:not(:last-child)::after {
    content: v-bind(separator)
}

li:last-child::before {
    content: v-bind(prefixFinal)
}
</style>