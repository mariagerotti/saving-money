<script>
import MenuLateral from "@/components/MenuLateral.vue";
import CabecalhoBlock from "@/components/CabecalhoBlock.vue";

export default {
  components: { MenuLateral, CabecalhoBlock },
};
</script>
<template>
  <MenuLateral />
  <header id="header">Cabeçalho</header>
  <main id="content">Principal</main>
  <footer id="footer">Rodapé</footer>

  <CabecalhoBlock />

</template>
<style></style>
