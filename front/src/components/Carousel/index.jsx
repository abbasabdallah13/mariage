import "./index.scss";
import { useState, useEffect } from "react";

const Carousel = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [translateValue, setTranslateValue] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlay) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const nextSlide = () => {
    if (currentIndex === length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setTranslateValue(currentIndex * -100);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(${translateValue}%)`,
              transition: isTransition ? "transform ease-out 0.45s" : "none",
            }}
          >
            {children.map((child, index) => (
              <div className="carousel-slide" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
