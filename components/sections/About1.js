import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="about-area pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap">
                <img
                  src="/assets/img/images/about_img01.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <img
                  src="/assets/img/images/about_img02.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="about-experiences-wrap">
                  <div className="experiences-item">
                    <div className="icon">
                      <img src="/assets/img/icon/about_icon01.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">
                        We have more than 30 years of experiences
                      </h6>
                    </div>
                  </div>
                  <div className="experiences-item">
                    <div className="icon">
                      <img src="/assets/img/icon/about_icon02.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">
                        We use professional and experienced person
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    About Our Company
                  </span>
                  <h2 className="title tg-element-title">
                    We’re Committed to Roofing Excellence
                  </h2>
                </div>
                <p>
                  At Shaun Lake Roofing, our commitment to excellence drives
                  everything we do. We strive to deliver the highest quality
                  roofing solutions, using top-grade materials and advanced
                  techniques to ensure your roof is both durable and beautiful.
                  Our experienced team works diligently to meet and exceed your
                  expectations, providing unparalleled service and results.
                  Trust us to bring excellence to every project, every time.
                </p>
                <div className="about-list">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-check" />
                      32k Partners have worked us.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Professional and experienced human resources.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Provide the best roof services
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
