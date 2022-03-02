<template>
  <div>
    <InputText v-model="text" />
    <Button label="Greet" icon="pi pi-user" @click="greet"></Button>
    {{ text }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "PrimeVueeeeñ.ñ",
    };
  },
  methods: {
    greet() {
      console.log(this.text);
    },
  },
  mounted() {
    axios.get("https://rickandmortyapi.com/api/character").then(function (res) {
      console.log(res.data.results);
    });
  },
};
</script>
