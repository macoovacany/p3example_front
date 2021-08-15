import React from 'react';
import { QUERY_USER } from '../../api/queries';
import { useQuery } from '@apollo/client';
import TaskCard from './TaskCard';

import { Redirect } from 'react-router-dom';

const TaskListDropDown = (props) => {
  const { data, loading } = useQuery(QUERY_USER);

  if (!loading && typeof data?.user === 'undefined') {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <select name="taskList" multiple="" class="ui fluid dropdown">
        {data.user.tasks.map((task) => (
          <option key={task._id} value={task.name}>
            {task.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default TaskListDropDown;
