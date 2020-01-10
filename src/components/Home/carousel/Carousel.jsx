
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
class SlideShow extends React.Component{
  render(){
  return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.adsttc.com/media/images/50f9/c97c/b3fc/4b5b/1800/00fc/newsletter/student_projects.jpg?1361402789"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rmit.edu.au/content/dam/rmit/rmit-images/marketing-only/ia--sia-original/sia_civil_engineering_landscape.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.voicefoundry.com.au/wp-content/uploads/2019/01/RMIT-showcase-e1548196915148.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.simge.edu.sg/wp-content/uploads/2019/01/sim005401.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>

  )
}
}
export default SlideShow;
