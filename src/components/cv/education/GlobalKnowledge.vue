<script setup lang="ts">
import TermList from '../../layout/TermList.vue';
import Trainer from '../../layout/Trainer.vue';
</script>

<template>
    <Trainer id="GlobalKnowledge">
        <template v-slot:provider>Global Knowledge</template>
        <template v-slot:range>2020</template>
        <p>
            <strong>Certificates:</strong><br/>
            <TermList 
                separator="' | '"
                :terms="[
                    {
                        reference: 'GlobalKnowledgeCourseAzureDevOps',
                        value: 'Azure DevOps' 
                    }
                ]">
            </TermList>
        </p>
    </Trainer>
</template>

<style scoped></style>