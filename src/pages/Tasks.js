import React from 'react';
import { QUERY_USER_TASKS } from '../api/queries';
import { useQuery } from '@apollo/client';
import TaskCard from '../components/Tasks/TaskCard';
import TaskMenu from '../components/Tasks/TaskMenu';

import { Redirect } from 'react-router-dom';

const Tasks = () => {
  const { data, loading } = useQuery(QUERY_USER_TASKS);

  // TODO: Make sure user is logged in
  // if (!loading && typeof data?.user === 'undefined') {
  //   return <Redirect to="/" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  const tasks = data.tasks;

  console.log(tasks);

  return (
    <div>
      <TaskMenu />
      <div>
        {tasks.map((task) => (
          <TaskCard key={task._id} tasks={tasks} taskId={task._id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
