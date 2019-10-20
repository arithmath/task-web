//import { storiesOf } from '@storybook/vue'
import TaskView from '../src/views/TaskView.vue'
// import TaskButton from '../src/components/atoms/TaskButton.vue'
// import TaskInput from '../src/components/atoms/TaskInput.vue'

export default {
  title: 'TaskView',
};

export const taskView = () => ({
  // ストア取得部分だけモックかするため、taskメソッドをオーバーライドする
  // components: { Mock: {
  //     extends: TaskList,
  //     computed: {
  //       tasks () {
  //         return [
  //           {id: 1, name: "fuga"},
  //           {id: 2, name: "piyod"},
  //           {id: 3, name: "hoge"}
  //       ]
  //       }
  //     }
  //   }
  // },
  components: { TaskView },
  data: () => {
    return {
      mockTasks: [
        {id: 1, task: "fuga"},
        {id: 2, task: "piyod"}
      ]
    }
  },
  template: `
  <TaskView
    :tasks="mockTasks">
  </TaskView>`
});
