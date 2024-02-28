<script lang="ts" setup>
import TodoCreate from '@/components/TodoCreate.vue'
import { ref } from 'vue'
import { TodoT, TodoCreateT } from '@/assets/types'
import TodoItem from '@/components/TodoItem.vue'
import BaseModal from '@/components/BaseModal.vue'

const todos = ref<TodoT[]>([])
const modal = ref(true)
const createTodo = (todo: TodoCreateT) => {
  const todoItem = {
    ...todo,
    createdAt: new Date().getTime(),
    checked: false
  }
  todos.value = [...todos.value, todoItem]

  localStorage.setItem('todos', JSON.stringify(todos.value))
}

const deleteTodo = (createdAt: number) => {
  todos.value = todos.value.filter(todo => todo.createdAt !== createdAt)
}

const updateTodo = (todo: TodoT) => {
  console.log(todo)
}
</script>

<template>
 <div class='todo'>
   <base-modal :active="modal" @close="modal = false">
     <todo-create @create="createTodo"/>
   </base-modal>
   <todo-item v-for="todo in todos" @update="updateTodo" @delete="deleteTodo" :key="todo.createdAt" :todo="todo"/>
 </div>
</template>

<style lang="scss">
input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #3A82EE;
  box-shadow: 0 0 4px rgba(58, 130, 238, 0.75);

  &.personal {
    border-color: #EA40A4;
    box-shadow: 0 0 4px rgba(234, 64, 164, 0.75);

    &::after {
      background-color: #EA40A4;
      box-shadow: 0 0 4px rgba(234, 64, 164, 0.75);
    }
  }
  &::after {
    content: "";
    display: block;
    opacity: 0;
    width: 0;
    height: 0;
    background-color: #3A82EE;
    box-shadow: 0 0 4px rgba(58, 130, 238, 0.75);
    border-radius: 50%;
    transition: 0.2s ease-in-out;
  }
}

input:checked ~ label .bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}

</style>
