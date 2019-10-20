<!--
TaskInput

[プロパティ]
無し

[発行イベント]
enter: Enterキーが押された時
input: 値が入力された
-->
<template>
  <!--
  双方向バインディングはv-modelの代わりに
  v-bindとv-on:input(@input)を使う。
  詳細: https://jp.vuejs.org/v2/guide/components.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7-v-model-%E3%82%92%E4%BD%BF%E3%81%86
 -->
  <input
    type="text"
    class="task-input"
    v-bind:value="value"
    @input="input"
    @keyup="keyup"
    @keydown="keydown">
</template>

<script lang="ts">
export default {
  name: 'TaskInput',

  data() {
    return {
      $_TaskInput_prevKeyDown: 0
    }
  },

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  methods: {
    // 日本語変換でenterを押した場合も入力完了扱いにしないように、
    // keydownとkeyupの両方で13(エンターキー)だった場合のみ、
    // 親コンポーネントにイベントを通知する
    keydown(event) {
      console.log('keydown. event.which = '  + event.which)
      this.$_TaskInput_prevKeyDown = event.which
    },
    keyup(event) {
      console.log('keyup. prevKey = ' + this.$_TaskInput_prevKeyDown + ', event.which = ' + event.which)
      if (this.$_TaskInput_prevKeyDown === 13 && event.which === 13) {
        this.$emit('enter', event)
      }
    },

    input (ev) {
      console.log(ev.target.value)
      this.$emit('input', ev.target.value)
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
