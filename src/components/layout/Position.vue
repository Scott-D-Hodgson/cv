<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { ITerm } from '../layout/Term.vue';
import TermList from '../layout/TermList.vue';

export interface Props {
    id: string;
    title: string;
    from: string;
    to: string;
    organization: ITerm[];
};

const props = defineProps<Props>();
const darkMode = useDarkMode();
</script>

<template> 
    <div>
        <div :class="darkMode.isOn() ? 'bg-dark' : 'bg-light'">
            <div :id="props.id" class="row mt-3">
                <div class="col-12 col-md-8">
                    <h3 class="h4 mb-0">
                        {{ props.title }}
                    </h3>
                    <span class="d-none d-md-inline">
                        <TermList 
                            :terms="organization"
                            separator="' \\'"></TermList>
                    </span>
                </div>
                <div class="d-none d-md-inline col-md-4 text-end"><strong>{{ from }} - {{ to }}</strong></div>
                <div class="col-12 d-md-none"><strong>{{ from }} - {{ to }}</strong></div> 
                <div class="col-12 d-md-none small">
                    <TermList :terms="organization" separator="' \\'"></TermList>
                </div>      
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>