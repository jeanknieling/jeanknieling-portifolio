import { useScrollContext } from "../../providers";
import { useIconsContext } from "../../providers/IconsContext";
import { TechnologiesStyled } from "../Technologies/style";
import { BlockerDiv, IconsStack } from "./../../components";

export const Technologies = () => {
  const {
    iconsTechStackData,
    iconsToolsStackData,
    iconsStudingStackData,
    iconsAgileMethodologiesStackData,
  } = useIconsContext();
  const {
    technologiesAnimation,
    toolsAnimation,
    studingAnimation,
    agileMethodologiesAnimation,
  } = useScrollContext();
  return (
    <TechnologiesStyled>
      <BlockerDiv id="technologiesSection" />

      <IconsStack
        iconsData={iconsTechStackData}
        animation={technologiesAnimation}
        title="TECNOLOGIAS"
        identifier="technologies"
      />
      <IconsStack
        iconsData={iconsToolsStackData}
        animation={toolsAnimation}
        title="FERRAMENTAS"
        identifier="tools"
      />
      <IconsStack
        iconsData={iconsAgileMethodologiesStackData}
        animation={agileMethodologiesAnimation}
        title="MÉTODOLOGIAS ÁGEIS"
        identifier="agileMethodologies"
      />
      <IconsStack
        iconsData={iconsStudingStackData}
        animation={studingAnimation}
        title="ESTUDANDO"
        identifier="studing"
      />
    </TechnologiesStyled>
  );
};
