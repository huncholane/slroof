import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout breadcrumbTitle="Contact Us">
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div
                  className="contact-form-wrap"
                  data-background="/assets/img/images/contact_form_bg.jpg"
                >
                  <h2 className="title">Contact With Us</h2>
                  <p>
                    Send us a message and we' ll respond as soon as possible
                  </p>
                  <form action="#" className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="firstName"
                            type="text"
                            placeholder="First Name*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="email"
                            type="email"
                            placeholder="Email Address*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Phone Number*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <input id="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="form-grp">
                      <textarea id="message" placeholder="Your Message here" />
                    </div>
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div className="contact-info-wrap">
                  <h2 className="title">Need Any Help?</h2>
                  <p>
                    Call us or message and we' ll respond as soon as possible
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="content">
                          <Link href="tel:018168988598">+(816) 898 9598</Link>
                          <Link href="tel:018166654838">+(816) 665 4838</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="content">
                          <Link href="mailto:infoyour@gmail.com">
                            infoyour@gmail.com
                          </Link>
                          <Link href="mailto:zack@monkewifhat.com">
                            zack@monkewifhat.com
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <p>
                            3328, North Trade Winds <br /> Kansas City, MO, USA
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* contact-map */}
                <div id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396369.7968760607!2d-94.5757195!3d39.091919000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2sKansas%20City%2C%20MO!5e0!3m2!1sen!2sus!4v1718680340132!5m2!1sen!2sus"
                    height={570}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* contact-map-end */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
