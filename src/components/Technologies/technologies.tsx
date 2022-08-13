import { TechnologiesStyled } from "../Technologies/style";
import { TechStack, ToolsStack, StudingStack, AgileMethodologiesStack } from "./../../components";

export const Technologies = () => {
  return (
    <TechnologiesStyled>
      <TechStack />
      <ToolsStack />
      <StudingStack/>
      <AgileMethodologiesStack/>
    </TechnologiesStyled>
  );
};
