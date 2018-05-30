import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid-noGutter-noBottom">
          <div className="col-2_md-12" data-push-left="off-1_md-0">
            <div className="footer__label">Work Inquiries</div>
            <a href="mailto:yo@justinyoface.com">yo@justinyoface.com</a>
          </div>
          <div className="col-4_md-12">
            <div className="footer__label">Connect</div>
            <div className="footer__socialLinks">
              <a className="footer__socialLink" href="https://www.instagram.com/justinyoface/">
                <img src="/images/social/instagram.svg" alt="Instagram" />
              </a>
              <a className="footer__socialLink" href="https://dribbble.com/justinrodriguez">
                <img src="/images/social/dribbble.svg" alt="Dribbble" />
              </a>
              <a className="footer__socialLink" href="https://twitter.com/justinyoface">
                <img src="/images/social/twitter.svg" alt="Twitter" />
              </a>
              <a className="footer__socialLink" href="https://www.linkedin.com/in/justinrod/">
                <img src="/images/social/linkedIn.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="col-4_md-12">
            <div className="footer__credits">
              © {(new Date()).getFullYear()} Justin Rodriguez. All Rights Reserved.<br />
              Designed by Justin Rodriguez.<br />
              Built by <a href="https://www.steliosconstantinides.com">Stelios Constantinides</a>.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
