import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const LessonCard = ({ lesson, lessonKey }) => {
  const { date, actionItems, keyOutcomes } = lesson;

  return (
    <Card sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h6"> {lessonKey}</Typography>
        <Typography>Date: {new Date(date).toLocaleDateString()}</Typography>
        <Typography>Action Items: {actionItems}</Typography>
        <Typography>Key Outcomes: {keyOutcomes}</Typography>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
