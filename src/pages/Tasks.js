import React, { useState, useReducer, useEffect } from 'react';
import { QUERY_USER_TASKS } from '../api/queries';
import { useQuery } from '@apollo/client';
import TaskCard from '../components/Tasks/TaskCard';
import TaskMenu from '../components/Tasks/TaskMenu';
import { tasksReducer, TASK_ACTIONS } from '../components/Tasks/TaskReducer';
import { Redirect } from 'react-router-dom';

const Tasks = () => {
  const { data, loading } = useQuery(QUERY_USER_TASKS);

  // const [tasks, dispatch] = useReducer(tasksReducer, data.tasks);
  const [taskState, dispatch] = useReducer(tasksReducer, {
    changed: false,
    tasks: typeof data === 'undefined' ? [] : data.tasks,
  });

  useEffect(() => {
    console.log('use effect');
    console.log(data);

    dispatch({ type: TASK_ACTIONS.ADD_ALL, payload: { tasks: data ? data.tasks : [] } });
  }, [data]);

  // component helper functions

  const handleCheckbox = (event, data) => {
    event.preventDefault();
    dispatch({ type: TASK_ACTIONS.COMPLETE_TASK, payload: data, event });
  };

  const handleMenuItemClick = (event, data) => {
    event.preventDefault();
    dispatch({ type: TASK_ACTIONS.MENU_ITEM, payload: data, event });
  };

  // Return components

  if (!loading && typeof data === 'undefined') {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TaskMenu changed={taskState.changed} handleItemClick={handleMenuItemClick} />
      <div>
        {taskState.tasks.map((task) => (
          <TaskCard key={task._id} task={task} handleCheckbox={handleCheckbox} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
