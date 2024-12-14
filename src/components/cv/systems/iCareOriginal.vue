<script setup lang="ts">
import FocusItem from '../../layout/FocusItem.vue';
import FocusList from '../../layout/FocusList.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="iCareOriginal"
        name="iCARE"
        subtitle="Original"
        from="Dec. 2012"
        to="Apr. 2021"
        :technologies="[
                { 
                    reference: 'asp',
                    value: 'ASP' 
                }, 
                { 
                    reference: 'dotnet',
                    value: '.NET' 
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
                    reference: 'tfs',
                    value: 'TFS' 
                }, 
                { 
                    reference: 'vs',
                    acronym: 'VS', 
                    value: 'Visual Studio' 
                }, 
                { 
                    reference: 'soap',
                    value: 'SOAP' 
                }, 
                { 
                    reference: 'sql',
                    value: 'SQL' 
                }
            ]"
    >
        <FocusList>
            <FocusItem>Defined the technology stack using <Term reference="csharp" value="C#"></Term>, 
                <Term reference="mvc" acronym="MVC" value="Model-View-Controller"></Term>, <Term 
                reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET"></Term>, <Term 
                reference="soap" acronym="SOAP" value="Simple Object Access Protocol"></Term>, and <Term
                reference="sqlserver" value="SQL Server"></Term> to ensure a cohesive system architecture.
            </FocusItem>
            <FocusItem>Architected the solution, breaking down functional areas such as user management, permissions,
                service lines, bulk upload, notifications, and secure messaging to meet the robust
                requirements.</FocusItem>
            <FocusItem>Mentored developers to familiarize them with the technology stack, development processes, and
                system features, accelerating their contributions to the project.</FocusItem>
            <FocusItem>Led initiatives for development best practices by setting code repository policies, such as
                requiring two reviewers per <Term reference="pr" acronym="PR" value="Pull Request"></Term> 
                passing test automations, and resolving all comments.</FocusItem>
            <FocusItem>Investigated and prototyped <Term reference="specflow" value="SpecFlow"></Term> automated test 
                integrations, establishing automated test projects and integrating code coverage reports into 
                <Term reference="azuredevops" value="Azure DevOps"></Term>.</FocusItem>
            <FocusItem>Established pipelines to verify submission builds, ensuring all unit tests pass, and generating
                artifacts post-merge for robust, verified code deployment.</FocusItem>
            <FocusItem>Configured and maintained the <Term reference="npe" acronym="NPE" 
                value="Non-Production Environment"></Term> infrastructure for hosting the system, while also 
                managing <Term reference="azuredevopsagents" value="Azure DevOps Agents"></Term> for consistent 
                build and deployment support.</FocusItem>
            <FocusItem>Developed and maintained <term reference="ci" acronym="CI" value="Continuous Integration">
                </term> release pipelines, deploying code into <Term reference="npe" acronym="NPE" 
                value="Non-Production Environment"></Term> environments to streamline the continuous 
                integration process.</FocusItem>
            <FocusItem>Prepared deliverables for production release, identifying and aligning resources required for
                successful deployment.</FocusItem>
            <FocusItem>Collaborated with the team lead, product owner, and business analyst to prioritize development
                and resolve bugs, aligning on goals and workload distribution.</FocusItem>
            <FocusItem>Conducted pair-programming sessions and recorded training sessions to remove team impediments,
                supporting collaborative knowledge-sharing.</FocusItem>
            <FocusItem>Provided input on business requirements, assessing technical feasibility, effort, and approach
                to deliver actionable solutions.</FocusItem>
            <FocusItem>Supported team performance evaluations by providing context on individual developer
                contributions to the team lead.</FocusItem>
            <FocusItem>Advocated <Term reference="dotnet" value=".NET"></Term> solution as a replacement for 
                deprecated <Term reference="java" value="Java"></Term>-based system.</FocusItem>
        </FocusList>
    </System>
</template>

<style scoped>
</style>