<script setup lang="ts">
import Position from '../../layout/Position.vue';
import Term from '../../layout/Term.vue';
import FocusItem from '../../layout/FocusItem.vue';
import FocusList from '../../layout/FocusList.vue';
</script>

<template>
    <Position 
        id="JuniorProgrammerAnalyst"
        title="Junior Programmer/Analyst"
        from="Jan. 2002"
        to="Dec. 2005"
        :organization="[
            { 
                reference: 'goc', 
                acronym: 'GoC', 
                value: 'Government of Canada' 
            }, 
            { 
                reference: 'cic', 
                acronym: 'CIC', 
                value: 'Citizenship and Immigration Canada' 
            }, 
            { 
                reference: 'imtb', 
                acronym: 'IMTB', 
                value: 'Information Management and Technologies Branch' 
            }, 
            { 
                reference: 'corporatesystems', 
                value: 'Corporate Systems' 
            }
        ]">
        <FocusList>
            <FocusItem 
                :focus="[
                    'mentoring'
                ]">
                Participated in pair-programming sessions to work through development impediments.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Provided technical assessment on business requirements, defining effort and approach.
            </FocusItem>
            <FocusItem>Prepared deliverables for release into production infrastructure, defining required resources for
                successful release.</FocusItem>
                <FocusItem 
                :focus="[
                    'cross-functional'
                ]">
                Collaborated with <Term reference="tl" acronym="TLs" value="Team Leads"></Term>, <Term reference="po" 
                value="Product Owners"></Term>, and <Term reference="ba" acronym="BAs" value="Business Analysts"></Term> 
                to triage and prioritize workload for new development and bug resolution.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'development',
                ]">
                Implemented technical solutions effectively, with both quality and stability, providing value to clients 
                and the department.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional',
                ]">
                Prepared deliverables for release into production infrastructure, defining required resources for
                successful release.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'cross-functional',
                ]">
                Demonstrated key skills such as client service, adaptability, problem-solving, and teamwork.
            </FocusItem>
            <FocusItem 
                :focus="[
                    'development',
                ]">
                Developed innovative tools to streamline systems development, improving process efficiency and
                reducing project timelines.
            </FocusItem>
        </FocusList>
    </Position>
</template>

<style scoped></style>