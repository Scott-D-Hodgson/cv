<script setup lang="ts">
import FocusSelect from '../../components/selects/FocusSelect.vue';
import Modal from '../layout/Modal.vue';
import { useFocus } from '../../composables/useFocus';
import { computed } from 'vue';

const focus = useFocus();
const showModal = computed(() => {
    return focus.opened();
});
</script>

<template>
    <Modal 
        v-if="showModal" 
        @closed="focus.close()">
        <template v-slot:title>
            <span class="fad fa-bullseye-arrow"></span> Focus
        </template>
        <p>You may select an area of focus to assist in review.</p>
        <FocusSelect></FocusSelect>
    </Modal>
</template>

<style scoped></style>