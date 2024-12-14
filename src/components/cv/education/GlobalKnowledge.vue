<script setup lang="ts">
import Term from '../../layout/Term.vue';
import Trainer from '../../layout/Trainer.vue';
</script>

<template>
    <Trainer id="GlobalKnowledge">
        <template v-slot:provider>Global Knowledge</template>
        <template v-slot:range>2020</template>
        <p>
            <strong>Certificate:</strong>&nbsp;
            <Term reference="globalknowledgecourseado" acronym="ADO" value="Azure DevOps"></Term>
        </p>
    </Trainer>
</template>

<style scoped></style>