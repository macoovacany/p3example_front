import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../api/queries';
import { ADD_TASK } from '../api/mutations';
// import { Redirect } from 'react-router';
// import Auth from '../state/auth';
import { Dropdown } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import TaskListShort from './TaskListShort';

function TaskNew() {
  const [formState, setFormState] = useState({ name: '', description: '', dependencies: [] });
  const [addTask, { error }] = useMutation(ADD_TASK);

  // Grab the user data
  const { data, loading } = useQuery(QUERY_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formState);

      const newTask = await addTask({
        variables: {
          ...formState,
        },
      });
      console.log(newTask);
      window.location.assign('/tasks');
      return newTask;
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDropDownSelect = (event, data) => {
    setFormState({
      ...formState,
      dependencies: [...data.value],
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const taskList = data.user.tasks.map((task) => {
    return {
      key: task._id,
      text: task.name,
      value: task._id,
    };
  });

  return (
    <div>
      <div className="container my-1">
        <h2>New Task</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="name">Task Name</label>
            <input placeholder="Task name" name="name" type="text" id="name" onChange={handleChange} />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="description">Task Descrption :</label>
            <textarea placeholder="" name="description" type="text" id="description" onChange={handleChange} />
          </div>
          {error ? (
            <div>
              <p className="error-text">Something went wrong. </p>
            </div>
          ) : null}
          <div className="flex-row space-between my-2">
            <label htmlFor="dependencies"> Select List Dependencies: </label>
            <Dropdown
              placeholder="dependencies"
              fluid
              multiple
              selection
              onChange={handleDropDownSelect}
              options={taskList}
            />
            ;
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskNew;
