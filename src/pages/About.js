import React from 'react';
import { Helmet } from 'react-helmet';
import PreloadImage from 'react-preload-image';

import Footer from '../components/Footer';

class About extends React.Component {
  state = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    formProcessing: false,
    formSubmitted: false
  };

  handleChange = (e) => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ formProcessing: true });

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.state.formData })
        // Form name and fields must match those in index.html
      })
      .then(() => {
        this.setState({ formSubmitted: true });
      })
      .catch((error) => {
        this.setState({ formProcessing: false });
        alert("Sorry, something went wrong. Please email me at yo@justinyoface.com");
      });
  }

  encode = (data) => {
    return Object.keys(data).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    }).join('&');
  }

  render() {
    const { formData, formProcessing, formSubmitted } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title>Justin Rodriguez - Info</title>
        </Helmet>

        <div className="page">
          <main>
            <section className="aboutHero">
              <div className="grid-noGutter-noBottom aboutHero__topGrid">
                <div className="col-6_md-12 aboutHero__titleContainer" data-push-left="off-1_md-0">
                  <h1 className="aboutHero__title slideUp">Justin Rodriguez is a
                    designer, illustrator, and entrepreneur based in Chicago, IL USA.</h1>
                </div>

                <div className="col-4_md-12 aboutHero__portraitContainer">
                  <PreloadImage
                    className="aboutHero__portrait"
                    src="/images/justin-rodriguez.jpg"
                  />
                </div>
              </div>

              <div className="grid-noGutter-noBottom">
                <div className="col-5_md-12" data-push-left="off-2_md-0">
                  <div className="aboutHero__description">
                    <p>I’m a multidisciplinary designer, illustrator and entrepreneur whose work spans across visual design for digital experiences, product design, art direction, branding, illustration and apparel. I’m interested in working with bold brands that want to push their boundaries through compelling concepts, design and storytelling. I’m currently a designer at <a className="blueLink" href="http://www.factorsf.com/">Factor</a>.</p>

                    <p>I also I own and run <a className="blueLink" href="https://courseworkbrand.com/">Coursework</a> — a lifestyle brand and studio that inspires and represents creative culture.</p>
                  </div>
                </div>

                <div className="col-3_md-12" data-push-left="off-1_md-0">
                  <div className="aboutHero__links">
                    <h3 className="aboutHero__links__label">Elsewhere</h3>
                    <ul>
                      <li>
                        <a className="aboutHero__links__link blueLink" href="https://www.instagram.com/justinyoface/">Instagram</a>
                      </li>
                      <li>
                        <a className="aboutHero__links__link blueLink" href="https://dribbble.com/justinrodriguez">Dribbble</a>
                      </li>
                      <li>
                        <a className="aboutHero__links__link blueLink" href="https://twitter.com/justinyoface">Twitter</a>
                      </li>
                      <li>
                        <a className="aboutHero__links__link blueLink" href="https://www.linkedin.com/in/justinrod/">LinkedIn</a>
                      </li>
                      <li>
                        <a className="aboutHero__links__link blueLink" href="https://www.behance.net/justinrodriguez">Behance</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid-noGutter-noBottom">
                <div className="col-5_md-12" data-push-left="off-2_md-0">
                  <div className="aboutHero__resumeLink">
                    <a className="button" href="https://drive.google.com/open?id=1q42bWB5TudzxePvnFMagN4EUVG_ctMUC" target="_blank" rel="noopener noreferrer"><span>View Resume</span></a>
                  </div>
                </div>
              </div>
            </section>

            <section className="aboutServices">
              <h2 className="sectionLabel">Services</h2>

              <div className="grid-noGutter-noBottom">
                <div className="col-3_md-12" data-push-left="off-2_md-0">
                  <h3 className="aboutServices__label">Graphic Design</h3>
                  <ul>
                    <li className="aboutServices__service">Logo Design</li>
                    <li className="aboutServices__service">Branding & Naming</li>
                    <li className="aboutServices__service">Creative Direction</li>
                    <li className="aboutServices__service">Packaging</li>
                  </ul>
                </div>

                <div className="col-3_md-12">
                  <h3 className="aboutServices__label">Digital Design</h3>
                  <ul>
                    <li className="aboutServices__service">UX Design / IA</li>
                    <li className="aboutServices__service">Visual / UI Design</li>
                    <li className="aboutServices__service">Prototyping</li>
                    <li className="aboutServices__service">Animation</li>
                  </ul>
                </div>

                <div className="col-2_md-12" data-push-right="off-2_md-0">
                  <h3 className="aboutServices__label">Illustration</h3>
                  <ul>
                    <li className="aboutServices__service">Digital Illustration</li>
                    <li className="aboutServices__service">Lettering</li>
                    <li className="aboutServices__service">Iconography</li>
                    <li className="aboutServices__service">Apparel Graphics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="aboutClients">
              <h2 className="sectionLabel">Selected Clients</h2>

              <div className="grid-noBottom">
                <div className="col-2_sm-6" data-push-left="off-2_sm-0">
                  <div className="aboutClients__logo"
                    style={{
                      backgroundImage: "url('/images/clients/google.svg')"
                    }}
                  ></div>
                </div>
                <div className="col-2_sm-6" data-push-left="off-1_sm-0">
                  <div className="aboutClients__logo"
                    style={{
                      backgroundImage: "url('/images/clients/facebook.svg')"
                    }}
                  ></div>
                </div>
                <div className="col-2_sm-6" data-push-left="off-1_sm-0" data-push-right="off-2_sm-0">
                  <div className="aboutClients__logo"
                    style={{
                      backgroundImage: "url('/images/clients/caf.png')"
                    }}
                  ></div>
                </div>
                <div className="col-2_sm-6" data-push-left="off-2_sm-0">
                  <div className="aboutClients__logo"
                    style={{
                      backgroundImage: "url('/images/clients/pointdrive.svg')"
                    }}
                  ></div>
                </div>
                <div className="col-2_sm-6" data-push-left="off-1_sm-0">
                  <div className="aboutClients__logo"
                    style={{
                      backgroundImage: "url('/images/clients/cubs.svg')"
                    }}
                  ></div>
                </div>
                <div className="col-2_sm-6" data-push-left="off-1_sm-0" data-push-right="off-2_sm-0">
                  <div className="aboutClients__logo"
                    style={{
                      backgroundImage: "url('/images/clients/intel.svg')"
                    }}
                  ></div>
                </div>
              </div>
            </section>

            <section className="aboutBrand">
              <div className="grid-noGutter-noBottom">
                <div className="col-5_md-12 aboutBrand__imageContainer" data-push-left="off-1_md-0">
                  <PreloadImage
                    className="aboutBrand__image"
                    src="/images/shop.jpg"
                  />
                </div>

                <div className="col-3_md-12" data-push-left="off-1_md-0">
                  <h1 className="aboutBrand__title">I’m the founder of a brand called Coursework.</h1>

                  <p>Coursework is a lifestyle brand and creative studio that exists to inspire and represent a culture of individuals who do what they love.</p>

                  <p>The studio side is a brand-focused consultancy providing creative services in branding, design, art direction, photography, apparel and much more.</p>

                  <div className="aboutBrand__storeLink">
                    <a className="button" href="https://courseworkbrand.com/"><span>Visit Site</span></a>
                  </div>
                </div>
              </div>
            </section>

            <section className="aboutContact">
              <div className="grid-noGutter-noBottom">
                <div className="col-3_sm-10" data-push-left="off-1_sm-1">
                  <img className="aboutContact__title" src="/images/say-hey.svg" alt="Say Hey" />

                  <p>Interested in working together? I’m available for freelance UI design, graphic design, branding and illustration. Hit me up!</p>
                </div>
                <div className="col-6_sm-12 aboutContact__formContainer">
                  {!formSubmitted &&
                    <form
                      className="aboutContact__form"
                      onSubmit={this.handleSubmit}
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact"
                      />
                      <input
                        type="text"
                        name="bot-field"
                        className="hidden"
                      />
                      <input
                        type="text"
                        className="aboutContact__form__field"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        className="aboutContact__form__field"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="email"
                        className="aboutContact__form__field"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={this.handleChange}
                        required
                      />
                      <textarea
                        name="message"
                        className="aboutContact__form__field"
                        rows="1"
                        placeholder="Message..."
                        value={formData.message}
                        onChange={this.handleChange}
                        required
                      />

                      <button
                        type="submit"
                        className="button aboutContact__form__button"
                        disabled={formProcessing}
                      ><span>Send</span></button>
                    </form>
                  }

                  {formSubmitted &&
                    <div className="aboutContact__thanks">
                      Thanks for your message! I’ll get back to you shortly.
                    </div>
                  }
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default About;
