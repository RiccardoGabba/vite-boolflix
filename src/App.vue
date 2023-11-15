<template>
  <main>
    <div>
      <Header />
    </div>

    <div class="container">
      <section id="movie">
        <div class="row">
          <div class="col-12">

            <div>
              <h2>Film</h2>
            </div>

            <div v-for="el in store.movieList">
              <card/>
            </div>
          </div>
        </div>
      </section>

      <section id="tv">
        <div class="row">
          <div class="col-12">
            <div>
              <h2>Serie</h2>
            </div>

            <div v-for="el in store.seriesList" class="">
              {{ el.name }}
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
import card from "./components/Card.vue";
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
      axios.get(movieurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results;
      });
      const tvurl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(tvurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results;
      });
    },
  },

  created() {
    this.getMoviesAndSeries();
  },

  components: {
    Header,
    card,
  },
};
</script>

<style lang="scss" scoped></style>
