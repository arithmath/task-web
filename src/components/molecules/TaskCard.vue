<!--
TaskCard

[プロパティ]
type: 'new'か'task'
addAction: タスク追加の時に実行される処理
updateAction: タスク更新の時に実行される処理
deleteAction: タスク削除の時に実行される処理

-->
<template>
  <span class="task-card">
    <TaskInput
      @enter="enterInput"
      v-model="task.task"
    >
    </TaskInput>
    <TaskButton
      class="task-button"
      :type="taskButtonType"
      @click="clickButton"
      v-if="isTask">
    </TaskButton>
  </span>
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
      default: 'new' // "new"か"task"
    },
    task: {
      type: Object,
      default: () => {
        return {
          id: null,
          task: ''
        }
      }
    },
    addAction: {
      type: Function,
      default: (task) => {
        window.alert(JSON.stringify(task))
      }
    },
    updateAction: {
      type: Function,
      default: (task) => {
        window.alert(JSON.stringify(task))
      }
    },
    deleteAction: {
      type: Function,
      default: (task) => {
        window.alert(JSON.stringify(task))
      }
    }
  },

  computed: {
    taskButtonType () {
      return this.type === 'new' ? 'add' : 'delete'
    },
    isTask() {
      return this.type === 'task'
    }
  },

  methods: {
    clickButton (ev) {
      this.deleteAction(this.task)
    },
    enterInput (ev) {
      if (this.isTask) {
        this.updateAction(this.task)
      } else {
        this.addAction(this.task)
      }
    }
  }
}
</script>

<style scoped>
.task-card {
  padding: 0.5em 1em;
  margin: 5% 0;
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
