import * as React from "react"
import {CarouselProvider, Slider, Slide, DotGroup, ButtonBack, ButtonNext} from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
  return (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isPlaying={true}
        interval={6000}
        totalSlides={5}
      >
        <Slider>
          <Slide index={0}>Clark was my supervisor at Smith's, and he was excellent to work with. He is friendly and engaging, and is very invested in the well being of those he manages. He is also willing to take chances and learn as evidenced by taking on a front end supervisory role after working in a different department. He has been an excellent sounding board during my own coding journey. I always appreciate his insight and his support. <h3><i>- Jill Holmes, Software Engineer / Full Stack Web Developer</i></h3></Slide>
          <Slide index={1}>When I first met Clark, he was leading a meetup group for an underserved population of the tech industry in our community. Since then, he has shared his web development journey with me and asked for feedback along the way. This demonstrates Clark’s desire to lead, give back to his community and seek mentorship in the process. My interactions with Clark have been energizing and it's clear he's excited and committed to continued growth opportunities in tech. <h3><i>- Carlos Justiniano, Hands-On Engineering Leader</i></h3></Slide>
          <Slide index={2}>I worked and learned with Clark in Galvanize's full-stack web development immersive program for six months. From the very beginning, he was ready to acquaint himself with new colleagues and commit himself to success as a developer and leader. He is passionate about his work, values his relationships, and pays meticulous attention to detail. I've always admired his fearless approach to learning new tech, and his empowering, positive attitude. I would be thrilled to work with him again! <h3><i>- Roberto Santos, Director of Marketing and Web Admin</i></h3></Slide>
          <Slide index={3}>Clark and I began the Galvanize Web Development Immersive program at the same time. I was always impressed with his determination and passion. He would jump right into learning each new topic without hesitation. Throughout the course, he was always someone I could count on to answer any questions I had. He always had a plan of action and was successful in executing his workload each and every day. I watched him communicate with our instructors as well as the other students to make sure he received the information necessary to complete each task in an efficient and timely manner. <h3><i>- Pamela Yuhas, Editor X Expert</i></h3></Slide>
          <Slide index={4}>As Clark’s classmate at Galvanize, I've benefited from his creative problem-solving, tireless work ethic, and willingness to do whatever it takes to finish a project. Clark is incredibly generous with his time. Beyond that, I have to say that his humor and good nature make long days and tough deadlines much easier to handle. Through our time at Galvanize, I have come to realize that Clark is a real and passionate person and I would definitely want him as my teammate. <h3><i>- Jeffrey Burns, Assistant Store Manager</i></h3></Slide>
        </Slider>
        <DotGroup />
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
  )
}

export default Carousel