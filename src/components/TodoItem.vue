<script lang='ts' setup>
import { TodoT } from '@/assets/types'
defineProps<{ todo: TodoT, i: number }>()
defineEmits<{(event: 'delete', createdAt: number): void, (event: 'update', i: number, todo: TodoT): void }>()

</script>

<template>
 <div :class="`todo-item ${todo.type}${todo.checked ? ' done' : ''}`">
   <h2>{{todo.name}}</h2>
   <p v-if="todo.description">{{todo.description}}</p>
   <div class="actions">
     <button class="delete" @click="$emit('delete', todo.createdAt)">Delete</button>
     <button class="done" @click="$emit('update', i, {...todo, checked: !todo.checked})">{{todo.checked ? 'Undone' : 'Done'}}</button>
   </div>
 </div>
</template>

<style lang="scss" scoped>
.todo-item {
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  border-left: 2px solid;
  padding: 0 20px;

  &.business {
    border-left-color: #3A82EE;
  }
  &.personal {
    border-left-color: #EA40A4;
  }
  &.done {
    opacity: 0.8;
  }
  h2 {
    font-size: 24px;
    padding-bottom: 10px;
  }
  p {
    padding-bottom: 10px;
  }
  .actions {
    padding-top: 10px;
    display: flex;
    gap: 10px;
  }
}
</style>
