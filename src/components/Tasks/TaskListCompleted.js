import React from 'react';

import { Redirect } from 'react-router-dom';

const TaskListCompleted = ({ dependencies }) => {
  // assummes data is already fetched from the network

  console.log(dependencies);

  if (dependencies.length === 0) {
    return <></>;
  }

  return (
    <>
      <div class="ui left floated left aligned"> </div>
    </>
  );
};

export default TaskListCompleted;
