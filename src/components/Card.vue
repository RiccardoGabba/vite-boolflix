<template>
   <div class="col-4 text-center">
    <img :src="image" alt=""> 
        <h5>{{ title }}</h5>
        <h5>{{ original_title }}</h5>
        <h5>{{ data }}</h5>
        <h5>{{ vote }}</h5>

        <h3>{{ original_name }}</h3>
        <h5>{{ name }}</h5>
   </div>
</template>

<script>
    export default {
        name:'Card',
        props: {
            data: String,
            title: String,
            original_title: String,
            vote: String,
            image: String,

            name: String,
            original_name: String,
            

        },
        data () {
            return {

            }
        },
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    
    }
</style>



