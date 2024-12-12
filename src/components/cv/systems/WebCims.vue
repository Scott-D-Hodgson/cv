<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="WebCims"
        name="WebCIMS"
        from="2005"
        to="Feb. 2010"
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
                reference: 'asp',
                acronym: 'ASP',
                value: 'Active Server Pages' 
            },
            { 
                reference: 'sybase',
                value: 'Sybase' 
            },
            { 
                reference: 'vb6',
                acronym: 'VB6', 
                value: 'Visual Basic 6' 
            },
            { 
                reference: 'crystalreports',
                value: 'Crystal Reports' 
            },
            { 
                reference: 'installshield',
                value: 'InstallShield' 
            },
            { 
                reference: 'vss',
                acronym: 'VSS', 
                value: 'Visual SourceSafe' 
            },
            { 
                reference: 'windowsserver',
                value: 'Windows Server 2000' 
            },
            { 
                reference: 'com+',
                acronym: 'COM+', 
                value: 'Component Services' 
            },
            { 
                reference: 'iis',
                acronym: 'IIS', 
                value: 'Internet Information Services' 
            }
        ]">
        <FocusList>
            <FocusItem>Utilized development tools and technology stack: <Term reference="vss" acronym="VSS"
                value="Visual SourceSafe"></Term> for version control, <Term reference="vb6" acronym="VB6"
                value="Visual Basic 6"></Term> for application development, and <Term reference="sybase" value="Sybase">
                </Term> for database management.</FocusItem>
            <FocusItem>Learned from senior developers on technology stack, development processes, and system
                functionalities.
            </FocusItem>
            <FocusItem>Provided technical assessments for business requirements, defining effort estimates and approach
                strategies.</FocusItem>
            <FocusItem>Prepared deliverables for production release, identifying and allocating necessary resources for
                successful deployment.</FocusItem>
            <FocusItem>Participated actively in the release process to ensure seamless transitions to production.</FocusItem>
            <FocusItem>Constructed system architecture prototypes to showcase dynamic software solutions that met specific
                business requirements.</FocusItem>
            <FocusItem>Supported both web and <Term reference="cots" acronym="COTS" value="Commercial Off-the-Shelf"></Term> 
                applications in production environments, ensuring system reliability and user satisfaction.</FocusItem>
            <FocusItem>Collaborated closely with clients to gather technical specifications, address issues, and align
                solutions with business goals.</FocusItem>
            <FocusItem>Partnered with cross-functional teams, including other <Term reference="simb" acronym="SIMB"
                value="Solutions Information Management Branch"></Term> divisions, external consultants, and
                stakeholders, for cohesive project execution.</FocusItem>
            <FocusItem>Provided expert advice on development methodologies, systems techniques, and industry best
                practices, ensuring high standards across projects.</FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>