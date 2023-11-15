<template>
   <div class="col-2 text-center">
    <img :src="image" alt=""> 
        <h5>{{ title }}</h5>
        <h5>{{ original_title }}</h5>
        <h5>{{ data }}</h5>
        <h5>{{ vote }}</h5>
   </div>
</template>

<script>
    export default {
        name:'card',
        props: {
            image: String,
            data: String,
            title: String,
            original_title: String,
            vote:  String,
        },
        data: {
            return: {

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>


<!-- 
Titolo
Titolo Originale
Lingua
Voto 
-->
