import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {fontMixin} from "../../styles/Common";

const Footer = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 40px 0;

`

const Name = styled.span`
  ${fontMixin({family:"'Josefin Sans', sans-serif",weight: 700, fontMax: 22, fontMin: 16})}
   letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animation.transition};
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`

const SocialItem = styled.li`
`
export const S = {
    SocialList,
    Copyright,
    SocialLink,
    Name,
    Footer,
    SocialItem,
}