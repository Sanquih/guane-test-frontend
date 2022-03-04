<template>
  <div>
    <div class="image-gallery field grid" v-for="m in 2" :key="m">
      <div class="cursor-pointer col-2" v-for="n in 5" :key="n">
        <Card class="shadow-5 transition-duration-400 hover:surface-300"
          v-if="characters[first * 10 + 5 * (m - 1) + n - 1]"
          @click="selectCharacter(first * 10 + 5 * (m - 1) + n - 1)"
        >
          <template #header>
            <img
              v-if="characters[first * 10 + 5 * (m - 1) + n - 1]"
              :src="characters[first * 10 + 5 * (m - 1) + n - 1].image"
            />
          </template>
          <template #title>
            {{ characters[first * 10 + 5 * (m - 1) + n - 1].name }}</template
          >
          <template #subtitle>
            {{ characters[first * 10 + 5 * (m - 1) + n - 1].status }}</template
          >
          <template #content>
            <p>
              {{ characters[first * 10 + 5 * (m - 1) + n - 1].location.name }}
            </p>
          </template>
        </Card>
      </div>
    </div>

    <Paginator      
      v-model:first="first"
      :rows="1"
      :totalRecords="totalRecords"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    >
    </Paginator>
    
  </div>
</template>

<script>
import axios from "axios";
import "../assets/sass/home.css";

export default {
  data() {
    return {
      characters: [],
      first: 0,
      totalRecords: 2,
    };
  },
  methods: {
    selectCharacter(index) {
      this.$store.dispatch("setCharacter", this.characters[index]);
      localStorage.setItem("character", JSON.stringify(this.characters[index]));
      this.$router.push("Character");
    },
  },
  mounted() {
    let vue = this;
    axios.get("https://rickandmortyapi.com/api/character").then(function (res) {
      vue.characters = res.data.results;
    });
  },
};
</script>