<script setup lang="ts">
import FocusItem from '../../layout/FocusItem.vue';
import FocusList from '../../layout/FocusList.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="iLove"
        name="iLOVE"
        from="Nov. 2012"
        to="Jan. 2014"
        :technologies="[
            { 
                reference: 'html',
                acronym: 'HTML',
                value: 'HyperText Markup Language' 
            }, 
            { 
                reference: 'css',
                acronym: 'CSS',
                value: 'Cascading Style Sheets' 
            }, 
            { 
                reference: 'js',
                acronym: 'JS',
                value: 'JavaScript'
            }, 
            { 
                reference: 'csharp',
                value: 'C#' 
            }, 
            { 
                reference: 'wetboew',
                acronym: 'WET-BOEW',
                value: 'Web Experience Toolkit' 
            }, 
            { 
                reference: 'tfs',
                acronym: 'TFS',
                value: 'Team Foundation Server' 
            }, 
            { 
                reference: 'vs',
                acronym: 'VS', 
                value: 'Visual Studio' 
            }, 
            { 
                reference: 'asp',
                acronym: 'ASP',
                value: 'Active Server Pages' 
            }, 
            {
                reference: 'dotnet', 
                value: '.NET' 
            }
        ]">
        <FocusList>
            <FocusItem>Established essential development tools for the team, including <Term reference="vs" acronym="VS"
                value="Visual Studio"></Term> and <Term reference="tfs" acronym="TFS" value="Team Foundation Server">                    
                </Term>, to enhance project workflows.</FocusItem>
            <FocusItem>Directed the technology stack, including <Term reference="csharp" value="C#"></Term> and <Term 
                reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET"></Term>, for efficient and scalable 
                application development.</FocusItem>
            <FocusItem>Collaborated with developers on technology stack, development processes, and system functionalities
                to foster team alignment.</FocusItem>
            <FocusItem>Implemented good development practices, including gated builds for code stability and conflict
                resolution.</FocusItem>
            <FocusItem>Created and maintained <Term reference="vsts" acronym="VSTS" value="Visual Studio Team Services">
                </Term> publish builds for <Term reference="ci" acronym="CI" value="Continuous Integration"></Term>, 
                enabling seamless deployment into <Term reference="npe" acronym="NPEs" 
                value="Non-Production Environments"></Term>.</FocusItem>
            <FocusItem>Configured and maintained <Term reference="npe" acronym="NPEs" 
                value="Non-Production Environments"></Term> infrastructure for system hosting and managed the build server
                environment running <Term reference="tfs" acronym="TFS" value="Team Foundation Server"></Term> <Term 
                reference="vsts" acronym="VSTS" value="Visual Studio Team Services"></Term>.</FocusItem>
            <FocusItem>Participated in pair-programming sessions to address development challenges and share knowledge.
            </FocusItem>
            <FocusItem>Conducted technical assessments on business requirements, providing effort estimates and proposed
                approaches.</FocusItem>
            <FocusItem>Collaborated with team lead, product owner, and business analyst to prioritize new development tasks
                and bug fixes effectively.</FocusItem>
            <FocusItem>Prepared deliverables for production release, identifying and securing necessary resources for
                successful deployment.</FocusItem>
            <FocusItem>Actively participated in the release process to ensure smooth and timely product launches.
            </FocusItem>
            <FocusItem>Promoted <Term reference="agile" value="Agile"></Term> development practices, introducing team 
                members to <Term reference="agile" value="Agile"></Term> methodologies and fostering
                iterative progress.</FocusItem>
            <FocusItem>Defined and implemented a robust, scalable technology stack for development projects to ensure
                long-term maintainability.</FocusItem>
            <FocusItem>Built system architecture prototypes, showcasing dynamic software solutions aligned with business
                requirements.</FocusItem>
            <FocusItem>Provided production support for web applications to maintain operational stability and performance.
            </FocusItem>
            <FocusItem>Collaborated closely with clients to gather specifications, address technical issues, and ensure
                solutions met business objectives.</FocusItem>
            <FocusItem>Proposed, justified, and implemented <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> for code management and established a <Term reference="tfs" 
                acronym="TFS" value="Team Foundation Server"></Term> build server for streamlined development processes.
            </FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>