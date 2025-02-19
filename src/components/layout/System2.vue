<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useDurations } from '../../composables/useDurations';
import TermList from './TermList.vue';
import { onMounted } from 'vue';

export interface Props {
    id: string;
    name: string;
    subtitle?: string;
    from: string;
    to: string;
    technologies?: {
        reference: string,
        acronym?: string,
        value: string,
        focus?: string[],
        from?: Date,
        to?: Date
    }[];
};

const props = defineProps<Props>();
const darkMode = useDarkMode();
const durations = useDurations();

onMounted(() => {
    props.technologies?.forEach((technology) => {
        if (technology.from && technology.to) {
            durations.set({
                reference: technology.reference,
                system: props.name,
                from: technology.from,
                to: technology.to
            });
        };
    });
});
</script>

<template>
    <div>
        <div :class="darkMode.isOn() ? 'bg-dark' : 'bg-light'">
            <div :id="props.id" class="row mt-3">
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
        </div>
        <div v-if="props.technologies" class="row">
            <div class="col-12">
                <div class="border rounded mt-2 mb-2 pt-2 pb-2 ps-3 pe-3 small text-muted">
                    <strong class="sr-only">Technologies:</strong> <TermList :terms="props.technologies" separator="' |'" /> 
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h4 class="h6">Description</h4>
                <slot name="description"></slot>
                <h4 class="h6">Initiative</h4>
                <slot name="initiative"></slot>
                <h4 class="h6">Accomplishments</h4>
                <slot name="accomplishments"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>