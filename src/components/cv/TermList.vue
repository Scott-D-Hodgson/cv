<script setup lang="ts">
import Term from './Term.vue';

export interface ITerm {
    acronym?: string,
    value: string
}

export interface Props {
    orientation?: 'horizontal' | 'vertical';
    separator?: string;
    terms: ITerm[];
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    separator: `' '`
});
</script>

<template>
    <ul :class="{
        'list-inline p-0 m-0': orientation === 'horizontal',
        'list': orientation === 'vertical'
    }">
        <li v-for="term in props.terms" :class="{
            'list-inline-item': orientation === 'horizontal',
            'list-item': orientation === 'vertical'
        }">
            <Term :acronym="term.acronym" :value="term.value"></Term>
        </li>
    </ul>
</template>

<style scoped>
ul {
    display: inline;
}

li:not(:last-child)::after {
    content: v-bind(separator)
}
</style>