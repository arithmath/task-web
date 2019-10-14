<template>
  <button
    type="button"
    :disabled="disabled"
    :class="classes"
    @click="click">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'TaskButton',

  props: {
    type: {
      type: String,
      default: 'add'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    buttonText () {
      return this.type === 'add' ? '+' : '-'
    },
    classes () {
      return this.type === 'add' ? ["task-button", "add"] : ["task-button", "delete"]
    }
  },

  methods: {
    click (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
.task-button {
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 15px;
  border-width: 0;
  width: 30px;
  height: 30px;
}
.add {
  background-color: rgb(255, 192, 192)
}

.delete {
  background-color: rgb(192, 192, 192)
}

</style>
