<template>
  <div>
    <div v-if="!this.$store.getters.character">
      <h1>There's not character!!!</h1>
      <h1>You must select a character...</h1>
      <img src="../assets/img/rick-morty-.jpg" alt="" class="shadow-5" />
    </div>
    <div v-if="this.$store.getters.character" class="field grid">
      <div class="col-6 picture">
        <img :src="this.$store.getters.character.image" class="shadow-5" />
      </div>
      <div class="col-6 content">
        <div class="card">
          <h1>{{ this.$store.getters.character.name }}</h1>
          <p>
            <i class="pi pi-heart"></i> <strong>Status:</strong>
            {{ this.$store.getters.character.status }}
          </p>
          <p>
            <i class="pi pi-map-marker"></i> <strong>Location:</strong>
            {{ this.$store.getters.character.location.name }}
          </p>
          <p>
            <i class="pi pi-home"></i> <strong>Origin:</strong>
            {{ this.$store.getters.character.origin.name }}
          </p>
          <p>
            <i class="pi pi-user"></i> <strong>Species:</strong>
            {{ this.$store.getters.character.species }}
          </p>
          <p>
            <i class="pi pi-tag"></i> <strong>Gender:</strong>
            {{ this.$store.getters.character.gender }}
          </p>
          <p>
            <i class="pi pi-hashtag"></i> <strong>Episodes number:</strong>
            {{ this.$store.getters.character.episode.length }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/sass/character.css";

export default {
  data() {
    return {};
  },
  mounted() {
    if (!this.$store.getters.character && localStorage.getItem("character")) {
      this.$store.dispatch(
        "setCharacter",
        JSON.parse(localStorage.getItem("character"))
      );
    }
  },
};
</script>