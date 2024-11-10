<script setup lang="ts">
import Section from './Section.vue';
import TermList from './TermList.vue';
</script>

<template>
    <Section>
        <TermList separator="' | '" :terms="[
            { value: '.NET' },
            { value: 'Agile' },
            { acronym: 'AJAX', value: 'Asynchronous JavaScript and XML' },
            { acronym: 'API', value: 'Application Programming Interface' },
            { acronym: 'ASP.NET', value: 'Active Server Pages .NET' },
            { value: 'Bootstrap' },
            { value: 'C#' },
            { value: 'Chart.js' },
            { acronym: 'CI', value: 'Continuous Integration' },
            { acronym: 'CD', value: 'Continuous Deployment' },
            { acronym: 'CSS', value: 'Cascading Style Sheets' },
            { value: 'DataTables' },
            { value: 'Docker' },
            { acronym: 'ERD', value: 'Entity-Relationship Diagram' },
            { value: 'Font Awesome' },
            { value: 'Gherkin' },
            { value: 'Git' },
            { value: 'GitHub' },
            { acronym: 'HTML', value: 'Hypertext Markup Language' },
            { value: 'Hugo' },
            { value: 'i18next' },
            { acronym: 'IIS', value: 'Internet Information Services' },
            { acronym: 'JS', value: 'JavaScript' },
            { acronym: 'JSON', value: 'JavaScript Object Notation' },
            { acronym: 'LINQ', value: 'Language Integrated Query' },
            { value: 'Linux' },
            { value: 'Lodash' },
            { acronym: 'MVC', value: 'Model-View-Controller' },
            { value: 'Node.js' },
            { acronym: 'npm', value: 'Node Package Manager (*assumed)' },
            { value: 'NuGet' },
            { acronym: 'OAuth', value: 'Open Authentication' },
            { value: 'Powershell' },
            { acronym: 'RPI OS', value: 'Raspberry Pi OS' },
            { value: 'Selenium' },
            { value: 'SpecFlow' },
            { acronym: 'SQL', value: 'Structured Query Language' },
            { acronym: 'SQL Server', value: 'Microsoft SQL Server' },
            { value: 'Ubuntu' },
            { value: 'Vue.js' },
            { value: 'Vite' },
            { acronym: 'TS', value: 'TypeScript' },
            { acronym: 'WET-BOEW', value: 'Web Experience Toolkit' },
            { value: 'Azure Devops' },
            { value: 'windows' },
            { acronym: 'VS', value: 'Visual Studio' },
            { acronym: 'VS Code', value: 'Visual Studio Code' },
            { acronym: 'EF', value: 'Entity Framework' },
            { acronym: 'REST', value: 'Representational State Transfer' },
            { acronym: 'XML', value: 'Extensible Markup Language' },
            { acronym: 'YAML', value: `YAML Ain't Markup Language` }
        ]">
        </TermList>
    </Section>
</template>

<style scoped></style>