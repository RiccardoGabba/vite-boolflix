<template>
  <main>
    <Header />
    <section id="movie">
      {{ movie.title }}
    </section>
    <section id="tv">
      {{ series.title }}
    </section>
  </main>

</template>

<script>
import Header from "./components/Header.vue";
import { store } from "./data/store"
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
      axios.get(url, { params: this.store.params }).then((rest) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results
      });
      const tvurl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(url, { params: this.store.params }).then((rest) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results
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
