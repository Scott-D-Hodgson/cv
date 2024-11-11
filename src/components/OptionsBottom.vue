<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import BrightnesToggle from './buttons/BrightnesToggle.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import { useDarkMode } from '../composables/useDarkMode';
import { useBrightness } from '../composables/useBrightness';
import { useHandedness } from '../composables/useHandedness';
import HandednessToggle from './buttons/HandednessToggle.vue';

const darkMode = useDarkMode();
const brightness = useBrightness();
const handedness = useHandedness();
</script>

<template>
    <div class="row mt-3 sticky-bottom">
        <div v-if="handedness.isLeft()" class="col-4">
            <div class="text-start">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
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
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
                }">
                    <DarkModeToggle></DarkModeToggle>
                    <BrightnesToggle></BrightnesToggle>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="text-center">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
                }">
                    <HandednessToggle></HandednessToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isLeft()" class="col-4">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
                }">
                    <BrightnesToggle></BrightnesToggle>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isRight()" class="col-4">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light-subtle': darkMode.isOn() && brightness.isLow(),
                    'bg-dark-subtle border-light': darkMode.isOn() && brightness.isHigh(),
                    'bg-light-subtle border-dark-subtle': darkMode.isOff() && brightness.isLow(),
                    'bg-light-subtle border-dark': darkMode.isOff() && brightness.isHigh()
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