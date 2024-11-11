<script setup lang="ts">
import { useTerms } from '../../composables/useTerms';
import { ref } from 'vue';
import { marked } from 'marked';
import dompurify from 'dompurify';
import Modal from './Modal.vue';

export interface Props {
    reference: string;
    acronym?: string;
    value: string;
    isExpanded?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    isExpanded: false
});
const showModal = ref<boolean>(false);
const content = ref<string | null>(null);
const terms = useTerms();

const show = async () => {
    if (props.reference) {
        let term = await terms.get(props.reference);
        content.value = null;
        if (term && term.content) {
            content.value = dompurify.sanitize(
                await marked.parse(term.content));
        };
    };
    showModal.value = true;
};
</script>

<template>
    <Modal 
        v-if="showModal" 
        @closed="showModal = false">
        <template v-slot:title>
            {{ props.value }}
            <template v-if="props.acronym">
                ({{ props.acronym }})
            </template>
        </template>
        <p v-if="content" class="mb-0" v-html="content"></p>
        <p v-else class="mb-0">Sorry, I'm unable to load this content at the moment...</p>
    </Modal>
    <button 
        class="p-0 border-0" 
        v-if="props.reference"
        @click="show">
        <abbr v-if="acronym && !isExpanded" :title="props.value">
                {{ props.acronym }}
        </abbr>
        <template v-if="acronym && isExpanded">
            {{ props.value }} ({{ props.acronym }})
        </template>
        <template v-if="!acronym">
            {{ props.value }}
        </template>
    </button>
    <template v-else>
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
</template>

<style scoped>
button {
    background-color: inherit;
}
</style>