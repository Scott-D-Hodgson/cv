<script setup lang="ts">
import { useText } from '../../composables/useText';

export interface Props {
    heading?: string;
}

const props = defineProps<Props>();
const text = useText();

</script>

<template>
    <div class="row mt-3">
        <div class="col-12" :class="text.standard()">
            <template v-if="props.heading">
                <h2>{{ heading }}</h2>
                <hr>
            </template>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>