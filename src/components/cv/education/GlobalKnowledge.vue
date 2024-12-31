<script setup lang="ts">
import CourseList from '../../layout/CourseList.vue';
import Trainer from '../../layout/Trainer.vue';

const courses = [
    { 
        reference: 'globalknowledgeado',
        value: 'Azure DevOps',
        date: '2020' 
    }
];
</script>

<template>
    <Trainer id="GlobalKnowledge">
        <template v-slot:provider>Global Knowledge</template>
        <p>
            <strong>Certificate:</strong>
            <CourseList 
                :courses="courses">
            </CourseList>
        </p>
    </Trainer>
</template>

<style scoped></style>