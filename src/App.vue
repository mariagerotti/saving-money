<script>
import MenuLateral from "@/components/MenuLateral.vue";
import CabecalhoBlock from "@/components/CabecalhoBlock.vue";
import RodapeBlock from "@/components/RodapeBlock.vue";
import BlocoPrincipal from "@/components/BlocoPrincipal.vue";

export default {
  components: { MenuLateral, CabecalhoBlock, RodapeBlock, BlocoPrincipal },
};
</script>
<template>
  <MenuLateral />
  <header id="header">Cabeçalho</header>
  <main id="content">Principal</main>
  <footer id="footer">Rodapé</footer>

  <CabecalhoBlock />
  <RodapeBlock/>
  <BlocoPrincipal/>

</template>
<style></style>
