import {WorksStatusType} from "../../works/workMenu/WorkMenu";
import {Link} from "../../../../components/Link";
import styled from "styled-components";


export type SkillsStatusType = "web" | "backend"

type SkillMenuPropsType = {
    skillsItems: Array<{status: SkillsStatusType,title: string}>
    changeFilterStatus: (value: SkillsStatusType) => void
    currentFilterStatus: string
}
export const SkillMenu = (props: SkillMenuPropsType) => {
    return (
        <StyledSkillMenu>
            <ul>
                {props.skillsItems.map((item,index) => {
                        return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </ListItem>
                    })}
        </ul>
        </StyledSkillMenu>
    );
};

const StyledSkillMenu = styled.nav`
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