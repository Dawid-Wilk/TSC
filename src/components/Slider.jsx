import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dolphin from '../images/dolphin.jpg'
import bird from '../images/bird.jpg'
import tree from '../images/tree.jpg'
import sunset from '../images/sunset.jpg'
import fox from '../images/fox.jpg'
import mountain from '../images/mountain.jpg'
import leftArrow from '../images/left-arrow-slider.png'
import rightArrow from '../images/right-arrow-slider.png'

export const ImageSlider = () => {
  const CustomPrevArrow = (props) => (
    <div onClick={props.onClick} className="custom-prev-arrow">
              <img 
                  src={leftArrow}
                  alt="leftArrow"
              />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div onClick={props.onClick} className="custom-next-arrow">
       <img 
                  src={rightArrow}
                  alt="rightArrow"
              />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="grid-container">
          <div className="grid-row">
            <img className='small-image' src={fox} alt="Lis" />
            <img className='large-image' src={dolphin} alt="Delfin" />
            <img className='small-image' src={bird} alt="Ptak" />
          </div>
          <div className="grid-row">
            <img className='small-image' src={mountain} alt="Góry" />
            <img className='small-image' src={sunset} alt="Zachód" />
            <img className='large-image' src={tree} alt="Drzewo" />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-row">
            <img className='small-image' src={tree} alt="Drzewo" />
            <img className='large-image' src={mountain} alt="Góry" />
            <img className='small-image' src={sunset} alt="Zachód" />
          </div>
          <div className="grid-row">
            <img className='small-image' src={dolphin} alt="Delfin" />
            <img className='small-image' src={fox} alt="Lis" />
            <img className='large-image' src={bird} alt="Ptak" />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-row">
            <img className='small-image' src={sunset} alt="Zachód" />
            <img className='large-image' src={bird} alt="Ptak" />
            <img className='small-image' src={mountain} alt="Góry" />
          </div>
          <div className="grid-row">
            <img className='small-image' src={fox} alt="Lis" />
            <img className='small-image' src={dolphin} alt="Delfin" />
            <img className='large-image' src={tree} alt="Drzewo" />
          </div>
        </div>
      </Slider>
    </div>
  );
};