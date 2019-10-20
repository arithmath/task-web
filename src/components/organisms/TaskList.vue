<template>
<div class="task-list">
  <TaskCard
    v-for="task in tasks"
    v-bind:key="task.id"
    type="task"
    :task="task"
    :addAction="addAction"
    :updateAction="updateAction"
    :deleteAction="deleteAction">
  </TaskCard>
  <TaskCard
    type="new"
    :addAction="addAction"
    :updateAction="updateAction"
    :deleteAction="deleteAction">
  </TaskCard>
</div>
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
.task-list {
  margin: 0px auto;
  padding: 10px;
  display: inline-block;
  background-color: rgba(208, 255, 128, 0.5);
}
</style>
