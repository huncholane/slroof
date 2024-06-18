import Link from "next/link";
import teamData from "../data/teamData";

function TeamMember({
  img,
  twitter,
  facebook,
  linkedIn,
  instagram,
  name,
  position,
}) {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
        <div className="team-item-three">
          <div className="team-thumb-three">
            <Link href="/team-details">
              <img src={img} alt="" />
            </Link>
            <div className="team-social-three">
              <ul className="list-wrap">
                <li>
                  <Link href={facebook}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href={linkedIn}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href={twitter}>
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href={instagram}>
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-content-three">
            <h2 className="title">
              <Link href="/team-details">{name}</Link>
            </h2>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Team3() {
  return (
    <>
      <section className="team-area-three pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Our Creative Team</span>
                <h2 className="title">Our Professional Team</h2>
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
