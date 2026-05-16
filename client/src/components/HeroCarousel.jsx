import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: 'Search compare prices & book hotels',
    badge: 'GET BEST DEALS',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=1200&auto=format&fit=crop',
    color: 'from-[#8B4513]/90'
  },
  {
    id: 2,
    title: 'Top Rated Beauty Spas Near You',
    badge: 'RELAX TODAY',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    color: 'from-pink-900/90'
  }
];

const HeroCarousel = ({ slides = SLIDES }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative h-full w-full overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} to-transparent`}></div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-8 w-full md:w-3/4">
            <h1 className="mb-2 font-serif text-xl font-extrabold italic text-white md:text-2xl lg:text-3xl drop-shadow-md leading-tight">
              {slide.title}
            </h1>
            <div className="mt-2">
              <button className="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-amber-900 shadow-md transition-transform hover:scale-105">
                {slide.badge}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white/40 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white/40 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
