<script>
import NovoComponente1 from "./NovoComponente.vue";
export default {
  components: { NovoComponente1 },
  data() {
    return {
      professores: ["Eduardo", "Marco", "Ivo"],
    };
  },
};
</script>

<template>
  <main id="content">
    <NovoComponente1 titulo="Alunos" :nomes="['Miguel', 'Ana']" />
    <NovoComponente1 titulo="Professores" :nomes="professores" />
    <NovoComponente1 class="alerta" />
    <NovoComponente1 class="alerta" />
    <NovoComponente1 class="alerta" />
    <NovoComponente1 class="alerta" />
  </main>
</template>
