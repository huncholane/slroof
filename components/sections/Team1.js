import Link from "next/link";
import teamData from "../data/teamData";

function TeamMember(props) {
  const lowerNameWithDash = props.name.toLowerCase().replace(/\s/g, "-");
  const aboutLink = `/team/${lowerNameWithDash}`;
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
        <div className="team-item">
          <div className="team-thumb">
            <Link href={aboutLink}>
              <img src={props.img} alt="" />
            </Link>
            <div className="team-social">
              <ul className="list-wrap">
                <li>
                  <Link href={props.facebook}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href={props.linkedIn}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href={props.twitter}>
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href={props.instagram}>
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-content">
            <h2 className="title">
              <Link href={aboutLink}>{props.name}</Link>
            </h2>
            <span>{props.position}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Team1() {
  return (
    <>
      <section className="team-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Professional Team
                </span>
                <h2 className="title tg-element-title">
                  Professional Team Members
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {teamData.map((team, index) => (
              <TeamMember key={`team-member-${index}`} {...team} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
