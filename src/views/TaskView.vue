<template>
<div>
  <div>
    <h2>タスク一覧</h2>
  </div>
  <hr>
  <div>
    <taskList
      class="task-list"
      :tasks="tasks"
      :addAction="addAction"
      :updateAction="updateAction"
      :deleteAction="deleteAction">
    </TaskList>
  </div>
</div>
</template>

<script lang="ts">
import TaskList from "../components/organisms/TaskList.vue"

export default {
  name: 'TaskView',

  components: {
    TaskList
  },

  computed: {
    tasks() {
      console.log('TaskView.computed.tasks')
      return this.$store.getters.tasks2
    }
  },

  methods: {
    addAction(task) {
      task.id = Math.floor((new Date()).getTime() / 1000)
      console.log('[TaskView] addAction task = ' + JSON.stringify(task))
      this.$store.dispatch('addTask', task)
    },
    updateAction(task) {
      console.log('[TaskView] update task = ' + JSON.stringify(task))
      this.$store.dispatch('updateTask', task)
    },
    deleteAction(task) {
      console.log('[TaskView] delete task = ' + JSON.stringify(task))
      this.$store.dispatch('deleteTask', task)
    }
    // window:onload = function() {
    //   console.log('[TaskView] onload')
    // },
  },
  mounted: function() {
    this.$nextTick(() => {
      console.log('[TaskView] mounted')
      console.log(this)
      this.$store.dispatch('fetchTaskList')
    })
  }
}
</script>

<style scoped>
.task-list {
  margin: 0 auto;
}
</style>
