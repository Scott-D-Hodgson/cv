<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import { useDarkMode } from '../composables/useDarkMode';
import { useHandedness } from '../composables/useHandedness';
import HandednessToggle from './buttons/HandednessToggle.vue';
import FocusSettings from './buttons/FocusOpen.vue';

const darkMode = useDarkMode();
const handedness = useHandedness();
</script>

<template>
    <div class="row mt-3 sticky-bottom">
        <div v-if="handedness.isLeft()" class="col-4">
            <div class="text-start">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <ScrollToTop></ScrollToTop>
                    <ScrollToBottom></ScrollToBottom>
                </div>
            </div>
        </div>
        <div v-if="handedness.isRight()" class="col-4">
            <div class="text-start">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <DarkModeToggle></DarkModeToggle>
                    <FocusSettings></FocusSettings>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="text-center">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <HandednessToggle></HandednessToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isLeft()" class="col-4">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <FocusSettings></FocusSettings>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isRight()" class="col-4">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <ScrollToBottom></ScrollToBottom>
                    <ScrollToTop></ScrollToTop>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>