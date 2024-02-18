import {theme} from "./Theme";

type fontMixinPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    fontMin?: number,
    fontMax?: number,
}
export const fontMixin = ({family,weight,color,lineHeight,fontMin,fontMax}: fontMixinPropsType) =>`
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${fontMax} - ${fontMin}) + ${fontMin}px);
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
   
`