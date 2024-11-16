<script setup lang="ts">
import Position from '../../layout/Position.vue';
import Term from '../../layout/Term.vue';
import FocusItem from '../../cv/FocusItem.vue';
</script>

<template>
    <Position title="Senior Programmer/Analyst" from="Dec. 2005" to="Feb. 2010" :organization="[
        { reference: 'goc', acronym: 'GoC', value: 'Government of Canada' },
        { reference: 'cic', acronym: 'CIC', value: 'Citizenship and Immigration Canada' },
        { reference: 'imtb', acronym: 'IMTB', value: 'Information Management and Technologies Branch' },
        { reference: 'corporatesystems', value: 'Corporate Systems' }
    ]">
        <ul>
            <FocusItem>Conceptualized and implemented a modular reporting system leveraging <Term 
                reference="crystalreports" value="Crystal Reports"></Term>, decoupling report processing from 
                applications, and delivering the <Term reference="s3-rs" acronym="S3-RS" 
                value="Shared System Services - Reporting Service"></Term> prototype.</FocusItem>
            <FocusItem>Authored complex <Term reference="sql" acronym="SQL" value="Structured Query Language">
                </Term> queries and database views within <Term reference="sybase" value="Sybase"></Term> to 
                analyze intricate relationships and provide accurate data for reporting requirements.</FocusItem>
            <FocusItem>Provided comprehensive support for the correspondence management system, <Term 
                reference="webcims" acronym="WebCIMS" value="Web Correspondence Information Management System">
                </Term>, utilized by the <Term reference="mo" acronym="MO" value="Minister's Office"></Term>,
                <Term reference="cmb" acronym="CMB" value="Case Management Branch"></Term>, and the <Term
                reference="msu" acronym="MSU" value="Medical Surveillance Unit"></Term>.
            </FocusItem>
            <FocusItem>Collaborated with the <Term reference="msu" acronym="MSU" 
                value="Medical Surveillance Unit"></Term> to analyze their business processes and develop <Term 
                reference="webcims" acronym="WebCIMS" value="Web Correspondence Information Management System">
                </Term> functionality to manage and integrate medical <Term reference="dicom" acronym="DICOM" 
                value="Digital Imaging and Communications in Medicine"></Term> image handling.</FocusItem>
            <FocusItem>Participated in change management processes, preparing technical solutions for deployment and
                configuration into production environments.</FocusItem>
            <FocusItem>Coordinated with infrastructure and database teams to successfully deploy solutions into
                production, providing updates to management on deployment progress and outcomes.</FocusItem>
            <FocusItem>Enhanced <Term reference="webcims" acronym="WebCIMS" 
                value="Web Correspondence Information Management System"></Term> functionality through <Term
                reference="aspnet" acronym="ASP.NET" value="Active Server Pages .NET"></Term> development, 
                augmenting the system to meet evolving business needs and incorporating new features.</FocusItem>
            <FocusItem>Recognized as a primary contact for development and support due to consistent reliability and
                effectiveness in resolving technical issues.</FocusItem>
            <FocusItem>Acted as a <Term reference="poc" acronym="PoC" value="Point-of-Contact"></Term> for clients, 
                collaborating on feature design, implementation, and production support to address business needs 
                effectively.</FocusItem>
            <FocusItem>Designed a modular database structure to support application development, enabling component
                reuse and earning the GTEC Bronze Award for innovation and efficiency.</FocusItem>
        </ul>
    </Position>
</template>

<style scoped></style>