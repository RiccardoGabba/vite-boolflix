<template>
  <main>
    <div>
      <Header />
    </div>
    
    <section id="movie" v-for="el in store.printMovie">
      <div> {{ el.title }} </div>
     
    </section>
    <section id="tv">

    </section>
  </main>

</template>

<script>
import Header from "./components/Header.vue";
import { store } from "./data/store"
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  methods: {
    getMoviesAndSeries() {
      const movieurl = this.store.apiUrl + this.store.endPoint.movie;
      axios.get(movieurl, { params: this.store.params }).then((rest) => {
        console.log(rest.data.results);
        this.store.movieList = rest.data.results
      });
      const tvurl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(tvurl, { params: this.store.params }).then((rest) => {
        console.log(rest.data.results);
        this.store.seriesList = rest.data.results
      });
    },
  },

  created() {

  },

  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
