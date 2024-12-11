<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="eSubmission"
        name="e-Submission"
        from="Jul. 2012" 
        to="Oct. 2013"
        :technologies="[
            { 
                reference: 'dotnet',
                value: '.NET' 
            }, 
            { 
                reference: 'asp',
                acronym: 'ASP',
                value: 'Active Server Pages' 
            }, 
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
            }
        ]">
        <FocusList>
            <FocusItem>Established essential development tools for the team, including <Term reference="vs" acronym="VS"
                value="Visual Studio"></Term> and <Term reference="tfs" acronym="TFS" value="Team Foundation Server">
                </Term>, to streamline project development and collaboration.</FocusItem>
            <FocusItem>Directed the selection and implementation of core technologies such as <Term reference="csharp"
                value="C#"></Term> and <Term reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET">
                </Term> to enhance project performance and maintainability.
            </FocusItem>
            <FocusItem>Collaborated with developers to refine the tech stack, improve development processes, and define key
                system features.</FocusItem>
            <FocusItem>Implemented gated builds to enforce code stability and resolve conflicts, establishing best
                practices for reliable software delivery.</FocusItem>
            <FocusItem>Created and maintained <Term reference="vsts" acronym="VSTS" value="Visual Studio Team Services">
                </Term> publish builds for <Term reference="ci" acronym="CI" value="Continuous Integration"></Term> 
                ensuring smooth deployment into <Term reference="npe" acronym="NPEs" value="Non-Production Environments">
                </Term>.</FocusItem>
            <FocusItem>Configured and managed <Term reference="npe" acronym="NPE" value="Non-Production Environment">
                </Term> infrastructure to host the developed system and maintained the <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> <Term reference="vsts" acronym="VSTS" 
                value="Visual Studio Team Services"></Term> build server.</FocusItem>
            <FocusItem>Engaged in pair-programming sessions to address development challenges and promote shared
                problem-solving.</FocusItem>
            <FocusItem>Provided technical assessments on business requirements, delivering well-defined effort estimates
                and proposed solutions.</FocusItem>
            <FocusItem>Collaborated with the team lead, product owner, and business analyst to prioritize and manage the
                development and resolution of new and existing features.</FocusItem>
            <FocusItem>Prepared deliverables for production release, identifying and securing necessary resources for
                deployment success.</FocusItem>
            <FocusItem>Participated actively in release processes to ensure reliable and timely product launches.</FocusItem>
            <FocusItem>Advocated for <Term reference="agile" value="Agile"></Term> practices, introducing team members to 
                <Term reference="agile" value="Agile"></Term> methodologies to foster iterative development.</FocusItem>
            <FocusItem>Designed and architected scalable system solutions to support critical business applications in
                alignment with enterprise standards.</FocusItem>
            <FocusItem>Defined and implemented the technology stack to support robust, scalable, and maintainable software
                solutions.</FocusItem>
            <FocusItem>Developed system architecture prototypes to demonstrate flexible software solutions aligned with
                business needs.</FocusItem>
            <FocusItem>Translated complex requirements into actionable project milestones, facilitating efficient,
                high-quality delivery.</FocusItem>
            <FocusItem>Provided production support for web applications, maintaining stable, high-performance system
                operations.</FocusItem>
            <FocusItem>Collaborated with clients to gather requirements, troubleshoot issues, and ensure solutions met
                business objectives.</FocusItem>
            <FocusItem>Provided expert guidance to colleagues and clients on development techniques, methodologies, and
                industry best practices.</FocusItem>
            <FocusItem>Proposed, justified, and implemented the <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> code management system, optimizing code control and versioning.
            </FocusItem>
            <FocusItem>Proposed, justified, and implemented a <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> build server, enhancing build reliability and automation.
            </FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>