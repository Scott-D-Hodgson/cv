<script setup lang="ts">
import TermList from '../../layout/TermList.vue';
import Trainer from '../../layout/Trainer.vue';
</script>

<template>
    <Trainer id="LearningTree">
        <template v-slot:provider>Learning Tree</template>
        <template v-slot:range>2003 - 2024</template>
        <p>
            <strong>Certificates:</strong><br/>
            <TermList 
                separator="' | '"
                :terms="[
                    {
                        reference: 'LearningTreeCourseBlazor',
                        value: 'Blazor Course: Building Web Applications' 
                    },
                    { 
                        reference: 'LearningTreeCourseDocker',
                        value: 'Introduction to Docker Training' 
                    },
                    { 
                        reference: 'LearningTreeCourseReact',
                        value: 'Building Web Applications with React 16' 
                    },
                    { 
                        reference: 'LearningTreeCourseAspNetCore',
                        value: 'ASP.NET Learning CORE & CORE 7 for ASP.NET MVC Developers Training' 
                    },
                    {
                        reference: 'LearningTreeCourseAngular',
                        value: 'Introduction to Angular' 
                    },
                    { 
                        reference: 'LearningTreeCourseArchitecting',
                        value: 'Architecting Enterprise Applications' 
                    },
                    { 
                        reference: 'LearningTreeCourseWebServices',
                        value: '.NET Web Services: WCF, Web API, gRPC, and SignalR' 
                    },
                    { 
                        reference: 'LearningTreeCourseLinq',
                        value: 'Introduction to Language Integrated Query (LINQ)' 
                    },
                    { 
                        reference: 'LearningTreeCourseAssetiveCommunication',
                        value: 'Assertive Communication Skills Training' 
                    },
                    { 
                        reference: 'LearningTreeCourseAppleDevelopment',
                        value: 'iPhone and iPad Application Development Introduction' 
                    },
                    { 
                        reference: 'LearningTreeCourseJavaSpringHibernate',
                        value: 'Developing Modern Enterprise Java Applications Using Spring Training' 
                    },
                    { 
                        reference: 'LearningTreeCourseWebForms',
                        value: 'ASP.NET WebForms: A Comprehensive Hands-On Introduction' 
                    },
                    { 
                        reference: 'LearningTreeCourseSecuringWindows',
                        value: 'Securing Windows 2000: Hands-On' 
                    },
                    { 
                        reference: 'LearningTreeCourseIIS',
                        value: 'Hands-On Internet Information Services 5 for Windows 2000' 
                    }
                ]">
            </TermList>
        </p>
    </Trainer>
</template>

<style scoped></style>