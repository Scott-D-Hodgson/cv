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
            { reference: 'goc', acronym: 'GoC', value: 'Government of Canada' }, 
            { reference: 'cic', acronym: 'CIC', value: 'Citizenship and Immigration Canada' }, 
            { reference: 'imtb', acronym: 'IMTB', value: 'Information Management and Technologies Branch' }, 
            { reference: 'corporatesystems', value: 'Corporate Systems' }
        ]">
        <FocusList>
            <FocusItem>Participated in pair-programming sessions to work through development impediments.</FocusItem>
            <FocusItem>Provided technical assessment on business requirements, defining effort and approach.</FocusItem>
            <FocusItem>Prepared deliverables for release into production infrastructure, defining required resources for
                successful release.</FocusItem>
            <FocusItem>Collaborated with team leads, product owners, and business analysts to triage and prioritize
                workload for new development and bug resolution.</FocusItem>
            <FocusItem>Provided context of developer performance to team leads to assist in performance evaluations.</FocusItem>
            <FocusItem>Demonstrated key skills such as client service, adaptability, problem-solving, and teamwork.</FocusItem>
            <FocusItem>Was a sponge for learning, absorbing new concepts.</FocusItem>
            <FocusItem>Developed innovative tools to streamline systems development, improving process efficiency and
                reducing project timelines.</FocusItem>
            <FocusItem>Provided guidance on database <Term reference="erd" acronym="ERDs" 
                value="Entity-Relationship Diagrams"></Term>.</FocusItem>
        </FocusList>
    </Position>
</template>

<style scoped></style>