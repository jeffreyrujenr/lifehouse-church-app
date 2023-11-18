import { Collapse, IconButton, Paper, Typography, styled } from "@mui/material";
import MinistryTeamCard from "./MinistryTeamCard";
import { useState } from "react";
import { ExpandMoreTwoTone } from "@mui/icons-material";

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

const MinistryTeamSection = ({ ministryTeam }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper sx={{ padding: 2, marginY: 2 }} onClick={handleExpandClick}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {ministryTeam.length > 1 ? "Ministry Teams" : "Ministry Team"}
        <ExpandMore expand={expanded}>
          <ExpandMoreTwoTone />
        </ExpandMore>
      </Typography>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {ministryTeam.map((team, index) => (
          <MinistryTeamCard key={index} team={team} />
        ))}
      </Collapse>
    </Paper>
  );
};

export default MinistryTeamSection;
