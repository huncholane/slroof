import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";

function emailToLink(email) {
  return `mailto:${email}`;
}

function phoneToLink(phone) {
  return `tel:${phone}`;
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
                        {props.email}
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-phone-alt" />
                          Phone:
                        </span>
                        {props.phone}
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
                      <div className="progress-item">
                        <h5 className="title">Software Development</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "88%" }}
                            aria-valuenow={88}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>88%</span>
                        </div>
                      </div>
                      <div className="progress-item">
                        <h5 className="title">UL / UX Design</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>80%</span>
                        </div>
                      </div>
                      <div className="progress-item">
                        <h5 className="title">Web Development</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>95%</span>
                        </div>
                      </div>
                      <div className="progress-item">
                        <h5 className="title">SEO Optimization</h5>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <span>90%</span>
                        </div>
                      </div>
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
                            <h4 className="title">Career Guidelines</h4>
                            <p>
                              As a web developer, you could work for a company
                              or agency, hoyse aor as a freelancer taking on
                              projects for individual clients. Your tasks will
                              vary depending on ki tumi your work situation, but
                              day-to-day responsibilities might generally
                              include.
                            </p>
                            <ul className="list-wrap">
                              <li>
                                Designing user interfaces and navigation menus
                              </li>
                              <li>
                                Writing and reviewing code for sites, typically
                                HTML, XML, or JavaScript
                              </li>
                              <li>
                                Troubleshooting problems with performance or
                                user experience
                              </li>
                              <li>
                                Integrating multimedia content onto a site
                              </li>
                              <li>
                                Collaborating with designers, developers, and
                                stakeholders
                              </li>
                              <li>Testing web applications</li>
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
