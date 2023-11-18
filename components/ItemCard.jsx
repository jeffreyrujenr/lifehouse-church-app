import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ItemCard = ({ item }) => {
  const { title, status, date, actionItems, keyOutcomes } = item;

  return (
    <Card sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h6">Item: {title}</Typography>
        <Typography>Status: {status}</Typography>
        <Typography>Date: {date || "Not started"}</Typography>
        <Typography>Action Items: {actionItems || "N/A"}</Typography>
        <Typography>Key Outcomes: {keyOutcomes || "N/A"}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
