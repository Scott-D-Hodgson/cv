<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import { useDarkMode } from '../composables/useDarkMode';
import { useSections } from '../composables/useSections';
import HandednessToggle from './buttons/HandednessToggle.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import FocusOpen from './buttons/FocusOpen.vue';

const darkMode = useDarkMode();
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
    <div class="btn-group-vertical border rounded mb-2"
        :class="{
        'bg-dark-subtle border-light': darkMode.isOn(),
        'bg-light-subtle border-dark': darkMode.isOff(),
    }">
        <DarkModeToggle></DarkModeToggle>
        <HandednessToggle></HandednessToggle>
    </div>
    <div class="btn-group-vertical border rounded mb-2"
        :class="{
        'bg-dark-subtle border-light': darkMode.isOn(),
        'bg-light-subtle border-dark': darkMode.isOff(),
    }">
        <FocusOpen></FocusOpen>
    </div>
    <div class="btn-group-vertical border rounded mb-2"
        :class="{
        'bg-dark-subtle border-light': darkMode.isOn(),
        'bg-light-subtle border-dark': darkMode.isOff(),
    }">
        <ScrollToTop></ScrollToTop>
        <button v-for="section in sections.get.value" class="btn" :title="section.label" @click="scroll(section.selector)">
            <span class="fad fa-fw" :class="section.icon"></span>
        </button>
        <ScrollToBottom></ScrollToBottom>
    </div>
</template>

<style scoped>
</style>