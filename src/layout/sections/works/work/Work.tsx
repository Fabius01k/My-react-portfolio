import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from './../Works_Styles'

type WorkPropsType = {
    imageSrc: string
    title: string
    text: string
    href: string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.imageSrc} alt=""/>
                <S.WorkLink href={props.href} target="_blank" rel="noopener noreferrer">
                    <Button>view project</Button>
                </S.WorkLink>

            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                {/*<Link active href={'#'}>demo</Link>*/}
                {/*<Link href ={'#'}>Code</Link>*/}
            </S.Description>
        </S.Work>
    );
};


