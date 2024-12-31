<script setup lang="ts">
import CourseList from '../../layout/CourseList.vue';
import Trainer from '../../layout/Trainer.vue';

const courses = [
    { 
        reference: 'learningtreecourseawsdevelopment',
        value: 'Developing on <abbr title="Amazon Web Services">AWS</abbr>',
        date: '2024' 
    },
    {
        reference: 'learningtreecourseblazor',
        value: 'Blazor Course: Building Web Applications',
        date: '2023' 
    },
    { 
        reference: 'learningtreecoursedocker',
        value: 'Introduction to Docker Training',
        date: '2023' 
    },
    { 
        reference: 'learningtreecoursereact',
        value: 'Building Web Applications with React 16',
        date: '2023' 
    },
    { 
        reference: 'learningtreecourseaspnetcore',
        value: '<abbr title="Active Server Pages .NET">ASP.NET</abbr> Learning CORE & CORE 7 for <abbr title="Active Server Pages .NET\">ASP.NET</abbr> <abbr title="Model-View-Controller">MVC</abbr> Developers Training',
        date: '2019'
    },
    {
        reference: 'learningtreecourseangular',
        value: 'Introduction to Angular',
        date: '2016'
    },
    { 
        reference: 'learningtreecoursearchitecting',
        value: 'Architecting Enterprise Applications',
        date: '2015' 
    },
    { 
        reference: 'learningtreecourseassertivecommunication',
        value: 'Assertive Communication Skills',
        date: '2015'
    },
    { 
        reference: 'learningtreecourselinq',
        value: 'Introduction to Language Integrated Query (LINQ)',
        date: '2015' 
    },
    { 
        reference: 'learningtreecoursewebservices',
        value: '.NET Web Services: <abbr title="Windows Communication Foundation">WCF</abbr>, Web <abbr title="Application Programming Interface">API</abbr>, <abbr title="Remote Procedure Call">gRPC</abbr>, and SignalR',
        date: '2015' 
    },
    { 
        reference: 'learningtreecourseappledevelopment',
        value: 'iPhone and iPad Application Development Introduction',
        date: '2012' 
    },
    { 
        reference: 'learningtreecoursejavaspringhibernate',
        value: 'Developing Modern Enterprise Java Applications Using Spring Training',
        date: '2010' 
    },
    { 
        reference: 'learningtreecoursewebforms',
        value: 'ASP.NET WebForms: A Comprehensive Hands-On Introduction',
        date: '2010' 
    },
    { 
        reference: 'learningtreecourseiis',
        value: 'Hands-On Internet Information Services 5 for Windows 2000',
        date: '2003' 
    },
    { 
        reference: 'learningtreecoursesecuringwindows',
        value: 'Securing Windows 2000: Hands-On',
        date: '2003' 
    }
];
</script>

<template>
    <Trainer id="LearningTree">
        <template v-slot:provider>Learning Tree</template>
        <p>
            <strong>Certificates:</strong>
            <CourseList 
                :courses="courses">
            </CourseList>
        </p>
    </Trainer>
</template>

<style scoped></style>