<template>
  <div class="home">
    <h1>Tododo - is a place where you can organize your task</h1>
    <router-link to="/todo">Go to todos</router-link>
  </div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding: 80px 50px;

  @media (max-width: 540px) {
    padding: 80px 20px;
  }
  h1 {
    font-size: 46px;
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 40px;

    @media (max-width: 540px) {
      font-size: 26px;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    background: #EA40A4;
    border-radius: 4px;
  }
}
</style>
