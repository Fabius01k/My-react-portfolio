import styled from "styled-components";

type FlexContainerPropsType = {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string

}

export const FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "stretch"};
  flex-wrap: ${props => props.flexWrap || "nowrap"};
  height: 100%;
`



