import React, {useState} from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"
import {SkillMenu, SkillsStatusType} from "./skillMenu/SkillMenu";
import {AnimatePresence} from "framer-motion";

const skillItems: Array<{status: SkillsStatusType,title: string}> = [
    {
        title: "Web",
        status: "web"
    },
    {
        title: "Backend",
        status: "backend"
    },
]

const skillsData = [
    {
        iconId: "htmlSvg",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 1,
    },
    {
        iconId: "cssSvg",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 2,
    },
    {
        iconId: "reactSvg",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 3,
    },
    {
        iconId: "tsSvg",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 4,
    },
    {
        iconId: "styledComSvg",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 5,
    },
    {
        iconId: "figmaSvg",
        title: "WEB DESIgN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 6,
    },

    {
        iconId: "htmlSvg",
        title: "MongoDB",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 7,
    },
    {
        iconId: "htmlSvg",
        title: "SocketIO",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 8,
    },
    {
        iconId: "htmlSvg",
        title: "Swager",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 9,
    },
    {
        iconId: "htmlSvg",
        title: "TypeORM",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 10,
    },
    {
        iconId: "htmlSvg",
        title: "NodeJS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 11,
    },
    {
        iconId: "htmlSvg",
        title: "Express",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 12,
    },
    {
        iconId: "htmlSvg",
        title: "NestJs",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 13,
    },
    {
        iconId: "htmlSvg",
        title: "PostgreSQL",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 14,
    },
    {
        iconId: "htmlSvg",
        title: "JavaScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 15,
    },
    {
        iconId: "htmlSvg",
        title: "Typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 16,
    },
    {
        iconId: "htmlSvg",
        title: "Mongoose",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 17,
    },
    {
        iconId: "htmlSvg",
        title: "Raw SQL",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 18,
    }
]


export const Skills:React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("web")
    let filteredSkills = skillsData

    if(currentFilterStatus === "web") {
        filteredSkills = skillsData.filter(skill => skill.type === "web")
    }
    if(currentFilterStatus === "backend") {
        filteredSkills = skillsData.filter(skill => skill.type === "backend")
    }

    function changeFilterStatus(value: SkillsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.SkillsSection id={"skillsId"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <SkillMenu skillsItems={skillItems}
                          changeFilterStatus={changeFilterStatus}
                          currentFilterStatus={currentFilterStatus}
                />
                <FlexContainer flexWrap={"wrap"} justifyContent={"space-between"}>

                    <AnimatePresence>
                        {filteredSkills.map((s,index)=> {
                            return  <Skill iconId={s.iconId} key={index}
                                           SkillTitle={s.title}
                                           SkillText={s.description}/>
                        })}
                    </AnimatePresence>

                </FlexContainer>
            </Container>
        </S.SkillsSection>
    );
};



