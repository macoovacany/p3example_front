import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router';

const TaskMenu = () => {
  const handleItemClick = (event, { name }) => {
    event.preventDefault();
    console.log(event);
    window.location.assign('/tasks/new');
  };

  return (
    <Menu>
      <Menu.Item name="TaskNew" onClick={handleItemClick}>
        Add a Task
      </Menu.Item>
    </Menu>
  );
};

export default TaskMenu;
