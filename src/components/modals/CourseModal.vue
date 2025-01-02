<script setup lang="ts">
import { useCourseModal } from '../../composables/useCourseModal';
import { getCurrentInstance, onMounted, ref } from 'vue';

const courseModal = useCourseModal();
const id = ref(getCurrentInstance()?.uid);

onMounted(() => {
    let selector = `Modal${id.value}`;
    const uiModal = document.getElementById(selector);
    if (uiModal) {
        courseModal.bind(uiModal);
    };
});
</script>

<template>
    <div :id="`Modal${id}`" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 v-if="courseModal.course.value" class="modal-title">
                        <template v-if="!courseModal.course.value.value.includes('<abbr ')">
                            {{ courseModal.course.value.value }}
                        </template>
                        <span v-else v-html="courseModal.course.value.value"></span>
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p v-if="courseModal.course?.value?.content" class="mb-0" v-html="courseModal.course.value.content"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>