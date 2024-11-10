<script setup lang="ts">
import Section from '../layout/Section.vue';
import TermList from '../layout/TermList.vue';
</script>

<template>
    <Section>
        <TermList separator="' | '" :terms="[
            { value: '.NET', focus: ['back-end', 'full-stack'] },
            { value: 'Agile', focus: ['cross-functional'] },
            { acronym: 'AJAX', value: 'Asynchronous JavaScript and XML', focus: ['front-end', 'full-stack'] },
            { acronym: 'API', value: 'Application Programming Interface', focus: ['back-end', 'full-stack'] },
            { acronym: 'ASP.NET', value: 'Active Server Pages .NET', focus: ['back-end', 'full-stack'] },
            { value: 'Bootstrap', focus: ['front-end', 'full-stack'] },
            { value: 'C#', focus: ['back-end', 'full-stack'] },
            { value: 'Chart.js', focus: ['front-end', 'full-stack'] },
            { acronym: 'CI', value: 'Continuous Integration', focus: ['infrastructure'] },
            { acronym: 'CD', value: 'Continuous Deployment', focus: ['infrastructure'] },
            { acronym: 'CSS', value: 'Cascading Style Sheets', focus: ['front-end', 'full-stack'] },
            { value: 'DataTables', focus: ['front-end', 'full-stack'] },
            { value: 'Docker', focus: ['infrastructure'] },
            { acronym: 'ERD', value: 'Entity-Relationship Diagram', focus: ['back-end', 'full-stack'] },
            { value: 'Font Awesome', focus: ['front-end', 'full-stack'] },
            { value: 'Gherkin', focus: ['automated-testing'] },
            { value: 'Git', focus: ['infrastructure'] },
            { value: 'GitHub', focus: ['infrastructure'] },
            { acronym: 'HTML', value: 'Hypertext Markup Language', focus: ['front-end', 'full-stack'] },
            { value: 'Hugo', focus: ['front-end', 'full-stack'] },
            { value: 'i18next', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'IIS', value: 'Internet Information Services', focus: ['back-end', 'full-stack'] },
            { acronym: 'JS', value: 'JavaScript', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'JSON', value: 'JavaScript Object Notation', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'LINQ', value: 'Language Integrated Query', focus: ['back-end', 'full-stack'] },
            { value: 'Linux', focus: ['infrastructure'] },
            { value: 'Lodash', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'MVC', value: 'Model-View-Controller', focus: ['back-end', 'full-stack'] },
            { value: 'Node.js', focus: ['back-end', 'full-stack'] },
            { acronym: 'npm', value: 'Node Package Manager (*assumed)', focus: ['front-end', 'back-end', 'full-stack'] },
            { value: 'NuGet', focus: ['back-end', 'full-stack'] },
            { acronym: 'OAuth', value: 'Open Authentication', focus: ['back-end', 'full-stack'] },
            { value: 'Powershell', focus: ['back-end', 'full-stack', 'infrastructure'] },
            { acronym: 'RPI OS', value: 'Raspberry Pi OS', focus: ['infrastructure'] },
            { value: 'Selenium', focus: ['automated-testing'] },
            { value: 'SpecFlow', focus: ['automated-testing'] },
            { acronym: 'SQL', value: 'Structured Query Language', focus: ['back-end', 'full-stack'] },
            { acronym: 'SQL Server', value: 'Microsoft SQL Server', focus: ['infrastructure'] },
            { value: 'Ubuntu', focus: ['infrastructure'] },
            { value: 'Vue.js', focus: ['front-end', 'full-stack'] },
            { value: 'Vite', focus: ['front-end', 'full-stack'] },
            { acronym: 'TS', value: 'TypeScript', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'WET-BOEW', value: 'Web Experience Toolkit', focus: ['front-end', 'full-stack'] },
            { value: 'Azure Devops', focus: ['front-end', 'back-end', 'full-stack', 'automated-testing', 'infrastructure'] },
            { value: 'Azure Pipelines', focus: ['front-end', 'back-end', 'full-stack', 'automated-testing'] },
            { value: 'Azure Releases', focus: ['automated-testing', 'infrastructure'] },
            { value: 'Windows', focus: ['infrastructure'] },
            { acronym: 'VS', value: 'Visual Studio', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'VS Code', value: 'Visual Studio Code', focus: ['front-end', 'back-end', 'full-stack'] },
            { acronym: 'EF', value: 'Entity Framework', focus: ['back-end', 'full-stack'] },
            { acronym: 'REST', value: 'Representational State Transfer', focus: ['back-end', 'full-stack'] },
            { acronym: 'XML', value: 'Extensible Markup Language', focus: ['back-end', 'full-stack'] },
            { acronym: 'YAML', value: `YAML Ain't Markup Language`, focus: ['back-end', 'full-stack', 'infrastructure'] }
        ]">
        </TermList>
    </Section>
</template>

<style scoped></style>