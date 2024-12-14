<script setup lang="ts">
import FocusItem from '../../layout/FocusItem.vue';
import FocusList from '../../layout/FocusList.vue';
import Position from '../../layout/Position.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <Position 
        id="TechnicalLead"
        title="Technical Lead" 
        from="Mar. 2014"
        to="Present"
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
                reference: 'tdss', 
                acronym: 'TDSS', 
                value: 'Transformation and Digital Services Sector' 
            },
            { 
                reference: 'websolutions', 
                value: 'Web Solutions' 
            }
        ]">
        <FocusList>
            <FocusItem 
                :focus="[
                    'cross-functional', 
                    'full-stack', 
                    'front-end', 
                    'back-end'
                ]">
                Oversaw technical solutions across three distinct teams, led
                by different <Term reference="tl" acronym="TLs" value="Team Leads"></Term>, providing strategic guidance
                and expertise in full-stack integration across various technologies.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional', 
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing'
                ]">
                Mentored cross-functional development roles, including <Term reference="ba" acronym="BAs" 
                value="Business Analysts"></Term>, <Term reference="fe" value="Front-end"></Term> and
                <Term reference="be" value="Back-end"></Term>&nbsp;<Term reference="developer" value="Developers"></Term>, 
                <Term reference="db" value="Database"></Term>&nbsp;<Term reference="developer" value="Developers"></Term>, 
                and <Term reference="qa" acronym="QA" value="Quality Assurance"></Term>&nbsp;<Term reference="tester" 
                value="Testers"></Term>, to enhance cohesive integration efforts and development best
                practices.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Assessed technical requirements, estimating effort, and defining
                solutions with cross-functional team collaboration.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack'
                ]">
                Architected comprehensive system solutions, segmenting needs into core functionalities aligned 
                to features for modular implementation and flexible permission management.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional', 
                    'mentoring'
                ]">
                Advocated <Term reference="agile" value="Agile"></Term> development methodologies,
                introducing team members to <Term reference="agile" value="Agile"></Term> principles for
                iterative, collaborative development.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional', 
                    'mentoring'
                ]">
                Provided mentorship on development standards and <Term reference="agile" value="Agile">                    
                </Term> practices, fostering a culture of continuous learning and growth.
            </FocusItem>
            <FocusItem
                :focus="[
                    'cross-functional', 
                    'infrastructure'
                ]">
                Engaged with third-party vendors to evaluate, research, and
                perform cost-value analyses on potential products, ensuring 
                alignment with organizational integration goals and project
                budgets.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure', 
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing'
                ]">
                Established essential development tools, including <Term reference="vs" acronym="VS" 
                value="Visual Studio"></Term>, <Term reference="vscode" acronym="VS Code" value="Visual Studio Code">
                </Term>, <Term reference="ado" acronym="ADO" value="Azure DevOps"></Term>, <Term reference="adopipelines" 
                acronym="ADO Pipelines" value="Azure DevOps Pipelines"></Term>, <Term reference="adoreleases" 
                acronym="ADO Releases" value="Azure DevOps Releases">
                </Term>, <Term reference="npm" acronym="NPM" value="Node Package Manager (*assumed)"></Term>, and  
                <Term reference="node" value="Node"></Term>, to optimize teams' productivity.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing'
                ]">
                Directed technology stack, utilizing <Term reference="dotnet" value=".NET"></Term>, <Term 
                reference="api" acronym="API" value="Application Programming Interface"></Term>, <Term 
                reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET"></Term>, <Term 
                reference="csharp" value="C#"></Term>, <Term reference="oauth" acronym="OAuth" 
                value="Open Authentication"></Term>, <Term reference="rest" acronym="REST" 
                value="Representational State Transfer"></Term>, <Term reference="mvc" acronym="MVC" 
                value="Model-View-Controller"></Term>, <Term reference="vite" value="Vite"></Term>, and <Term 
                reference="vue" value="Vue"></Term> for robust development.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'mentoring'
                ]">
                Mentored developers on technology stack, development workflows,
                and system intricacies to build a knowledgeable team.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing', 
                    'mentoring'
                ]">
                Organized "Lunch and Learn" sessions to upskill the team in areas
                such as <Term reference="js" acronym="JS" value="JavaScript"></Term> fundamentals and 
                <Term reference="agile" value="Agile"></Term> practices.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing', 
                    'mentoring'
                ]">
                Delivered training sessions and led pair programming, sharing
                knowledge and resolving development roadblocks.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing', 
                    'mentoring']">
                Defined development best practices, implementing <Term reference="pr" acronym="PR" 
                value="Pull Request"></Term> policies, requiring approvals, automated testing, and code quality
                checks in <Term reference="ado" acronym="ADO" value="Azure DevOps"></Term> ensuring code stability 
                and conflict resolution.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'front-end', 
                    'back-end', 
                    'full-stack', 
                    'automated-testing', 
                    'mentoring'
                ]">
                Led code <Term reference="pr" acronym="PR" value="Pull Request"></Term> reviews and approvals, 
                ensuring adherence to development standards and high-quality output.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure', 
                    'automated-testing', 
                    'mentoring'
                ]">
                Automated testing and <Term reference="cicd" acronym="CI/CD" 
                value="Continuous Integration/Continuous Deployment"></Term> pipelines, leveraging <Term 
                reference="ado" acronym="ADO" value="Azure DevOps"></Term> for efficient, reliable deployment 
                workflows.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Participated in hiring processes, conducting interviews and
                attending job fairs to identify top talent.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional', 
                    'infrastructure'
                ]">
                Engaged with the <Term reference="dps" acronym="DPS" value="DevOps Platform Service"></Term> team
                to design and configure <Term reference="ado" acronym="ADO" value="Azure DevOps"></Term> processes 
                and <Term reference="adoagents" acronym="ADO Agents" value="Azure DevOps Agents"></Term>, supporting 
                streamlined workflows and integration within project lifecycles.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional', 
                    'infrastructure'
                ]">
                Coordinated with <Term reference="crm" acronym="CRM" value="Change and Release Management"></Term> and
                various divisions of <Term reference="ssc" acronym="SSC" value="Shared Services Canada"></Term> to 
                deploy and configure application hardware and software, ensuring effective cross-functional integration.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'infrastructure'
                ]">            
                Configured and maintained <Term reference="npe" acronym="NPE" value="Non-Production Environment">                    
                </Term> infrastructure, supporting both system hosting and build server operations.
            </FocusItem>
        </FocusList>
    </Position>
</template>

<style scoped></style>