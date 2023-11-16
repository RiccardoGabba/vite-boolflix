<template>
  <div class="col-4 text-center">
    <div class="container-immagine">
      <img :src="image" />
    </div>
    <h5>{{ title }}</h5>
    <h5>{{ original_title }}</h5>

    <h3>{{ original_name }}</h3>
    <h5>{{ name }}</h5>
    <img :src="language" />
    <h5>{{ vote }}</h5>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    //nomi film
    title: String,
    original_title: String,

    //nomi serie tv
    name: String,
    original_name: String,

    data: String,
    vote: String,
    image: String,
    language: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
container-immagine {
  width: 100%;
}
</style>
