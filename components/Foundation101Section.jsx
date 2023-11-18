import React, { useState } from "react";
import {
  Card,
  CardContent,
  Collapse,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import LessonCard from "./LessonCard";
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

const Foundation101Section = ({ foundation101 }) => {
  const { status, ...lessons } = foundation101;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginY: 2 }} onClick={handleExpandClick}>
      <CardContent>
        <Typography variant="h5">Foundation 101 Section</Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Status: {status}
          <ExpandMore expand={expanded}>
            <ExpandMoreTwoTone />
          </ExpandMore>
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {Object.keys(lessons).map((lessonKey) => (
            <LessonCard
              key={lessonKey}
              lesson={lessons[lessonKey]}
              lessonKey={lessonKey}
            />
          ))}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Foundation101Section;
