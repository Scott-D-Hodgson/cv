<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2017-05-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date("2021-04-01T00:00:00.000-05:00"));
const options: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System 
        id="ConnexionApps" 
        name="Connexion Apps"
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
                reference: 'agile', 
                value: 'Agile', 
                focus: ['cross-functional'],
                from: from,
                to: to 
            },
            { 
                reference: 'api', 
                acronym: 'API', 
                value: 'Application Programming Interface', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'aspnet', 
                acronym: 'ASP.NET', 
                value: 'Active Server Pages .NET', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            {
                reference: 'ado',
                acronym: 'ADO',
                value: 'Azure DevOps',
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            {
                reference: 'adoagents',
                acronym: 'ADO Agents',
                value: 'Azure DevOps Agents',
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            {
                reference: 'adopipelines',
                acronym: 'ADO Pipelines',
                value: 'Azure DevOps Pipelines',
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            {
                reference: 'adoreleases',
                acronym: 'ADO Releases',
                value: 'Azure DevOps Releases',
                focus: ['infrastructure'],
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
                reference: 'cicd', 
                acronym: 'CI/CD', 
                value: 'Continuous Integration/Continuous Deployment', 
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
                reference: 'datatables', 
                value: 'DataTables', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'edge', 
                value: 'Edge', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'erd', 
                acronym: 'ERD', 
                value: 'Entity-Relationship Diagram', 
                focus: ['back-end', 'full-stack'],
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
                reference: 'fontawesome', 
                value: 'Font Awesome', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'git', 
                value: 'Git', 
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
                focus: ['front-end', 'full-stack'],
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
                reference: 'linq', 
                acronym: 'LINQ', 
                value: 'Language Integrated Query', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'mvc', 
                acronym: 'MVC', 
                value: 'Model-View-Controller', 
                focus: ['back-end', 'full-stack'],
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
                reference: 'powershell', 
                value: 'PowerShell', 
                focus: ['back-end', 'full-stack', 'infrastructure'],
                from: from,
                to: to 
            },
            {
                reference: 'rest',
                acronym: 'REST',
                value: 'Representational State Transfer', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to
            },
            {
                reference: 'scrum',
                value: 'Scrum',
                focus: ['cross-functional'],
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
                reference: 'vs', 
                acronym: 'VS',
                value: 'Visual Studio', 
                focus: ['front-end', 'back-end', 'full-stack'],
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
                reference: 'webapi',
                acronym: 'WebAPI',
                value: 'Web Application Programming Interface',
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'windowsserver', 
                value: 'Windows Server', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
            { 
                reference: 'xml', 
                acronym: 'XML', 
                value: 'Extensible Markup Language', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
        ]">
        <template v-slot:description>
            <p>
                For brevity, description of this system is unchanged from the aforementioned Intranet Apps, only the name changed to generalize and disassociate with Connexion, the internal communications website.
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Provide a single solution, paired with a deployment infrastructure, supporting smaller internal departmental initiatives from divisions with limited budget.  Cost savings realized through reuse of solution as well as minimal maintenance efforts.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Implemented multiple interfaces in the shared platform:
                    <ul>
                        <li>Connexion Language Toggle</li>
                        <li><Term reference="csi" acronym="CSI" value="Corporate Security Intake"></Term></li>
                        <li><Term reference="gii" acronym="GII" value="GCMS Issues Intake"></Term></li>
                        <li><Term reference="imit" acronym="IMIT" value="Information Management Issues Tracking"></Term></li>
                        <li><Term reference="mrz" acronym="MRZ" value="Machine Readable Zone"></Term></li>
                        <li><Term reference="nara" acronym="NARA" value="Network Account Request Application"></Term></li>
                    </ul>
                </li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>