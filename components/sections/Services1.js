import Link from "next/link";
import { useState } from "react";
import { ServiceData } from "../data/serviceData";

function ServiceItem(props) {
  const aboutLink = "/services/" + props.id;
  return (
    <div className="col-lg-4 col-md-6 col-sm-10">
      <div
        className="services-item wow fadeInUp"
        data-wow-delay=".2s"
        data-background="/assets/img/services/services_item01.jpg"
        onMouseEnter={() => props.handleToggle(props.number)}
        onMouseLeave={() => props.handleToggle(props.number)}
      >
        <div
          className="services-icon"
          style={{
            display: `${props.isActive.key == props.number ? "none" : "flex"}`,
          }}
        >
          <img src={props.icon} alt="" />
        </div>
        <div className="services-content">
          <h2
            className="title"
            style={{
              display: `${
                props.isActive.key == props.number ? "none" : "block"
              }`,
            }}
          >
            <Link href={aboutLink}>{props.title}</Link>
          </h2>
          <h2 className="number">0{props.number}</h2>
        </div>
        <div
          className="services-overlay-content"
          style={{
            display: `${props.isActive.key == props.number ? "block" : "none"}`,
          }}
        >
          <h2 className="title">
            <Link href={aboutLink}>{props.title}</Link>
          </h2>
          <p>{props.description}</p>
          <Link href={aboutLink} className="read-more">
            Read More <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const serviceData = new ServiceData();
  const services = serviceData.findHighlights("areas");
  return (
    <>
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">What We Do</span>
                <h2 className="title tg-element-title">Our Services Areas</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <ServiceItem
                key={`service-${index}`}
                {...service}
                number={index + 1}
                handleToggle={handleToggle}
                isActive={isActive}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
