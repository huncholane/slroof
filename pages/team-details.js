import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";

function emailToLink(email) {
  return `mailto:${email}`;
}

function phoneToLink(phone) {
  return `tel:${phone}`;
}

function SkillBar({ title, value }) {
  return (
    <div className="progress-item">
      <h5 className="title">{title}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <span>{value}%</span>
      </div>
    </div>
  );
}

export default function TeamDetails(props) {
  const leadingParagraphs = props.paragraphs.slice(
    0,
    props.paragraphs.length - 1
  );
  const trailingParagraph = props.paragraphs[props.paragraphs.length - 1];
  return (
    <>
      <Layout breadcrumbTitle={props.name}>
        <div>
          <section className="team-details-area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="team-details-thumb">
                    <img src="/assets/img/team/team_details01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="team-details-info">
                    <div className="info-content-top">
                      <h3 className="title">{props.name}</h3>
                      <span>{props.position}</span>
                    </div>
                    <ul className="list-wrap team-info">
                      <li>
                        <span>
                          <i className="fas fa-toolbox" />
                          Experience:
                        </span>
                        {props.exp}
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-envelope" />
                          E-mail:
                        </span>
                        <Link href={emailToLink(props.email)}>
                          {props.email}
                        </Link>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-phone-alt" />
                          Phone:
                        </span>
                        <Link href={phoneToLink(props.phone)}>
                          {props.phone}
                        </Link>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-map-marker-alt" />
                          Location:
                        </span>
                        {props.location}
                      </li>
                    </ul>
                    <div className="team-details-social">
                      <h6 className="title">Follow Me:</h6>
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="team-details-content">
                    <h3 className="title">Personal Experience and Skills</h3>
                    {leadingParagraphs.map((paragraph, index) => (
                      <p className="info-one" key={`paragraph-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                    <p className="info-two">{trailingParagraph}</p>
                    <div className="progress-wrap">
                      {props.skills.map((skill, index) => (
                        <SkillBar key={`skill-${index}`} {...skill} />
                      ))}
                    </div>
                    <div className="guidelines-wrap">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="guidelines-img">
                            <img
                              src="/assets/img/team/team_details02.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="guidelines-content">
                            <h4 className="title">{props.sidenote.title}</h4>
                            <p>{props.sidenote.content}</p>
                            <ul className="list-wrap">
                              {props.sidenote.quotes.map((quote, index) => (
                                <li key={`quote-${index}`}>{quote}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}
