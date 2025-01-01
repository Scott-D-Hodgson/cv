<script setup lang="ts">
import CirriculumVitae from './components/CirriculumVitae.vue';
import CourseModal from './components/modals/CourseModal.vue';
import FocusModal from './components/modals/FocusModal.vue';
import TermModal from './components/modals/TermModal.vue';
import PositionOptions from './components/PositionOptions.vue';
import { useHandedness } from './composables/useHandedness';
import { useDarkMode } from './composables/useDarkMode';

const handedness = useHandedness();
const darkMode = useDarkMode();
</script>

<template>
    <div class="overlay"></div>
    <CourseModal></CourseModal>
    <TermModal></TermModal>
    <FocusModal></FocusModal>
    <div class="flex-container">
        <div v-if="handedness.isLeft()" class="flex-grow-1 me-3">
            <div class="sticky-top pt-3">
                <PositionOptions></PositionOptions>
            </div>
        </div>
        <div class="flex-grow-11 pt-3 pb-3">            
            <div class="p-2 border rounded" 
                :class="{
                    'bg-dark border-light text-light': darkMode.isOn(),
                    'bg-light border-dark text-dark': darkMode.isOff(),
                }">
                <CirriculumVitae></CirriculumVitae>
            </div>
        </div>
        <div v-if="handedness.isRight()" class="flex-grow-1 ms-3">
            <div class="sticky-top pt-3">
                <PositionOptions></PositionOptions>
            </div>
        </div>
    </div>
</template>

<style>
.flex-container {
    display: flex;
    flex-direction: row;
}

.flex-grow-1 {
    flex-grow: 1;
}

.flex-grow-11 {
    flex-grow: 11
}

html body {
    background-attachment: fixed;
    background-image: url('/assets/BuffaloPlaidGrey.svg');
}

html body div.overlay {
    -webkit-animation: darkIn 2s;
    /* Chrome, Safari, Opera */
    animation: darkIn 2s;
    opacity: 0;
}

html:not([data-bs-theme='dark']) body div.overlay {
    -webkit-animation: darkOut 2s;
    /* Chrome, Safari, Opera */
    animation: darkOut 2s;
    background-image: url('/assets/BuffaloPlaidRed.svg');
    opacity: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes darkOut {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Standard syntax */
@keyframes darkOut {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Chrome, Safari, Opera */
@-webkit-keyframes darkIn {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

/* Standard syntax */
@keyframes darkIn {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>