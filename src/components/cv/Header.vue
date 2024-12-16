<script setup lang="ts">
import { useDarkMode } from '../../composables/useDarkMode';
import { ref, computed } from 'vue';

const darkMode = useDarkMode();

const highlight = ref(computed(() => {
    return darkMode.isOn() ? 'rgba(128, 128, 128)' : 'rgba(220, 20, 60)';
}));
</script>

<template>
    <h1 class="mb-3" :class="{
        'text-light': darkMode.isOn(),
        'text-dark': darkMode.isOff(),
    }">
        Scott D Hodgson
    </h1>
    <div class="mb-3">
        <div class="d-none d-lg-inline">
            <div class="flex-container">
                <div class="flex-grow-1 text-center">
                    <a href="tel:+1 613-864-2475"><span class="fad fa-phone"></span>(613) 864-2475</a>
                </div>
                <div class="flex-grow-1 text-center">
                    <a href="mailto:534448+cv@gmail.com"><span class="fad fa-envelope"></span>534448+cv@gmail.com</a>
                </div>
                <div class="flex-grow-1 text-center">
                    <a href="https://iamscott.ca"><span class="fad fa-globe-pointer"></span>iamscott.ca</a>
                </div>
                <div class="flex-grow-1 text-center">
                    <a href="https://www.google.ca/maps/place/Orl%C3%A9ans,+Ottawa,+ON/"><span class="fad fa-home"></span>Orleans, Ontario</a>
                </div>
                <div class="flex-grow-1 text-center">
                    <a href="https://iamscott.ca/documents/ScottDHodgson.pdf" download="ScottDHodgson.pdf"><span class="fad fa-file-pdf"></span>Download <abbr title="Curriculum Vitae">CV</abbr></a>
                </div>
            </div>
        </div>
        <div class="d-inline d-lg-none">
            <a href="tel:+1 613-864-2475"><span class="fad fa-phone"></span>(613) 864-2475</a><br/>
            <a href="mailto:534448+cv@gmail.com"><span class="fad fa-envelope"></span>534448+cv@gmail.com</a><br/>
            <a href="https://iamscott.ca"><span class="fad fa-globe-pointer"></span>iamscott.ca</a><br/>
            <a href="https://www.google.ca/maps/place/Orl%C3%A9ans,+Ottawa,+ON/"><span class="fad fa-home"></span>Orleans, Ontario</a><br/>
            <a href="https://iamscott.ca/documents/ScottDHodgson.pdf" download="ScottDHodgson.pdf"><span class="fad fa-file-pdf"></span>Download <abbr title="Curriculum Vitae">CV</abbr></a>
        </div>
    </div>
</template>

<style scoped>
a {
    color: inherit;
    text-decoration: none;  
}

a:hover {
    text-decoration-line: underline;
    text-decoration-color: v-bind('highlight');
}

a > span {
    pointer-events: none;
    padding-right: 0.5rem;
}
</style>