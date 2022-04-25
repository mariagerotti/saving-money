<script>
import MenuLateral from "@/components/MenuLateral.vue";
import CabecalhoBlock from "@/components/CabecalhoBlock.vue";
import RodapeBlock from "@/components/RodapeBlock.vue";
import BlocoPrincipal from "@/components/BlocoPrincipal.vue";

export default {
  components: { MenuLateral, CabecalhoBlock, RodapeBlock, BlocoPrincipal, },
};
</script>
<template>
  <MenuLateral />
  <CabecalhoBlock />
  <RodapeBlock/>
  <BlocoPrincipal/>
</template>
<style></style>
