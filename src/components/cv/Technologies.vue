<script setup lang="ts">
import Section from '../layout/Section.vue';
import TermList from '../layout/TermList.vue';
</script>

<template>
    <Section id="TechnologiesSection" label="Scroll to technologies" icon="fa-code">
        <TermList separator="' | '" :terms="[
            { reference: 'dotnet', value: '.NET', focus: ['back-end', 'full-stack'] },
            { reference: 'agile', value: 'Agile', focus: ['cross-functional'] },
            { reference: 'ajax', acronym: 'AJAX', value: 'Asynchronous JavaScript and XML', focus: ['front-end', 'full-stack'] },
            { reference: 'api', acronym: 'API', value: 'Application Programming Interface', focus: ['back-end', 'full-stack'] },
            { reference: 'aspnet', acronym: 'ASP.NET', value: 'Active Server Pages .NET', focus: ['back-end', 'full-stack'] },
            { reference: 'bootstrap', value: 'Bootstrap', focus: ['front-end', 'full-stack'] },
            { reference: 'csharp', value: 'C#', focus: ['back-end', 'full-stack'] },
            { reference: 'chartjs', value: 'Chart.js', focus: ['front-end', 'full-stack'] },
            { reference: 'ci', acronym: 'CI', value: 'Continuous Integration', focus: ['infrastructure'] },
            { reference: 'cd', acronym: 'CD', value: 'Continuous Deployment', focus: ['infrastructure'] },
            { reference: 'css', acronym: 'CSS', value: 'Cascading Style Sheets', focus: ['front-end', 'full-stack'] },
            { reference: 'datatables', value: 'DataTables', focus: ['front-end', 'full-stack'] },
            { reference: 'docker', value: 'Docker', focus: ['infrastructure'] },
            { reference: 'erd', acronym: 'ERD', value: 'Entity-Relationship Diagram', focus: ['back-end', 'full-stack'] },
            { reference: 'fontawesome', value: 'Font Awesome', focus: ['front-end', 'full-stack'] },
            { reference: 'gherkin', value: 'Gherkin', focus: ['automated-testing'] },
            { reference: 'git', value: 'Git', focus: ['infrastructure'] },
            { reference: 'github', value: 'GitHub', focus: ['infrastructure'] },
            { reference: 'html', acronym: 'HTML', value: 'Hypertext Markup Language', focus: ['front-end', 'full-stack'] },
            { reference: 'hugo', value: 'Hugo', focus: ['front-end', 'full-stack'] },
            { reference: 'i18next', value: 'i18next', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'iis', acronym: 'IIS', value: 'Internet Information Services', focus: ['back-end', 'full-stack'] },
            { reference: 'js', acronym: 'JS', value: 'JavaScript', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'json', acronym: 'JSON', value: 'JavaScript Object Notation', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'linq', acronym: 'LINQ', value: 'Language Integrated Query', focus: ['back-end', 'full-stack'] },
            { reference: 'linux', value: 'Linux', focus: ['infrastructure'] },
            { reference: 'lodash', value: 'Lodash', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'mvc', acronym: 'MVC', value: 'Model-View-Controller', focus: ['back-end', 'full-stack'] },
            { reference: 'nodejs', value: 'Node.js', focus: ['back-end', 'full-stack'] },
            { reference: 'npm', acronym: 'npm', value: 'Node Package Manager (*assumed)', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'nuget', value: 'NuGet', focus: ['back-end', 'full-stack'] },
            { reference: 'oauth', acronym: 'OAuth', value: 'Open Authentication', focus: ['back-end', 'full-stack'] },
            { reference: 'powershell', value: 'Powershell', focus: ['back-end', 'full-stack', 'infrastructure'] },
            { reference: 'rpios', acronym: 'RPI OS', value: 'Raspberry Pi OS', focus: ['infrastructure'] },
            { reference: 'selenium', value: 'Selenium', focus: ['automated-testing'] },
            { reference: 'specflow', value: 'SpecFlow', focus: ['automated-testing'] },
            { reference: 'sql', acronym: 'SQL', value: 'Structured Query Language', focus: ['back-end', 'full-stack'] },
            { reference: 'sqlserver', acronym: 'SQL Server', value: 'Microsoft SQL Server', focus: ['infrastructure'] },
            { reference: 'ubuntu', value: 'Ubuntu', focus: ['infrastructure'] },
            { reference: 'vuejs', value: 'Vue.js', focus: ['front-end', 'full-stack'] },
            { reference: 'vite', value: 'Vite', focus: ['front-end', 'full-stack'] },
            { reference: 'ts', acronym: 'TS', value: 'TypeScript', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'wetboew', acronym: 'WET-BOEW', value: 'Web Experience Toolkit', focus: ['front-end', 'full-stack'] },
            { reference: 'azuredevops', value: 'Azure Devops', focus: ['front-end', 'back-end', 'full-stack', 'automated-testing', 'infrastructure'] },
            { reference: 'azurepipelines', value: 'Azure Pipelines', focus: ['front-end', 'back-end', 'full-stack', 'automated-testing'] },
            { reference: 'azurereleases', value: 'Azure Releases', focus: ['automated-testing', 'infrastructure'] },
            { reference: 'windows', value: 'Windows', focus: ['infrastructure'] },
            { reference: 'vs', acronym: 'VS', value: 'Visual Studio', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'vscode', acronym: 'VS Code', value: 'Visual Studio Code', focus: ['front-end', 'back-end', 'full-stack'] },
            { reference: 'ef', acronym: 'EF', value: 'Entity Framework', focus: ['back-end', 'full-stack'] },
            { reference: 'rest', acronym: 'REST', value: 'Representational State Transfer', focus: ['back-end', 'full-stack'] },
            { reference: 'xml', acronym: 'XML', value: 'Extensible Markup Language', focus: ['back-end', 'full-stack'] },
            { reference: 'yaml', acronym: 'YAML', value: `YAML Ain't Markup Language`, focus: ['back-end', 'full-stack', 'infrastructure'] }
        ]">
        </TermList>
    </Section>
</template>

<style scoped></style>