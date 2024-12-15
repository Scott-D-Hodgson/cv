<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2012-11-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date("2014-01-01T00:00:00.000-05:00"));
const options: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System 
        id="iLove"
        name="iLOVE"
        :from="from.toLocaleDateString('en-CA', options)"
        :to="to.toLocaleDateString('en-CA', options)"
        :technologies="[
            { 
                reference: 'dotnetframework', 
                value: '.NET Framework', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'aspnetwebforms', 
                acronym: 'ASP.NET WebForms', 
                value: 'Active Server Pages .NET WebForms', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'bootstrap', 
                value: 'Bootstrap', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'csharp', 
                value: 'C#', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'chrome',
                value: 'Chrome',
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'css', 
                acronym: 'CSS', 
                value: 'Cascading Style Sheets', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            {
                reference: 'firefox',
                value: 'Firefox',
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'html', 
                acronym: 'HTML', 
                value: 'HyperText Markup Language', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'ie', 
                acronym: 'IE',
                value: 'Internet Explorer', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'iis', 
                acronym: 'IIS', 
                value: 'Internet Information Services', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'jqurey', 
                value: 'jQuery',  
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'js', 
                acronym: 'JS', 
                value: 'JavaScript', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'linq', 
                acronym: 'LINQ', 
                value: 'Language Integrated Query', 
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
                reference: 'sqlserver', 
                value: 'SQL Server', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
            { 
                reference: 'tfs',
                acronym: 'TFS', 
                value: 'Team Foundation Server', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
            { 
                reference: 'vs', 
                acronym: 'VS',
                value: 'Visual Studio', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vsts', 
                acronym: 'VSTS', 
                value: 'Visual Studio Team Services', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
            { 
                reference: 'wetboew', 
                acronym: 'WET-BOEW', 
                value: 'Web Experience Toolkit', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to 
            },
            {
                reference: 'wcag',
                acronym: 'WCAG',
                value: 'Web Content Accessibility Guidelines',
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'windowsserver', 
                value: 'Windows Server', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            }
        ]">
        <template v-slot:description>
            <p>
                The <term reference="ilove" acronym="iLOVE" value="Immigration Language Online Verification Environment">
                </term> was an interface to allow officers to be able to issue queries against the data collected in the 
                <Term reference="icare" acronym="iCARE" value="Immigration Contribution Agreement Reporting Environment">
                </Term> and <Term reference="icams" acronym="iCAMS" 
                value="Immigration Contribution Agreement Management System"></Term> systems to verify if an individual 
                has been confirmed to have met their language requirements as reported by <Term reference="spo"
                acronym="SPOs" value="Service Provider Organizations"></Term>. 
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Develop an interface with the insights required into a client's language assessment data.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Built and deployed the solution within a limited timeframe.</li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>        