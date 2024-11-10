<script setup lang="ts">
export interface Props {
    acronym?: string;
    value: string;
    isExpanded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isExpanded: false
});
</script>

<template>
    <abbr v-if="acronym && !isExpanded" :title="props.value">
        {{ props.acronym }}
    </abbr>
    <template v-if="acronym && isExpanded">
        {{ props.value }} ({{ props.acronym }})
    </template>
    <template v-if="!acronym">
        {{ props.value }}
    </template>
</template>

<style scoped></style>