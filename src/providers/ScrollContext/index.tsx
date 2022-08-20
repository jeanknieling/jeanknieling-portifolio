import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IScrollProviderProps {
  children: ReactNode;
}

interface IScrollContextData {
  technologiesAnimation: string;
  toolsAnimation: string;
  studingAnimation: string;
  agileMethodologiesAnimation: string;
  handleOnWheel: () => void;
}

const ScrollContext = createContext({} as IScrollContextData);

export const ScrollProvider: React.FC<IScrollProviderProps> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [technologiesAnimation, setTechnologiesAnimation] = useState("");
  const [toolsAnimation, setToolsAnimation] = useState("");
  const [studingAnimation, setStudingAnimation] = useState("");
  const [agileMethodologiesAnimation, setAgileMethodologiesAnimation] = useState("");

  const handleOnWheel = () => {
    setScrollY(window.scrollY);
  };

  const divTechnologies = document.querySelector("#technologies");
  const divTools= document.querySelector("#tools");
  const divStuding= document.querySelector("#studing");
  const divAgileMethodologies= document.querySelector("#agileMethodologies");

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const elementVisible = 200;
    let divTechnologiesTop: any = divTechnologies?.getBoundingClientRect().top;
    let divToolsTop: any = divTools?.getBoundingClientRect().top;
    let divStudingTop: any = divStuding?.getBoundingClientRect().top;
    let divAgileMethodologiesTop: any = divAgileMethodologies?.getBoundingClientRect().top;

    if (divTechnologiesTop < windowHeight - elementVisible) {
      setTechnologiesAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divToolsTop < windowHeight - elementVisible) {
      setToolsAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divStudingTop < windowHeight - elementVisible) {
      setStudingAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divAgileMethodologiesTop < windowHeight - elementVisible) {
      setAgileMethodologiesAnimation("leftAnimation 1.2s ease-in-out forwards");
    }
  }, [scrollY]);

  return (
    <ScrollContext.Provider value={{ handleOnWheel, technologiesAnimation, toolsAnimation, studingAnimation, agileMethodologiesAnimation }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
