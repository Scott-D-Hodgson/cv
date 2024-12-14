<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';

export interface Props {
    id: string;
};

const props = defineProps<Props>();
const darkMode = useDarkMode();
</script>

<template>
    <div>
        <div :class="darkMode.isOn() ? 'bg-dark' : 'bg-light'">
            <div :id="props.id" class="row">
                <div class="col-12 col-md-8">
                    <h3 class="h4 mb-0">
                        <slot name="provider"></slot>
                    </h3>
                </div>
                <div class="d-none d-md-inline col-md-4 text-end">
                    <strong>
                        <slot name="range"></slot>
                    </strong>
                </div>
                <div class="col-12 d-md-none">
                    <strong>
                        <slot name="range"></slot>
                    </strong>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="m-0">
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>