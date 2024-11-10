<script setup lang="ts">
import { useFocus } from '../../composables/useFocus';
import Term from '../layout/Term.vue';

export interface ITerm {
    acronym?: string,
    focus?: string | string[],
    value: string
}

export interface Props {
    orientation?: 'horizontal' | 'vertical';
    separator?: string;
    prefixFinal?: string;
    terms: ITerm[];
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    separator: `' '`
});
const focus = useFocus();
</script>

<template>
    <ul :class="{
        'list-inline p-0 m-0': orientation === 'horizontal',
        'list': orientation === 'vertical'
    }">
        <template v-for="term in props.terms"> 
            <li :class="{
                    'list-inline-item': orientation === 'horizontal',
                    'list-item': orientation === 'vertical'
                }">
                <template v-if="focus.get() !== 'all' && (term.focus !== undefined && focus.match(term.focus))">
                    <mark class="p-0">
                        <Term 
                            :acronym="term.acronym" 
                            :value="term.value">
                        </Term>
                    </mark>
                </template>
                <Term v-else
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