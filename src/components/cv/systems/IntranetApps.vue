<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import TermList from '../../layout/TermList.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="IntranetApps"
        name="Intranet Apps"
        subtitle="Modernization of Connexion Apps"
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
                acronym: 'TS',
                value: 'TypeScript' 
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
                reference: 'azuredevops',
                value: 'Azure DevOps' 
            }, 
            { 
                reference: 'git',
                value: 'Git' 
            }, 
            {
                reference: 'npm',
                acronym: 'NPM',
                value: 'Node Package Manager' 
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
                acronym: 'EF',
                value: 'Entity Framework' 
            }, 
            { 
                reference: 'rest',
                acronym: 'REST', 
                value: 'Representational State Transfer' 
            }
        ]">
        <FocusList>
            <FocusItem>
                Provided support for multiple interfaces: 
                <TermList
                    :terms="[
                        { 
                            reference: 'fi',
                            acronym: 'FI',
                            value: 'Francophone Initiative' 
                        }, 
                        { 
                            reference: 'finp',
                            acronym: 'FINP',
                            value: 'Federal Internship Program' 
                        }, 
                        { 
                            reference: 'yag',
                            acronym: 'YAG', 
                            value: 'Youth Advisory Group'
                        }, 
                        { 
                            reference: 'niem',
                            acronym: 'NIEM', 
                            value: 'Notice of International Event or Meeting'
                        }, 
                        {
                            reference: 'ccc',
                            acronym: 'CCC',
                            value: 'Crown Copyright Clearance' 
                        }
                    ]"
                    separator="', ''">
                </TermList>
            </FocusItem>
            <FocusItem>Established essential development tools, including <Term reference="vs" acronym="VS" 
                value="Visual Studio"></Term>, <Term reference="azuredevops" value="Azure DevOps"></Term>, <Term 
                reference="tfs" acronym="TFS" value="Team Foundation Server"></Term>, and <Term reference="git" 
                value="Git"></Term>, to streamline project collaboration and management.</FocusItem>
            <FocusItem>Directed technology use, selecting <Term reference="csharp" value="C#"></Term>, <Term 
                reference="mvc" acronym="MVC" value="Model-View-Controller"></Term>, <Term reference="rest" 
                acronym="REST" value="Representational State Transfer"></Term> <Term reference="api" acronym="API"
                value="Application Programming Interface"></Term>, <Term reference="sqlserver" value="SQL Server">
                </Term>, <Term reference="ef" acronym="EF" value="Entity Framework"></Term>, and <Term 
                reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET"></Term> to enhance system
                performance and maintainability.</FocusItem>
            <FocusItem>Mentored developers to improve familiarity with the tech stack, development processes, and system
                features, fostering a collaborative learning environment.</FocusItem>
            <FocusItem>Collaborated with developers on tech stack improvements, reviewed code contributions, and provided
                feedback to management on code quality.</FocusItem>
            <FocusItem>Implemented development best practices, such as PR policies requiring a minimum of two code
                reviewers, automated test verification, and gated builds to ensure code stability.</FocusItem>
            <FocusItem>Established pipelines to verify build submissions, run all unit tests, and generate artifacts
                post-merge, ensuring consistent and reliable deployment.</FocusItem>
            <FocusItem>Created and maintained <Term reference="azurereleasepiplines" value="Azure Release Pipelines">
                </Term> and <Term reference="vsts" acronym="VSTS" value="Visual Studio Team Services"></Term> publish 
                builds for continuous integration, deploying applications into NPE environments.</FocusItem>
            <FocusItem>Explored and prototyped automated testing integrations, such as <Term reference="specflow"
                value="SpecFlow"></Term>, establishing test projects and integrating code coverage reports into 
                <Term reference="azuredevops" value="Azure DevOps"></Term>.</FocusItem>
            <FocusItem>Designed the system database using code-first practices with <Term reference="ef" acronym="EF"
                value="Entity Framework"></Term>, optimizing for efficient data management and scalability.</FocusItem>
            <FocusItem>Configured and maintained <Term reference="npe" acronym="NPE" value="Non-Production Environment">
                </Term> infrastructure for hosting developed systems and managed servers
                running <Term reference="azuredevopsagents" value="Azure DevOps Agents"></Term> and <Term reference="tfs" 
                acronym="TFS" value="Team Foundation Server"></Term> <Term reference="vsts" acronym="VSTS"
                value="Visual Studio Team Services"></Term>.</FocusItem>
            <FocusItem>Conducted recorded training sessions for team members, providing archived videos as a resource for
                ongoing developer training.</FocusItem>
            <FocusItem>Engaged in pair-programming to address development challenges and facilitate knowledge sharing among
                team members.</FocusItem>
            <FocusItem>Assessed technical aspects of business requirements, estimating effort and defining approaches to
                meet project objectives.</FocusItem>
            <FocusItem>Collaborated with team leads, product owners, and business analysts to triage and prioritize
                workload for development and bug resolution.</FocusItem>
            <FocusItem>Prepared and delivered production-ready releases, coordinating necessary resources to ensure smooth
                deployments.</FocusItem>
            <FocusItem>Contributed to developer performance evaluations by providing insights on individual contributions
                and quality of work.</FocusItem>
            <FocusItem>Advocated for <Term reference="agile" value="Agile"></Term> practices, introducing and guiding team
                members in agile methodologies to enhance project efficiency.</FocusItem>
            <FocusItem>Developed skills in effective communication with various audiences, from clients to stakeholders, to
                ensure project alignment.</FocusItem>
            <FocusItem>Analyzed complex information to make informed recommendations, providing guidance on requirements
                and solutions for business and technical needs.</FocusItem>
            <FocusItem>Architected scalable system solutions aligned with enterprise standards to support mission-critical
                business applications.</FocusItem>
            <FocusItem>Built and optimized <Term reference="azuredevops" value="Azure DevOps"></Term> pipelines, automating 
                <Term reference="pr" acronym="PR" value="Pull Request"></Term> verification, unit testing, and stable
                code commits.</FocusItem>
            <FocusItem>Led the migration of source code from <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> repositories to <Term reference="azuredevops" value="Azure DevOps">
                </Term> <Term reference="git" value="Git"></Term>, consolidating version control for improved efficiency.
            </FocusItem>
            <FocusItem>Developed automated release pipelines in <Term reference="azuredevops" value="Azure DevOps"></Term>,
                deploying artifacts across environments and improving <Term reference="ci" acronym="CI" 
                value="Continuous Integration"></Term> workflows for <Term reference="npe" acronym="NPE" 
                value="Non-Production Environment"></Term>.</FocusItem>
            <FocusItem>Automated end-to-end testing using <Term reference="specflow" value="SpedFlow"></Term> and 
                <Term reference="selenium" value="Selenium"></Term> <Term reference="webdriver" value="WebDriver"></Term>, 
                enhancing testing reliability across development cycles.</FocusItem>
            <FocusItem>Defined and implemented the technology stack to ensure robust, scalable, and maintainable project
                solutions.</FocusItem>
            <FocusItem>Created system architecture prototypes to demonstrate responsive, business-driven solutions.</FocusItem>
            <FocusItem>Decomposed complex requirements into actionable project milestones, enabling timely and high-quality
                project delivery.</FocusItem>
            <FocusItem>Conducted code reviews to maintain code integrity, quality, and adherence to established standards.
            </FocusItem>
            <FocusItem>Liaised with clients and stakeholders to ensure clear communication, project alignment, and
                successful outcomes.</FocusItem>
            <FocusItem>Supported production web applications, troubleshooting issues to ensure stable and responsive
                operations.</FocusItem>
            <FocusItem>Collaborated with cross-functional teams, including <Term reference="tdss" acronym="TDSS" 
                value="Transformation and Digital Services Sector"></Term> divisions, consultants, and corporate
                stakeholders, for cohesive project execution.</FocusItem>
            <FocusItem>Provided expert counsel on systems development techniques and industry standards, supporting team
                and client success.</FocusItem>
            <FocusItem>Contributed to business requirements discussions, assessing technical feasibility and advising on
                solutions.</FocusItem>
            <FocusItem>Proposed consolidated <Term reference="dotnet" value=".NET"></Term> solutions to support low-funded
                initiatives, optimizing shared infrastructure and codebases.</FocusItem>
            <FocusItem>Provided database architecture guidance, including <Term reference="erd" acronym="ERDs" 
                value="Entity-Relationship Diagrams"></Term>.</FocusItem>
            <FocusItem>Proposed and implemented <Term reference="tfs" acronym="TFS" value="Team Foundation Server"></Term>
                code management systems and build servers to streamline development workflows.</FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>