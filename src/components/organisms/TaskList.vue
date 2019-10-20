<template>
<span>
  <span v-for="task in tasks" v-bind:key="task.id" class="task-list">
    <TaskCard
      type="task"
      :task="task"
      :addAction="addAction"
      :updateAction="updateAction"
      :deleteAction="deleteAction">
    </TaskCard>
  </span>
  <TaskCard
    type="new"
    :addAction="addAction"
    :updateAction="updateAction"
    :deleteAction="deleteAction">
  </TaskCard>
</span>
</template>

<script lang="ts">
import TaskCard from "../molecules/TaskCard.vue"

export default {
  name: 'TaskList',

  components: {
    TaskCard
  },

  props: {
    tasks: {
      type: Object,
      default: {}
    },
    addAction: {
      type: Function,
      default: (task) => {
        window.alert('[TaskList] ' + JSON.stringify(task))
      }
    },
    updateAction: {
      type: Function,
      default: (task) => {
        window.alert('[TaskList]' + JSON.stringify(task))
      }
    },
    deleteAction: {
      type: Function,
      default: (task) => {
        window.alert('[TaskList]' + JSON.stringify(task))
      }
    }
  },
}
</script>

<style scoped>
</style>
