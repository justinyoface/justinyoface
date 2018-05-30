import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PreloadImage from 'react-preload-image';

import Footer from '../components/Footer';

class CaseStudies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Justin Rodriguez - Case Studies</title>
        </Helmet>

        <div className="page">
          <main>
            <section className="caseStudies">
              <div className="grid-noGutter-noBottom">
                <div className="col-10_sm-12" data-push-left="off-1_sm-0">
                  <div className="caseStudy">
                    <div className="grid-noGutter-noBottom">
                      <div className="col-5_md-7_sm-12 caseStudy__content">
                        <h2 className="caseStudy__content__title">The Park at Wrigley</h2>
                        <div className="sectionLabel caseStudy__content__label">Digital Interactive</div>
                        <a
                          className="button"
                          href=""
                        >View Project</a>
                      </div>
                      <div className="col-7_md-5_sm-12 caseStudy__imageContainer">
                        <PreloadImage
                          className="caseStudy__image"
                          src="/images/cases/park-at-wrigley.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="caseStudy">
                    <div className="grid-noGutter-noBottom">
                      <div className="col-5_md-7_sm-12 caseStudy__content">
                        <h2 className="caseStudy__content__title">Pointdrive</h2>
                        <div className="sectionLabel caseStudy__content__label">Web Application</div>
                        <a
                          className="button"
                          href=""
                        >View Project</a>
                      </div>
                      <div className="col-7_md-5_sm-12 caseStudy__imageContainer">
                        <PreloadImage
                          className="caseStudy__image"
                          src="/images/cases/pointdrive.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="caseStudy">
                    <div className="grid-noGutter-noBottom">
                      <div className="col-5_md-7_sm-12 caseStudy__content">
                        <h2 className="caseStudy__content__title">Your Data Trail</h2>
                        <div className="sectionLabel caseStudy__content__label">Digital Interactive</div>
                        <a
                          className="button"
                          href=""
                        >View Project</a>
                      </div>
                      <div className="col-7_md-5_sm-12 caseStudy__imageContainer">
                        <PreloadImage
                          className="caseStudy__image"
                          src="/images/cases/data-stories.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="caseStudy">
                    <div className="grid-noGutter-noBottom">
                      <div className="col-5_md-7_sm-12 caseStudy__content">
                        <h2 className="caseStudy__content__title">Vamonde</h2>
                        <div className="sectionLabel caseStudy__content__label">App / Website / Builder</div>
                        <a
                          className="button"
                          href=""
                        >View Project</a>
                      </div>
                      <div className="col-7_md-5_sm-12 caseStudy__imageContainer">
                        <PreloadImage
                          className="caseStudy__image"
                          src="/images/cases/vamonde.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="caseStudy">
                    <div className="grid-noGutter-noBottom">
                      <div className="col-5_md-7_sm-12 caseStudy__content">
                        <h2 className="caseStudy__content__title">Wrigley Rooftops</h2>
                        <div className="sectionLabel caseStudy__content__label">Ticketing Website</div>
                        <a
                          className="button"
                          href=""
                        >View Project</a>
                      </div>
                      <div className="col-7_md-5_sm-12 caseStudy__imageContainer">
                        <PreloadImage
                          className="caseStudy__image"
                          src="/images/cases/wrigley-rooftops.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="nextSection">
              <Link
                className="nextSection__link"
                to="/info"
              >
                <span className="text">Like what you see? Meet Justin</span>
                <img src="/images/icons/blue-arrow.svg" alt="" />
              </Link>
            </section>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default CaseStudies;
