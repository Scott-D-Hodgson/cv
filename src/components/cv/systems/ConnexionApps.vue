<script setup lang="ts">
import FocusList from '../../layout/FocusList.vue';
import FocusItem from '../../layout/FocusItem.vue';
import System from '../../layout/System.vue';
import TermList from '../../layout/TermList.vue';
</script>

<template>
    <System
        id="ConnexionApps" 
        name="Connexion Apps"
        from="May 2017" 
        to="Apr. 2021"
        :technologies="[
            { 
                reference: 'html',
                acronym: 'HTML',
                value: 'HyperText Markup Language'
            }, 
            { 
                reference: 'css',
                acronym: 'CSS',
                value: 'Cascading Style Sheets' 
            }, 
            { 
                reference: 'js',
                acronym: 'JS',
                value: 'JavaScript'
            }, 
            { 
                reference: 'csharp',
                value: 'C#' 
            }, 
            {
                reference: 'wetboew',
                acronym: 'WET-BOEW',
                value: 'Web Experience Toolkit'
            }, 
            {
                reference: 'tfs',
                acronym: 'TFS',
                value: 'Team Foundation Server' 
            }, 
            {
                reference: 'vs',
                acronym: 'VS', 
                value: 'Visual Studio' 
            }, 
            {
                reference: 'webapi',
                acronym: 'Web API',
                value: 'Web Application Programming Interface' 
            }, 
            {
                reference: 'rest',
                acronym: 'REST', 
                value: 'Representational State Transfer'
            }
        ]">
        <FocusList>
            <FocusItem>
                Provided support for multiple interfaces: 
                <TermList
                    :terms="[
                        { 
                            reference: 'fi',
                            acronym: 'FI',
                            value: 'Francophone Initiative' 
                        }, 
                        { 
                            reference: 'finp',
                            acronym: 'FINP',
                            value: 'Federal Internship Program' 
                        }, 
                        { 
                            reference: 'yag',
                            acronym: 'YAG', 
                            value: 'Youth Advisory Group'
                        }, 
                        { 
                            reference: 'niem',
                            acronym: 'NIEM', 
                            value: 'Notice of International Event or Meeting'
                        }, 
                        {
                            reference: 'ccc',
                            acronym: 'CCC',
                            value: 'Crown Copyright Clearance' 
                        }
                    ]"
                    separator="', ''">
                </TermList>
            </FocusItem>
        </FocusList>
    </System>
</template>

<style scoped></style>