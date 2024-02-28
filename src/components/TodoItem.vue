<script lang='ts' setup>
import { TodoT } from '@/assets/types'
defineProps<{ todo: TodoT }>()
defineEmits<{(event: 'delete', createdAt: number): void, (event: 'update', todo: TodoT): void }>()

</script>

<template>
 <div class="todo-item">
   <label>
     <input type="checkbox" />
     <span :class="`bubble ${todo.type}`"></span>
   </label>
   <div class="todo-content">
     <input type="text" class="name">
     <input type="text" class="description">
   </div>
   <div class="actions">
     <button class="delete" @click="$emit('delete', todo.createdAt)">Delete</button>
   </div>
 </div>
</template>

<style lang="scss" scoped>
.todo-item {

}
</style>
