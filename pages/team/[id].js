import { useRouter } from "next/router";

const TeamMember = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Team Member: {id}</p>;
};

export default TeamMember;
