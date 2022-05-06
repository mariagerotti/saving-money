<script>
export default {};
</script>

<template>
  <section class="container-login">
    <div class="login">
      <div class="icon-user">
        <span class="material-symbols-outlined"> account_circle </span>
      </div>
      <input type="text" />
      <input type="text" />
    </div>
    <div class="entrar">Entrar</div>
  </section>
</template>

<style>
.container-login {
  min-width: 10%;
  height: 90%;
  padding: 20px;
  margin: 36px;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login,
.entrar {
  background: rgba(255, 255, 255, 0.28);
  margin: 10px;
  height: 500px;
  width: 350px;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login input {
  margin: 10px 20px;
  height: 35px;
  border: 0;
}

.icon-user {
  width: 50px;
  height: 50px;
}
</style>
