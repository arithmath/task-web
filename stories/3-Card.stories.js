//import { storiesOf } from '@storybook/vue'
import TaskCard from '../src/components/molecules/TaskCard.vue'
import TaskButton from '../src/components/atoms/TaskButton.vue'
import TaskInput from '../src/components/atoms/TaskInput.vue'

export default {
  title: 'Card',
};

export const newCard = () => ({
  components: { TaskCard },
  template: '<TaskCard type="new"></TaskCard>'
});

export const taskCard = () => ({
  components: { TaskCard },
  template: '<TaskCard type="task"></TaskCard>'
});

// storiesOf('MyCard', module)
//   .add('simple', () => ({
//     components: {TaskCard},
//     template: '<TaskCard type="task"></TaskCard>'
//   }))
