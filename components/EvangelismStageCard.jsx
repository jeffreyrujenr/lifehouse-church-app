import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ExpandMoreTwoTone } from "@mui/icons-material";
import { Collapse, IconButton, styled } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const EvangelismStageCard = ({ evangelismStage }) => {
  const {
    currentStatus,
    interact,
    invite,
    integrate,
    followUp,
    planted,
    baptized,
  } = evangelismStage;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (date) => {
    if (date) {
      const formattedDate = new Date(date).toLocaleDateString();
      return (
        <span>
          <br />
          Date: {formattedDate}
        </span>
      );
    }
    return null;
  };

  return (
    <Card onClick={handleExpandClick}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Evangelism Stage
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Current Status: {currentStatus}
          <ExpandMore expand={expanded}>
            <ExpandMoreTwoTone />
          </ExpandMore>
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2">
            Interact: {interact.value ? "Yes" : "No"}
            {formatDate(interact.date)}
          </Typography>
          <Typography variant="body2">
            Invite: {invite.value ? "Yes" : "No"}
            {formatDate(invite.date)}
          </Typography>
          <Typography variant="body2">
            Integrate: {integrate.value ? "Yes" : "No"}
            {formatDate(integrate.date)}
          </Typography>
          <Typography variant="body2">
            Follow Up: {followUp.value ? "Yes" : "No"}
            {formatDate(followUp.date)}
          </Typography>
          <Typography variant="body2">
            Planted: {planted.value ? "Yes" : "No"}
            {formatDate(planted.date)}
          </Typography>
          <Typography variant="body2">
            Baptized: {baptized.value ? "Yes" : "No"}
            {formatDate(baptized.date)}
          </Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default EvangelismStageCard;
