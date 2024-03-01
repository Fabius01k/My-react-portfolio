import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const Works = styled.section` 
    
    ${FlexContainer} {
      gap: 30px;
    }
`

const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    //width: 330px;  
    //flex-grow: 1;
  
  ${Link} {
    padding: 10px 0;
    & + ${Link} {
      margin-left: 20px;
    }
  }
    
  // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
  border-radius: 10%;
`

const ImageWrapper = styled.div`
    position: relative; 
    
    &::before {
      //content: "";
      //position: absolute;
      //left: 0;
      //right: 0;
      //top: 0;
      //bottom: 0;      
    }
  
  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &:hover {
    ${Button} {
      opacity: 1;     
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: ${theme.animation.transition};
    
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: ${theme.animation.transition};
  }
`

const Text = styled.p`
    margin: 14px 0px 10px;

`

const Title = styled.h3`
`

const Description = styled.div`
    padding: 20px 20px;
`
const WorkLink = styled.a`
`
export const S = {
    Works,
    Work,
    Image,
    ImageWrapper,
    Text,
    Title,
    Description,
    WorkLink
}