import { useState, useEffect } from "react";
import { CategoriesItem } from ".";

const Categories = ({ type, items }: { type?: string, items: any }) => {
  const [pixel, setPixel] = useState(window.innerWidth);
  // const { items } = useAllProductContext()

  useEffect(() => {
    const handleResize = () => {
      setPixel(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateSlidesPerView = () => {
    if (pixel <= 640) {
      return 1;
    } else if (pixel <= 768) {
      return 2;
    } else if (pixel <= 1024) {
      return 3;
    } else if (pixel <= 1280) {
      return 4;
    } else {
      return 5;
    }
  };

  return (
    <div className="flex gap-5 overflow-x-scroll">
      {items.map((item: any, i: number) => (
        <CategoriesItem item={item} key={i} />
      ))}
    </div>
  );
};

export default Categories;
