import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexContainer} from "../../../../components/FlexContainer";
import {S} from "./../Skills_Styles"

type SkillPropsType = {
    iconId: string
    SkillTitle?: string
    SkillText?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexContainer flexDirection={"column"} alignItems={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.SkillTitle}</S.SkillTitle>
                <S.SkillText>{props.SkillText}</S.SkillText>
            </FlexContainer>
        </S.Skill>
    );
};


