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
import { useState, useRef } from 'react';

export const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const popupRef = useRef(null);

  const PrevArrow = (props) => (
    <div onClick={props.onClick} className="prev-arrow">
      <img 
        src={leftArrow}
        alt="leftArrow"
      />
    </div>
  );

  const NextArrow = (props) => (
    <div onClick={props.onClick} className="next-arrow">
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const imageOnClick = (srcImg) => {
    setSelectedImage(srcImg);
  };

  const clickOnBackground = (e) => {
    if (e.target === popupRef.current) {
      setSelectedImage('')
    }
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="grid-container">
          <div className="grid-row">
            <img className='small-image' src={fox} alt="Lis" onClick={() => imageOnClick(fox)} />
            <img className='large-image' src={dolphin} alt="Delfin" onClick={() => imageOnClick(dolphin)} />
            <img className='small-image' src={bird} alt="Ptak" onClick={() => imageOnClick(bird)} />
          </div>
          <div className="grid-row">
            <img className='small-image' src={mountain} alt="Góry" onClick={() => imageOnClick(mountain)} />
            <img className='small-image' src={sunset} alt="Zachód" onClick={() => imageOnClick(sunset)} />
            <img className='large-image' src={tree} alt="Drzewo" onClick={() => imageOnClick(tree)} />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-row">
            <img className='small-image' src={dolphin} alt="Delfin" onClick={() => imageOnClick(dolphin)} />
            <img className='large-image' src={bird} alt="Ptak" onClick={() => imageOnClick(bird)} />
            <img className='small-image' src={fox} alt="Lis" onClick={() => imageOnClick(fox)} />
          </div>
          <div className="grid-row">
            <img className='small-image' src={mountain} alt="Góry" onClick={() => imageOnClick(mountain)} />
            <img className='small-image' src={fox} alt="Lis" onClick={() => imageOnClick(fox)} />
            <img className='large-image' src={tree} alt="Drzewo" onClick={() => imageOnClick(tree)}/>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-row">
            <img className='small-image' src={sunset} alt="Zachód" onClick={() => imageOnClick(sunset)} />
            <img className='large-image' src={bird} alt="Ptak" onClick={() => imageOnClick(bird)} />
            <img className='small-image' src={mountain} alt="Góry" onClick={() => imageOnClick(mountain)} />
          </div>
          <div className="grid-row">
            <img className='small-image' src={tree} alt="Drzewo" onClick={() => imageOnClick(tree)} />
            <img className='small-image' src={dolphin} alt="Delfin" onClick={() => imageOnClick(dolphin)} />
            <img className='large-image' src={tree} alt="Drzewo" onClick={() => imageOnClick(tree)} />
          </div>
        </div>
      </Slider>
      {selectedImage && (
        <div className="popup" ref={popupRef} onClick={clickOnBackground}>
          <img src={selectedImage} alt='popup image' />
          <button className="close-button" onClick={() => setSelectedImage('')}>
            <span></span>
          </button>
        </div>
      )}
    </div>
  );
};