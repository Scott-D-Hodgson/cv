<script setup lang="ts">
import TermList from './TermList.vue';

export interface Props {
    id: string;
    name: string;
    subtitle?: string;
    from: string;
    to: string;
    technologies?: {
        reference: string,
        acronym?: string,
        value: string
    }[];
};

const props = defineProps<Props>();
</script>

<template>
    <div :id="props.id" class="row">
        <div class="col-12 col-md-8">
            <h3 class="h4 mb-0">
                {{ props.name }}
            </h3>
            <template v-if="props.subtitle">
                <span class="text-muted">({{ props.subtitle }})</span>
            </template>
        </div>
        <div class="d-none d-md-inline col-md-4 text-end">
            <strong>{{ props.from }} - {{ props.to }}</strong>
        </div>
        <div class="col-12 d-md-none">
            <strong>{{ props.from }} - {{ props.to }}</strong>
        </div>
    </div>
    <div v-if="props.technologies" class="row">
        <div class="col-12 small">
            [ <strong class="sr-only">Technologies:</strong> <TermList :terms="props.technologies" separator="' |'" /> ]
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <p class="m-0">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<style scoped>
div[id] {
    scroll-margin-top: 5rem;
}
</style>