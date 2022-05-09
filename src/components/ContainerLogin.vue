<script>
export default {};
</script>

<template>
  <section class="container-login">
    <div class="login">
      <div class="icon-user">
        <span class="material-symbols-outlined"> account_circle </span>
      </div>
      <label for="nome">Nome de Usuário:</label>
      <input type="text" />
      <label for="email">E-mail:</label>
      <input type="text" />
      <label for="nome">Senha:</label>
      <input type="text" />
      <div id="btn-cadastro"><button>Cadastrar</button></div>
    </div>
    <div class="entrar">Entrar</div>
  </section>

  <section></section>
</template>

<style>
.container-login {
  min-width: 10%;
  height: 90%;
  padding: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btn-cadastro button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 7px;
  width: 250px;
  background: #708e79;
}

.login,
.entrar {
  background: rgba(255, 255, 255, 0.28);
  margin: 10px;
  height: 500px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login input {
  margin: 10px 20px;
  height: 35px;
  width: 300px;
  border: 0;
}

.icon-user {
  width: 50px;
  height: 50px;
}
</style>
