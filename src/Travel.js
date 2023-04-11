import React from 'react';
import './travel_template.css';
import { Icon } from '@iconify/react';


function Travel() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tourest - Explore the World</title>
     

    <header className="header" data-header>
      <div className="container">
        <a href="#">
          <h1 className="logo">Tourest</h1>
        </a>
        <button className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
          <ion-icon name="menu-outline" className="open" />
          <ion-icon name="close-outline" className="close" />
        </button>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="#about" className="navbar-link">About Us</a>
            </li>
            <li>
              <a href="#tour" className="navbar-link">Tours</a>
            </li>
            <li>
              <a href="#dest" className="navbar-link">Destinations</a>
            </li>
            <li>
              <a href="#blog" className="navbar-link">Blog</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">Contact Us</a>
            </li>
          </ul>
          <a href="#contact" className="btn btn-secondary">Booking Now</a>
        </nav>
      </div>
    </header>
    <main>
      <article>
        {/* 
    - #HERO
  */}
        <section className="section hero">
          <div className="container">
            <img src="shape-1.png" width={61} height={61} alt="Vector Shape" className="shape shape-1" />
            <img src="shape-2.png" width={56} height={74} alt="Vector Shape" className="shape shape-2" />
            <img src="shape-3.png" width={57} height={72} alt="Vector Shape" className="shape shape-3" />
            <div className="hero-content">
              <p className="section-subtitle">Explore Your Travel</p>
              <h2 className="hero-title">Trusted Travel Agency</h2>
              <p className="hero-text">
                I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
              </p>
              <div className="btn-group">
                <a href="#contact" className="btn btn-primary">Contact Us</a>
                <a href="#dest" className="btn btn-outline">Learn More</a>
              </div>
            </div>
            <figure className="hero-banner">
              <img src="hero-banner.png" width={686} height={812} loading="lazy" alt="hero banner" className="w-100" />
            </figure>
          </div>
        </section>
        {/* 
    - #DESTINATION
  */}
        <section className="section destination">
          <div className="container" id="dest">
            <p className="section-subtitle">Destinations</p>
            <h2 className="h2 section-title">Choose Your Place</h2>
            <ul className="destination-list">
              <li className="w-50">
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img src="destination-1.jpg" width={1140} height={1100} loading="lazy" alt="Malé, Maldives" className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle">Malé</p>
                    <h3 className="h3 card-title">Maldives</h3>
                  </div>
                </a>
              </li>
              <li className="w-50">
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img src="destination-2.jpg" width={1140} height={1100} loading="lazy" alt="Bangkok, Thailand" className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle">Bangkok</p>
                    <h3 className="h3 card-title">Thailand</h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img src="destination-3.jpg" width={1110} height={480} loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle">Kuala Lumpur</p>
                    <h3 className="h3 card-title">Malaysia</h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img src="destination-4.jpg" width={1110} height={480} loading="lazy" alt="Kathmandu, Nepal" className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle">Kathmandu</p>
                    <h3 className="h3 card-title">Nepal</h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img src="destination-5.jpg" width={1110} height={480} loading="lazy" alt="Jakarta, Indonesia" className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle">Jakarta</p>
                    <h3 className="h3 card-title">Indonesia</h3>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #POPULAR
  */}
        <section className="section popular" id="tour">
          <div className="container">
            <p className="section-subtitle">Featured Tours</p>
            <h2 className="h2 section-title">Most Popular Tours</h2>
            <ul className="popular-list">
              <li>
                <div className="popular-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img src="popular-1.jpg" width={740} height={518} loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover" />
                    </a>
                    <span className="card-badge">
                    <Icon icon="ion:time-outline" /><br></br>
                      <time dateTime="P12D">12 Days</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    
                    <div className="card-wrapper">
                      <div className="card-price">From $50.00</div>
                      <div className="card-rating">
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star-outline" />


                        
                        <data value={2}>(2)</data>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                    </h3>
                    <address className="card-location">Kuala Lumpur, Malaysia</address>
                  </div>
                </div>
              </li>
              <li>
                <div className="popular-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img src="popular-2.jpg" width={740} height={518} loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover" />
                    </a>
                    <span className="card-badge">
                    <Icon icon="ion:time-outline" /><br></br>
                      <time dateTime="P12D">12 Days</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-price">From $50.00</div>
                      <div className="card-rating">
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star-outline" />
                        <data value={2}>(2)</data>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                    </h3>
                    <address className="card-location">Kuala Lumpur, Malaysia</address>
                  </div>
                </div>
              </li>
              <li>
                <div className="popular-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img src="popular-3.jpg" width={740} height={518} loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover" />
                    </a>
                    <span className="card-badge">
                    <Icon icon="ion:time-outline" /><br></br>
                      <time dateTime="P12D">12 Days</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-price">From $50.00</div>
                      <div className="card-rating">
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star" />
                      <Icon icon="ion:star-outline" />
                        <data value={2}>(2)</data>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                    </h3>
                    <address className="card-location">Kuala Lumpur, Malaysia</address>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #ABOUT
  */}
        <section className="section about" >
          <div className="container">
            <div className="about-content" id="about">
              <p className="section-subtitle">About Us</p>
              <h2 className="h2 section-title">Explore all tour of the world with us.</h2>
              <p className="about-text">
              Exploring all tours of the world is a dream for many people. 
              </p>
              <ul className="about-list">
                <li className="about-item">
                  <div className="about-item-icon">
                  <Icon icon="ion:compass" />

                  </div>
                  <div className="about-item-content">
                    <h3 className="h3 about-item-title">Tour guide</h3>
                    <p className="about-item-text">
                    A tour guide is a professional who leads a group of travelers or tourists to various attractions or destinations. </p>
                  </div>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                  <Icon icon="ion:briefcase" />
                  </div>
                  <div className="about-item-content">
                    <h3 className="h3 about-item-title">Friendly price</h3>
                    <p className="about-item-text">
                    Planning and organizing itineraries, activities, and accommodations for travelers.
                    </p>
                  </div>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                  <Icon icon="ion:briefcase" />
                  </div>
                  <div className="about-item-content">
                    <h3 className="h3 about-item-title">Reliable tour</h3>
                    <p className="about-item-text">
                    Leading groups of tourists and providing information about the places.</p>
                  </div>
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary">Booking Now</a>
            </div>
            <figure className="about-banner">
              <img src="about-banner.png" width={756} height={842} loading="lazy" alt="" className="w-100" />
            </figure>
          </div>
        </section>
        {/* 
    - #BLOG
  */}
        <section className="section blog" >
          <div className="container" id="blog">
            <p className="section-subtitle">From The Blog Post</p>
            <h2 className="h2 section-title">Latest News &amp; Articles</h2>
            <ul className="blog-list">
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img src="popular-1.jpg" width={740} height={518} loading="lazy" alt="A good traveler has no fixed plans and is not intent on arriving." className="img-cover" />
                    </a>
                    <span className="card-badge">
                    <Icon icon="ion:arrow-forward-outline" />

                      <time dateTime="12-04">04 Dec</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="author-wrapper">
                        <figure className="author-avatar">
                          <img src="author-avatar.png" width={30} height={30} alt="Jony bristow" />
                        </figure>
                        <div>
                          <a href="#" className="author-name">Jony bristow</a>
                          <p className="author-title">Admin</p>
                        </div>
                      </div>
                      <time className="publish-time" dateTime="10:30">10:30 AM</time>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        A good traveler has no fixed plans and is not intent on arriving.
                      </a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <Icon icon="ion:arrow-forward-outline" />

                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img src="blog-2.jpg" width={740} height={518} loading="lazy" alt="A good traveler has no fixed plans and is not intent on arriving." className="img-cover" />
                    </a>
                    <span className="card-badge">
                    <Icon icon="ion:arrow-forward-outline" />

                      <time dateTime="12-04">04 Dec</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="author-wrapper">
                        <figure className="author-avatar">
                          <img src="author-avatar.png" width={30} height={30} alt="Jony bristow" />
                        </figure>
                        <div>
                          <a href="#" className="author-name">Jony bristow</a>
                          <p className="author-title">Admin</p>
                        </div>
                      </div>
                      <time className="publish-time" dateTime="10:30">10:30 AM</time>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        A good traveler has no fixed plans and is not intent on arriving.
                      </a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <Icon icon="ion:arrow-forward-outline" />

                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img src="blog-3.jpg" width={740} height={518} loading="lazy" alt="A good traveler has no fixed plans and is not intent on arriving." className="img-cover" />
                    </a>
                    <span className="card-badge">
                    <Icon icon="ion:arrow-forward-outline" />

                      <time dateTime="12-04">04 Dec</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="author-wrapper">
                        <figure className="author-avatar">
                          <img src="author-avatar.png" width={30} height={30} alt="Jony bristow" />
                        </figure>
                        <div>
                          <a href="#" className="author-name">Jony bristow</a>
                          <p className="author-title">Admin</p>
                        </div>
                      </div>
                      <time className="publish-time" dateTime="10:30">10:30 AM</time>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        A good traveler has no fixed plans and is not intent on arriving.
                      </a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <Icon icon="ion:arrow-forward-outline" />

                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
      
    </main>
    <p className="section-subtitle">contact us</p>
    <div className="contact-us-section" id="contact">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required defaultValue={""} />
          <button type="submit">Submit</button>
        </form>
      </div>
    <br></br>
    <br></br>
    {/* 
- #FOOTER
*/}
    <footer className="footer" >
      <div className="container">
        <div className="footer-top">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Top destination</p>
            </li>
            <li>
              <a href="#" className="footer-link">Indonesia, Jakarta</a>
            </li>
            <li>
              <a href="#" className="footer-link">Maldives, Malé</a>
            </li>
            <li>
              <a href="#" className="footer-link">Australia, Canberra</a>
            </li>
            <li>
              <a href="#" className="footer-link">Thailand, Bangkok</a>
            </li>
            <li>
              <a href="#" className="footer-link">Morocco, Rabat</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Categories</p>
            </li>
            <li>
              <a href="#" className="footer-link">Travel</a>
            </li>
            <li>
              <a href="#" className="footer-link">Lifestyle</a>
            </li>
            <li>
              <a href="#" className="footer-link">Fashion</a>
            </li>
            <li>
              <a href="#" className="footer-link">Education</a>
            </li>
            <li>
              <a href="#" className="footer-link">Food &amp; Drink</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Quick links</p>
            </li>
            <li>
              <a href="#about" className="footer-link">About</a>
            </li>
            <li>
              <a href="#contact" className="footer-link">Contact</a>
            </li>
            <li>
              <a href="#tour" className="footer-link">Tours</a>
            </li>
            <li>
              <a href="#contact" className="footer-link">Booking</a>
            </li>
            <li>
              <a href="#about" className="footer-link">Terms &amp; Conditions</a>
            </li>
          </ul>
          <div className="footer-list">
            <p className="footer-list-title">Get a newsletter</p>
            <p className="newsletter-text">
              For the latest deals and tips, travel no further than your inbox
            </p>
            <form action className="newsletter-form">
              <input type="email" name="email" required placeholder="Email address" className="newsletter-input" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="#" className="logo">Tourest</a>
          <p className="copyright">
            © 2022 <a href="#" className="copyright-link"></a>. All Rights Reserved
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
              <Icon icon="ion:logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
              <Icon icon="ion:logo-twitter" />

              </a>
            </li>
            <li>
              <a href="#" className="social-link">
              <Icon icon="carbon:logo-instagram" />

              </a>
            </li>
            <li>
              <a href="#" className="social-link">
              <Icon icon="carbon:logo-instagram" />

              </a>
            </li>
            <li>
              <a href="#" className="social-link">
              <Icon icon="ion:logo-google" />

              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    {/* 
- #GO TO TOP
*/}
    <a href="#top" className="go-top" data-go-top aria-label="Go To Top">
    <Icon icon="ion:chevron-up-outline" />

    </a>
    {/* 
- custom js link
*/}
    {/* 
- ionicon link
*/}
  </div>
);
}
export default Travel;
