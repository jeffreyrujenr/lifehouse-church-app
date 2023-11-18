import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ConnectGroupCard = ({ connectGroup }) => {
  const { leader, subConnectGroup, role } = connectGroup;

  return (
    <Card sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h5">Connect Group</Typography>
        <Typography>Leader: {leader}</Typography>
        <Typography>Sub-Connect Group: {subConnectGroup}</Typography>
        <Typography>Role: {role}</Typography>
      </CardContent>
    </Card>
  );
};

export default ConnectGroupCard;
