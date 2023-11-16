<template>
  <main class="bg-secondary">
    <div>
      <Header />
    </div>

    <div class="container">
      <section id="movie">
        <h2>Film</h2>
        <div class="row flex-wrap">
            <Card 
              v-for="el in store.movieList"
              :original_title="el.original_title"
              :title="el.title"
              :data="el.release_data"
              :vote="el.vote_average"
              :image="store.imgUrl + el.poster_path"
            />
          
        </div>
      </section>

      <section id="tv">
        <div class="row">
          <div class="col-12">
            <h2>Serie</h2>
            <div>
              <card
                v-for="el in store.seriesList"
                :name="el.name"
                :original_name="el.original_name"
                :vote="el.vote"
                :image="store.imgUrl + el.poster_path"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import { store } from "./data/store";
import axios from "axios";
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
    
    },
};
</script>

<style lang="scss" scoped></style>
