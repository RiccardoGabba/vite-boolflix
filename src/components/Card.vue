<template>
  <div class="col-4 text-center">
    <div class="box">
      <div class="box-inner">
        <div class="box-front">
          <img :src="image" />
        </div>
        <div class="box-back">
          <h5>{{ title }}</h5>
          <h5>{{ original_title }}</h5>
          <h3>{{ original_name }}</h3>
          <h5>{{ name }}</h5>
          <img :src="language" />
          <h5>{{ vote }}</h5>
        </div>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: String,
    //descrizione
    overview: String,
    vote: String,
    language: String,
    //nomi film
    title: String,
    original_title: String,
    //nomi serie tv
    name: String,
    original_name: String,
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

.box {
  background-color: transparent;

  border: 1px solid #eeeeee;
  perspective: 1000px;
}
.box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.box:hover .box-inner {
  transform: rotateY(180deg);
}

.box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.box-front {
  background-color: #cccccc;
  color: #111111;
}
.box-back {
  background-color: #8ebf42;
  color: #eeeeee;
  transform: rotateY(180deg);
}
</style>
