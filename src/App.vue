<script setup lang="ts">
import CirriculumVitae from './components/CirriculumVitae.vue';
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

html:not([data-bs-theme='dark']) body div.overlay {
    -webkit-animation: colourIn 2s;
    /* Chrome, Safari, Opera */
    animation: colourIn 2s;
    opacity: 1;
}

html body div.overlay {
    -webkit-animation: colourOut 2s;
    /* Chrome, Safari, Opera */
    animation: colourOut 2s;
    background-image: url('/assets/BuffaloPlaidRed.svg');
    opacity: 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes colourIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Standard syntax */
@keyframes colourIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Chrome, Safari, Opera */
@-webkit-keyframes colourOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

/* Standard syntax */
@keyframes colourOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>