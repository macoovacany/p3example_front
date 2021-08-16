import React from 'react';

const ListDependencies = ({ dependencies }) => {
  if (dependencies.length === 0) {
    return <></>;
  }
  return (
    <ul>
      {dependencies.map((d) => (
        <li>
          <span style={d.completed ? { 'text-decoration': 'line-through' } : {}}> {d.name} </span>
        </li>
      ))}
    </ul>
  );
};

export default ListDependencies;
