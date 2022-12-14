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
  contactAnimation: string;
  projectsAnimation: string;
  scrollYState: number;
  divTechnologiesTop: number;
  divProjectsTop: number;
  divContactTop: number;
}

const ScrollContext = createContext({} as IScrollContextData);

export const ScrollProvider: React.FC<IScrollProviderProps> = ({
  children,
}) => {
  const [scrollYState, setScrollYState] = useState(0);
  const [technologiesAnimation, setTechnologiesAnimation] = useState("");
  const [toolsAnimation, setToolsAnimation] = useState("");
  const [studingAnimation, setStudingAnimation] = useState("");
  const [agileMethodologiesAnimation, setAgileMethodologiesAnimation] =
    useState("");
  const [projectsAnimation, setProjectsAnimation] = useState("");
  const [contactAnimation, setContactAnimation] = useState("");

  const divTechnologies = document.querySelector("#technologies");
  const divTools = document.querySelector("#tools");
  const divStuding = document.querySelector("#studing");
  const divAgileMethodologies = document.querySelector("#agileMethodologies");
  const divProjectsSection = document.querySelector("#projectsSection");
  const divContactSection = document.querySelector("#contactSection");
  const windowHeight = window.innerHeight;

  let divTechnologiesTop: any = divTechnologies?.getBoundingClientRect().top;
  let divToolsTop: any = divTools?.getBoundingClientRect().top;
  let divStudingTop: any = divStuding?.getBoundingClientRect().top;
  let divAgileMethodologiesTop: any =
    divAgileMethodologies?.getBoundingClientRect().top;
  let divProjectsTop: any = divProjectsSection?.getBoundingClientRect().top;
  let divContactTop: any = divContactSection?.getBoundingClientRect().top;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollYState(window.scrollY);
    });

    if (divTechnologiesTop < windowHeight - 300) {
      setTechnologiesAnimation("leftAnimation 1s ease-in-out forwards");
    }

    if (divToolsTop < windowHeight - 200) {
      setToolsAnimation("leftAnimation 1s ease-in-out forwards");
    }

    if (divStudingTop < windowHeight - 200) {
      setStudingAnimation("leftAnimation 1s ease-in-out forwards");
    }

    if (divAgileMethodologiesTop < windowHeight - 200) {
      setAgileMethodologiesAnimation("leftAnimation 1s ease-in-out forwards");
    }

    if (divProjectsTop < windowHeight - 400) {
      setProjectsAnimation("leftAnimation 1s ease-in-out forwards");
    }

    if (divContactTop < windowHeight - 400) {
      setContactAnimation("leftAnimation 1s ease-in-out forwards");
    }
  }, [scrollYState]);

  return (
    <ScrollContext.Provider
      value={{
        technologiesAnimation,
        toolsAnimation,
        studingAnimation,
        agileMethodologiesAnimation,
        projectsAnimation,
        contactAnimation,
        scrollYState,
        divTechnologiesTop,
        divProjectsTop,
        divContactTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
