import { TechnologiesStyled } from "../Technologies/style";
import {
  AgileMethodologiesStack,
  StudingStack,
  TechStack,
  ToolsStack,
} from "./../../components";

export const Technologies = () => {
  return (
    <TechnologiesStyled>
      <TechStack />
      <ToolsStack />
      <StudingStack />
      <AgileMethodologiesStack />
    </TechnologiesStyled>
  );
};
