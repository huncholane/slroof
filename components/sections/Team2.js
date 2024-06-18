import Link from "next/link";

export default function Team2() {
  return (
    <>
      <section className="team-area-two pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Our Creative Team</span>
                <h2 className="title">Our Professional Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-two">
                <div className="team-thumb-two">
                  <Link href="/team-details">
                    <img src="/assets/img/team/h2_team_img01.jpg" alt="" />
                  </Link>
                  <div className="team-social-two">
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
                <div className="team-content-two">
                  <h2 className="title">
                    <Link href="/team-details">Shaun Lake</Link>
                  </h2>
                  <span>Founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-two">
                <div className="team-thumb-two">
                  <Link href="/team-details">
                    <img src="/assets/img/team/h2_team_img02.jpg" alt="" />
                  </Link>
                  <div className="team-social-two">
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
                <div className="team-content-two">
                  <h2 className="title">
                    <Link href="/team-details">Zack Stevens</Link>
                  </h2>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-two">
                <div className="team-thumb-two">
                  <Link href="/team-details">
                    <img src="/assets/img/team/h2_team_img03.jpg" alt="" />
                  </Link>
                  <div className="team-social-two">
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
                <div className="team-content-two">
                  <h2 className="title">
                    <Link href="/team-details">Karikoka Ahli</Link>
                  </h2>
                  <span>Roof Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-two">
                <div className="team-thumb-two">
                  <Link href="/team-details">
                    <img src="/assets/img/team/h2_team_img04.jpg" alt="" />
                  </Link>
                  <div className="team-social-two">
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
                <div className="team-content-two">
                  <h2 className="title">
                    <Link href="/team-details">Dickerson MH</Link>
                  </h2>
                  <span>Roof Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
