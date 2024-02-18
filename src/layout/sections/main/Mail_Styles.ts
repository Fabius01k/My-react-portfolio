import styled from "styled-components";
import {fontMixin} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const Main = styled.section`
  min-height: 100vh;
  background-color: #deb782;
  display: flex;
`

const MainTitle = styled.h1`
  ${fontMixin({weight: 400, fontMax: 27, fontMin: 20})};
  
  p {display: none;}
  
  `

const MainName = styled.h2`
  ${fontMixin({family: "'Josefin Sans', sans-serif", weight: 700, fontMax: 50, fontMin: 36})}
  //font-family: 'Josefin Sans', sans-serif;
  //font-size: 50px;
  //font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {    
    position: relative;
    z-index: 0;    
    white-space: nowrap;
    
    &::before {
      content: "";
      display: inline-block;
      height: 20px;
      width: 100%;
      background-color: ${theme.colors.accent};
      
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px
  }
`

const MainPhoto = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 20%;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    border-radius: 20%;
    
    position: absolute;
    top:-24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top:-17px;
      left: 20px;
    }
  }
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`

export const S = {
    Main,
    MainTitle,
    MainName,
    MainPhoto,
    PhotoWrapper,
    SmallText,
}