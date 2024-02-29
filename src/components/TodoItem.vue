<script lang='ts' setup>
import { TodoT } from '@/assets/types'
import { ref, watch } from 'vue'
const props = defineProps<{ todo: TodoT, i: number }>()
const emit = defineEmits<{(event: 'delete', createdAt: number): void, (event: 'update', i: number, todo: TodoT): void }>()

const name = ref(props.todo.name)
const description = ref(props.todo.description)

watch(name, () => {
  emit('update', props.i, { ...props.todo, name: name.value })
})
watch(description, () => {
  emit('update', props.i, { ...props.todo, description: description.value })
})
</script>

<template>
 <div :class="`todo-item ${todo.type}${todo.checked ? ' done' : ''}`">
   <input type="text" class="name" v-model="name">
   <input v-if="todo.description" type="text" class="description" v-model="description">
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
  input {
    width: 100%;
    padding: 6px 10px;
    border: none;
    margin-bottom: 10px;
    outline: none;
    border-bottom: 1px solid transparent;
    transition: .3s;

    &:focus {
      border-bottom-color: #3A82EE;
    }
    &.name {
      font-size: 20px;
    }
    &.description {
      font-size: 16px;
    }
  }
  .actions {
    padding-top: 10px;
    display: flex;
    gap: 10px;
  }
}
</style>
