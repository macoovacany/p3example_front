import React from 'react';
import { Redirect } from 'react-router-dom';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';
import { Button } from 'semantic-ui-react';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (!loading && typeof data?.user === 'undefined') {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {data.user.firstName}</p>
      <p>Last Name: {data.user.lastName}</p>
      <p>Email: {data.user.email}</p>
      {data.user.tasks.map((task) => (
        <Button key={task._id}>{task.name} </Button>
      ))}
    </div>
  );
};

export default Profile;
