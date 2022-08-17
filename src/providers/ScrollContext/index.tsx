import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface IScrollProviderProps {
  children: ReactNode;
}

interface IScrollContextData {
  scrollY: number;
  animation: string;
  handleOnWheel: () => void;
}

const ScrollContext = createContext({} as IScrollContextData);

export const ScrollProvider: React.FC<IScrollProviderProps> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [animation, setAnimation] = useState("");

  const handleOnWheel = () => {
    setScrollY(window.scrollY);
    //console.log(window.scrollY);
  };


  /* useEffect(() => {
    if (scrollY >= 500) {
      setAnimation("leftAnimation 2s forwards");
    } else if (scrollY >= 700) {
      setAnimation("rightAnimation 2s forwards");
    }
  }, [scrollY]); */

  return (
    <ScrollContext.Provider value={{ scrollY, handleOnWheel, animation }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
