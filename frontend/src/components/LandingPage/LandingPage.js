import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import api from "../../config";

const LandingPage = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from the API
    fetch(`${api}/blogs`)
      .then((response) => response.json())
      .then((data) => setLatestBlogs(data.slice(0, 3)))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleScroll = () => {
    const targetElement = document.getElementById('blogs');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Top Section */}
      <section id="intro" className="home-intro">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="intro-title title">
                Bringing Your Brand to Life, One Digital Experience at a Time
              </h1>
              <div className="intpro-content">
                <p>
                At Rudine Media Works, we specialize in crafting digital experiences that captivate audiences and drive results. Our expertise lies in two core areas: dynamic web design that brings your brand to life and strategic social media management that turns engagement into growth.
                We understand that in today's digital world, your online presence is your most valuable asset. That's why we're committed to delivering solutions that are not only visually stunning but also user-friendly and optimized for success. Whether you’re a small business looking to establish your brand or an established company aiming to elevate your digital game, we're here to help you shine.<br/>
                <h3>Let’s build your digital future—together</h3>
                </p>
                <Button className="btn btn-contact btn-pill btn-blue btn-lg">
                  Let's Talk
                </Button>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={5} className="hero-img">
              {/* <img
                src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706954714/uploads/rai/cygmbowumcgiihfqj7vq.png"
                width="90%"
                alt="web-img"
              /> */}
              <img src="../1_HYAS_0060_WEB_HEADER_UPDATE_620x490_v2.webp" alt="RUDINE Productions img" />
            </Col>
          </Row>
          <div
            id="scrollDown"
            onClick={handleScroll}
            style={{ cursor: "pointer" }}
          >
            <span className="icon"></span>
            <span className="text">Scroll down</span>
          </div>
        </Container>
      </section>

      <section id="whatWeDo" className="what-we-do-section text-center py-5">
        <Container>
          <h2 className="mb-5">What We Do</h2>
          <Row className="justify-content-center">
            {/* Service Card 1 */}
            <Col md={6} className="mb-6">
              <div className="service-card">
                <h3>Staff Augmentation & On-Demand Teams</h3>
                <p>
                  Looking for software engineers with a specific skill set to fill talent gaps? Get experienced and scalable Dedicated Software Development Teams hand-picked to handle your IT Project Delivery within a given time frame.
                  <br/><br/>
                  <img src="../Elixer.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Magento.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../MongoDB.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../NodeJS.svg" width="7%" />
                </p>
              </div>
            </Col>

            {/* Service Card 2 */}
            <Col md={6} className="mb-6">
              <div className="service-card">
                <h3>Ecommerce</h3>
                <p>
                  Partner with a trusted eCommerce website development company to scale your business online. We create high conversion websites and also provide managed ecommerce services for continued operations.
                  <br/><br/>
                  <img src="../open-cart.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Magento.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../shopify-svgrepo-com.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../woocommerce.svg" width="7%" />
                </p>
              </div>
            </Col>

            {/* Service Card 3 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Software Development</h3>
                <p>
                  Whether you have a greenfield project or an existing one, Dezital is your one-stop service provider for all your software development needs. We do web, mobile and desktop development as per your requirements.
                </p>
              </div>
            </Col>

            {/* Service Card 4 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Social Media Marketing</h3>
                <p>
                  We help you with social media management and advertising to
                  help you grow your business and reach new clients.
                </p>
              </div>
            </Col>

            {/* Service Card 5 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Content Marketing</h3>
                <p>
                  Content marketing helps you increase online visibility, traffic,
                  and brand awareness. We offer effective SEO-copywriting that
                  resonates with your target audience.
                </p>
              </div>
            </Col>

            {/* Service Card 6 */}
            <Col md={6} className="mb-6">
              <div className="service-card">
                <h3>Digital Marketing Strategy</h3>
                <p>
                  Present your brand to the world and unleash your reach and potential to the fullest. Partner with a full service digital marketing agency who can ignite growth for your business on FB, Instagram, LinkedIN and many other.
                  <br/><br/>
                  <img src="../Facebook.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Instagram.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Linkedin.svg" width="7%" />
                </p>
              </div>
            </Col>

            <Col md={6} className="mb-6">
              <div className="service-card">
                <h3>Blockchain Development</h3>
                <p>
                  We help businesses leverage decentralized networks and software solutions built on blockchain technology to take it to whole new level of trust, security, transparency, and the traceability into their processes.
                  <br/><br/>
                  <img src="../Ethereum.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Hyperledger.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Mist.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Simplycity.svg" width="7%" />&nbsp;&nbsp;
                  <img src="../Solidity.svg" width="7%" />
                </p>
              </div>
            </Col>

          </Row>

          {/* "Show More" Button */}
          <Button variant="outline-primary" className="mt-4">
            Explore Our Services
          </Button>
        </Container>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="blog-section text-center py-3">
        <Container>
          <h2 className="text-center mb-4">Latest Blogs</h2>
          <Row className="mb-4">
            {latestBlogs.map((blog, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                xs={12}
              >
                <Card className="blog-card" style={{ minHeight: "350px" }}>
                  <Card.Img
                    variant="top"
                    src={blog.imageUrl}
                    className="blog-img"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Link to="/blog">
                      <Button variant="primary">Read More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
