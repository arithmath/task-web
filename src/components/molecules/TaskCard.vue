<template>
  <div class="task-card">
    <TaskInput @enter="enterInput"></TaskInput>
    <TaskButton
      class="task-button"
      :type="taskButtonType"
      @click="clickButton"
      v-if="isTask">
    </TaskButton>
  </div>
</template>

<script lang="ts">
// import TaskButton from '@/components/atoms/TaskButton.vue'
// import TaskInput from '@/components/atoms/TaskInput.vue'
import TaskButton from '../atoms/TaskButton.vue'
import TaskInput from '../atoms/TaskInput.vue'

export default {
  name: "TaskCard",

  // TaskButtonとTaskInputを使用する
  components: {
    TaskButton,
    TaskInput
  },

  props: {
    type: {
      type: String,
      default: "new" // "new"か"task"
    },
    addAction: {
      type: Function,
      default: () => {window.alert("add")}
    },
    deleteAction: {
      type: Function,
      default: () => {window.alert("delete")}
    }
  },

  computed: {
    taskButtonType () {
      return this.type === 'new' ? "add" : "delete"
    },
    isTask() {
      return this.type === 'task'
    }
  },

  methods: {
    clickButton (ev) {
      this.deleteAction()
    },
    enterInput (ev) {
      this.addAction()
    }
  }
}
</script>

<style scoped>
.task-card {
  padding: 0.5em 1em;
  border-radius: 3px;
  border-width: 0;
  width: 300px;
  height: 50px;
  background-color: rgb(192, 255, 128);

  /* 上下中央揃え */
  display: flex;
  align-items: center;
}
.task-input {
  width: 80%;
  margin: 0 auto 0 0
}
.task-button {
  margin: 0 0 0 auto
}
</style>
