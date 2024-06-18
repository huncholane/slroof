import Link from "next/link";

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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/team_img01.jpg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Shaun Lake</Link>
                  </h2>
                  <span>Founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/team_img02.jpg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Zack Stevens</Link>
                  </h2>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/team_img03.jpg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Lane Henslee</Link>
                  </h2>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="team-item">
                <div className="team-thumb">
                  <Link href="/team-details">
                    <img src="/assets/img/team/team_img04.jpg" alt="" />
                  </Link>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
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
                <div className="team-content">
                  <h2 className="title">
                    <Link href="/team-details">Xander Andre</Link>
                  </h2>
                  <span>Market Researcher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
