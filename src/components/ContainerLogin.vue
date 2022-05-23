<script>
export default {};
</script>

<template>
  <section class="container-login">
    <div class="login">
      <div class="icon-user">
        <img src="../assets/img_550783.png" alt="" />
      </div>
      <label for="nome" id="usuario">Nome de Usuário:</label>
      <input type="text" />
      <label for="email">E-mail:</label>
      <input type="text" />
      <label for="nome">Senha:</label>
      <input type="text" />
      <div id="btn-cadastro"><button>Cadastrar</button></div>
    </div>
    <div class="container-entrar">
      <div class="entrar">
        <div id="img-moeda">
          <img
            width="105"
            height="115"
            src="../assets/9c1a0590528c68138bc08d9df0942f9d-icone-de-moeda-dolar.png"
            alt=""
          />
        </div>
        <p id="cofre">Meu Cofre</p>
        <div id="btn-cadastro">
          <button @click="$router.push('cofre')">Entrar</button>
        </div>
      </div>
    </div>
  </section>
</template>
