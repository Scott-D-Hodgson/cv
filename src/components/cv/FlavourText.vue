<script setup lang="ts">
import Section from '../layout/Section.vue';
</script>

<template>
    <Section id="FlavourTextSection">
        <blockquote class="blockquote m-0 p-2">
            <p class="small">Solution-driven, systems integrator, and passioned code-author on-the-clock.
                Smart home dabbler, gadget enthusiast, international student host, nature hiker, occasional gamer,
                and loving husband and parent off-the-clock. Furiously curious, always.
            </p>
        </blockquote>
    </Section>
</template>

<style scoped>
blockquote {
    position: relative;
}

blockquote>p::before {
    font-family: "Font Awesome 6 Pro";
    font-weight: 600;
    top: -5px;
    left: -5px;
    display: inline-block;
    transform: rotate(-30deg);
    content: '\f10d';
    position: relative;
}

blockquote>p::after {
    font-family: "Font Awesome 6 Pro";
    font-weight: 800;
    top: -5px;
    right: -5px;
    display: inline-block;
    transform: rotate(30deg);
    content: '\f10e';
    position: relative;
}
</style>