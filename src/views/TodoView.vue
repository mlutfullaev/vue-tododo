<script lang="ts" setup>
import TodoCreate from '@/components/TodoCreate.vue'
import { ref, watch } from 'vue'
import { TodoT, TodoCreateT } from '@/assets/types'
import TodoItem from '@/components/TodoItem.vue'
import BaseModal from '@/components/BaseModal.vue'

const LS = localStorage.getItem('todos')
const todos = ref<TodoT[]>(LS ? JSON.parse(LS) : [])
const modal = ref(false)
const createTodo = (todo: TodoCreateT) => {
  const todoItem = {
    ...todo,
    createdAt: new Date().getTime(),
    checked: false
  }
  todos.value = [...todos.value, todoItem]
}

const deleteTodo = (createdAt: number) => {
  todos.value = todos.value.filter(todo => todo.createdAt !== createdAt)
}

watch(todos, () => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
})
const updateTodo = (i: number, todo: TodoT) => {
  todos.value[i] = todo
  localStorage.setItem('todos', JSON.stringify(todos.value))
}
</script>

<template>
  <base-modal :active="modal" @close="modal = false">
    <todo-create @close="modal = false" @create="createTodo"/>
  </base-modal>
  <div class='todo'>
    <h1>Todos</h1>
    <button class="create-btn" @click="modal = true">Create Todo</button>
    <p class="not-found" v-if="!todos.length">There is no todo yet</p>
    <div class="items">
      <todo-item
        v-for="(todo, i) in todos"
        @update="updateTodo"
        @delete="deleteTodo"
        :key="todo.createdAt"
        :i="i"
        :todo="todo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  position: relative;
  padding: 50px;

  @media (max-width: 540px) {
    padding: 50px 20px;
  }
  h1 {
    font-size: 46px;
    text-align: center;
    padding-bottom: 20px;
  }
  .not-found {
    font-size: 20px;
    text-align: center;
  }
  .create-btn {
    position: absolute;
    right: 50px;
    top: 50px;

    @media (max-width: 540px) {
      top: 0;
      right: 20px;
    }
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

</style>
