<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="Lims"
        name="LIMS"
        from="2003" 
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
            <FocusItem>Updated the database structure and stored procedures to align with the revised system design.</FocusItem>
            <FocusItem>Created a database schema conversion script for the <Term reference="sybase" value="Sybase"></Term>&nbsp;
                <Term reference="rdbms" acronym="RDBMS" value="Relational Database Management System"></Term>.</FocusItem>
            <FocusItem>Developed a <Term reference="vb6" acronym="VB6" value="Visual Basic 6"></Term> application to provide 
                a user-friendly interface for efficient data management.</FocusItem>
            <FocusItem>Integrated <Term reference="crystalreports" value="Crystal Reports"></Term> to facilitate dynamic 
                reporting and secure export of client information.
            </FocusItem>
            <FocusItem>Prepared and configured an <Term reference="installshield" value="InstallShield"></Term> <Term 
                reference="msi" acronym="MSI" value="Microsoft Installer"></Term> package for seamless desktop application 
                deployment.
            </FocusItem>
            <FocusItem>Maintained source code integrity by utilizing <Term reference="vss" acronym="VSS" 
                value="Visual SourceSafe"></Term> for version control, ensuring compliance with team protocols.</FocusItem>
            <FocusItem>Enhanced skills through code review sessions guided by a senior developer.</FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>