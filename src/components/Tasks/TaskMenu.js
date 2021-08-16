import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router';

const TaskMenu = ({ handleItemClick, changed }) => {
  return (
    <Menu>
      <Menu.Item name="TaskNew" id="TaskNew" onClick={handleItemClick}>
        Add a Task
      </Menu.Item>
      <Menu.Item
        name="SaveTasks"
        id="saveTasks"
        onClick={handleItemClick}
        color={changed ? 'red' : ''}
        inverted={changed}
      >
        Save Tasks
      </Menu.Item>
    </Menu>
  );
};

export default TaskMenu;
