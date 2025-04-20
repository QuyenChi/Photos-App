import React, { useMemo } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import models from '../../modelData/models';

export default function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  const rightContent = useMemo(() => {
    const path = location.pathname;
    if (path === '/users') return 'All Users';

    const photosMatch = path.match(/^\/users\/([^/]+)\/photos/);
    if (photosMatch) {
      const user = models.userModel(photosMatch[1]);
      return user ? `Photos of ${user.first_name} ${user.last_name}` : 'Photos';
    }

    const userMatch = path.match(/^\/users\/([^/]+)/);
    if (userMatch) {
      const user = models.userModel(userMatch[1]);
      return user ? `${user.first_name} ${user.last_name}` : 'User';
    }

    return 'Photo Sharing App';
  }, [location.pathname, userId]);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Chi Quyen</Typography>
        <Typography variant="h6">{rightContent}</Typography>
      </Toolbar>
    </AppBar>
  );
}