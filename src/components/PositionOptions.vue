<script setup lang="ts">
import ScrollToTop from './buttons/ScrollToTop.vue';
import ScrollToBottom from './buttons/ScrollToBottom.vue';
import { useDarkMode } from '../composables/useDarkMode';
import HandednessToggle from './buttons/HandednessToggle.vue';
import DarkModeToggle from './buttons/DarkModeToggle.vue';
import FocusOpen from './buttons/FocusOpen.vue';
import { computed, ref } from 'vue';

interface iMenuItems {
    id: string,
    title: string
}

const darkMode = useDarkMode();
const expanded = ref<'employment' | 'education' | 'systems' | null>(null);
const positions: iMenuItems[] = [
    {
        id: 'TechnicalLead',
        title: 'Scroll to Technical Lead'
    },
    {
        id: 'SeniorDeveloper',
        title: 'Scroll to Senior Developer'
    },
    {
        id: 'SeniorProgrammerAnalyst',
        title: 'Scroll to Senior Technical Analyst'
    }
];
const systems: iMenuItems[] = [
    {
        id: 'iCareModernization',
        title: 'Scroll to iCARE (Modernization)'
    },
    {
        id: 'InternetApps',
        title: 'Scroll to Internet Apps'
    },
    {
        id: 'IntranetApps',
        title: 'Scroll to Intranet Apps'
    },
    {
        id: 'eGem',
        title: 'Scroll to eGEM'
    },
    {
        id: 'ConnexionApps',
        title: 'Scroll to Connexion Apps'
    },
    {
        id: 'EdgeApps',
        title: 'Scroll to Edge Apps'
    },
    {
        id: 'iCareOriginal',
        title: 'Scroll to iCARE (Original)'
    },
    {
        id: 'eSubmission',
        title: 'Scroll to e-Submission'
    },
    {
        id: 'iLove',
        title: 'Scroll to iLove'
    }
];

const sectionClick = (selector: string, area: 'systems' | 'employment' | 'education') => {
    expanded.value = area;
    scroll(selector);
};

const positionClick = (index: number) => {
    if (index >= positions.length || index < 0) {
        return;
    };
    sectionClick(`#${positions[index].id}`, 'employment');
};

const systemClick = (index: number) => {
    if (index >= systems.length || index < 0) {
        return;
    };
    sectionClick(`#${systems[index].id}`, 'systems');
};

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
        <template v-for="(position, index) in positions">
            <button v-if="expanded === 'employment'" class="btn btn-sm" :class="subclasses" :title="position.title" @click="positionClick(index)">
                <span :class="`fad fa-${index + 1}`"></span>
            </button>
        </template>
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
        <template v-for="(system, index) in systems">
            <button v-if="expanded === 'systems'" class="btn btn-sm" :class="subclasses" :title="system.title" @click="systemClick(index)">
                <span :class="`fad fa-${index + 1}`"></span>
            </button>
        </template>
        <ScrollToBottom></ScrollToBottom>
    </div>
</template>

<style scoped>
</style>