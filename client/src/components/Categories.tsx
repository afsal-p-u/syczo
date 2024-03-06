import { useState, useEffect, useRef } from "react";
import { ProductCard } from ".";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Categories = ({ type, items }: { type?: string; items: any }) => {
  const [pixel, setPixel] = useState(window.innerWidth);

  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const containerRef = useRef(null);
  
  const handleScroll = () => {
    const scrollDiv: any = containerRef.current;
    setScrollPosition(scrollDiv.scrollLeft)
    setScrollWidth(scrollDiv.scrollWidth);
    console.log(scrollPosition);
    console.log(scrollWidth);
  };

  
  const handleScrollControl = (side: string) => {
    const scrollDiv: any = containerRef.current;
    if (side == "left") {
      scrollDiv.scrollLeft -= 230;
    } else {
      scrollDiv.scrollLeft += 230;
    } 
  };

  return (
    <div className="relative">
      <div
        className="category-horizontal-slidebar flex gap-5 overflow-x-scroll"
        id="category-horizonal-scroll"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {items.map((item: any, i: number) => (
          <ProductCard item={item} key={i} />
        ))}
      </div>

      {scrollPosition <= 210 ? (
        ""
      ) : (
        <div
          className="absolute top-[50%] left-[-50px] translate-y-[-50%]"
          onClick={() => handleScrollControl("left")}
        >
          <FaChevronLeft className="text-blue-500 text-4xl cursor-pointer" />
        </div>
      )}
      {scrollPosition >= scrollWidth / 2 - 230 ? (
        ""
      ) : (
        <div
          className="absolute top-[50%] right-[-50px] translate-y-[-50%]"
          onClick={() => handleScrollControl("right")}
        >
          <FaChevronRight className="text-blue-500 text-4xl cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Categories;
