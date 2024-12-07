<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="iCareModernization"
        name="iCARE"
        subtitle="Modernization"
        from="Apr. 2021"
        to="Present"
        :technologies="[
                { 
                    reference: 'vue',
                    value: 'Vue' 
                }, 
                { 
                    reference: 'vite',
                    value: 'Vite' 
                }, 
                { 
                    reference: 'ts',
                    value: 'TS' 
                }, 
                { 
                    reference: 'html',
                    value: 'HTML' 
                }, 
                {
                    reference: 'css',
                    value: 'CSS' 
                }, 
                { 
                    reference: 'js',
                    value: 'JS' 
                }, 
                { 
                    reference: 'csharp',
                    value: 'C#' 
                }, 
                { 
                    reference: 'wet-boew',
                    value: 'WET-BOEW' 
                }, 
                {
                    reference: 'azure devops',
                    value: 'Azure DevOps' 
                }, 
                {
                    reference: 'git',
                    value: 'Git' 
                }, 
                {
                    reference: 'npm',
                    value: 'NPM' 
                }, 
                { 
                    reference: 'node',
                    value: 'Node' 
                }, 
                {
                    reference: 'windows',
                    value: 'Windows' 
                }, 
                { 
                    reference: 'vs',
                    acronym: 'VS', 
                    value: 'Visual Studio' 
                }, 
                { 
                    reference: 'vscode',
                    acronym: 'VS Code', 
                    value: 'Visual Studio Code' 
                }, 
                { 
                    reference: 'ef',
                    value: 'EF' 
                }, 
                { 
                    reference: 'rest',
                    acronym: 'REST', 
                    value: 'Representational State Transfer' 
                }
        ]"
    >
        <FocusList>
            <FocusItem>Established essential development tools, including <Term reference="vs" acronym="VS" 
                value="Visual Studio"></Term>, <Term reference="azuredevops" value="Azure DevOps"></Term>, and 
                <Term reference="git" value="Git"></Term>, to facilitate efficient and organized development 
                environments.</FocusItem>
            <FocusItem>Defined the technology stack using <Term reference="csharp" value="C#"></Term>, 
                <Term reference="mvc" acronym="MVC" value="Model-View-Controller"></Term>, <Term reference="vue" 
                value="Vue"></Term>, <Term reference="restapi" acronym="REST" 
                value="Representational State Transfer"></Term> <Term reference="api" acronym="API" 
                value="Application Programming Interface"></Term>, <Term reference="sqlserver" value="SQL Server">
                </Term>, and <Term reference="ef" value="Entity Framework"></Term> to ensure a scalable and 
                maintainable system architecture.
            </FocusItem>
            <FocusItem>Responded to <Term reference="agile" value="Agile"></Term> retrospective feedback and 
                supported the team's interest in exploring and adopting new technologies like <Term reference="vue" 
                value="Vue"></Term>.</FocusItem>
            <FocusItem>Decomposed complex functional areas such as user management, permissions, service lines, bulk
                upload, notifications, and secure messaging to meet project requirements effectively.</FocusItem>
            <FocusItem>Established best practices by setting code repository policies, such as requiring two reviewers
                per pull request, passing test automations, and resolving all comments to maintain high code
                quality.</FocusItem>
            <FocusItem>Developed and maintained continuous integration pipelines, including unit test verification and
                artifact generation post-merge, to ensure reliable and robust code deployment.</FocusItem>
            <FocusItem>Configured and maintained non-production environment infrastructure for system hosting, as well
                as managed <Term reference="azuredevops" value="Azure DevOps"></Term> agents to support consistent 
                build and deployment processes.</FocusItem>
            <FocusItem>Developed and maintained <Term reference="ci" acronym="CI" value="Continuous Integration">
                </Term> release pipelines to automate deployments across environments, streamlining the integration 
                process.</FocusItem>
            <FocusItem>Participated in collaborative pair-programming sessions and recorded training sessions for the
                team to facilitate knowledge sharing and remove development impediments.</FocusItem>
            <FocusItem>Provided input on business requirements, assessing technical feasibility, effort, and approach
                to deliver actionable development solutions.</FocusItem>
            <FocusItem>Supported team performance evaluations by providing feedback on individual developer
                contributions.</FocusItem>
            <FocusItem>Investigated and prototyped automated test integrations, using tools such as <Term 
                reference="specflow" value="SpecFlow"></Term> and <Term reference="azuredevops" value="Azure DevOps">
                </Term> for code coverage reporting and testing efficiency.</FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>