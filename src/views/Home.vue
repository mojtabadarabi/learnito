<template>
    <div class="">
        <Courses :courses="courses"/>
    </div>
</template>

<script lang="ts">
import Courses from '../components/Courses/index.vue'
export default {
    name:"Home",
    components: {
        Courses
    },
    data(){
        return {
            courses:[
                {
                    title:'react ',
                    description:'react is awesome ',
                    price:210,
                    isFavorite:false
                },
                {
                    title:'vuejs ',
                    description:'let me teach vuejs',
                    price:450,
                    isFavorite:false
                },
                {
                    title:'angular',
                    description:'hard but powerfull',
                    price:740,
                    isFavorite:false
                },
            ]
        }
    }
}
</script>