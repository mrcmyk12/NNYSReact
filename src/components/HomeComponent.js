import React, { useState } from 'react';
import { Card, CardImg, CardBody, Carousel, CarouselItem, CarouselControl, 
  CarouselIndicators, CarouselCaption } from 'reactstrap';
import { slideInRight, slideInDown, fadeInDownBig } from 'react-animations';

import Radium, { StyleRoot } from 'radium';


const styles = {
  slideInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInDown, 'slideInDown')
  },
  slideInRight: {
    animation:'x 1s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  },
  fadeInDownBig:{
    animation:'x 3s',
    animationName:Radium.keyframes(fadeInDownBig,'fadeInDownBig')
  }
}

function RenderParagraph() {
  return(
    <StyleRoot style={styles.fadeInDownBig}>
      <div className='col'>
      <div>
          <CardImg width='100%' className='card_image' src='/assets/images/logo.png'></CardImg>
      </div>
          <p className = 'welcome_paragraph'>Give your child the gift of sports.  Create lasting memories 
          while watching your child set the foundations they'll carry with them for the rest of their lives.  At NYS,
          we believe your childs growth is paramount.  And with leagues from Beginner to All-Star, there's a place
          for everyone.  So from ages young to old, lace them up and get out and compete.  We  can growth
          with you child and help equip them with the skills needed in life. Instill in your kids a will to
          succeed in a supportive and safe environment.<strong> NYS, Where Kid's Have a Ball.</strong></p>
      </div>  
    </StyleRoot>
  )
}


const items = [
    {
      src: '/assets/images/baseball.png',
      altText: 'Slide 1',
      caption: 'Baseball'
    },
    {
        src: '/assets/images/basketball.png',
        altText: 'Slide 1',
        caption: 'Basketball'
    },
    {
        src: '/assets/images/cheerleading.jpg',
        altText: 'Slide 1',
        caption: 'Cheerleading'
    },
    {
        src: '/assets/images/flag_football.jpg',
        altText: 'Slide 1',
        caption: 'Flag Football'
    },
    {
        src: '/assets/images/soccer.jpg',
        altText: 'Slide 1',
        caption: 'Soccer'
    },
    {
        src: '/assets/images/tackle_football.jpg',
        altText: 'Slide 1',
        caption: 'Tackle Football'
    },
    {
        src: '/assets/images/volleyball.png',
        altText: 'Slide 1',
        caption: 'Volleyball'
    },
    

  ];
  
  const Home = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className='carousel_title' captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
    <React.Fragment>
      <Card>
        <CardBody>
            <div className="col" >
            <Carousel 
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            </div> 
            <RenderParagraph />
        </CardBody>       
    </Card>
</React.Fragment>
      
    );
  }
  
  export default Home;