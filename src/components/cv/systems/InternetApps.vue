<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import TermList from '../../layout/TermList.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System
        id="InternetApps" 
        name="Internet Apps"
        subtitle="Modernization of Edge Apps"
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
                value="Visual Studio"></Term>, <Term reference="tfs" acronym="TFS" value="Team Foundation Server">
                </Term>, and <Term reference="git" value="Git"></Term>, to enhance team productivity and 
                collaboration.</FocusItem>
            <FocusItem>Directed the use of technologies such as <Term reference="csharp" value="C#"></Term>, 
                <Term reference="webapi" acronym="Web API" value="Web Application Programming Interface"></Term>, 
                <Term reference="sqlserver" value="SQL Server"></Term>, and <Term reference="aspnet" acronym="ASP.NET"
                value="Active Server Pages .NET"></Term> to ensure robust and scalable solutions.</FocusItem>
            <FocusItem>Mentored developers to build expertise with the tech stack, development processes, and system
                features, promoting a collaborative team environment.</FocusItem>
            <FocusItem>Collaborated with developers on technical decisions and reviewed code contributions, providing
                management with insights on code quality.</FocusItem>
            <FocusItem>Established development best practices, including <Term reference="pr" acronym="PR" 
                value="Pull Request"></Term> policies with mandatory code reviews, automated testing requirements, 
                and gated builds for code stability.</FocusItem>
            <FocusItem>Built and maintained pipelines for submission verification, ensuring all unit tests pass and
                artifacts are generated post-merge.</FocusItem>
            <FocusItem>Created and maintained <Term reference="azurereleasepipelines" value="Azure Release Pipelines">
                </Term> for <Term reference="ci" acronym="CI" value="Continuous Integration"></Term>, facilitating 
                deployments to <Term reference="npe" acronym="NPE" value="Non-Production Environment"></Term> 
                environments.</FocusItem>
            <FocusItem>Prototyped <Term reference="specflow" value="SpecFlow"></Term> test integration and established
                automated test projects with integrated code coverage reports in <Term reference="azureddevops" 
                value="Azure DevOps"></Term>.</FocusItem>
            <FocusItem>Configured and maintained <Term reference="npe" acronym="NPE" 
                value="Non-Production Environment"></Term> infrastructure, managing both the developed system hosting 
                and the build system servers running <Term reference="azuredevopsagents" value="Azure DevOps Agents">
                </Term> and <Term reference="tfs" acronym="TFS" value="Team Foundation Server"></Term> <Term 
                reference="vsts" acronym="VSTS" value="Visual Studio Team Services"></Term>.</FocusItem>
            <FocusItem>Conducted recorded training sessions for team members, creating an accessible archive of training
                materials.</FocusItem>
            <FocusItem>Participated in pair-programming sessions to collaboratively resolve development challenges.</FocusItem>
            <FocusItem>Provided technical assessments for business requirements, estimating effort and defining
                implementation approaches.</FocusItem>
            <FocusItem>Collaborated with team leads, product owners, and business analysts to prioritize tasks and address
                new development and bug resolutions.</FocusItem>
            <FocusItem>Prepared and delivered production-ready releases, coordinating resources for successful deployments.
            </FocusItem>
            <FocusItem>Supported team lead in performance evaluations by offering detailed insights into developer
                contributions and areas for growth.</FocusItem>
            <FocusItem>Advocated for <Term reference="agile" value="Agile"></Term> practices and introduced team members to 
                agile methodologies to improve project outcomes.</FocusItem>
            <FocusItem>Developed strong communication skills, effectively addressing diverse audiences from clients to
                internal stakeholders.</FocusItem>
            <FocusItem>Analyzed complex technical information to provide actionable recommendations, advising clients,
                management, and stakeholders.</FocusItem>
            <FocusItem>Designed scalable system architectures to support mission-critical applications, ensuring alignment
                with enterprise standards.</FocusItem>
            <FocusItem>Built and optimized <Term reference="azurereleasepipelines" value="Azure Release Pipelines">
                </Term>, automating <Term reference="pr" acronym="PR" value="Pull Request"></Term> verification, unit 
                testing, and ensuring reliable code integration.</FocusItem>
            <FocusItem>Led the migration of source code from <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> to <Term reference="azuredevops" value="Azure DevOps">
                </Term> <Term reference="git" value="Git"></Term> repositories, enhancing version control efficiency.
            </FocusItem>
            <FocusItem>Developed <Term reference="azuredevopsreleasepipelines" value="Azure DevOps Release Pipelines">
                </Term> to automate artifact deployment across environments, streamlining <Term reference="ci" 
                acronym="CI" value="Continuous Integration"></Term> workflows.</FocusItem>
            <FocusItem>Automated end-to-end testing with <Term reference="specflow" value="SpecFlow"></Term> and 
                <Term reference="selenium" value="Selenium"></Term> <Term reference="webdriver" value="WebDriver">
                </Term>, enhancing testing efficiency across development cycles.</FocusItem>
            <FocusItem>Defined and implemented the technology stack to ensure robust, scalable, and maintainable software
                solutions.</FocusItem>
            <FocusItem>Constructed system architecture prototypes, demonstrating adaptable, business-driven solutions.</FocusItem>
            <FocusItem>Translated complex requirements into actionable project milestones, facilitating high-quality,
                timely project delivery.</FocusItem>
            <FocusItem>Conducted thorough code reviews, upholding code integrity, quality, and adherence to best practices.
            </FocusItem>
            <FocusItem>Liaised with clients and key stakeholders to ensure project alignment, clear communication, and
                successful outcomes.</FocusItem>
            <FocusItem>Provided production support for web applications, addressing and resolving issues for stable
                operations.</FocusItem>
            <FocusItem>Collaborated with cross-functional teams, including TDSS divisions, external consultants, and
                corporate stakeholders, to drive cohesive project execution and foster innovation.</FocusItem>
            <FocusItem>Delivered expert counsel on systems development techniques and best practices, supporting both
                colleagues and clients.</FocusItem>
            <FocusItem>Provided technical feedback on business requirements, assessing feasibility, effort, and approach
                for effective solution delivery.</FocusItem>
            <FocusItem>Supported team performance evaluations, offering context on developer contributions to aid in
                comprehensive assessments.</FocusItem>
            <FocusItem>Proposed and implemented consolidated <Term reference="dotnet" value=".NET"></Term> solutions, 
                optimizing infrastructure for low-budget initiatives.</FocusItem>
            <FocusItem>Provided guidance on database architecture, including creating <Term reference="erd" acronym="ERDs" 
                value="Entity-Relationship Diagrams"></Term>.
            </FocusItem>
            <FocusItem>Proposed, justified, and implemented <Term reference="tfs" acronym="TFS" 
                value="Team Foundation Server"></Term> code management systems and build servers, enhancing project
                workflows and efficiency.</FocusItem>
        </FocusList>        
    </System>
</template>

<style scoped></style>