<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2021-04-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date());
const options: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System
        id="InternetApps" 
        name="Internet Apps"
        subtitle="Modernization of Edge Apps"
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
                reference: 'edge', 
                value: 'Edge', 
                focus: ['infrastructure'],
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
                reference: 'jquery', 
                value: 'jQuery', 
                focus: ['front-end', 'back-end', 'full-stack'],
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
                reference: 'nuget', 
                value: 'NuGet', 
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
                The Internet Apps are the Web Solutions team's provision of externally facing data collection interfaces 
                supporting multiple areas of the department.  The supported interfaces consist of the following, each 
                representing a different division of the department:  <Term reference="ccc" acronym="CCC" 
                value="Crown Copyright Clearance"></Term>, <Term reference="finp" acronym="FINP" 
                value="Federal Internship Program"></Term>, <Term reference="fi" acronym="FI" 
                value="Francophone Initiative"></Term>, <Term reference="niem" acronym="NIEM" 
                value="Notice of International Event or Meeting"></Term>, and the <Term reference="yag" 
                acronym="YAG" value="Youth Advisory Group"></Term>.
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Modernize the existing system from the legacy technology stack into current paradigms, 
                primarily <Term reference="dotnetcore" value=".NET Core"></Term> and <Term reference="rest" 
                acronym="REST" value="Representational State Transfer"></Term> <Term reference="api" 
                acronym="API" value="Application Programming Interface"></Term>.
            </p>
        </template>
        <template v-slot:accomplishments>
            <li>Upgraded the technology stack to <Term reference="dotnetcore" value=".NET Core"></Term>.</li>
            <li>Established <Term reference="ci" acronym="CI" value="Continuous Integration"></Term>/<Term 
                reference="cd" acronym="CD" value="Continuous Deployment"></Term> practices in <Term 
                reference="ado" acronym="ADO" value="Azure DevOps"></Term>.</li>
        </template>
    </System>
</template>

<style scoped></style>