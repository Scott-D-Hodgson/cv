<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2004-01-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date("2010-02-01T00:00:00.000-05:00"));
const fromOptions: { year: 'numeric' } = { 
    year: 'numeric'
};
const toOptions: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System 
        id="Ots"
        name="OTS"
        :from="from.toLocaleDateString('en-CA', fromOptions)"
        :to="to.toLocaleDateString('en-CA', toOptions)"
        :technologies="[
            { 
                reference: 'access', 
                value: 'Access', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'crystalreports', 
                value: 'Crystal Reports', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'installshield', 
                value: 'InstallShield', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'msi', 
                acronym: 'MSI', 
                value: 'Microsoft Installer', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            {
                reference: 'oop',
                acronym: 'OOP',
                value: 'Object-Oriented Programming',
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'sql', 
                acronym: 'SQL', 
                value: 'Structured Query Language', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'sybase', 
                value: 'Sybase', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vb6',
                acronym: 'VB6', 
                value: 'Visual Basic 6', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vss', 
                acronym: 'VSS', 
                value: 'Visual SourceSafe', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
            { 
                reference: 'windows', 
                value: 'Windows', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            }
        ]">
        <template v-slot:description>
            <p>
                The <Term reference="ots" acronym="OTS" value="Outreach Tracking System"></Term> was the anonymized
                case management tool used by the department's Ombudsman to track the generalized statistics of the 
                types of issues/cases being handled by the office.
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Upgrade the technology of the system to current standard of <Term reference="vb6" acronym="VB6" 
                value="Visual Basic 6"></Term> for desktop applications.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Built an abstraction layer separate from the specific requirements of the application, named 
                    the shared development framework.</li>
                <li>Shared development framework resulted in a bronze award at the 2006 <Term reference="gtec" 
                    acronym="GTEC" value="Government Technology Exhibition and Conference"></Term> Award 
                    Ceremonies.</li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>        