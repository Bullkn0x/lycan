import React, {Component} from 'react';

class Welcome extends Component {
  render() {
    return (<section id="portfolio">
      <div className="container-fluid">
        <h2>Our Work</h2>
        <hr className="sep"/>
        <p>Showcase Your Amazing Work With Us</p>
        <div className="row">
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <a className="portfolio-box" href="https://steemitimages.com/0x0/https://steemitimages.com/DQmQWQj9ExXmCseabpxGMtLB3kFqk9Y4pCcQaz4CWeSudjA/image.png" data-lightbox="image-1" data-title="Your caption">
              <img src="https://preview.ibb.co/jVWtSo/Bite_My_Coin_Cryptocurrency_1.png" className="img-responsive" alt={1}/>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Crypto Currency Trading Bot
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <a href="http://www.noventasclothing.com/wp-content/uploads/2018/03/BOSSfrente.jpg" className="portfolio-box" data-lightbox="image-2" data-title="Your caption">
              <img src="https://preview.ibb.co/fmn3tT/Bite_My_Coin_Cryptocurrency.png" className="img-responsive" alt={2}/>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Mining Operating System
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <a href="http://www.noventasclothing.com/wp-content/uploads/2018/03/BOSSfrente.jpg" className="portfolio-box" data-lightbox="image-6" data-title="Your caption">
              <img src="https://lh3.googleusercontent.com/Cn7vA-Zx8AZfFGFvU8S0LCnl0uL1EgFPFFLeEkfDXcMH66xMcjEDmBwZ1oxnP4XF9BwCfCLT=w640-h400-e365" className="img-responsive" alt={6}/>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Decentralized Streaming Platform
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>);
  }
}

export default Welcome;
