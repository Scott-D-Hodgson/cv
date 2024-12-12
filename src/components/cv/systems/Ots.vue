<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="Ots"
        name="OTS"
        from="2004" 
        to="Feb. 2010"
        :technologies="[
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
                reference: 'windows',
                value: 'Windows' 
            }
        ]">
        <FocusList>
            <FocusItem>Leveraged prior development experience to create a modular framework for streamlined reuse across
                applications.</FocusItem>
            <FocusItem>Designed database structure and stored procedures to support the modular framework's adaptable
                architecture.</FocusItem>
            <FocusItem>Developed a database schema conversion script to transition existing data into the new modular
                structure within the <Term reference="sybase" value="Sybase"></Term> <Term reference="rdbms" 
                acronym="RDBMS" value="Relational Database Management System"></Term>.</FocusItem>
            <FocusItem>Built a <Term reference="vb6" acronym="VB6" value="Visual Basic 6"></Term> application to offer a 
                user-friendly interface, optimizing data management efficiency.
            </FocusItem>
            <FocusItem>Configured and prepared an <Term reference="installshield" value="InstallShield"></Term> <Term 
                reference="msi" acronym="MSI" value="MicroSoft Installer"></Term> package for smooth desktop application
                deployment.</FocusItem>
            <FocusItem>Utilized <Term reference="vss" acronym="VSS" value="Visual SourceSafe"></Term> for source code 
                version control, ensuring adherence to team protocols for code integrity.
            </FocusItem>
            <FocusItem>Expanded expertise through innovation in reusable application design, focusing on modularity and
                shared elements.</FocusItem>
            <FocusItem>Awarded a bronze medal at the <Term reference="gtec" acronym="GTEC" 
                value="Government Technology Exhibition and Conference"></Term> conference for the Shared Development 
                Framework approach, showcasing modular application design.</FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>