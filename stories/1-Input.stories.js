import TaskInput from '../src/components/atoms/TaskInput.vue'

export default {
  title: 'Input',
};

export const input = () => ({
  components: { TaskInput },
  template: '<TaskInput></TaskInput>'
});
