import { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios'

type AllProductContextTypes = {
    items: any []
}

const AllProductContext = createContext<AllProductContextTypes>({
  items: [],
});

export const AllProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/product`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AllProductContext.Provider value={{ items }}>
      {children}
    </AllProductContext.Provider>
  );
};


export const useAllProductContext = () => useContext(AllProductContext)