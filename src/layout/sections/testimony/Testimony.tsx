import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "./../skills/Skills_Styles"

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimonyId"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexContainer flexDirection={"column"} alignItems={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"testimonySvg"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexContainer>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`  
  //background-color: #49498f;
  background-color: #349b9b;
  min-height: 50vh;
  
  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }

`

