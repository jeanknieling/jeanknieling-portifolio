import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface IHeaderProviderProps {
  children: ReactNode;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  handleClickHamburguerMenu: () => void;
}

const HeaderContext = createContext({} as IDrawerContextData);

export const HeaderProvider: React.FC<IHeaderProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClickHamburguerMenu = useCallback(() => {
    setIsDrawerOpen((oldIsDrawerOpen) => !oldIsDrawerOpen);
  }, []);

  return (
    <HeaderContext.Provider value={{ isDrawerOpen, handleClickHamburguerMenu }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);
