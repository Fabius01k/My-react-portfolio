import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopButton = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    return (
        <>
            {showButton && (
                <StyledGoTopButton onClick={() => {scroll.scrollToTop()}}>
                <Icon iconId={"goTop"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
            </StyledGoTopButton>
            )}
        </>
    );
};

const StyledGoTopButton = styled.button`
  //background-color: rgba(0, 0, 0, 0.3);
  background-color: rgba(52, 155, 155, 0.5);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
`