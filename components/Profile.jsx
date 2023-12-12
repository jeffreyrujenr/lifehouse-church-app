import { PersonTwoTone } from "@mui/icons-material";
import { Button, Card, Container } from "@mui/material";
import UserDetailsCard from "./UserDetailsCard";
import ConnectGroupCard from "./ConnectGroupCard";
import MinistryTeamSection from "./MinistryTeamSection";
import EvangelismStageCard from "./EvangelismStageCard";
import AlphaSection from "./AlphaSection";
import Foundation101Section from "./Foundation101Section";
import DevelopmentTracks from "./DevelopmentTracksSection";
import Link from "next/link";

const existingUsers = [
  {
    _id: "12345",
    name: "Adam",
  },
  {
    _id: "23456",
    name: "Abraham",
  },
  {
    _id: "34567",
    name: "Issac",
  },
  {
    _id: "45678",
    name: "Jacob",
  },
  {
    _id: "56789",
    name: "Joseph",
  },
];

const Profile = ({ user }) => {
  return (
    <Container>
      <UserDetailsCard {...user} existingUsers={existingUsers} />
      {user.connectGroup ? (
        <ConnectGroupCard connectGroup={user.connectGroup} />
      ) : null}
      {user.ministryTeam ? (
        <MinistryTeamSection ministryTeam={user.ministryTeam} />
      ) : null}
      {user.evangelismStage ? (
        <EvangelismStageCard evangelismStage={user.evangelismStage} />
      ) : null}
      {user.alpha ? <AlphaSection alpha={user.alpha} /> : null}
      {user.foundation101 ? (
        <Foundation101Section foundation101={user.foundation101} />
      ) : null}
      {/* <DevelopmentTracks DevelopmentTracks={user.developmentTracks} /> */}
      {user.role === "admin" ? (
        <Button variant="contained">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/admin"
          >
            View Users
          </Link>
        </Button>
      ) : null}
    </Container>
  );
};

export default Profile;
