<script setup lang='ts'>
import { ref } from 'vue'
import { TodoCreateT } from '@/assets/types'
const emit = defineEmits<{(event: 'create', todo: TodoCreateT): void}>()

const name = ref('')
const description = ref('')
const type = ref<'business' | 'personal' | ''>('')
const error = ref(false)

const create = () => {
  if (!type.value || !description.value || !name.value) {
    error.value = true
    return
  }

  emit('create', {
    name: name.value,
    description: description.value,
    type: type.value
  })
}
</script>

<template>
  <div class="todo-create">
    <h1>Create Todo</h1>
    <input type="text" v-model="name" placeholder="Name">
    <p v-if="error && !name">*You should write a name</p>
    <textarea v-model="description" placeholder="Description" name="" id="" rows="4"></textarea>
    <p v-if="error && !description">*You should write a description</p>
    <div class="options">
      <div class="option">
        <input
          type="radio"
          name="category"
          value="business"
          id="business"
          v-model="type"/>
        <label for="business">
          <span class="bubble business"></span>
          <span>business</span>
        </label>
      </div>
      <div class="option">
        <input
          type="radio"
          name="category"
          value="personal"
          id="personal"
          v-model="type"/>
        <label for="personal">
          <span class="bubble personal"></span>
          <span>personal</span>
        </label>
      </div>
    </div>
    <p v-if="error && !type">*You should choose one option</p>
    <button @click="create">
      Create
      <img src="@/assets/plus.svg" alt="plus">
    </button>
  </div>
</template>

<style scoped lang="scss">
.todo-create {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 36px;
    padding-bottom: 30px;
  }
  input, textarea {
    font-family: Arial, sans-serif;
    font-size: 16px;
    margin: 0 auto 20px;
    width: 100%;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    resize: none;
    box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.15);

    &:focus {
      outline: #ccc 1px solid;
    }
  }
  .options {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;

    label {
      cursor: pointer;
      display: flex;
      gap: 10px;
    }
  }
  button {
    background: #3A82EE;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    img {
      width: 18px;
      height: auto;
    }
  }
  p {
    color: #af2121;
    padding-bottom: 20px;
    text-align: left;
    width: 100%
  }
}
</style>
