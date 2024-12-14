<script setup lang="ts">
import Section from '../layout/Section.vue';
import TermList from '../layout/TermList.vue';
</script>

<template>
    <Section 
        id="TechnologiesSection"
        heading="Technologies / Tools" 
        icon="fa-code">
        <TermList :focusSuppress="true" separator="' | '" :terms="[
            { 
                reference: 'dotnetcore', 
                value: '.NET Core', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'agile', 
                value: 'Agile', 
                focus: ['cross-functional'] 
            },
            { 
                reference: 'ajax', 
                acronym: 'AJAX', 
                value: 'Asynchronous JavaScript and XML', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'api', 
                acronym: 'API', 
                value: 'Application Programming Interface', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'aspnet', 
                acronym: 'ASP.NET', 
                value: 'Active Server Pages .NET', 
                focus: ['back-end', 'full-stack'] 
            },
            {
                reference: 'ado',
                acronym: 'ADO',
                value: 'Azure DevOps',
                focus: ['infrastructure']
            },
            {
                reference: 'adoagents',
                acronym: 'ADO Agents',
                value: 'Azure DevOps Agents',
                focus: ['infrastructure']
            },
            {
                reference: 'adopipelines',
                acronym: 'ADO Pipelines',
                value: 'Azure DevOps Pipelines',
                focus: ['infrastructure']
            },
            {
                reference: 'adoreleases',
                acronym: 'ADO Releases',
                value: 'Azure DevOps Releases',
                focus: ['infrastructure']
            },
            { 
                reference: 'bootstrap', 
                value: 'Bootstrap', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'csharp', 
                value: 'C#', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'chartjs', 
                value: 'Chart.js', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'chrome',
                value: 'Chrome',
                focus: ['infrastructure']
            },
            { 
                reference: 'cicd', 
                acronym: 'CI/CD', 
                value: 'Continuous Integration/Continuous Deployment', 
                focus: ['infrastructure'] 
            },
            {
                reference: 'ckeditor',
                value: 'CKEditor',
                focus: ['front-end', 'full-stack']
            },
            { 
                reference: 'css', 
                acronym: 'CSS', 
                value: 'Cascading Style Sheets', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'datatables', 
                value: 'DataTables', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'edge', 
                value: 'Edge', 
                focus: ['infrastructure'] 
            },
            {
                reference: 'ef',
                acronym: 'EF',
                value: 'Entity Framework',
                focus: ['back-end', 'full-stack']
            },
            { 
                reference: 'erd', 
                acronym: 'ERD', 
                value: 'Entity-Relationship Diagram', 
                focus: ['back-end', 'full-stack'] 
            },
            {
                reference: 'firefox',
                value: 'Firefox',
                focus: ['infrastructure']
            },
            { 
                reference: 'fontawesome', 
                value: 'Font Awesome', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'gherkin', 
                value: 'Gherkin', 
                focus: ['automated-testing'] 
            },
            { 
                reference: 'git', 
                value: 'Git', 
                focus: ['infrastructure'] 
            },
            { 
                reference: 'gwt',
                acronym: 'GWT', 
                value: 'Given-When-Then', 
                focus: ['automated-testing'] 
            },
            { 
                reference: 'html', 
                acronym: 'HTML', 
                value: 'HyperText Markup Language', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'i18next', 
                value: 'i18next', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'iis', 
                acronym: 'IIS', 
                value: 'Internet Information Services', 
                focus: ['infrastructure'] 
            },
            { 
                reference: 'js', 
                acronym: 'JS', 
                value: 'JavaScript', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'json', 
                acronym: 'JSON', 
                value: 'JavaScript Object Notation', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'jwt', 
                acronym: 'JWT', 
                value: 'JSON Web Token', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'linq', 
                acronym: 'LINQ', 
                value: 'Language Integrated Query', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'mvc', 
                acronym: 'MVC', 
                value: 'Model-View-Controller', 
                focus: ['back-end', 'full-stack'] 
            },
            {
                reference: 'nlog',
                value: 'NLog',
                focus: ['back-end', 'full-stack']
            },
            { 
                reference: 'node', 
                value: 'Node', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'npm', 
                acronym: 'npm', 
                value: 'Node Package Manager (*assumed)', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'nuget', 
                value: 'NuGet', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'oauth', 
                acronym: 'OAuth', 
                value: 'Open Authentication', 
                focus: ['back-end', 'full-stack'] 
            },
            {
                reference: 'oop',
                acronym: 'OOP',
                value: 'Object-Oriented Programming',
                focus: ['back-end', 'full-stack']
            },
            { 
                reference: 'powershell', 
                value: 'PowerShell', 
                focus: ['back-end', 'full-stack', 'infrastructure'] 
            },
            { 
                reference: 'razorpages', 
                value: 'Razor Pages', 
                focus: ['front-end', 'full-stack'] 
            },
            {
                reference: 'rest',
                acronym: 'REST',
                value: 'Representational State Transfer', 
                focus: ['front-end', 'back-end', 'full-stack']
            },
            {
                reference: 'sass',
                acronym: 'SASS',
                value: 'Syntactically Awesome Style Sheets', 
                focus: ['front-end', 'full-stack']
            },
            {
                reference: 'scrum',
                value: 'Scrum',
                focus: ['cross-functional']
            },
            { 
                reference: 'selenium', 
                value: 'Selenium', 
                focus: ['automated-testing'] 
            },
            { 
                reference: 'specflow', 
                value: 'SpecFlow', 
                focus: ['automated-testing'] 
            },
            { 
                reference: 'sql', 
                acronym: 'SQL', 
                value: 'Structured Query Language', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'sqlserver', 
                value: 'SQL Server', 
                focus: ['infrastructure'] 
            },
            { 
                reference: 'tap',
                acronym: 'TAP', 
                value: 'Task-based Asynchronous Pattern', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'ts', 
                acronym: 'TS', 
                value: 'TypeScript', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'vite', 
                value: 'Vite', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'vue', 
                value: 'Vue', 
                focus: ['front-end', 'full-stack'] 
            },
            { 
                reference: 'vs', 
                acronym: 'VS',
                value: 'Visual Studio', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'vscode', 
                acronym: 'VS Code', 
                value: 'Visual Studio Code', 
                focus: ['front-end', 'back-end', 'full-stack'] 
            },
            { 
                reference: 'wetboew', 
                acronym: 'WET-BOEW', 
                value: 'Web Experience Toolkit', 
                focus: ['front-end', 'full-stack'] 
            },
            {
                reference: 'wcag',
                acronym: 'WCAG',
                value: 'Web Content Accessibility Guidelines',
                focus: ['front-end', 'full-stack'] 
            },
            {
                reference: 'webapi',
                acronym: 'WebAPI',
                value: 'Web Application Programming Interface',
                focus: ['back-end', 'full-stack']
            },
            {
                reference: 'webdriver',
                value: 'WebDriver',
                focus: ['automated-testing']
            },
            { 
                reference: 'windows', 
                value: 'Windows', 
                focus: ['infrastructure'] 
            },
            { 
                reference: 'windowsserver', 
                value: 'Windows Server', 
                focus: ['infrastructure'] 
            },
            { 
                reference: 'xml', 
                acronym: 'XML', 
                value: 'Extensible Markup Language', 
                focus: ['back-end', 'full-stack'] 
            },
            { 
                reference: 'xunit', 
                value: 'xUnit', 
                focus: ['back-end', 'full-stack', 'automated-testing'] 
            },
            { 
                reference: 'yaml', 
                acronym: 'YAML', 
                value: `YAML Ain't Markup Language`, 
                focus: ['back-end', 'full-stack'] 
            }
        ]">
        </TermList>
    </Section>
</template>

<style scoped></style>