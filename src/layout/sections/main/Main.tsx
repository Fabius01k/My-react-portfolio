import React from 'react';
import mainPhoto from '../../../assets/img/mainFoto_1.webp'
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "./Mail_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={"homeId"}>
            <Container>
                <FlexContainer alignItems={"center"} justifyContent={"space-around"} flexWrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.MainName>I am <span>Pavel Murashkin</span></S.MainName>
                        {/*<S.MainTitle>A Web Developer.</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Backend Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.MainPhoto src={mainPhoto} alt=""/>
                    </S.PhotoWrapper>
                </FlexContainer>
            </Container>

        </S.Main>
    );
};

