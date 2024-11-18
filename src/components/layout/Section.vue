<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { useSections } from '../../composables/useSections';
import { getCurrentInstance, onMounted, ref } from 'vue';

export interface Props {
    heading?: string;
    icon: string;
    label: string;
}

const props = defineProps<Props>();
const id = ref(getCurrentInstance()?.uid);
const darkMode = useDarkMode();
const sections = useSections();

onMounted(() => {
    sections.add({
        label: props.label,
        icon: props.icon,
        selector: `#Section${id.value}`
    });
});
</script>

<template>
    <div :id="`Section${id}`" class="row mt-3">
        <div class="col">
            <div class="p-2 border rounded" 
                :class="{
                    'bg-dark border-light text-light': darkMode.isOn(),
                    'bg-light border-dark text-dark': darkMode.isOff(),
                }">
                <template v-if="props.heading">
                    <h2>{{ heading }}</h2>
                    <hr>
                </template>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
div[id] {
    scroll-margin-top: 5rem;
}
</style>