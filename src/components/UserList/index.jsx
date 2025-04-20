
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import models from '../../modelData/models';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(models.userListModel());
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>Users</Typography>
      <List>
        {users.map(user => (
          <React.Fragment key={user._id}>
            <ListItem button component={Link} to={`/users/${user._id}`}>                
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}