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

<style>
.container-login,
.container-entrar {
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
  flex-direction: column;
}

.entrar div {
  margin-bottom: 40%;
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

.img-moeda {
  border-radius: 50%;
  width: 138px;
  height: 143px;
}

#cofre {
  font-family: "Basic";
  font-size: 56px;
}
</style>
