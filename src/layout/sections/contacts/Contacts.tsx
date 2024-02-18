import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"contactsId"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Write something..."}/>
                    <S.Field placeholder={"Write something..."}/>
                    <S.Field placeholder={"Write something..."} as={"textarea"}/>
                    <Button>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};


