<script setup lang="ts">
import System from '../../layout/System2.vue';
import Term from '../../layout/Term.vue';
import { ref } from 'vue';

const from = ref<Date>(new Date("2005-01-01T00:00:00.000-05:00"));
const to = ref<Date>(new Date("2010-02-01T00:00:00.000-05:00"));
const fromOptions: { year: 'numeric' } = { 
    year: 'numeric'
};
const toOptions: { month: 'short', year: 'numeric' } = { 
    month: 'short', 
    year: 'numeric'
};
</script>

<template>
    <System 
        id="WebCims"
        name="WebCIMS"
        :from="from.toLocaleDateString('en-CA', fromOptions)"
        :to="to.toLocaleDateString('en-CA', toOptions)"
        :technologies="[
            { 
                reference: 'dotnetframework', 
                value: '.NET Framework', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'aspnet', 
                acronym: 'ASP.NET', 
                value: 'Active Server Pages .NET', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            {
                reference: 'complus',
                acronym: 'COM+',
                value: 'Component Services',
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'chrome',
                value: 'Chrome',
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'crystalreports', 
                value: 'Crystal Reports', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'css', 
                acronym: 'CSS', 
                value: 'Cascading Style Sheets', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'html', 
                acronym: 'HTML', 
                value: 'HyperText Markup Language', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'ie', 
                acronym: 'IE',
                value: 'Internet Explorer', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'iis', 
                acronym: 'IIS', 
                value: 'Internet Information Services', 
                focus: ['infrastructure'],
                from: from,
                to: to
            },
            { 
                reference: 'jquery', 
                value: 'jQuery', 
                focus: ['front-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'js', 
                acronym: 'JS', 
                value: 'JavaScript', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to
            },
            {
                reference: 'oop',
                acronym: 'OOP',
                value: 'Object-Oriented Programming',
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to
            },
            { 
                reference: 'sql', 
                acronym: 'SQL', 
                value: 'Structured Query Language', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'sybase', 
                value: 'Sybase', 
                focus: ['back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vb6', 
                acronym: 'VB6',
                value: 'Visual Basic 6', 
                focus: ['front-end', 'back-end', 'full-stack'],
                from: from,
                to: to 
            },
            { 
                reference: 'vss', 
                acronym: 'VSS', 
                value: 'Visual SourceSage', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
            { 
                reference: 'windowsserver', 
                value: 'Windows Server', 
                focus: ['infrastructure'],
                from: from,
                to: to 
            },
        ]">
        <template v-slot:description>
            <p>
                The <Term reference="webcims" acronym="WebCIMS" value="Web Correspondence Information Management System">
                </Term> was a third-party vendor <Term reference="cots" acronym="COTS" value="Commercial off-the-shelf">
                </Term> solution deployed in the department for managing correspondence in the <Term reference="mo" 
                acronym="MO" value="Minister's Office"></Term> and within the <Term reference="cmb" acronym="CMB" 
                value="Case Management Branch"></Term>.  A subsequent additional instance was deployed to provide the 
                <Term reference="msu" acronym="MSU" value="Medical Surveillance Unit"></Term> a platform for managing 
                the <Term reference="dicom" acronym="DICOM" value="Digital Imaging and Communications in Medicine">
                </Term> files associated with client medical screenings.
            </p>
        </template>
        <template v-slot:initiative>
            <p>
                Support and integrate expanded system reporting capabilities into the vendor product.
            </p>
        </template>
        <template v-slot:accomplishments>
            <ul>
                <li>Decoupled reporting from the vendor product, as well as added flexibility to support other systems, 
                    into a separately hosted service called the <Term reference="s3rs" acronym="S3-RS" 
                    value="Shared System Service Reporting Service"></Term>.</li>
            </ul>
        </template>
    </System>
</template>

<style scoped></style>        