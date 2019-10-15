<template>
<div>
  <div v-for="task in tasks" class="task-list">
    <TaskCard type="task" value="task.task"></TaskCard>
  </div>
</div>
</template>

<script lang="ts">
import TaskCard from "../molecules/TaskCard.vue"

export default {
  name: 'TaskList',

  components: {
    TaskCard
  },

  computed: {
    tasks () {
      console.log(this)
      //console.log(this.$store.getters.tasks)
      return this.$store.getters.tasks
    }
  },

  methods: {
    addTask() {

    },
    updateTask() {

    },
    deleteTask() {

    },
  }
}
</script>

<style scoped>
</style>
