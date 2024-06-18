import teamData from "@/components/data/teamData";
import { useRouter } from "next/router";
import TeamDetails from "../team-details";

const TeamMember = () => {
  const router = useRouter();
  const { id } = router.query;
  const memberData = teamData.find((member) => member.id === id);

  return <TeamDetails {...memberData} />;
};

export default TeamMember;
