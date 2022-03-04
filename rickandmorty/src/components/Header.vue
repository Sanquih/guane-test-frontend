<script setup>
import "../assets/sass/header.css";
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Character">Character</router-link>
    </nav>
    <router-view/>
  </div>
</template>