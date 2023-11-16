<template>
  <div class="d-flex justify-content-between bg-black p-3">
    <div class="d-flex">
      <h1 class="text-danger display-2">Netflix</h1>
      <span>più o meno</span>
    </div>

    <nav class="navbar navbar-light">
      
        <div>
          <input v-model=" store.params.query"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="getMoviesAndSeries()">
            Search
          </button>
        </div>
      
    </nav>
  </div>
</template>

<script>
import {store} from '../data/store'
import axios from 'axios'
export default {
  name: "Header",
  methods: {
    getMoviesAndSeries() {
      const movieurl = this.store.apiUrl + this.store.endPoint.movie;
      axios.get(movieurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results;
      });
      const tvurl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(tvurl, { params: this.store.params }).then((res) => {
        this.store.seriesList = res.data.results;
      });
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
