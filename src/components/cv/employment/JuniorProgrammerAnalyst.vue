<script setup lang="ts">
import Position from '../../layout/Position.vue';
</script>

<template>
    <Position 
        title="Junior Programmer/Analyst"
        from="Jan. 2002"
        to="Dec. 2005"
        :organization="[
            { reference: 'goc', acronym: 'GoC', value: 'Government of Canada' }, 
            { reference: 'cic', acronym: 'CIC', value: 'Citizenship and Immigration Canada' }, 
            { reference: 'imtb', acronym: 'IMTB', value: 'Information Management and Technologies Branch' }, 
            { reference: 'corporatesystems', value: 'Corporate Systems' }
        ]">
        <ul>
        </ul>
    </Position>
</template>

<style scoped></style>