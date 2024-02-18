import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";

// const menuItem = ["Home","Skills","Works","Testimony","Contact"]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexContainer justifyContent={"space-between"} alignItems={"center"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu />
                                        : <DesktopMenu />}

                </FlexContainer>
            </Container>
        </S.Header>
    );
};




