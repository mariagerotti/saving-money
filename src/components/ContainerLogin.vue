<script>
export default {};
</script>

<template>
  <section class="container-login">
    <div class="login">
      <div class="icon-user">
        <span class="material-symbols-outlined" width="105px" height="115px">
          account_circle
        </span>
      </div>
      <label for="nome">Nome de Usuário:</label>
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
            src="../assets/9c1a0590528c68138bc08d9df0942f9d-icone-de-moeda-dolar.png"
            alt=""
            width="105px"
            height="115px"
          />
        </div>
        <p id="cofre">Meu Cofre</p>
        <div id="btn-cadastro"><button>Entrar</button></div>
      </div>
    </div>
  </section>
</template>

