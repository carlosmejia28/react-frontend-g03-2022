import React from "react";
import { Carousel, Container } from "react-bootstrap";

function HomePage() {
    return(
       
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
        
    )
}export{HomePage}