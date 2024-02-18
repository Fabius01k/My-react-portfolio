import React from 'react';
import {S} from './../HeaderMenu_Styles'

const menuItems = [
    {
        title: "Home",
        href: "homeId"
    },
    {
        title: "Skills",
        href: "skillsId"
    },
    {
        title: "Works",
        href: "worksId"
    },
    {
        title: "Testimony",
        href: "testimonyId"
    },
    {
        title: "Contact",
        href: "contactsId"
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {menuItems.map((item,index) => {
                return <S.ListItem key={index}>
                    <S.NavLink
                        activeClass={"active"}
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={0}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};

