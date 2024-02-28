<template>
  <div :class="`modal${active ? ' active' : ''}`" @click="$emit('close')">
    <div @click.stop class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
defineProps<{ active: boolean }>()
defineEmits<{(event: 'close'): void}>()
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: .3s;
  user-select: none;
  pointer-events: none;
  &.active {
    opacity: 1;
    user-select: auto;
    pointer-events: auto;
  }

  &-content {
    max-width: 500px;
    background: #fff;
    border-radius: 4px;
    width: 100%;
  }
}
</style>
