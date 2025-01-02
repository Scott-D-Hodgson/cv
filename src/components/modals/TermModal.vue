<script setup lang="ts">
import { useTermModal } from '../../composables/useTermModal';
import { computed, getCurrentInstance, onMounted, ref } from 'vue';

const termModal = useTermModal();
const id = ref(getCurrentInstance()?.uid);
const heading = computed((): string => {
    if (termModal.term.value) {
        return termModal.term.value.value;
    };
    return 'Placeholder';
});

onMounted(() => {
    let selector = `Modal${id.value}`;
    const uiModal = document.getElementById(selector);
    if (uiModal) {
        termModal.bind(uiModal);
    };
});
</script>

<template>
    <div :id="`Modal${id}`" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">
                        {{ heading }}
                        <template v-if="termModal.term.value?.acronym">
                            ({{ termModal.term.value?.acronym }})
                        </template>
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p v-if="termModal.term?.value?.content" class="mb-0" v-html="termModal.term.value.content"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>