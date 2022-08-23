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
  projectsAnimation: string;
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
  const [projectsAnimation, setProjectsAnimationAnimation] = useState("");

  const divTechnologies = document.querySelector("#technologies");
  const divTools = document.querySelector("#tools");
  const divStuding = document.querySelector("#studing");
  const divAgileMethodologies = document.querySelector("#agileMethodologies");
  const divProjects = document.querySelector("#projects");

  useEffect(() => {
    const windowHeight = window.innerHeight;
    let divTechnologiesTop: any = divTechnologies?.getBoundingClientRect().top;
    let divToolsTop: any = divTools?.getBoundingClientRect().top;
    let divStudingTop: any = divStuding?.getBoundingClientRect().top;
    let divAgileMethodologiesTop: any =
      divAgileMethodologies?.getBoundingClientRect().top;
    let divProjectsTop: any = divProjects?.getBoundingClientRect().top;

    document.addEventListener("scroll", () => {
      setScrollYState(window.scrollY);
    });

    if (divTechnologiesTop < windowHeight - 300) {
      setTechnologiesAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divToolsTop < windowHeight - 200) {
      setToolsAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divStudingTop < windowHeight - 200) {
      setStudingAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divAgileMethodologiesTop < windowHeight - 200) {
      setAgileMethodologiesAnimation("leftAnimation 1.2s ease-in-out forwards");
    }

    if (divProjectsTop < windowHeight - 400) {
      setProjectsAnimationAnimation("leftAnimation 1.2s ease-in-out forwards");
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
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
