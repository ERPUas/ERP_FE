import React, { useRef, useState, useEffect } from 'react';

const UlasanSlider = ({ ulasan }) => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const newScrollPosition = Math.max(0, scrollPosition - 300);
      sliderRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      setScrollPosition(newScrollPosition);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const newScrollPosition = Math.min(maxScroll, scrollPosition + 300);
      sliderRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      setScrollPosition(newScrollPosition);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10"
        onClick={scrollLeft}
        disabled={scrollPosition === 0}
      >
        &#8592;
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll space-x-4 p-4 bg-gray-100 rounded-lg"
        style={{ scrollBehavior: 'smooth' }}
      >
        {ulasan.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white p-6 rounded-lg shadow-md flex-shrink-0"
          >
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-gray-600">{item.content}</p>
            <p className="text-gray-600 mt-2">{item.author}</p>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10"
        onClick={scrollRight}
        disabled={sliderRef.current ? scrollPosition >= (sliderRef.current.scrollWidth - sliderRef.current.clientWidth) : false}
      >
        &#8594;
      </button>
    </div>
  );
};

export default UlasanSlider;
