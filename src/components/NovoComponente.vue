<script>
export default {
  props: {
    titulo: {
      default: "A DEFINIR",
    },
    nomes: Array,
  },
};
</script>

<template>
  <article class="block">
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="(nome, i) of nomes" :key="i">
        {{ nome }}
      </li>
    </ul>
  </article>
</template>
