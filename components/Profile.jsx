import { PersonTwoTone } from "@mui/icons-material";
import { Card, Container } from "@mui/material";
import UserDetailsCard from "./UserDetailsCard";
import ConnectGroupCard from "./ConnectGroupCard";
import MinistryTeamSection from "./MinistryTeamSection";
import EvangelismStageCard from "./EvangelismStageCard";
import AlphaSection from "./AlphaSection";
import Foundation101Section from "./Foundation101Section";
import DevelopmentTracks from "./DevelopmentTracksSection";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <Container>
      <UserDetailsCard {...user} />
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
    </Container>
  );
};

export default Profile;
