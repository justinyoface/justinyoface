import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import Bricks from 'bricks.js';
import Slider from 'react-slick';

import Footer from '../components/Footer';

class Home extends React.Component {
  images = [
    '/images/grid/3609_sheffield.jpg',
    '/images/grid/1980shorrormovies.jpg',
    '/images/grid/airyordan1_dribbble.jpg',
    '/images/grid/coursewrkkid_tee1.jpg',
    '/images/grid/feb_coursewrkwaves.png',
    '/images/grid/guy.gif',
    '/images/grid/houseofcards.jpg',
    '/images/grid/illustrationexperiment_800x600.jpg',
    '/images/grid/luckyprints_icons-02.jpg',
    '/images/grid/mrmiller_dribbble_800x600.jpg',
    '/images/grid/neverlosesight_dribbble.jpg',
    '/images/grid/parkpeeps.png',
    '/images/grid/pencil_c_dribbble.jpg',
    '/images/grid/poweruser_dribbble.gif',
    '/images/grid/smackpack_dribbble-03.jpg',
    '/images/grid/snapbacks.jpg',
    '/images/grid/toritorsion_logo.jpg',
    '/images/grid/treatyourself-01.jpg',
    '/images/grid/treatyourself-02.jpg',
    '/images/grid/truth_dryink_light_update_800x600.jpg',
    '/images/grid/truthlabs_textureexperiment.jpg',
  ];

  state = {
    preloadedImages: false,
    gridReady: false,
    lightboxOpen: false
  };

  componentDidMount() {
    this.preloadImages().then(() => {
      this.setState({ preloadedImages: true }, () => {
        this.initGrid();
      });
    });

    document.addEventListener('keydown', this.closeLightboxIfEsc, false);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.closeLightboxIfEsc, false);
  }

  preloadImages = () => {
    let preloaders = [];

    this.images.forEach(image => {
      preloaders.push(this.preloadImage(image));
    });

    return Promise.all(preloaders);
  };

  preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = src;
    });
  };

  initGrid = () => {
    const sizes = [
      { columns: 1, gutter: 20 },
      { mq: '768px', columns: 2, gutter: 24 },
      { mq: '1024px', columns: 3, gutter: 24 },
      { mq: '1280px', columns: 4, gutter: 24 }
    ];

    const grid = Bricks({
      container: '.latestGrid',
      packed: 'data-packed',
      sizes: sizes
    });

    grid.resize(true);
    grid.on('pack', () => this.setState({ gridReady: true }));
    grid.pack();
  };

  openLightbox = (index) => {
    if (!this.slider || window.innerWidth <= 768) return;

    this.slider.slickGoTo(index, true);
    this.setState({ lightboxOpen: true });
  };

  closeLightbox = () => {
    this.setState({ lightboxOpen: false });
  }

  closeLightboxIfEsc = (event) => {
    if (event.keyCode === 27) this.closeLightbox();
  }

  render() {
    const sliderSettings = {
      cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      infinite: false,
      lazyLoad: 'progressive',
      speed: 300,
      touchThreshold: 20,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [{
        breakpoint: 1024,
        settings: {
          speed: 200
        }
      }]
    };

    return (
      <React.Fragment>
        <Helmet>
          <title>Justin Rodriguez</title>
        </Helmet>

        <div className="page">
          <main className="grid-noGutter-noBottom">
            <div className="col-10_sm-12" data-push-left="off-1_sm-0">
              <section className="homeHero">
                <h1 className="homeHero__title">The Art & Design Work  of Justin Rodriguez</h1>
                <div className="homeHero__description">Scroll down and see what miscellaneous work I’ve been up to.</div>
              </section>

              <section className="gridContainer">
                {!this.state.gridReady && <img className="gridContainer__loader" src="/images/grid-loader.svg" alt="" />}

                <div className={classNames(
                  'latestGrid',
                  { 'latestGrid--ready': this.state.gridReady }
                )}>
                  {this.images.map((image, index) => (
                    <img
                      key={index}
                      className="latestGrid__image"
                      src={image}
                      alt=""
                      onClick={() => this.openLightbox(index)}
                    />
                  ))}
                </div>
              </section>

              <section className="nextSection">
                <Link
                  className="nextSection__link"
                  to="/case-studies"
                >
                  <span className="text">See more work in Case Studies</span>
                  <img src="/images/icons/blue-arrow.svg" alt="" />
                </Link>
              </section>

              <div className={classNames(
                'latestLightbox',
                { 'latestLightbox--open': this.state.lightboxOpen }
              )}>
                <div
                  className="latestLightbox__close"
                  onClick={() => this.closeLightbox()}
                ><img src="/images/icons/close.svg" alt="close lightbox" /></div>

                <Slider
                  ref={el => this.slider = el}
                  {...sliderSettings}
                >
                  {this.images.map((image, index) => {
                    return (
                      <div key={index}>
                        <div
                          className="slider__image"
                          style={{ backgroundImage: `url(${image})` }}
                        ></div>
                      </div>
                    )}
                  )}
                </Slider>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const PrevArrow = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
    >
      <img src="/images/icons/previous.svg" alt="previous" />
    </button>
  );
};

const NextArrow = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
    >
      <img src="/images/icons/next.svg" alt="next" />
    </button>
  );
};

export default Home;
