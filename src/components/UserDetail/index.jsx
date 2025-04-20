import React from "react";
import { Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="h6">User not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>

      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Location: {user.location}</Typography>
      <Typography variant="body1">Description: {user.description}</Typography>
      <Typography variant="body1">Occupation: {user.occupation}</Typography>

      <Button
        variant="contained"
        component={Link}
        to={`/photos/${userId}`}
        sx={{ mt: 2 }}
      >
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;
