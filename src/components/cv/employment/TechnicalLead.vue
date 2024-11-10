<script setup lang="ts">
import Position from '../../layout/Position.vue';
import Term from '../../layout/Term.vue';
import TermList from '../../layout/TermList.vue';
import FocusItem from '../FocusItem.vue';
</script>

<template>
    <Position 
        title="Technical Lead" 
        from="Mar. 2014"
        to="Present"
        :organization="[
            { acronym: 'GoC', value: 'Government of Canada'},
            { acronym: 'IRCC', value: 'Immigration, Refugees, and Citizenship Canada' },
            { acronym: 'TDSS', value: 'Transformation and Digital Services Sector' },
            { value: 'Web Solutions' }
        ]"
    >
        <ul>
            <FocusItem :focus="['cross-functional', 'full-stack', 'front-end', 'back-end']">
                Oversaw technical solutions across three distinct projects, led
                by different <Term acronym="TLs" value="Team Leads"></Term>, providing strategic guidance
                and expertise in full-stack integration across various technologies.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'infrastructure']">
                Coordinated with <Term acronym="CRM" value="Change and Release Management"></Term> and
                various divisions of <Term acronym="SSC" value="Shared Services Canada"></Term> to deploy
                and configure application hardware and software, ensuring effective cross-functional
                integration.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'infrastructure']">
                Engaged with the <Term acronym="ALM" value="Application Lifecycle Management"></Term> team
                to design and configure <Term value="Azure DevOps"></Term> processes and <Term value="Build Agents">
                </Term>, supporting streamlined workflows and integration within project lifecycles.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'front-end', 'back-end', 'full-stack', 'automated-testing']">
                Mentored cross-functional development roles, including <Term acronym="BAs" value="Business Analysts">
                </Term>, <Term value="Front-end"></Term> and
                <Term value="Back-end"></Term>&nbsp;<Term value="Developers"></Term>, <Term value="Database">                    
                </Term>&nbsp;<Term value="Developers"></Term>, and <Term acronym="QA" value="Quality Assurance">                    
                </Term>&nbsp;<Term value="Testers"></Term>, to enhance cohesive integration efforts and development best
                practices.
            </FocusItem>
            <FocusItem :focus="['cross-functional']">
                Assessed technical requirements, estimating effort, and defining
                solutions with cross-functional team collaboration.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'mentoring']">
                Advocated <Term value="Agile"></Term> development methodologies,
                introducing team members to <Term value="Agile"></Term> principles for
                iterative, collaborative development.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'mentoring']">
                Provided expert guidance on systems development, database
                architecture, and <Term value="Agile"></Term>
                principles, supporting project success and innovation.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'mentoring']">
                Provided mentorship on development standards and 
                <Term value="Agile"></Term> practices, fostering a culture 
                of continuous learning and growth.
            </FocusItem>
            <FocusItem :focus="['cross-functional', 'infrastructure']">
                Engaged with third-party vendors to evaluate, research, and
                perform cost-value analyses on potential products, ensuring 
                alignment with organizational integration goals and project
                budgets.
            </FocusItem>
            <FocusItem :focus="['infrastructure', 'front-end', 'back-end', 'full-stack', 'automated-testing']">
                Established essential development tools, including <TermList :terms="[{ acronym: 'VS', value: 
                'Visual Studio' }, { acronym: 'VS Code', value: 'Visual Studio Code' }, { value: 'Azure DevOps'                     
                }, { value: 'Azure Pipelines' }, { value: 'Azure Releases' }, { acronym: 'npm', value: 
                'Node Package Manager (*assumed)' }, { value: 'Node.js' }]" separator="','" prefixFinal="'and '">
                </TermList>, to optimize teams' productivity.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack']">
                Architected comprehensive system solutions, segmenting needs into core functionalities aligned 
                to features for modular implementation and flexible permission management.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack', 'automated-testing']">
                Directed technology selection, utilizing
                <TermList :terms="[{ value: '.NET' }, { acronym: 'API', value: 
                    'Application Programming Interface' }, { acronym: 'ASP.NET', value: 
                    'Active Server Pages .NET' }, { value: 'C#' }, { acronym: 'OAuth', value: 
                    'Open Authentication' }, { acronym: 'REST', value: 
                    'Representational State Transfer' }, { acronym: 'MVC', value: 
                    'Model-View-Controller' }, { value: 'Vite' }, { value: 'Vue' }]" 
                    separator="','" prefixFinal="'and '"></TermList> for robust development.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack', 'mentoring']">
                Mentored developers on technology stack, development workflows,
                and system intricacies to build a knowledgeable team.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack', 'automated-testing', 'mentoring']">
                Delivered training sessions and led pair programming, sharing
                knowledge and resolving development roadblocks.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack', 'automated-testing', 'mentoring']">
                Organized "Lunch and Learn" sessions to upskill the team in areas
                such as <Term acronym="JS" value="JavaScript"></Term> fundamentals and 
                <Term value="Agile"></Term> practices.
            </FocusItem>
            <FocusItem :focus="[]">
                Participated in hiring processes, conducting interviews and
                attending job fairs to identify top talent.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack', 'automated-testing', 'mentoring']">
                Defined development best practices, implementing <Term acronym="PR" value="Pull Request">
                </Term> policies, requiring approvals, automated testing, and code quality checks, in 
                <Term value="Azure DevOps"></Term>, and (previously) <Term
                value="gated check-ins"></Term>, in <Term acronym="TFS" value="Team Foundation Server">
                </Term>, ensuring code stability and conflict resolution.
            </FocusItem>
            <FocusItem :focus="['front-end', 'back-end', 'full-stack', 'automated-testing', 'mentoring']">
                Led code <Term acronym="PR" value="Pull Request"></Term> reviews
                and approvals, ensuring adherence to development standards and high-quality output.
            </FocusItem>
            <FocusItem :focus="['infrastructure', 'automated-testing', 'mentoring']">
                Automated testing and <Term acronym="CI" value="Continuous Integration"></Term> pipelines, 
                leveraging <Term value="Azure DevOps"></Term> for efficient, reliable deployment workflows.
            </FocusItem>
            <FocusItem :focus="['infrastructure']">            
                Configured and maintained <Term acronym="NPE" value="Non-Production Environment"></Term>
                infrastructure, supporting both system hosting and build server operations.
            </FocusItem>
        </ul>
    </Position>
</template>

<style scoped></style>