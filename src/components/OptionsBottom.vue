<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import { useDarkMode } from '../composables/useDarkMode';
import { useHandedness } from '../composables/useHandedness';
import { useSections } from '../composables/useSections';
import HandednessToggle from './buttons/HandednessToggle.vue';
import FocusSettings from './buttons/FocusOpen.vue';

const darkMode = useDarkMode();
const handedness = useHandedness();
const sections = useSections();

const scroll = (selector: string) => {
    console.log(selector);
    let elm = document.querySelector(selector);
    if (elm) {
        elm.scrollIntoView({
            behavior: 'smooth'
        });
    };
};
</script>

<template>
    <div class="row mt-3 sticky-bottom">
        <div v-if="handedness.isLeft()" class="col-10">
            <div class="text-start">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <button v-for="section in sections.get.value" class="btn" :title="section.label" @click="scroll(section.selector)">
                        <span class="fad fa-fw" :class="section.icon"></span>
                    </button>
                    <ScrollToTop></ScrollToTop>
                    <ScrollToBottom></ScrollToBottom>
                    <FocusSettings></FocusSettings>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isRight()" class="col-2">
            <div class="text-start">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <HandednessToggle></HandednessToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isLeft()" class="col-2">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <HandednessToggle></HandednessToggle>
                </div>
            </div>
        </div>
        <div v-if="handedness.isRight()" class="col-10">
            <div class="text-end">
                <div class="btn-group border"
                    :class="{
                    'bg-dark-subtle border-light': darkMode.isOn(),
                    'bg-light-subtle border-dark': darkMode.isOff(),
                }">
                    <DarkModeToggle></DarkModeToggle>
                    <FocusSettings></FocusSettings>
                    <ScrollToTop></ScrollToTop>
                    <ScrollToBottom></ScrollToBottom>
                    <button v-for="section in sections.get.value" class="btn" :title="section.label" @click="scroll(section.selector)">
                        <span class="fad fa-fw" :class="section.icon"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>