<script setup lang="ts">
import Position from '../../layout/Position.vue';
import Term from '../../layout/Term.vue';
import FocusItem from '../../layout/FocusItem.vue';
import FocusList from '../../layout/FocusList.vue';
</script>

<template>
    <Position 
        id="SeniorDeveloper"
        title="Senior Developer" 
        from="Feb. 2010" 
        to="Mar. 2014"
        :organization="[
            { 
                reference: 'goc', 
                acronym: 'GoC', 
                value: 'Government of Canada' 
            },
            { 
                reference: 'ircc', 
                acronym: 'IRCC', 
                value: 'Immigration, Refugees, and Citizenship Canada' 
            },
            { 
                reference: 'simb', 
                acronym: 'SIMB', 
                value: 'Solutions Information Management Branch' 
            },
            { 
                reference: 'gsandcs', 
                acronym: `G's and C's`, 
                value: 'Grants and Contributions' 
            }
        ]">
        <FocusList>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Analyzed complex data to make recommendations, drawing on experience counseling clients,
                management, and stakeholders.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Contributed to requirements discussions, assessing feasibility, effort, and technical
                approach for actionable solutions.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'planning'
                ]">
                Assessed technical requirements, estimating effort, and advising on development approaches
                for effective project planning.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Worked closely with <Term reference="tl" acronym="TL" value="Team Lead"></Term>, <Term 
                reference="po" acronym="PO" value="Product Owner"></Term>, and <Term reference="ba" 
                acronym="BA" value="Business Analyst"></Term> to prioritize and triage development 
                workload.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'architecture', 
                    'infrastructure'
                ]">
                Recommended and implemented <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> as a code management and build server solution, 
                enhancing version control and build automation.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'full-stack', 
                    'front-end', 
                    'back-end'
                ]">
                Encouraged adoption of technologies, such as <Term reference="csharp" value="C#"></Term>, 
                <Term reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET"></Term>, 
                and <Term reference="tfs" acronym="TFS" value="Team Foundation Server"></Term>,
                fostering a robust and maintainable technology stack.
            </FocusItem>    
            <FocusItem 
                :focus="[
                    'architecture'
                ]">
                Constructed prototypes demonstrating software solutions tailored to business requirements
                and goals.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Participated in hiring processes by participating in interviews and evaluating candidate 
                fit for development roles.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'back-end',
                    'architecture'
                ]">
                Provided database architecture guidance, designing <Term reference="erd" acronym="ERDs" 
                value="Entity-Relationship Diagrams"></Term> to support data consistency and scalability.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'mentoring'
                ]">
                Led and mentored junior developers on coding standards, methodologies, and best practices,
                fostering a collaborative team environment.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'mentoring'
                ]">
                Participated in pair-programming sessions to troubleshoot issues and work through
                development challenges collaboratively.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'mentoring'
                ]">
                Reviewed developer contributions, providing management with insights into code quality and
                team performance.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure'
                ]">
                Implemented <Term reference="gatedcheckins" value="Gated Check-Ins"></Term> in <Term 
                reference="tfs" acronym="TFS" value="Team Foundation Server"></Term> to ensure stable code 
                integration and conflict resolutions before merges.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Supported team evaluations, providing feedback on individual contributions to aid in
                performance assessments.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure'
                ]">
                Created and maintained <Term reference="vsts" acronym="VSTS" 
                value="Visual Studio Team Services"></Term> publish builds for <Term reference="cicd" 
                acronym="CI/CD" value="Continuous Integration/Continuous Deployment"></Term>, 
                deploying consistently to <Term reference="npe" acronym="NPEs" 
                value="Non-Production Environments"></Term>.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure'
                ]">
                Configured and maintained <Term reference="npe" acronym="NPE" 
                value="Non-Production Environment"></Term> infrastructure for system hosting and 
                <Term reference="tfs" acronym="TFS" value="Team Foundation Server"></Term>&nbsp;
                <Term reference="vsts" acronym="VSTS" value="Visual Studio Team Services"></Term> 
                build server operations.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure'
                ]">
                Prepared and supported production release activities, defining necessary resources for
                successful deployment.
            </FocusItem>
        </FocusList>
    </Position>
</template>

<style scoped></style>