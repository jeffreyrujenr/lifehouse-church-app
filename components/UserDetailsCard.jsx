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
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import useUpdate from "@/hooks/useUpdate";

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
  _id,
  name,
  email,
  mobile,
  dateOfBirth,
  age,
  gender,
  address,
  invitedBy,
  campus,
  existingUsers,
}) => {
  const { update, error, isLoading } = useUpdate();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedMobile, setUpdatedMobile] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [updatedInvitedBy, setUpdatedInvitedBy] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const updateUser = async (_id) => {
    if (!updatedEmail && !updatedMobile && !updatedAddress && !updatedInvitedBy)
      return;
    else {
      try {
        await update(_id, email, mobile, address, invitedBy);
      } catch (error) {
        console.error("Update error:", error);
      }
    }
  };

  const cancelUpdate = () => {
    setUpdatedMobile("");
    setUpdatedEmail("");
    setUpdatedAddress("");
    setUpdatedInvitedBy("");
    setIsEdit(!isEdit);
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
          <Button
            variant="outlined"
            sx={{
              marginY: 1,
            }}
            onClick={() => (isEdit ? cancelUpdate() : setIsEdit(!isEdit))}
          >
            {isEdit ? "Cancel" : "Edit"}
          </Button>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Full name: {name}
          {/* <ExpandMore expand={expanded}>
            <ExpandMoreTwoTone />
          </ExpandMore> */}
        </Typography>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        {isEdit ? (
          <>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              type="tel"
              name="mobile"
              value={mobile || updatedMobile}
              onChange={(e) => setUpdatedMobile(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              value={email || updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <Typography variant="subtitle1">Mobile: {mobile}</Typography>
            <Typography variant="subtitle1">Email: {email}</Typography>
          </>
        )}
        <Typography variant="subtitle1">
          Date of Birth: {new Date(dateOfBirth).toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1">Age: {age}</Typography>
        <Typography variant="subtitle1">Gender: {gender}</Typography>
        {isEdit ? (
          <>
            <TextField
              multiline
              maxRows={5}
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
              value={address || updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
            <TextField
              select
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="invitedBy"
              label="Invited By"
              type="text"
              id="invitedBy"
              value={invitedBy || updatedInvitedBy}
              onChange={(e) => setUpdatedInvitedBy(e.target.value)}
            >
              {existingUsers.map((existingUser) => (
                <MenuItem key={existingUser._id} value={existingUser.name}>
                  {existingUser.name}
                </MenuItem>
              ))}
            </TextField>
          </>
        ) : (
          <>
            <Typography variant="subtitle1">Address: {address}</Typography>
            <Typography variant="subtitle1">Invited By: {invitedBy}</Typography>
          </>
        )}
        <Typography variant="subtitle1">Campus: {campus}</Typography>
        {/* </Collapse> */}
        {isEdit ? (
          <Button
            sx={{
              marginY: 1,
            }}
            variant="contained"
            onClick={(_id) => updateUser(_id)}
          >
            Save
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
