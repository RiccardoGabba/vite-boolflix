<template>
  <div class="col-4 text-center">
    <div class="box">
      <div class="box-inner">
        <div class="box-front">
          <img :src="image" />
        </div>
        <div class="box-back overflow-auto">

          <div class="my-2">
            <h4>Titolo</h4>
            <span>{{ title }}</span>
            <span>{{ name }}</span>
          </div>

          <h4>Titolo Originale</h4>
          <span>{{ original_title }}</span>
          <span>{{ original_name }}</span>
          
          <h5>Lingua</h5>
          <img :src="language" />
          
          <p >Voto: <span v-for="i in 5">
            <i v-if="i <= vote" class="fa-solid fa-star"></i>
            <i v-else class="fa-regular fa-star"></i>
        </span></p>
          <p><strong>Overview:</strong> {{ overview }}</p>
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
    overview: String,
    vote: Number,
    language: String,
    title: String,
    original_title: String,
    name: String,
    original_name: String,
    overview: String,
  },
  data() {
    

    return {
        
    };
  },
};
</script>



<style lang="scss" scoped>
container-immagine {
  width: 100%;
}

.box {
  background-color: transparent;
  perspective: 1000px;
}
.box-inner {
  position: relative;
  width: 85%;
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
  top: 0;
}

.box-back {
  background-color: #111111;
  color: #eeeeee;
  transform: rotateY(180deg);
}


i{
    color:yellow;
}
</style>
