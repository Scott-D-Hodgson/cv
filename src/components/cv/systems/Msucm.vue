<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import Term from '../../layout/Term.vue';
</script>

<template>
    <System 
        id="Msucm"
        name="MSUCM"
        from="2002" 
        to="Feb. 2010"
        :technologies="[
            { 
                reference: 'msaccess',
                acronym: 'MS Access', 
                value: 'Microsoft Access' 
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
                reference: 'windows',
                value: 'Windows' 
            }
        ]">
        <FocusList>
            <FocusItem>Accessed data from the original <Term reference="msaccess" acronym="MS Access" 
                value="Microsoft Access"></Term> database by bypassing password protection to ensure data continuity.
            </FocusItem>
            <FocusItem>Designed a normalized <Term reference="erm" acronym="ERM" value="Entity-Relationship Model">
                </Term> as the foundation for the replacement database structure.
            </FocusItem>
            <FocusItem>Implemented the new database schema within a <Term reference="sybase" value="Sybase"></Term>&nbsp;
                <Term reference="rdbms" acronym="RDBMS" value="Relational Database Management Software"></Term>.
            </FocusItem>
            <FocusItem>Developed a <Term reference="vb6" acronym="VB6" value="Visual Basic 6"></Term>
                application to create a user-friendly interface for streamlined data management.
            </FocusItem>
            <FocusItem>Engineered a data conversion process to extract and transform legacy data for integration into the
                new database structure.
            </FocusItem>
            <FocusItem>Integrated <Term reference="crystalreports" value="Crystal Reports"></Term>
                to enable dynamic reporting and secure export of client information.
            </FocusItem>
            <FocusItem>Prepared and configured an <Term reference="installshield" value="InstallShield"></Term>&nbsp;
                <Term reference="msi" acronym="MSI" value="Microsoft Installer"></Term> package for desktop application 
                deployment.
            </FocusItem>
            <FocusItem>Maintained source code integrity by utilizing <Term reference="vss" acronym="VSS" 
                value="Visual Source Safe"></Term> for version control, adhering to team protocols.
            </FocusItem>
            <FocusItem>Participated in departmental training and code review sessions under the guidance of a senior
                developer.
            </FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>