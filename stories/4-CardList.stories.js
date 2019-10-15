//import { storiesOf } from '@storybook/vue'
import TaskList from '../src/components/organisms/TaskList.vue'
// import TaskButton from '../src/components/atoms/TaskButton.vue'
// import TaskInput from '../src/components/atoms/TaskInput.vue'

export default {
  title: 'TaskList',
};

export const taskList = () => ({
  // ストア取得部分だけモックかするため、taskメソッドをオーバーライドする
  components: { Mock: {
      extends: TaskList,
      computed: {
        tasks () {
          return [
            {id: 1, name: "fuga"},
            {id: 2, name: "piyod"},
            {id: 3, name: "hoge"}
        ]
        }
      }
    }
  },
  template: '<Mock></Mock>',
});
