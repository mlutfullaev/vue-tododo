<template>
  <header>
    <RouterLink to="/">Tododo</RouterLink>
    <nav>
      <RouterLink to="/">Main</RouterLink>
      <RouterLink to="/todo">Todos</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: 30px 50px;
  justify-content: space-between;

  @media (max-width: 540px) {
    padding: 20px 30px;
  }
  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: .3s;
    &:hover {
      color: #3A82EE
    }

    @media (max-width: 540px) {
      font-size: 16px;
    }
  }
  nav {
    display: flex;
    gap: 20px;

    .router-link-active {
      color: #3A82EE
    }
  }
}
</style>
