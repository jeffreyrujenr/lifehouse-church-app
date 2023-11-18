import { ExpandMoreTwoTone } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Collapse,
  CardActions,
  styled,
  IconButton,
} from "@mui/material";
import { useState } from "react";

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

const UserDetailsCard = ({
  name,
  email,
  mobile,
  dateOfBirth,
  age,
  gender,
  address,
  invitedBy,
  campus,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginY: 2 }} onClick={handleExpandClick}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          User Details
          {/* <Button
            variant="outlined"
            sx={{
              marginY: 1,
            }}
          >
            Edit
          </Button> */}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Name: {name}
          {/* <ExpandMore expand={expanded}>
            <ExpandMoreTwoTone />
          </ExpandMore> */}
        </Typography>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <Typography variant="subtitle1">Mobile: {mobile}</Typography>
        <Typography variant="subtitle1">Email: {email}</Typography>
        <Typography variant="subtitle1">
          Date of Birth: {new Date(dateOfBirth).toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1">Age: {age}</Typography>
        <Typography variant="subtitle1">Gender: {gender}</Typography>
        <Typography variant="subtitle1">Address: {address}</Typography>
        <Typography variant="subtitle1">Invited By: {invitedBy}</Typography>
        <Typography variant="subtitle1">Campus: {campus}</Typography>
        {/* </Collapse> */}
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
