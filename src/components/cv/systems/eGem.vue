<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2019-05-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date());
const options: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System 
        id="eGem"
        name="eGEM"
        :from="from.toLocaleDateString('en-CA', options)"
        to="Present"
        :technologies="[
            { 
                reference: 'dotnetcore', 
                value: '.NET Core', 
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
                reference: 'ajax', 
                acronym: 'AJAX', 
                value: 'Asynchronous JavaScript and XML', 
                focus: ['front-end', 'full-stack'],
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
                reference: 'chartjs', 
                value: 'Chart.js', 
                focus: ['front-end', 'full-stack'],
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
                reference: 'ckeditor',
                value: 'CKEditor',
                focus: ['front-end', 'full-stack'],
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
                reference: 'ef',
                acronym: 'EF',
                value: 'Entity Framework',
                focus: ['back-end', 'full-stack'],
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
                reference: 'gherkin', 
                value: 'Gherkin', 
                focus: ['automated-testing'],
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
                reference: 'gwt',
                acronym: 'GWT', 
                value: 'Given-When-Then', 
                focus: ['automated-testing'],
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
                reference: 'i18next', 
                value: 'i18next', 
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
                reference: 'js', 
                acronym: 'JS', 
                value: 'JavaScript', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'json', 
                acronym: 'JSON', 
                value: 'JavaScript Object Notation', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'jwt', 
                acronym: 'JWT', 
                value: 'JSON Web Token', 
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
                reference: 'nlog',
                value: 'NLog',
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'node', 
                value: 'Node', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'npm', 
                acronym: 'npm', 
                value: 'Node Package Manager (*assumed)', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'nuget', 
                value: 'NuGet', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'oauth', 
                acronym: 'OAuth', 
                value: 'Open Authentication', 
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
                reference: 'razorpages', 
                value: 'Razor Pages', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to 
            },
            {
                reference: 'rebexmail',
                value: 'Rebex Mail', 
                focus: ['back-end', 'full-stack'],
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
                reference: 'sass',
                acronym: 'SASS',
                value: 'Syntactically Awesome Style Sheets', 
                focus: ['front-end', 'full-stack'],
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
                reference: 'selenium', 
                value: 'Selenium', 
                focus: ['automated-testing'],
                from: from,
                to: to 
            },
            { 
                reference: 'specflow', 
                value: 'SpecFlow', 
                focus: ['automated-testing'],
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
                reference: 'tap',
                acronym: 'TAP', 
                value: 'Task-based Asynchronous Pattern', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'ts', 
                acronym: 'TS', 
                value: 'TypeScript', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vite', 
                value: 'Vite', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vue', 
                value: 'Vue', 
                focus: ['front-end', 'full-stack'],
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
                reference: 'vscode', 
                acronym: 'VS Code', 
                value: 'Visual Studio Code', 
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
                reference: 'webdriver',
                value: 'WebDriver',
                focus: ['automated-testing'],
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
            { 
                reference: 'xunit', 
                value: 'xUnit', 
                focus: ['back-end', 'full-stack', 'automated-testing'],
                from: from,
                to: to 
            },
            { 
                reference: 'yaml', 
                acronym: 'YAML', 
                value: `YAML Ain't Markup Language`, 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            }
        ]">
        <template v-slot:description>
            <p>
                The <Term reference="egem" acronym="eGEM" value="Email Management System"></Term> is the primary solution
                for managing email responses from the <Term reference="csc" acronym="CSC" value="Client Support Centre">
                </Term>, ensuring agents respond with approved texts as well as providing management with business line 
                management, oversight of agents' performance, and statistics.
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Replace the internal, unsupported systems, Alpha and InfoClient.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Decommissioned the InfoClient system.</li>
                <li>Championed the usage of <Term reference="dotnetcore" value=".NET Core"></Term>.</li>
                <li>Established <Term reference="ci" acronym="CI" value="Continuous Integration"></Term>/<Term 
                reference="cd" acronym="CD" value="Continuous Deployment"></Term> practices in <Term 
                reference="ado" acronym="ADO" value="Azure DevOps"></Term>.</li>
                <li>Implemented Automated Testing.</li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>