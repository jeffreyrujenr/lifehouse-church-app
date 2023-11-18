import { Card, CardContent, Typography } from "@mui/material";

const MinistryTeamCard = ({ team }) => {
  return (
    <Card sx={{ marginY: 2 }}>
      <CardContent>
        <Typography>Team: {team.name}</Typography>
        <Typography>Leader: {team.leader}</Typography>
        <Typography>Role: {team.role}</Typography>
      </CardContent>
    </Card>
  );
};

export default MinistryTeamCard;
