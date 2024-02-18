import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {WorkMenu, WorksStatusType} from "./workMenu/WorkMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import leftPhoto from './../../../assets/img/leftFoto_1.webp'
import rigthPhoto from './../../../assets/img/rigthFoto_1.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'
import {AnimatePresence, motion} from "framer-motion"


// const worksItems = ["All","landing page","React","spa"]

const worksItems: Array<{status: WorksStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },

]

const worksData = [
    {
        title: "Social Network",
        src: leftPhoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 1,
    },
    {
        title: "Timer",
        src: rigthPhoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 2,
    },
    {
        title: "Social Network",
        src: leftPhoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 3,
    },
    {
        title: "Timer",
        src: rigthPhoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 4,
    },
    {
        title: "Social Network",
        src: leftPhoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 5,
    },
    {
        title: "Timer",
        src: rigthPhoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 6,
    },
]

export const Works:React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if(currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if(currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if(currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
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
                                      key={w.id}/>
                            </motion.div>
                        )
                        })}
                    </AnimatePresence>

                </FlexContainer>
            </Container>
        </S.Works>
    );
};

