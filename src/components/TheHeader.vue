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

  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: .3s;
    &:hover, &.router-link-active  {
      color: #3A82EE
    }
  }
  nav {
    display: flex;
    gap: 20px;
  }
}
</style>
