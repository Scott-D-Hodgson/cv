<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import { useDarkMode } from '../composables/useDarkMode';
import HandednessToggle from './buttons/HandednessToggle.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import FocusOpen from './buttons/FocusOpen.vue';
import { computed, ref } from 'vue';

const darkMode = useDarkMode();
const expanded = ref<'employment' | 'education' | 'systems' | null>(null);

const buttonClick = (action: string) => {
    expanded.value = null;
    switch (action) {
        case 'FlavorText':
            scroll('#FlavourTextSection');
            break;
        case 'Technologies':
            scroll('#TechnologiesSection');
            break;
        case 'Employment':
            scroll('#EmploymentSection');
            expanded.value = 'employment';
            break;
        case 'TechnicalLead':
            scroll('#TechnicalLead');
            expanded.value = 'employment';
            break;
        case 'SeniorDeveloper':
            scroll('#SeniorDeveloper');
            expanded.value = 'employment';
            break;
        case 'SeniorProgrammerAnalyst':
            scroll('#SeniorProgrammerAnalyst');
            expanded.value = 'employment';
            break; 
        case 'Education':
            scroll('#EducationSection');
            expanded.value = 'education';
            break;
        case 'AlgonquinCollege':
            scroll('#AlgonquinCollege');
            expanded.value = 'education';
            break; 
        case 'LearningTree':
            scroll('#LearningTree');
            expanded.value = 'education';
            break; 
        case 'GlobalKnowledge':
            scroll('#GlobalKnowledge');
            expanded.value = 'education';
            break; 
        case 'Systems':
            scroll('#SystemsSection');
            expanded.value = 'systems';
            break;
        case 'iCareModernized':
            scroll('#iCareModernization');
            expanded.value = 'systems';
            break; 
        case 'iCareOriginal':
            scroll('#iCareOriginal');
            expanded.value = 'systems';
            break; 
    };
};

const classes = computed(() => {
    return darkMode.isOn() ? 
        'bg-dark-subtle border-light' :
        'bg-light-subtle border-dark'
    }
);

const subclasses = computed(() => {
    return darkMode.isOn() ? 
        'bg-dark' :
        'bg-light'
    }
);

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
    <div class="btn-group-vertical border rounded mb-2" :class="classes">
        <DarkModeToggle></DarkModeToggle>
        <HandednessToggle></HandednessToggle>
    </div>
    <div class="btn-group-vertical border rounded mb-2" :class="classes">
        <FocusOpen></FocusOpen>
    </div>
    <div class="btn-group-vertical border rounded mb-2" :class="classes">
        <ScrollToTop></ScrollToTop>
        <button class="btn" title="Scroll to quotation" @click="buttonClick('FlavourText')">
            <span class="fad fa-fw fa-quotes" :class="classes"></span>
        </button>
        <button class="btn" title="Scroll to technologies" @click="buttonClick('Technologies')">
            <span class="fad fa-fw fa-code" :class="classes"></span>
        </button>
        <button class="btn" title="Scroll to employment" @click="buttonClick('Employment')">
            <span class="fad fa-fw fa-id-badge" :class="classes"></span>
        </button>
        <button v-if="expanded === 'employment'" class="btn btn-sm" :class="subclasses" title="Scroll to Technical Lead" @click="buttonClick('TechnicalLead')">
            <span class="fad fa-1"></span>
        </button>
        <button v-if="expanded === 'employment'" class="btn btn-sm" :class="subclasses" title="Scroll to Senior Developer" @click="buttonClick('SeniorDeveloper')">
            <span class="fad fa-2"></span>
        </button>
        <button v-if="expanded === 'employment'" class="btn btn-sm" :class="subclasses" title="Scroll to Senior Programmer Analyst" @click="buttonClick('SeniorProgrammerAnalyst')">
            <span class="fad fa-3"></span>
        </button>
        <button class="btn" title="Scroll to education" @click="buttonClick('Education')">
            <span class="fad fa-fw fa-graduation-cap" :class="classes"></span>
        </button>
        <button v-if="expanded === 'education'" class="btn btn-sm" :class="subclasses" title="Scroll to Algonquin College" @click="buttonClick('AlgonquinCollege')">
            <span class="fad fa-1"></span>
        </button>
        <button v-if="expanded === 'education'" class="btn btn-sm" :class="subclasses" title="Scroll to Learning Tree" @click="buttonClick('LearningTree')">
            <span class="fad fa-2"></span>
        </button>
        <button v-if="expanded === 'education'" class="btn btn-sm" :class="subclasses" title="Scroll to Global Knowledge" @click="buttonClick('GlobalKnowledge')">
            <span class="fad fa-3"></span>
        </button>
        <button class="btn" title="Scroll to systems" @click="buttonClick('Systems')">
            <span class="fad fa-fw fa-computer" :class="classes"></span>
        </button>
        <button v-if="expanded === 'systems'" class="btn btn-sm" :class="subclasses" title="Scroll to iCARE (Modernized)" @click="buttonClick('iCareModernized')">
            <span class="fad fa-1"></span>
        </button>
        <button v-if="expanded === 'systems'" class="btn btn-sm" :class="subclasses" title="Scroll to iCARE (Original)" @click="buttonClick('iCareOriginal')">
            <span class="fad fa-2"></span>
        </button>
        <ScrollToBottom></ScrollToBottom>
    </div>
</template>

<style scoped>
</style>