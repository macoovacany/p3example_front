import React, { useState } from 'react';
// import { QUERY_TASKS } from '../../api/queries';
// import { useQuery } from '@apollo/client';
import Draggable from 'react-draggable';
import { Checkbox } from 'semantic-ui-react';

const TaskCard = ({ tasks, taskId }) => {
  // TODO: extra call to network: use context or locally store the tasks.
  // const [cardState, setCardState] = useState({ taskComplete: { defaultChecked: false, disabled: true } });

  const checkBoxName = 'taskComplete-' + taskId;
  const theTask = tasks.filter((t) => t._id === taskId)[0];

  const [state, setState] = useState({ checked: theTask.completed });

  const dependenciesMet = () => {
    const noDependencies = theTask.dependencies.length === 0;
    const allMet = theTask.dependencies.every((d) => d.completed === true);
    return noDependencies || allMet;
  };

  // console.log(theTask.name);
  // console.log(dependenciesMet());
  // console.log(tasks);

  const handleCheckbox = (event, data) => {
    event.preventDefault();
    // if the dependencies aren't met, then the check box is disabled
    // so we can assumme the dependencis have been met to set this checkbox.
    // Once the task is done, then it's done and will always be true
    if (dependenciesMet()) {
      setState({ ...state, checked: true });
    }
  };

  const listDependencies = () => {
    if (theTask.dependencies.length === 0) {
      return <></>;
    }
    return (
      <ul>
        {theTask.dependencies.map((d) => (
          <li>
            <span style={d.completed ? { 'text-decoration': 'line-through' } : {}}> {d.name} </span>
          </li>
        ))}
      </ul>
    );
  };

  // //   }

  return (
    <Draggable>
      <div>
        <form class="ui card">
          <div class="content">
            <span class="header ui aligned grid two wide column">
              <div class="left floated left aligned"> {theTask.name}</div>
              <div class=" right floated right aligned">
                <Checkbox
                  name={checkBoxName}
                  id={checkBoxName}
                  checked={state.checked}
                  disabled={!dependenciesMet()}
                  onChange={handleCheckbox}
                />
              </div>
            </span>
          </div>
          <div class="content">
            <span>{theTask.description}</span>
          </div>
          <div class="content">{listDependencies()}</div>
        </form>
      </div>
    </Draggable>
  );
};

export default TaskCard;
