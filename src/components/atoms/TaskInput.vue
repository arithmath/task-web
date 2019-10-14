<template>
  <input type="text" class="task-input" @keydown.enter="enter">
</template>

<script lang="ts">
export default {
  name: 'TaskInput',

  methods: {
    enter (ev) {
      this.$emit('enter', ev)
    }
  }
}
</script>

<style scoped>
.task-input {
  height: 28px;
  padding: 1px 1.0em;
  border-color: rgba(255,255,255,0);
  border-width: 1px;
  background-color: rgb(255, 255, 255, 0.75)
}
.task-input:focus {
  border-color: rgba(40,40,40,0.5);
  border-style: dashed;
  border-width: 1px;
  outline: 0
}
</style>
