<template>
  <main class="bg-secondary">
    <div>
      <Header />
    </div>

    <div class="container">
      <section id="movie">
        <h2 class="display-2">Film</h2>
        <div class="row flex-wrap">
                <Card class="mb-5"
                  v-for="el in store.movieList"  
                  :original_title="el.original_title"
                  :title="el.title"
                  :vote="Math.round(el.vote_average / 2)"
                  :language="
                    'https://flagsapi.com/' +
                    langUp(el.original_language) +
                    '/flat/32.png'"
                  :image="store.imgUrl + el.poster_path"
                  :overview="el.overview"
                />
              </div>
              <div class="box-back">
        </div>
      </section>

      <section id="tv">
        <h2 class="display-2">Serie</h2>
        <div class="row flex-wrap">
          <card class="mb-5"
            v-for="el in store.seriesList"
            :overview="el.overview"
            :name="el.name"
            :original_name="el.original_name"
            :vote="Math.round(el.vote_average /  2)"
            :image="store.imgUrl + el.poster_path"
            :language="
              'https://flagsapi.com/' +
              langUp(el.original_language) +
              '/flat/32.png'
            "
           
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import { store } from "./data/store";
import Card from "./components/Card.vue";
export default {
  name: "App",

  components: {
    Header,
    Card,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    langUp(val) {
      let langUpCase = val.toUpperCase();
      if (val === "en" || val === "uk") {
        return "GB";
      } else if (val === "ja") {
        return "JP";
      } else if (val === "ko") {
        return "KP";
      } else if (val === "hi") {
        return "IN";
      } else if (val === "zh") {
        return "CN";
      } else {
        return langUpCase;
      }
    },


  
     
       
    
    
  },
};
</script>

<style lang="scss" scoped>

</style>
