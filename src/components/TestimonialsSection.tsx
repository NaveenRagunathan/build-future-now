import { useEffect, useRef, useState } from "react";

const AUTO_SCROLL_INTERVAL = 7000;

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    quote:
      "Working with the BuildFuture team was truly transformative for our business. Our new website has increased conversion rates by 140% and the integrated AI tools have streamlined our customer service operations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, GrowthLabs",
    quote:
      "I was blown away by the attention to detail and strategic approach to our website redesign. The team didn't just create a beautiful site; they built a powerful lead generation machine that's been instrumental to our growth.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 3,
    name: "Jennifer Taylor",
    position: "Marketing Director, InnovateX",
    quote:
      "From start to finish, the entire process was smooth and professional. Our new website has received countless compliments, but more importantly, it's delivering real business results with a 75% increase in qualified leads.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsPaused(true);
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
  };
  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
  };
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);
  return (
    <section
      id="testimonials"
      className="relative py-12 min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onFocus={handlePause}
      onBlur={handleResume}
      tabIndex={0}
      aria-label="Testimonials carousel"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/80 to-black opacity-90" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-gradient-radial from-yellow-400/10 via-yellow-100/5 to-transparent rounded-full blur-3xl" />
      </div>


      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-0">
        {/* Title */}
        <div className="mb-4 md:mb-6 text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow">
            What <span className="text-yellow-400">Our Clients</span> Say
          </h2>
        </div>

        {/* Avatars & rating row */}
        <div className="flex items-center gap-2 mb-6">
          {testimonials.map((t, idx) => (
            <img
              key={t.id}
              src={t.image}
              alt={t.name}
              className={`w-10 h-10 rounded-full border-2 border-white object-cover shadow transition-all duration-300 ${idx === activeIndex ? "ring-2 ring-yellow-400 scale-110" : ""
                }`}
              style={{ zIndex: testimonials.length - idx }}
            />
          ))}
          <span className="ml-4 flex items-center text-yellow-400 font-semibold text-base">
            4.9
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </span>
          <span className="ml-2 text-white/70 text-xs">From 1800+ Users</span>
        </div>

        {/* Main testimonial row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
          {/* Client image */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 object-cover shadow-xl bg-black/30"
            />
          </div>
          {/* Glassmorphism card */}
          <blockquote className="relative flex-1 bg-black/70 backdrop-blur-lg border border-yellow-400/40 shadow-2xl rounded-2xl px-6 py-8 md:px-10 md:py-12 flex flex-col justify-center min-h-[200px] max-w-2xl">
            <svg className="w-8 h-8 text-yellow-400/40 absolute -top-4 left-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-6 pl-0 md:pl-8 transition-opacity duration-700">
              {testimonials[activeIndex].quote}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div>
                <div className="font-bold text-base md:text-lg text-white">{testimonials[activeIndex].name}</div>
                <div className="text-white/60 text-xs md:text-sm">{testimonials[activeIndex].position}</div>
              </div>
              <div className="flex ml-auto">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </blockquote>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center bg-black/60 hover:bg-yellow-400/90 hover:text-black transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Previous testimonial"
          >
            <svg className="h-5 w-5" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${idx === activeIndex
                    ? "bg-yellow-400 border-yellow-400 scale-125 shadow"
                    : "bg-black border-yellow-400/40"
                  }`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === activeIndex}
                tabIndex={0}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center bg-black/60 hover:bg-yellow-400/90 hover:text-black transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Next testimonial"
          >
            <svg className="h-5 w-5" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}