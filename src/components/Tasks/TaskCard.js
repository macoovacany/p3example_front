import React, { useState } from 'react';
// import { QUERY_TASKS } from '../../api/queries';
// import { useQuery } from '@apollo/client';
import Draggable from 'react-draggable';
import { Checkbox } from 'semantic-ui-react';
import ListDependency from './listDependencies';

const TaskCard = ({ task, handleCheckbox }) => {
  const dependenciesMet = (task) => {
    const noDependencies = task.dependencies.length === 0;
    const allMet = task.dependencies.every((d) => d.completed === true);
    return noDependencies || allMet;
  };

  return (
    <Draggable>
      <div>
        <form class="ui card">
          <div class="content">
            <span class="header ui aligned grid two wide column">
              <div class="left floated left aligned"> {task.name}</div>
              <div class=" right floated right aligned">
                <Checkbox
                  name={'taskComplete-' + task._id}
                  htmlFor={'taskComplete-' + task._id}
                  id={'taskComplete-' + task._id}
                  dataTaskId={task._id}
                  checked={task.completed}
                  disabled={!dependenciesMet(task)}
                  onChange={handleCheckbox}
                />
              </div>
            </span>
          </div>
          <div class="content">
            <span>{task.description}</span>
          </div>
          <div class="content">
            <ListDependency dependencies={task.dependencies} />
          </div>
        </form>
      </div>
    </Draggable>
  );
};

export default TaskCard;
