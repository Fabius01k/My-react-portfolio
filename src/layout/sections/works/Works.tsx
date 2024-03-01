import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {WorkMenu, WorksStatusType} from "./workMenu/WorkMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import devImg from './../../../assets/img/dev.webp'
import devImg2 from './../../../assets/img/dev2.webp'
import porft from './../../../assets/img/portf.webp'
import rightImg from './../../../assets/img/rigthFoto_1.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'
import {AnimatePresence, motion} from "framer-motion"


// const worksItems: Array<{status: WorksStatusType, title: string}> = [
//     {
//         title: "All",
//         status: "all"
//     },
//     {
//         title: "landing page",
//         status: "landing"
//     },
//     {
//         title: "React",
//         status: "react"
//     },
//     {
//         title: "spa",
//         status: "spa"
//     },
//
// ]

// const worksData = [
//     {
//         title: "Social Network",
//         src: leftPhoto,
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//         type: "spa",
//         id: 1,
//         href: "https://vk.com/feed",
//     },
//     {
//         title: "Timer",
//         src: rigthPhoto,
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
//         type: "react",
//         id: 2,
//         href: "https://www.timeanddate.com/timer/",
//     },
//     {
//         title: "Social Network",
//         src: leftPhoto,
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//         type: "spa",
//         id: 3,
//         href: "https://vk.com/feed",
//     },
//     {
//         title: "Timer",
//         src: rigthPhoto,
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
//         type: "react",
//         id: 4,
//         href: "https://www.timeanddate.com/timer/",
//     },
//     {
//         title: "Social Network",
//         src: leftPhoto,
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//         type: "spa",
//         id: 5,
//         href: "https://vk.com/feed",
//     },
//     {
//         title: "Timer",
//         src: rigthPhoto,
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
//         type: "react",
//         id: 6,
//         href: "https://www.timeanddate.com/timer/",
//     },
// ]

const worksItems: Array<{status: WorksStatusType, title: string}> = [
    {
        title: "Web",
        status: "web"
    },
    {
        title: "Backend",
        status: "backend"
    },
]
const worksData = [
    {
        title: "My Porfolio",
        src: porft,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "web",
        id: 1,
        href: "https://github.com/Fabius01k/My-react-portfolio",
    },
    {
        title: "Timer",
        src: rightImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "web",
        id: 2,
        href: "https://www.timeanddate.com/timer/",
    },
    {
        title: "Express + MondoDb Api",
        src: devImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "backend",
        id: 3,
        href: "https://github.com/Fabius01k/project",
    },
    {
        title: "NestJs + TypeORM Api",
        src: devImg2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "backend",
        id: 4,
        href: "https://github.com/Fabius01k/projectNest",
    },
]

export const Works:React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("web")
    let filteredWorks = worksData

    if(currentFilterStatus === "web") {
        filteredWorks = worksData.filter(work => work.type === "web")
    }
    if(currentFilterStatus === "backend") {
        filteredWorks = worksData.filter(work => work.type === "backend")
    }

    function changeFilterStatus(value: WorksStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"worksId"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <WorkMenu worksItems={worksItems}
                          changeFilterStatus={changeFilterStatus}
                          currentFilterStatus={currentFilterStatus}
                />
                <FlexContainer justifyContent={"space-between"} alignItems={"flex-start"} flexWrap={"wrap"}>

                    <AnimatePresence>
                    {filteredWorks.map((w) => {
                        return (
                            <motion.div style={{width: "400px", flexGrow: 1,maxWidth: "540px"}}
                                layout={true}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={w.id}
                            >
                                <Work title={w.title}
                                      imageSrc={w.src}
                                      text={w.text}
                                      key={w.id}
                                      href={w.href}/>
                            </motion.div>
                        )
                        })}
                    </AnimatePresence>

                </FlexContainer>
            </Container>
        </S.Works>
    );
};

