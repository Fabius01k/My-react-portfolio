import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {S} from './Footer_Styles'

const socialItemData = [
    {
        iconId: "instSvg",
        link: "https://www.instagram.com/nkkkkkkk_k/"
    },
    {
        iconId: "tgSvg",
        link: "https://t.me/kkknkkk_kk"
    },
    {
        iconId: "vkSvg",
        link: "https://vk.com/mur.pavel_23"
    },
    {
        iconId: "lincdSvg",
        link: "https://www.linkedin.com/"
    }
]

export const Footer = () => {
    return (
        <S.Footer>
            <FlexContainer flexDirection={"column"} alignItems={"center"}>
                <S.Name>Pavel</S.Name>
                <S.SocialList>

                    {socialItemData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink href={s.link} target="_blank" rel="noopener noreferrer">
                                <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                        })}

                </S.SocialList>
                <S.Copyright>
                    © 2024 Pavel Murashkin, All Rights Reserved.
                </S.Copyright>

            </FlexContainer>
        </S.Footer>
    );
};

