<script setup lang="ts">
import FocusSelect from '../../components/selects/FocusSelect.vue';
import { useFocusModal } from '../../composables/useFocusModal';
import { getCurrentInstance, onMounted, ref } from 'vue';

const focusModal = useFocusModal();
const id = ref(getCurrentInstance()?.uid);

onMounted(() => {
    let selector = `Modal${id.value}`;
    const uiModal = document.getElementById(selector);
    if (uiModal) {
        focusModal.bind(uiModal);
    };
});
</script>

<template>
    <div :id="`Modal${id}`" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <span class="fad fa-bullseye-arrow"></span> Focus
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>You may select an area of focus to assist in review.</p>
                    <FocusSelect></FocusSelect>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>