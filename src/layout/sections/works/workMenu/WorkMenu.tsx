import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

// export type WorksStatusType = "all" | "landing" | "react" | "spa"
export type WorksStatusType = "web" | "backend"

type WorkMenuPropsType = {
    worksItems: Array<{status: WorksStatusType, title: string}>
    changeFilterStatus: (value: WorksStatusType) => void
    currentFilterStatus: string
}

export const WorkMenu = (props: WorkMenuPropsType) => {
    return (
        <StyledWorkMenu>
            <ul>
                {props.worksItems.map((item,index) => {
                        return <ListItem key={index}>
                            <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </ListItem>
                    })}
            </ul>
        </StyledWorkMenu>
    );
};

const StyledWorkMenu = styled.nav`
    ul {
      display: flex;
      justify-content: space-between;
      max-width: 352px;
      width: 100%;
      //outline: 1px solid red;
      margin: 0 auto 40px;
    }
`
const ListItem = styled.li`
   //button {
   //  font-size: 16px;
   //}
`









