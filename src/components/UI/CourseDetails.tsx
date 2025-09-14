import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Course {
  title: string;
  details: React.ReactNode;
}
interface CourseDetailsProps {
  degree: string;
  courses: Course[];
}
const CourseDetails: React.FC<CourseDetailsProps> = ({
  degree,
  courses
}) => {
  const [activeCourse, setActiveCourse] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  // Check if we need scroll buttons on small screens
  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        const {
          scrollWidth,
          clientWidth,
          scrollLeft
        } = tabsRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [courses]);
  // Update scroll buttons state when scrolling
  const handleScroll = () => {
    if (tabsRef.current) {
      const {
        scrollWidth,
        clientWidth,
        scrollLeft
      } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };
  // Scroll tabs left or right
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 150; // Adjust as needed
      const currentScroll = tabsRef.current.scrollLeft;
      tabsRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return <div>
      <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-1">
        Education: {degree}
      </h3>
      <h4 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-6">
        Relevant Coursework:
      </h4>
      {/* Mobile/small screen tabs with scroll buttons */}
      <div className="md:hidden relative mb-4">
        {showScrollButtons && <>
            <button onClick={() => scrollTabs('left')} disabled={!canScrollLeft} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-white dark:bg-blue-800 rounded-full shadow-md ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 dark:hover:bg-blue-700'}`} aria-label="Scroll tabs left">
              <ChevronLeft className="w-4 h-4 text-blue-800 dark:text-white" />
            </button>
            <button onClick={() => scrollTabs('right')} disabled={!canScrollRight} className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-white dark:bg-blue-800 rounded-full shadow-md ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 dark:hover:bg-blue-700'}`} aria-label="Scroll tabs right">
              <ChevronRight className="w-4 h-4 text-blue-800 dark:text-white" />
            </button>
          </>}
        <div ref={tabsRef} className="flex overflow-x-auto pb-2 scrollbar-hide" onScroll={handleScroll}>
          {courses.map((course, index) => <button key={index} className={`flex-shrink-0 px-4 py-2 whitespace-nowrap mx-1 rounded-t-lg transition-colors ${activeCourse === index ? 'bg-blue-600 text-white font-medium' : 'bg-blue-100/70 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-700'}`} onClick={() => setActiveCourse(index)}>
              {course.title}
            </button>)}
        </div>
        <div className="h-1 bg-blue-300 dark:bg-blue-700 rounded-full w-full"></div>
      </div>
      {/* Desktop layout */}
      <div className="hidden md:flex flex-row gap-6">
        <div className="md:w-1/3">
          <div className="border-r-2 border-blue-300 dark:border-blue-700 pr-4">
            {courses.map((course, index) => <button key={index} className={`block text-left w-full pl-4 py-2 transition-colors rounded-l-lg ${activeCourse === index ? 'bg-blue-100 dark:bg-blue-800 border-r-4 border-blue-600 dark:border-blue-400 -mr-[6px] font-medium text-blue-800 dark:text-blue-200' : 'text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-900 dark:hover:text-white'}`} onClick={() => setActiveCourse(index)}>
                {course.title}
              </button>)}
          </div>
        </div>
        <div className="md:w-2/3 bg-white/50 dark:bg-blue-900/50 p-4 rounded-lg">
          {courses[activeCourse].details}
        </div>
      </div>
      {/* Mobile content section */}
      <div className="md:hidden mt-4 bg-white/50 dark:bg-blue-900/50 p-4 rounded-lg">
        {courses[activeCourse].details}
      </div>
    </div>;
};
export default CourseDetails;