import Slider from "react-slick";
import testimonialData from "../data/testimonialData";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function TestimonialItem(props) {
  return (
    <div className="testimonial-item">
      <div className="testimonial-icon">
        <i className="fas fa-quote-left" />
      </div>
      <div className="testimonial-content">
        <p>{props.quote}</p>
      </div>
      <div className="testimonial-avatar">
        <div className="avatar-thumb">
          <img src="/assets/img/images/testi_avatar01.png" alt="" />
        </div>
        <div className="avatar-content">
          <h6 className="title">{props.name}</h6>
          <p>{props.profession}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial1() {
  return (
    <>
      <section className="testimonial-area pt-115 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="testimonial-img">
                <img src="/assets/img/images/testimonial_img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Our Testimonial
                  </span>
                  <h2 className="title tg-element-title">
                    Some of Our Respected Happy Clients Says
                  </h2>
                </div>
                <Slider {...settings} className="testimonial-active">
                  {testimonialData.map((item, index) => (
                    <TestimonialItem key={`testimonial-${index}`} {...item} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
