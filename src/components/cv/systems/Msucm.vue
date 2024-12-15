<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2002-01-01T00:00:00.000-05:00"));
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
        id="Msucm"
        name="MSUCM"
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
                The <Term reference="msucm" acronym="MSUCM" value="Medical Surveillance Unit Client Manager">
                </Term> was the tracking system for clients of the department that were in the process of 
                being assessed for their medical screenings. 
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Originally developed by a third-party vendor, the application became unsupported and required 
                modifications to meet the current tracking requirements of the <Term reference="msu" 
                acronym="MSU" value="Medical Surveillance Unit"></Term> and technology standards of the 
                department.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Successfully upgraded and deployed the product.</li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>        