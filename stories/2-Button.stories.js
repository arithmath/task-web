import TaskButton from '../src/components/atoms/TaskButton.vue'

export default {
  title: 'Button',
};

export const addButton = () => ({
  components: { TaskButton },
  template: '<TaskButton type="add"></TaskButton>'
});

export const deleteButton = () => ({
  components: { TaskButton },
  template: '<TaskButton type="delete"></TaskButton>'
});
