<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2012-07-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date("2013-10-01T00:00:00.000-05:00"));
const options: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System 
        id="eSubmission"
        name="e-Submission"
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
                reference: 'jquery', 
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
                The e-Submission was the first digital intake portal for the collection of <Term reference="cfp" acronym="CFP" value="Call for Proposal"></Term> applications in the department. 
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Provision of an intake portal for <Term reference="cfp" acronym="CFP" value="Call for Proposal"></Term> applications designed to open for applications at a specific time, 
                facilitate the collection of application packages, and finalize the delivery of the applications internally to the department.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Built and deployed the solution within a limited timeframe.</li>
                <li>Successfully captured CFP applications for multiple waves of intake.</li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>        