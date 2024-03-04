import { Link } from "react-router-dom";
import { useAllProductContext } from "../context/AllProductContext";

const Search = ({ value, resetValue }: { value: string, resetValue: any }) => {
  const { items } = useAllProductContext();

  const handleSearch = () => {
    setTimeout(() => {
        resetValue()
    }, 1000)
  }

  return (
    <div
      className="absolute top-[50px] left-0 w-[100%] min-h-[20px] bg-[#eee] py-[10px] px-[40px] flex flex-col gap-1
        rounded-md"
    >
      {items
        ?.filter((item) => item.name.toLowerCase()?.includes(value))
        ?.slice(0, 7)
        ?.map((item, i) => (
          <Link to="/product" state={{ item }} key={i}>
            <p className="text-gray-500 text-[14px]" onClick={handleSearch}>{item.name}</p>
          </Link>
        ))}
    </div>
  );
};

export default Search;
