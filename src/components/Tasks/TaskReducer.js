const TASK_ACTIONS = {
  COMPLETE_TASK: 'complete',
  ADD_TASK: 'add task',
  REMOVE_TASK: 'remove task',
  UPDATE_TASK: 'update task',
  SAVE_TASKS: 'save tasks',
  MENU_ITEM: 'menu item',
  LOG: 'log',
  ADD_ALL: 'add all',
};

const completeTaskandDependencies = (tasks, taskId) => {
  return tasks.map((task) =>
    task._id === taskId
      ? { ...task, completed: true }
      : task.dependencies.map((dep) => (task._id === taskId ? { ...dep, completed: true } : dep))
  );
};

const completeTask = (tasks, taskId) => {
  return tasks.map((task) => (task._id === taskId ? { ...task, completed: true } : task));
};

const tasksReducer = (taskState, action) => {
  switch (action.type) {
    // check box
    case TASK_ACTIONS.COMPLETE_TASK:
      return {
        changed: true,
        tasks: completeTask(taskState.tasks, action.payload.dataTaskId),
      };

    case TASK_ACTIONS.ADD_TODO:
      console.log(action);
      return taskState;

    case TASK_ACTIONS.LOG:
      console.log(action, taskState);
      return taskState;

    case TASK_ACTIONS.MENU_ITEM:
      console.log(action.payload);
      if (action.payload.name === 'TaskNew') {
        window.location.assign('/tasks/new');
      }
      return taskState;

    case TASK_ACTIONS.ADD_ALL:
      return {
        ...taskState,
        tasks: action.payload.tasks,
      };

    default:
      return taskState;
  }
};

export { TASK_ACTIONS, tasksReducer };
