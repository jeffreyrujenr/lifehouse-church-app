import { Card, CardContent, Typography, Grid } from "@mui/material";

const DevelopmentTracks = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {Object.keys(data).map((trackKey, index) => (
        <Grid item xs={12} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                {data[trackKey].title}
              </Typography>
              {data[trackKey].items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <Typography variant="body1">Title: {item.title}</Typography>
                  <Typography variant="body2">Status: {item.status}</Typography>
                  <Typography variant="body2">Date: {item.date}</Typography>
                  <Typography variant="body2">
                    Action Items: {item.actionItems}
                  </Typography>
                  <Typography variant="body2">
                    Key Outcomes: {item.keyOutcomes}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DevelopmentTracks;
