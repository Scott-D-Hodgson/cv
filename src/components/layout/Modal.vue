<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';
import { Modal } from 'bootstrap';

const id = ref(getCurrentInstance()?.uid);

const emit = defineEmits<{
    (e: 'closed'): void
}>();

onMounted(() => {
    const elm = document.getElementById(`Modal${id.value}`);
    if (elm) {
        let modal = new Modal(elm);
        elm?.addEventListener('hidden.bs.modal', () => {
            emit('closed');
        });
        modal.show();
    };
});
</script>

<template>
    <div :id="`Modal${id}`" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <slot name="title"></slot>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>