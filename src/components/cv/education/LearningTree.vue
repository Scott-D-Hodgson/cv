<script setup lang="ts">
import TermList from '../../layout/TermList.vue';
import Trainer from '../../layout/Trainer.vue';
</script>

<template>
    <Trainer id="LearningTree">
        <template v-slot:provider>Learning Tree</template>
        <template v-slot:range>2003 - 2024</template>
        <p>
            <strong>Certificates (by subject matter):</strong>&nbsp;
            <TermList 
                separator="', '"
                :terms="[
                    {
                        reference: 'learningtreecourseangular',
                        value: 'Angular' 
                    },
                    { 
                        reference: 'learningtreecoursearchitecting',
                        value: 'Architecting Enterprise Applications' 
                    },
                    { 
                        reference: 'learningtreecourseaspnetcore',
                        acronym: 'ASP.NET CORE',
                        value: 'Active Server Pages .NET CORE'
                    },
                    { 
                        reference: 'learningtreecourseaspnetcore',
                        acronym: 'ASP.NET MVC',
                        value: 'Active Server Pages .NET Model-View-Controller' 
                    },
                    { 
                        reference: 'learningtreecoursewebforms',
                        acronym: 'ASP.NET WebForms',
                        value: 'Active Server Pages .NET WebForms' 
                    },
                    { 
                        reference: 'learningtreecourseassetivecommunication',
                        value: 'Assertive Communication Skills' 
                    },
                    { 
                        reference: 'learningtreecourseawsdevelopment',
                        acronym: 'AWS Development',
                        value: 'Amazon Web Services Development' 
                    },
                    {
                        reference: 'learningtreecourseblazor',
                        value: 'Blazor' 
                    },
                    { 
                        reference: 'learningtreecoursedocker',
                        value: 'Docker' 
                    },
                    { 
                        reference: 'learningtreecoursewebservices',
                        acronym: 'gRPC',
                        value: 'Remote Procedure Call' 
                    },
                    { 
                        reference: 'learningtreecourseiis',
                        acronym: 'IIS',
                        value: 'Internet Information Services' 
                    },
                    { 
                        reference: 'learningtreecourseappledevelopment',
                        value: 'iPhone/iPad Development' 
                    },
                    { 
                        reference: 'learningtreecoursejavaspringhibernate',
                        value: 'Java Spring/Hibernate' 
                    },
                    { 
                        reference: 'learningtreecourselinq',
                        acronym: 'LINQ',
                        value: 'Language Integrated Query' 
                    },
                    { 
                        reference: 'learningtreecoursereact',
                        value: 'React' 
                    },
                    { 
                        reference: 'learningtreecoursesecuringwindows',
                        value: 'Securing Windows Server' 
                    },
                    { 
                        reference: 'LearningTreeCourseWebServices',
                        value: 'SignalR' 
                    },
                    { 
                        reference: 'LearningTreeCourseWebServices',
                        acronym: 'WCF',
                        value: 'Windows Communication Foundation' 
                    },
                    { 
                        reference: 'LearningTreeCourseWebServices',
                        acronym: 'Web API',
                        value: 'Web Application Programming Interface' 
                    }
                ]">
            </TermList>
        </p>
    </Trainer>
</template>

<style scoped></style>