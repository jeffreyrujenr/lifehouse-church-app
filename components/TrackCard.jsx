import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

const TrackCard = ({ track }) => {
  const { title, items } = track;

  return (
    <Card sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h5">Track: {title}</Typography>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TrackCard;
