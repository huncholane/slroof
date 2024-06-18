import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Team1 from "@/components/sections/Team1";
import Link from "next/link";
import Slider from "react-slick";
const settings = {
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function About() {
  return (
    <>
      <Layout breadcrumbTitle="About Us">
        <section className="about-area inner-about-area pt-120 pb-120">
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
                          We have more than 10 years of experiences
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
                  <div className="section-title mb-25">
                    <span className="sub-title">About Our Company</span>
                    <h2 className="title">
                      We’re Committed to Roofing Excellence
                    </h2>
                  </div>
                  <p>
                    At Shaun Lake Roofing, our commitment to excellence drives
                    everything we do. We strive to deliver the highest quality
                    roofing solutions, using top-grade materials and advanced
                    techniques to ensure your roof is both durable and
                    beautiful. Our experienced team works diligently to meet and
                    exceed your expectations, providing unparalleled service and
                    results. Trust us to bring excellence to every project,
                    every time.
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
        {/* about-area-end */}
        {/* work-area */}
        <section className="work-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Working Plan</span>
                  <h2 className="title">Roof Plan Working Process</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img01.png" alt="" />
                    <h4 className="number">01</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">Plan for Roofing</h2>
                    <p>
                      Suffered alteration in some a form, by injected humour, or
                      randomised word
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img02.png" alt="" />
                    <h4 className="number">02</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">Schedule Estimate</h2>
                    <p>
                      Suffered alteration in some a form, by injected humour, or
                      randomised word
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img03.png" alt="" />
                    <h4 className="number">03</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">Install New Roof</h2>
                    <p>
                      Suffered alteration in some a form, by injected humour, or
                      randomised word
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="work-item">
                  <div className="work-thumb">
                    <img src="/assets/img/images/work_img04.png" alt="" />
                    <h4 className="number">04</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">Enjoy Roofing</h2>
                    <p>
                      Suffered alteration in some a form, by injected humour, or
                      randomised word
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* work-area-end */}
        {/* history-area */}
        <section className="history-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="history-img-wrap">
                  <ul className="list-wrap">
                    <li>
                      <img src="/assets/img/images/history_img01.jpg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/img/images/history_img02.jpg" alt="" />
                      <VideoPopup />
                    </li>
                    <li>
                      <img src="/assets/img/images/history_img03.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="history-content">
                  <div className="section-title mb-20">
                    <span className="sub-title">Our Roofing History</span>
                    <h2 className="title">
                      Our Roofing Legacy: Over 30 Years of Excellence
                    </h2>
                  </div>
                  <p>
                    For more than three decades, Shaun Lake has been at the
                    forefront of the roofing industry, building a reputation for
                    exceptional quality and reliability. Starting as a small,
                    local business in Kansas City, MO, Shaun's dedication to
                    craftsmanship and customer satisfaction has driven the
                    company’s growth and success. Today, Shaun Lake Roofing is
                    known for its expertise, innovative solutions, and
                    unwavering commitment to excellence, serving clients both
                    locally and beyond. Our rich history is a testament to our
                    enduring values and the trust we've earned from countless
                    satisfied customers.
                  </p>
                  <div className="history-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check-circle" />
                        Technology management
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Roofing Solutions
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Modern Worker Working here
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Quick Response
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* history-area-end */}
        {/* area-bg */}
        <div
          className="area-bg-five"
          data-background="/assets/img/bg/area_bg05.jpg"
        >
          {/* team-area */}
          <Team1 />
          {/* team-area-end */}
          {/* testimonial-area */}
          <section className="inner-testimonial-area parallax pb-120 position-relative">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">Our Testimonial</span>
                    <h2 className="title">What Our Client Feedback</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="testimonial-inner">
                    <Slider {...settings} className="testimonial-active-two">
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img
                            src="/assets/img/images/h2_testi_avatar01.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content-two">
                          <div className="content-top">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            There are many varation of paissages of Lorem as the
                            Ipum available but our majority have sufferied
                            alterations in some form, by our by injected hsumour
                            randomised worids which don't looks even slightly
                            there as believable. If you going to use a passage
                            of Lorem Ipsum.
                          </p>
                          <div className="content-bottom">
                            <h4 className="title">Darrell Steward</h4>
                            <span>Roofing Expert</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img
                            src="/assets/img/images/h2_testi_avatar02.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content-two">
                          <div className="content-top">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum are many varation of paissages of Lorem
                            as the Ipum available but our majority have
                            sufferied alterations in some form, by our by
                            injected hsumour randomised worids which don't looks
                            even slightly there as believable. If you going to
                            use a passage of Lorem Ipsum.
                          </p>
                          <div className="content-bottom">
                            <h4 className="title">Robert C. Simmons</h4>
                            <span>Roofing Expert</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-two">
                        <div className="testimonial-avatar-two">
                          <img
                            src="/assets/img/images/h2_testi_avatar03.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content-two">
                          <div className="content-top">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum are many varation of paissages of Lorem
                            as the Ipum available but our majority have
                            sufferied alterations in some form, by our by
                            injected hsumour randomised worids which don't looks
                            even slightly there as believable. If you going to
                            use a passage of Lorem Ipsum.
                          </p>
                          <div className="content-bottom">
                            <h4 className="title">Karikoka Ahli</h4>
                            <span>Executive Manager</span>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="testimonial-avatar-wrap">
                <ul className="list-wrap">
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar01.png"
                      className="layer"
                      data-depth="0.1"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar02.png"
                      className="layer"
                      data-depth="0.2"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar03.png"
                      className="layer"
                      data-depth="0.05"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar03.png"
                      className="layer"
                      data-depth="0.2"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar02.png"
                      className="layer"
                      data-depth="0.05"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/img/images/h4_testi_avatar01.png"
                      className="layer"
                      data-depth="0.1"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* testimonial-area-end */}
        </div>
        {/* area-bg-end */}
        {/* brand-area */}
        <Brand3 />
      </Layout>
    </>
  );
}
